import { ethers, Web3Provider, SuperfluidToken, ERC1155CopyToken, Signer } from 'superxerox-sdk';
var rp = require('request-promise');

const SXContract = '0x34b0f1e2ad834a28da1651cc3c1e27978b74a971'; // copy machine address
const myAccount = '0x609683612D80A091C69747a76ec6efE284a7cf46';

declare let window: any;
window.onload = () => {
  document.body.textContent = 'please wait...'
  const provider: Web3Provider = new ethers.providers.Web3Provider(window.ethereum);
  const ERC1155 = new ERC1155CopyToken(provider);
  const signer: Signer = provider.getSigner();
  signer.getAddress().then((user) => {
    console.log(user);
    try {
      ERC1155.balanceOf(
        myAccount,
        '0x384a1cbc2bbf520579068f02438ef83c4891a65d000000000000000000000000'
      ).then((x: string) => {
        // document.body.textContent = 'ERC1155 balance is ' + x;
      });
    } catch (error) {
      throw new Error(error);
    }
  });

  const fluidToken = new SuperfluidToken(provider);
  try {
    fluidToken.init().then((sf) => {
      console.log('sf ', sf.tokens.fDAIx.address);
      fluidToken.balanceOf(myAccount).then((x: string) => {
       // document.body.textContent = 'COPY balance = ' + x;
      });

      fluidToken.sendXtoken('0x9E4C996EFD1Adf643467d1a1EA51333C72a25453', 3.01).then((x: any) => {
        console.log('send COPY token ', x);
      });
    });
  } catch (error) {
    //console.error(error);
    throw new Error(error);
  }
  rp('https://api.covalenthq.com/v1/80001/address/0x9E4C996EFD1Adf643467d1a1EA51333C72a25453/balances_v2/?&key=ckey_7ba2fefbd0d248dbbca3b5437f9')
  .then(function (jsonString) {
      console.log('htmlString ', jsonString)
      let result = JSON.parse(jsonString)
      console.log(result.data.updated_at)
      document.body.textContent = result.data.updated_at 
  })
  .catch(function (err) {
      // Crawling failed...
  });
};
