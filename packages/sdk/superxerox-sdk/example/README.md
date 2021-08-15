# deploy to ipfs/ipns (with local ipfs node)
```
➜  t yarn deploy:ipfs
yarn run v1.22.10
$ node scripts/ipfs-localhost.js
🛰  Sending to IPFS...
📡 App deployed to IPFS with hash: QmWJyCreUcmwwnzYpAart2VKccN2XNdajwFKW1mhTuS3XC

✍️  Publishing /ipfs/QmWJyCreUcmwwnzYpAart2VKccN2XNdajwFKW1mhTuS3XC to IPNS...
🔖 App published to IPNS with name: k51qzi5uqu5dj8w2n1k3ii1aqgmz15fcbsqkiioj6tr7ixph96dx35n43sl8pq

🚀 Deployment to IPFS complete!

Use the links below to access your app:
   IPFS: https://ipfs.io/ipfs/QmWJyCreUcmwwnzYpAart2VKccN2XNdajwFKW1mhTuS3XC
   IPNS: https://ipfs.io/ipns/k51qzi5uqu5dj8w2n1k3ii1aqgmz15fcbsqkiioj6tr7ixph96dx35n43sl8pq

Each new deployment will have a unique IPFS hash while the IPNS name will always point at the most recent deployment.
It is recommended that you share the IPNS link so that people always see the newest version of your app.

✨  Done in 93.83s.
```
# deploy to ipfs only (with infura)
```
yarn deploy:ipfs
yarn run v1.22.10
$ node scripts/ipfs.js
🛰  Sending to IPFS...
📡 App deployed to IPFS with hash: QmWJyCreUcmwwnzYpAart2VKccN2XNdajwFKW1mhTuS3XC

🚀 Deployment to IPFS complete!

Use the link below to access your app:
   IPFS: https://ipfs.io/ipfs/QmWJyCreUcmwwnzYpAart2VKccN2XNdajwFKW1mhTuS3XC

✨  Done in 5.20s.
```
