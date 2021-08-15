// refer to https://github.com/superfluid-finance/superfluid-protocol-docs/blob/master/networks/networks.md
// Rinkeby
/*
const Host = '0xeD5B5b32110c3Ded02a07c8b8e97513FAfb883B6'
const CFAv1 = '0xF4C5310E51F6079F601a5fb7120bC72a70b96e2A'
const fDAIx = '0x745861AeD1EEe363b4AaA5F1994Be40b1e05Ff90'
const SuperTokenFactory	= '0xd465e36e607d493cd4CC1e83bea275712BECd5E0'
*/
// Ropsten
/*
const Host = '0xF2B4E81ba39F5215Db2e05B2F66f482BB8e87FD2'
const CFAv1 = '0xaD2F1f7cd663f6a15742675f975CcBD42bb23a88'
const fDAIx = '0xBF6201a6c48B56d8577eDD079b84716BB4918E8A'
const SuperTokenFactory	= '0x6FA165d10b907592779301C23C8Ac9d1F79ca930'
*/
// Mumbai
const Host = '0xEB796bdb90fFA0f28255275e16936D25d3418603'
const CFAv1 = '0x49e565Ed1bdc17F3d220f72DF0857C26FA83F873'
const fDAIx = '0x5D8B4C2554aeB7e86F387B4d6c00Ac33499Ed01f'
const SuperTokenFactory	= '0x200657E2f123761662567A1744f9ACAe50dF47E6'

// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const Bootstrap = await hre.ethers.getContractFactory("Bootstrap");

  const bootstrap = await Bootstrap.deploy(Host, CFAv1, fDAIx, SuperTokenFactory);

  await bootstrap.deployed();

  console.log("Bootstrap deployed to:", bootstrap.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
