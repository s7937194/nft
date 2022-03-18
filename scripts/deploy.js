const hre = require("hardhat");

async function main() {
  
  const NFT = await hre.ethers.getContractFactory("NFT");
  const nft = await NFT.deploy('test','ts','ipfs://QmdrzYev7SNhv2qS3m1yBy4yr9hYVXzua1Cwdk2EWFHCBy/');

  await nft.deployed();

  console.log("NFT deployed to:", nft.address);

  const NFTMarket = await hre.ethers.getContractFactory("NFTMarket");
  const nftMarket = await NFTMarket.deploy(nft.address,3,3);

  await nftMarket.deployed();

  console.log("NFTMarket deployed to:", nftMarket.address);

 

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

