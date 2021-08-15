var rp = require('request-promise')
import x from './secrets' // TODO
const chainID = '80001'
//const tokenAddress = '0x9E4C996EFD1Adf643467d1a1EA51333C72a25453' // copy token

export function getCopyTokenBalance(tokenAddress: string): Promise<string> {
  return new Promise((resolve, reject) => {
    rp(
      `https://api.covalenthq.com/v1/${chainID}/address/${tokenAddress}/balances_v2/?&key=${x.covalentApiKey}`
    )
      .then(function (jsonString: string) {
        let result = JSON.parse(jsonString)
        console.log(result.data.items)
        var findOne = result.data.items.find(function(item: any){
          return item.contract_name == 'Copy';               // 別以為空的或是 false 就不會回傳
        });
        console.log(findOne)
      const x = (findOne === undefined)? 'not own any COPY Token': findOne.balance
        resolve(x)
      })
      .catch((err: any) => {
        reject(err)
      })
  })
}
