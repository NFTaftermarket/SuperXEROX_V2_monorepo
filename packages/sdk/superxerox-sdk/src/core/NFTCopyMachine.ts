import { Info, INFTCopyMachine } from './Interface'

export class NFTCopyMachine implements INFTCopyMachine {
  version: string = 'v0.0.1';
  nftToken!: string; // original NFT address (ERC-721)
  nftCopyToken!: string; // copy NFT address (ERC-1155)

  constructor(NFTaddress: string, NFTCopyAddress: string) {
    this.nftToken = NFTaddress; // any ERC-721 token
    this.nftCopyToken = NFTCopyAddress; // any ERC-1155 tokens
  }
  getNetFlow(): Promise<string> {
    throw new Error('Method not implemented.');
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
}
