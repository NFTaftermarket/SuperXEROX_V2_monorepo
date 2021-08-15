import { Info } from './Interface';
import { NFTCopyMachine } from './NFTCopyMachine';

export class PayableNFTCopyMachine extends NFTCopyMachine {
  payToken!: string; // only for Payable NFT copy machine (ERC-20, or ERC-777 in the future)

  constructor(PayTokenAddress: string, NFTaddress: string, NFTCopyAddress: string) {
    super(NFTaddress, NFTCopyAddress);
    this.payToken = PayTokenAddress; // any ERC-20 token (or ERC-777 in the future)
  }
  copy(): void {
    throw new Error('Method not implemented.');
  }
  vers(): void {
    throw new Error('Method not implemented.');
  }
  info(): Info {
    throw new Error('Method not implemented.');
  }
  checkBalance(): boolean {
    throw new Error('Method not implemented.');
  }
}
