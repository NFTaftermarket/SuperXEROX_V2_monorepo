const SuperfluidSDK = require('@superfluid-finance/js-sdk');

export interface ISuperfluidHelper {
  init(): Promise<typeof SuperfluidSDK>
  balanceOf(from: string): Promise<string>
  sendXtoken(recipient: string, amount: number): Promise<any>
}
