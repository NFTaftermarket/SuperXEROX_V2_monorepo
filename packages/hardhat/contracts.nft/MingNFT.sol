// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/presets/ERC721PresetMinterPauserAutoId.sol";

contract MingNFT is ERC721PresetMinterPauserAutoId {
    constructor() ERC721PresetMinterPauserAutoId("GBB NFT", "GBB", "http://mars.muzamint.com:3001/{id}.json") {
       mint(0x609683612D80A091C69747a76ec6efE284a7cf46);
    }
}
