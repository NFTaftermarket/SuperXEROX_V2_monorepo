export interface TokenInfo {
  version: string;
  contractAddress: string;
}

export interface ICopyToken {
  balanceOf(who: string, id: string): Promise<string>
  getInfo(): TokenInfo
  getVersion(): string
  NFTcopy(copies: number, PayToken: string, NFTaddress: string, NFT_id: number): Promise<any> //only for CopyToken ERC1155
}
