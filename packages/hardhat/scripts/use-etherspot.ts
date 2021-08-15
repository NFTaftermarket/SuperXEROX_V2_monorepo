// use-etherspot.ts
// refer to https://try.etherspot.dev/

import { run, ethers, sdk, Sdk } from "hardhat";

async function main() {
   console.log(typeof Sdk)

// create session
  const output = await sdk.createSession();

  console.log('session object', output);
  console.log('session graphql headers', {
    ['x-auth-token']: output.token,
  });
// sign message
const signature = await sdk.signMessage({
    message: 'dolore ipsum exercitation sit aute sint anim est nisi aliqua',
  });

  console.log('signature', signature);

// get currencies
const currencies = await sdk.getNativeCurrencies()
console.log('currencies', currencies)
currencies.forEach(
  (s) => {
    console.log(s.name)
  }
)
var bscLike = currencies.find(function(item, index, array){
  return item.name === 'bsc';  // 取得陣列 like === 'bsc'
});
console.log(bscLike);  
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
