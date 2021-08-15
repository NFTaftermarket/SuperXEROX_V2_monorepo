import { NFTStorage, Blob } from 'nft.storage'
const fetch = require("node-fetch");
const URI = 'https://api.dontbuymeme.com/memes/'

const apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDkwNTFBMGQ5MjIyMzk5QzYzOUE5MmVERTQ2MjVmODQ2N2FCMUVENjIiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTYyODM0ODMwOTE1MywibmFtZSI6IueOi-mKmOW-tyJ9.UeBtSr36q57vKmHq3PrGZTbDEhwtKzgngW-MF_7sPfM'
const client = new NFTStorage({ token: apiKey })

async function main(): Promise<void> {
 const response = await fetch(
		URI + '123'
      );
console.log(response)
const cid = await client.storeBlob(new Blob([response]))
console.log(cid)
}

main()
  .catch(console.error)
  .finally(() => process.exit());
