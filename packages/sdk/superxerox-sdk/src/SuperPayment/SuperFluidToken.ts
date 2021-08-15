import { ISuperfluidHelper } from './Interface';
import { ethers, Contract, BigNumber, Web3Provider, Signer } from '../utils';
import { XSuperTokenAbi } from './XSuperTokenAbi';
import { AnyMxRecord } from 'dns';
const SuperfluidSDK = require('@superfluid-finance/js-sdk');
const XSuperTokenContract_Ropsten = '0x19a375a4e9972690ad876ac4722993e02335b823'; // ERC777 -> INativeSuperTokenCustom (Ropsten)
const XSuperTokenContract_Mumbai = '0xdB6847908eA857E5E3a89B52CE5C3f458534142b'; // ERC777 -> INativeSuperTokenCustom (Mumbai)
const XSuperTokenContract = '0x54e2bBD7E820655C4Ee2A1Cf3DEe4Eb989a31520'; // ERC777 -> INativeSuperTokenCustom (Rinkeby)
const SXContract = '0x34b0f1e2ad834a28da1651cc3c1e27978b74a971'; // copy machine address

export class SuperfluidToken implements ISuperfluidHelper {
  signer: Signer;
  CopyTokenContract_ro!: Contract;
  CopyTokenContract_rw!: Contract;
  sf: typeof SuperfluidSDK;
  provider: Web3Provider;

  constructor(provider: Web3Provider) {
    this.provider = provider;
    console.log(provider);
    this.signer = provider.getSigner();
    console.log(this.signer);
    this.CopyTokenContract_rw = new Contract(XSuperTokenContract_Mumbai, XSuperTokenAbi, this.signer); // superfluid token
    this.CopyTokenContract_ro = new Contract(
      XSuperTokenContract_Mumbai,
      XSuperTokenAbi,
      this.provider
    ); // superfluid token
  }

  sendXtoken(recipient: string, amount: number): Promise<any> {
    return new Promise((resolve, reject) => {
      try {
        this.CopyTokenContract_rw
          .transfer(recipient, ethers.utils.parseEther(amount.toString()))
          .then((x: any) => {
              console.log('ming ....')
            this.provider.waitForTransaction(x.hash).then((x) => {
              console.log(typeof x);
              resolve(x);
            });
          }).catch(console.log);
      } catch (error) {
        reject('error');
      }
    });
  }

  balanceOf(from: string): Promise<string> {
    return new Promise((resolve, reject) => {
      try {
        this.CopyTokenContract_ro.balanceOf(from).then((x: BigNumber) => {
          const z = x.div(BigNumber.from('1000000000000000000'))
          console.log('z ', z.toString())
          resolve(z.toString());
        });
      } catch (error) {
        reject('error');
      }
    });
  }

  init(): Promise<typeof SuperfluidSDK> {
    return new Promise((resolve, reject) => {
      try {
        this.sf = new SuperfluidSDK.Framework({
          ethers: this.provider,
          version: 'v1', //"test" or "v1"
          tokens: ['fDAI', 'fDAIx'],
        });
        this.sf.initialize().then(() => {
          console.log('sf initialzied = ', this.sf)
          resolve(this.sf);
        });
      } catch (error) {
        reject(error);
      }
    });
  }
}
