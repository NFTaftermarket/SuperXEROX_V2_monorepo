# micro-proxy
> now, SuperXEROX v2 support any NFT tokens
It will convert NFT copy token's uri() to origin NFT tokenURI().

## URI example from Cryptokitties
```
https://api.cryptokitties.co/kitties/1231
```
## to use Memes NFT as example
```
the NFT Copy Token's URI will be http://mars.muzamint:3001/e4605d46Fd0B3f8329d936a8b258D69276cBa26400000000000000000000007b.json
```
> the Contract address is 0xe4605d46Fd0B3f8329d936a8b258D69276cBa264 for memes, and the NFT id is 123
> where the {id} is combined with the original NFT contract addresss and its token id (123) in hex.

# build & run

```
yarn
yarn start
```

# demo
surf
```
http://mars.muzamint.com:3001/e4605d46Fd0B3f8329d936a8b258D69276cBa26400000000000000000000007b.json
```

output
```
{
  "pool": {
    "name": "fewocious",
    "title": "Artist Drop 8 - Fewocious",
    "about": "Fewocious has created 4 new exclusive NFTs in the  collab. Three pieces will go into a pool where you can stake . Deposit any amount up to 5 tokens and you’ll earn points where you can mint a brand-new, exclusive MEME x FEWO NFT.",
    "link": "https://dontbuymeme.medium.com/meme-artist-drop-8-fewocious-363f8c47bdf0",
    "points": 30,
    "release": 1609267020,
    "fee": 0.1
  },
  "external_url": "https://dontbuymeme.com/artist-series/fewocious",
  "image": "https://images.dontbuymeme.com/artist-series/fewocious/static/i-wish-i-was-understood.jpg",
  "animation_url": "https://images.dontbuymeme.com/artist-series/fewocious/mp4/i-wish-i-was-understood.mp4",
  "name": "I wish I was understood",
  "audio": true,
  "attributes": [
    {
      "trait_type": "Set",
      "value": "Artist Drop 8 - Fewocious"
    },
    {
      "trait_type": "Artist",
      "value": "Fewocious"
    },
    {
      "trait_type": "Type",
      "value": "Pop Surreal"
    },
    {
      "display_type": "date",
      "trait_type": "birthday",
      "value": 1609267020
    },
    {
      "trait_type": "Max Supply",
      "value": "100"
    }
  ],
  "superxerox": {
    "ipfs": "https://dweb.link/ipfs/bafkreieb2ldomtdt3ej3xs6j66u4jn462qp7hi4dmssvifd2cmen2ghcpq",
    "created_date": "2021-08-15T14:13:40.822Z"
  }
}
```

