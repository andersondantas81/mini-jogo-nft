const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory("WorldCup");
  const gameContract = await gameContractFactory.deploy(
    ["Brasil", "Argentina", "Inglaterra", "França"],
    [
      "https://i.imgur.com/zoHf6qW.jpeg",
      "https://i.imgur.com/ae3dpD4.jpeg",
      "https://i.imgur.com/TWWBWK2.jpeg",
      "https://i.imgur.com/ErBx9dt.jpeg",
    ],
    [100, 200, 300, 400], // HP values
    [100, 50, 25, 15], // Attack damage values
    "La'eeb",
		"https://i.imgur.com/chTuIX7.png",
		10000,
		50

  );  

  await gameContract.deployed();
  console.log("Contrato implantado no endereço:", gameContract.address);

  let txn;
  // Só temos três personagens.
  // Uma NFT com personagem no index 2 da nossa array.
  txn = await gameContract.mintCharacterNFT(0);
  await txn.wait();
  console.log("Mintou NFT #1");
  txn = await gameContract.attackBoss();
  await txn.wait();

  txn = await gameContract.attackBoss();
  await txn.wait();

  txn = await gameContract.mintCharacterNFT(1);
  await txn.wait();
  console.log("Mintou NFT #2");
  txn = await gameContract.attackBoss();
  await txn.wait();

  txn = await gameContract.attackBoss();
  await txn.wait();

  // Pega o valor da URI da NFT
  // let returnedTokenUri = await gameContract.tokenURI(1);
  // console.log("Token URI:", returnedTokenUri);
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
