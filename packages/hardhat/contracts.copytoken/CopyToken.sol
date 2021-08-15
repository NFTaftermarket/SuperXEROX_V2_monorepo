// SPDX-License-Identifier: MIT
pragma solidity ^0.8.5;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/token/ERC1155/presets/ERC1155PresetMinterPauser.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/IERC1155MetadataURI.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";


contract CopyToken is ERC1155PresetMinterPauser {
    using SafeMath for uint256; // 
    address public constant CurrentPayTokenAddress = 0x2d7882beDcbfDDce29Ba99965dd3cdF7fcB10A1e; // TST (Plasma) on Mitac testnet mumbai
 //   address public constant CurrentNFTAddress = 0x06012c8cf97BEaD5deAe237070F9587f8E7A266d; // mainnet cryptoKitties token addredss      address public constant CurrentNFTAddress = 0x06012c8cf97BEaD5deAe237070F9587f8E7A266d; // mainnet cryptoKitties token addredss
    address public constant CurrentNFTAddress = 0x384a1CBc2bBf520579068f02438ef83c4891A65D; // mumbai GBB token addredss
    event LogCopyNFT(address addr, uint256 copies, bytes32 nft_address, bytes32 id_bytes, bytes32 new_nft_id, address nft_owner);


    constructor() public ERC1155PresetMinterPauser("http://mars.muzamint.com:3000/{id}.json") {
      //_mint(msg.sender, 0, 1, "TOKYO 2020 GOLD"); // owner, token id, amount, data
      // to use id for cryptokitty id as a copy of cryptokitty erc721 token
    }
    
    function copyNFT (uint256 amount, address payTokenAddress, address NFTAddress, uint256 NFT_id) public {
        require(payTokenAddress == CurrentPayTokenAddress, "CopyToken: to get some Plasma Test ERC20 from https://faucet.matic.network/");
        ERC20 t = ERC20(payTokenAddress);
        uint256 copies = (10**(t.decimals())).mul(amount);
        require((t.balanceOf(_msgSender()) >= copies), "CopyToken: require to own payToken more then amount of the expecting NFT copies amount");
      //  require(NFTAddress == CurrentNFTAddress, "NFTcopy: only support CryptoKitties in V2");
        
        bytes32 nft_address = bytes32(abi.encodePacked(NFTAddress));
        uint256 i = NFT_id;
        bytes32 id_bytes = bytes32(i);
        bytes32 new_nft_id = nft_address | id_bytes; // new ERC1155 id is NFT_Address append NFT_id
        uint256 copy = amount;
        
        ERC721 k = ERC721(CurrentNFTAddress);
        address nft_owner = k.ownerOf(NFT_id);
        require(nft_owner == _msgSender(),"NFTcopy: have to be the owner of the original NFT owner");
        
        emit LogCopyNFT(_msgSender(), copies, nft_address, id_bytes, new_nft_id, nft_owner);
        _mint(msg.sender, uint256(new_nft_id), copy, "TOKYO 2020 GOLD madel");
    }
}
