const fetch = require("node-fetch");
const { buffer, text, json } = require("micro");
const qs = require("querystring");
const url = require("url");
const { toGatewayURL, NFTStorage, Blob } = require("nft.storage");
const apiKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDkwNTFBMGQ5MjIyMzk5QzYzOUE5MmVERTQ2MjVmODQ2N2FCMUVENjIiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTYyODM0ODMwOTE1MywibmFtZSI6IueOi-mKmOW-tyJ9.UeBtSr36q57vKmHq3PrGZTbDEhwtKzgngW-MF_7sPfM";
const client = new NFTStorage({ token: apiKey });

let nft_uri_Map = new Map();
nft_uri_Map.set(
  "06012c8cf97bead5deae237070f9587f8e7a266d",
  "https://api.cryptokitties.co/kitties/"
); //  CryptoKitties (CK) 
nft_uri_Map.set(
  "b47e3cd837ddf8e4c57f05d70ab865de6e193bbb",
  "https://api.cryptokitties.co/kitties/"
); //  CRYPTOPUNKS (Ͼ) (URI not correct)
nft_uri_Map.set(
  "e4605d46Fd0B3f8329d936a8b258D69276cBa264",
  "https://api.dontbuymeme.com/memes/"
); // memes
nft_uri_Map.set(
  "57f0B53926dd62f2E26bc40B30140AbEA474DA94",
  "https://gallery.verynifty.io/api/"
); // VNFT
nft_uri_Map.set(
  "7bd29408f11d2bfc23c34f18275bbf23bb716bc7",
  "https://meebits.larvalabs.com/meebit/"
); // meebits
// add more with plugin in the future

module.exports = async (req) => {
  console.log(
    "\n 🔥 Usage: curl http://mars.muzamint.com:3001/06012c8cf97bead5deae237070f9587f8e7a266d00000000000000000004cce0.json\n"
  );
  let tmp = req.url.replace("/", "");
  let longIndex = tmp.replace(".json", "");
  console.log("💃=>", longIndex.length);
  if (longIndex.length === 64) {
    //const query = qs.parse(url.parse(req.url).query);
    if (!longIndex.match(".+[A-Fa-f0-9]$")) {
      return {
        error:
          "not with an index of ERC1155 uri, such as https://token-cdn-domain/06012c8cf97bead5deae237070f9587f8e7a266d00000000000000000004cce0.json",
      };
    } else {
      /*	
        // test to generate sample index
	const yourNumber = 314592 // 0x4CCE0
	const hexString = yourNumber.toString(16).padStart(64, "0") // 000000000000000000000000000000000000000000000000000000000004cce0

	const yourNumber = 123 // 0x4CCE0
	const hexString = yourNumber.toString(16).padStart(64, "0") // 000000000000000000000000000000000000000000000000000000000004cce0
    console.log('ming:',hexString)
	*/
      const NFTContreactAddress = longIndex.slice(0, 40);
      const NFT_id = longIndex.slice(41, 64);
      console.log(NFTContreactAddress);
      console.log(NFT_id);
      const index = parseInt("0x" + NFT_id);
      console.log(
        "🦄 cryptokitty, memes, or any other NFT tokoen index is:" + index
      );
      const apiURI = nft_uri_Map.get(NFTContreactAddress);
console.log(apiURI)
console.log(index)
      const a = await fetch(apiURI + index);
      let b = await a.json();
      var jsonse = JSON.stringify(b);
      var blob = new Blob([jsonse], { type: "application/json" });
      const cid = await client.storeBlob(blob);
      const forwardURL = toGatewayURL("ipfs://" + cid).href;
      b = { ...b, superxerox: { ipfs: forwardURL, created_date: new Date()} };
      return b;
    }
  } else {
    return "example: http://mars.muzamint.com:3001/e4605d46Fd0B3f8329d936a8b258D69276cBa26400000000000000000000007b.json";
  }
};
