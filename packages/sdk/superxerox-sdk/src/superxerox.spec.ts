import { ethers, Contract, BigNumber, Web3Provider, Signer } from './utils';
import exp from 'constants';
import { SuperXEROX } from './SuperXEROX';

declare let window: any;

describe('superxerox', () => {
  it('create', () => {
    //const sx = new SuperXEROX(provider);
    expect('v0.0.1').toStrictEqual('v0.0.1');
    /*
    expect(sx.info()).toStrictEqual({
      NFT_Address: '0x06012c8cf97bead5deae237070f9587f8e7a266d',
      payTokenAddress: '0x19a375a4e9972690ad876ac4722993e02335b823',
      version: 'v0.0.1',
    });
    */
  });
});
