import { TokenInfo, ICopyToken } from './Interface';
import { CopyToken } from './CopyToken';
// ropsten
//const NFTCopyTokenAddress = '0xBEd1bb84251dC2f2eb7208dE4bc72950bC636BD9';
// mumbai
const PayToken = '0x2d7882beDcbfDDce29Ba99965dd3cdF7fcB10A1e'; // to get some Plasma Test ERC20 from https://faucet.matic.network/
const NFTCopyTokenAddress = '0x8939a3F03FAD8a671A619477C6ea2cb97267fb05';
import { CopyTokenAbi } from './CopyTokenAbi';
import { ethers, Contract, BigNumber, Web3Provider, Signer } from '../utils';
//import { continueStatement } from '@babel/types';
export class ERC1155CopyToken extends CopyToken {
  signer: Signer;
  provider: Web3Provider;
  copyTokenContract_ro!: Contract;
  copyTokenContract_rw!: Contract;

  constructor(provider: Web3Provider) {
    super(NFTCopyTokenAddress, 'v0.0.2');
    this.provider = provider;
    this.copyTokenContract_ro = new Contract(NFTCopyTokenAddress, CopyTokenAbi, provider); // erc1155
    this.signer = provider.getSigner();
    this.copyTokenContract_rw = new Contract(NFTCopyTokenAddress, CopyTokenAbi, this.signer);
  }

  getVersion(): string {
    return this.version;
  }

  balanceOf(who: string, id: string): Promise<string> {
    const big_id = BigNumber.from(id)
    return new Promise((resolve, reject) => {
      try {
        this.copyTokenContract_ro.balanceOf(who, big_id).then((x: BigNumber) => {
          resolve(x.toString());
        });
      } catch (error) {
        reject('error');
      }
    });
  }

  getInfo(): TokenInfo {
    return { contractAddress: this.copyToken, version: this.version };
  }

  // NFT address is only for ERC721 token in V2
  NFTcopy(copies: number, PayToken: string, NFTaddress: string, NFT_id: number): Promise<any> {
    return new Promise((resolve, reject) => {
      // copyTokenContract_rw.mint(account,header.add(parseInt(id)), copies, bytes)
      try {
        this.copyTokenContract_rw.copy(copies, PayToken, NFTaddress, NFT_id).then((x: any) => {
          this.provider.waitForTransaction(x.hash).then((x) => {
            console.log(typeof x);
            resolve(x);
          });
        });
      } catch (error) {
        reject('error');
      }
    });
  }
}
