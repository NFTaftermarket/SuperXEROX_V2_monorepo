// TODO: add features
//const CRYPTOKITTY_ADDRESS = '0x06012c8cf97bead5deae237070f9587f8e7a266d'; // mainnet
//const DEFAULT_PAY_TOKEN_ADDRESS = '0x19a375a4e9972690ad876ac4722993e02335b823'; // Ropsten, copy super token
export const SuperXEROX_Contract_Address_Rinkeby = '0x68cB5B558F15799920E0D038eF87544e670af503' // Rinkeby
export const SuperXEROX_Contract_Address_Ropsten = '0x34b0f1e2ad834a28da1651cc3c1e27978b74a971' // Ropsten 
export const SuperXEROX_Contract_Address_Mumbai = '0x48778d28F96528D6F919690D4e2e1f4367D109A1' // mumbai 
export * from  './SuperXEROXABI'
export * from './NFTCopyToken'
export * from './SuperPayment'

import { PayableNFTCopyMachine, Info } from './core';
import { ethers, Contract, BigNumber, Web3Provider, Signer } from './utils';
export * from './utils';
import { abi } from './SuperXEROXABI' 

export class SuperXEROX extends PayableNFTCopyMachine {
  signer: Signer
  superXeroXContract_ro!: Contract; 
  constructor(provider: Web3Provider) {
    const PayTokenAddress_Rinkeby = '0x19a375a4e9972690ad876ac4722993e02335b823' // superfluid NativeSuperToken, ERC-20 
    const PayTokenAddress = '0xdB6847908eA857E5E3a89B52CE5C3f458534142b' // superfluid NativeSuperToken, ERC-20
    /*
    // Ropsten
    const NFTaddress = '0x06012c8cf97bead5deae237070f9587f8e7a266d' // use cryptokitties (as example)  
    const NFTCopyAddress = '0xBEd1bb84251dC2f2eb7208dE4bc72950bC636BD9' // NFT COPY token (ERC-1155)
    */
    // mumbai
    const NFTaddress = '0x384a1CBc2bBf520579068f02438ef83c4891A65D' // use GBB instead of cryptokitties (as example)  
    const NFTCopyAddress = '0x8939a3F03FAD8a671A619477C6ea2cb97267fb05' // NFT COPY token (ERC-1155)
    
    super(PayTokenAddress, NFTaddress, NFTCopyAddress);
    console.log(provider)
    this.signer = provider.getSigner()
    this.superXeroXContract_ro = new Contract(SuperXEROX_Contract_Address_Mumbai, abi, this.signer);
  }

  getNetFlow(): Promise<string> {
    return new Promise((resolve, reject) => {
      this.signer.getAddress().then((user) => {
        console.log(user);
        try {
          this.superXeroXContract_ro.getNetFlow().then((x: BigNumber) => {
            console.log('netflow = ' + x.toString())
            resolve(x.toString())
          });
        } catch (error) {
          throw new Error(error);
        } 
      });
    });
  }

  vers(): string {
    return this.version;
  }

  copy(): void {
    throw new Error('Method not implemented.');
  }
  info(): Info {
    return {
      version: this.version,
      NFT_Address: this.nftToken,
      payTokenAddress: this.payToken,
    };
  }
}