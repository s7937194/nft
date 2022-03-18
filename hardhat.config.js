require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
const fs = require("fs")
const privateKey = fs.readFileSync(".secret").toString();

module.exports = {
  solidity: "0.8.4",
  networks: {
    fuji: {
      url: `https://api.avax-test.network/ext/bc/C/rpc`,
      accounts: [privateKey]
    }
  },
  etherscan: {
    apiKey: "6TBUIRHXNGG6QRGD7VWFMHIYGT8PJ8KZYZ"
  }
  
  
};
