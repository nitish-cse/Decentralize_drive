require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",// enter your solidity version 
  networks: {
    hardhat: {
      chainId: 31337,// hardhat chain id 
      
    },
  },
  paths: {
    artifacts: "./client/src/artifacts",
  },
};
  
