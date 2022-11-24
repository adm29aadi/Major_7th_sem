var MyContract = artifacts.require("charity");

module.exports = function(deployer) {
  // deployment steps
  deployer.deploy(MyContract);
};