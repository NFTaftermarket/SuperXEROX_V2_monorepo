const { expect } = require("chai");
const address = '0xb1079e9b59fe5FeD552cD9BDcaa243Ff12B78853'
describe("Greeter", function () {
  it("Should return the new greeting once it's changed", async function () {
    const Greeter = await ethers.getContractFactory("Greeter");
    console.log('--- get contract factory')
//    const greeter = await Greeter.attach(address);
    const greeter = await Greeter.deploy("Hello, world!");
    await greeter.deployed();
    console.log('--- deployed')
    expect(await greeter.greet()).to.equal("Hello, world!");
    //expect(await greeter.greet()).to.equal("Hello, Hardhat!");
//    const setGreetingTx = await greeter.setGreeting("Hola, mundo!");
//    await setGreetingTx.wait();
  }).timeout(20000 );;
});
