const PriceAINado = artifacts.require("PriceAINado");
const Hasher = artifacts.require("Hasher");
const Verifier = artifacts.require("Verifier");

module.exports = async function (deployer) {
  await deployer.deploy(Hasher);
  await deployer.deploy(Verifier);

  await deployer.link(Hasher, PriceAINado); // Link Hasher library to PriceAINado contract
  await deployer.deploy(
    PriceAINado,
    /* Verifier Address, e.g., */ "0x123...",
    20,
    Verifier.address
  );
  console.log("PriceAINado deployed: ", PriceAINado.address);
};
