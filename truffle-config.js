const HDWalletProvider = require("@truffle/hdwallet-provider");
const mnemonic =
  "17caacbbcf539ea9abd301f84391d86f3e71397d5eb612ebe79af697371a6796";

module.exports = {
  networks: {
    bsctestnet: {
      provider: () =>
        new HDWalletProvider(
          mnemonic,
          "https://data-seed-prebsc-1-s1.binance.org:8545"
        ),
      network_id: 97, // BSC Testnet's network id
      confirmations: 10,
      timeoutBlocks: 200,
      skipDryRun: true,
      gas: 5000000,
      gasPrice: 10000000000, // Check the current gas price and adjust accordingly
    },
  },

  compilers: {
    solc: {
      version: "0.5.17", // Set the Solidity compiler version according to your needs
    },
  },
  external: {
    command: "node ./scripts/compileHasher.js",
    targets: [
      {
        path: "./build/Hasher.json",
      },
    ],
  },
};
