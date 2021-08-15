import { task } from "hardhat/config";
import "@nomiclabs/hardhat-waffle";
import "@nomiclabs/hardhat-ethers";
require("@nomiclabs/hardhat-etherscan");
import "@muzamint/hardhat-etherspot";
const { polygonscanApiKey, privateKey, infuraProjectId, etherscanApiKey, bscscanApiKey } = require('./secrets.json');

//
// Select the network you want to deploy to here:
//
const defaultNetwork = "hardhat" //"bsctestnet"; // test superfluid on rinkeby

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html

task("signature", "Sign Message", 
async (_, hre) => {
const signature = await hre.sdk.signMessage({
    message: 'test message',
  });

  console.log('signature', signature);
});

task("accounts", "👩🕵👨🙋👷 Prints the list of accounts", async (args, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(await account.address);
  }
console.log("👩🕵   👨🙋👷 these accounts only for localhost network.");
  console.log('To see their private keys🔑🗝"  when you run "npx hardhat node"');
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

export default {
  defaultNetwork,
  etherscan: {
    // Your API key for Etherscan
    // Obtain etherscan at https://etherscan.io/ or
    // Obtain bscscan at https://bscscan.com/
    // Obtain polygonscan at https://polygonscan.com/
    apiKey: polygonscanApiKey
    // apiKey: bscscanApiKey
    // apiKey: etherscanApiKey
  },
  networks: {
  	localhost: {
      url: "http://127.0.0.1:8545"
    },
    hardhat: {
      forking: {
        url: "https://eth-mainnet.alchemyapi.io/v2/alchemyapiKey"
      }
    },
    ropsten: {
      url: "https://ropsten.infura.io/v3/" + infuraProjectId,
      chainId: 3,
      gasPrice: 30000000000,
      // accounts: {mnemonic: mnemonic}
      accounts: [privateKey]
    },
    rinkeby: {
      url: "https://rinkeby.infura.io/v3/" + infuraProjectId,
      chainId: 4,
      gasPrice: 20000000000,
      accounts: [privateKey]
    },
    goerli: {
      url: "https://goerli.infura.io/v3/" + infuraProjectId,
      chainId: 5,
      gasPrice: 20000000000,
      accounts: [privateKey]
    },
    kovan: {
      url: "https://kovan.infura.io/v3/" + infuraProjectId,
      chainId: 42,
      gasPrice: 20000000000,
      accounts: [privateKey]
    },
    bsc: {
      url: "https://bsc-dataseed.binance.org/",
      chainId: 56,
      gasPrice: 1000000000,
      accounts: [privateKey]
    },
    bsctestnet: {
      url: "https://data-seed-prebsc-2-s3.binance.org:8545/",
      chainId: 97,
      gas: "auto",
      gasPrice: 3000000000,
      accounts: [privateKey]
    },
    poa: {
      url: "https://core.poanetwork.dev",
      chainId: 99,
      gasPrice: 1000000000,
      accounts: [privateKey]
    },
    poasokol: {
      url: "https://sokol.poa.network",
      chainId: 77,
      gasPrice: 20000000000,
      accounts: [privateKey]
    },
    xdai: {
      url: "https://dai.poa.network/",
      chainId: 100,
      gasPrice: 1000000000,
      accounts: [privateKey]
    },
    matic: {
      url: 'https://rpc-mainnet.maticvigil.com/',
      gasPrice: 1000000000,
      accounts: [privateKey]
    },
    mumbai: {
      url: 'https://rpc-mumbai.matic.today/',
      gasPrice: 1000000001,
      accounts: [privateKey]
    },
  },
    solidity: {
    compilers: [
      {
        version: "0.7.0",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200
          }
        }
      },
      {
        version: "0.7.6",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200
          }
        }
      },
      {
        version: "0.8.5",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200
          }
        }
      },
      {
        version: "0.8.3",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200
          }
        }
      },
      {
        version: "0.5.5",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200
          }
        }
      },
      ],
   },
};

const DEBUG = false;

function debug(text: string) {
  if (DEBUG) {
    console.log(text);
  }
}
