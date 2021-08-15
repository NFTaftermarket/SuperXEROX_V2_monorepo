export interface Info {
  version: string;
  NFT_Address: string;
  payTokenAddress: string;
}

export interface INFTCopyMachine {
  copy(): void;
  vers(): void;
  info(): Info;
  getNetFlow(): Promise<string>
}
