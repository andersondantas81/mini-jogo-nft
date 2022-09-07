const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory("WorldCup");
  const gameContract = await gameContractFactory.deploy(
    ["Brasil", "Argentina", "Inglaterra", "França"],
    [
      "bafybeiclmnu44r4mj7s2eonsquj5mizu7q6p6lzmedvrlpasgnknucw3d4",
      "bafybeih3ir7nbofjggktjcfqmt642jmfbhketzf35m6qput3mftbdsthqa",
      "bafybeiabmbpvafenbjwfdg6bdgouqfaz5yzqvpdvciektflfa6ep5pak64",
      "bafybeiadsedtorwj4vzilimwn4xzqyybhk2eyfhxfz5vhuhi3byu3xl2nm",
    ],
    [100, 200, 300, 400], // HP values
    [100, 50, 25, 15], // Attack damage values
    "La'eeb",
		"bafybeievqwqvfivbj2tfalbyi2mxrcmxjoehuqkxreo4zxc6s3n4bq5ua4",
		10000,
		50

  );  

  await gameContract.deployed();
  console.log("Contrato implantado no endereço:", gameContract.address);

  // let txn;
  // // Só temos três personagens.
  // // Uma NFT com personagem no index 2 da nossa array.
  // txn = await gameContract.mintCharacterNFT(1);
  // await txn.wait();
  
  // txn = await gameContract.attackBoss();
  // await txn.wait();

  // txn = await gameContract.attackBoss();
  // await txn.wait();


  // console.log("Done!");
  // Pega o valor da URI da NFT
  //let returnedTokenUri = await gameContract.tokenURI(1);
  //console.log("Token URI: ", returnedTokenUri);
}

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

runMain();
