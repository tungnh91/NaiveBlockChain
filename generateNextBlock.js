// hash the previous block. Block data is an user input
let generateNextBlock = (blockData) => {
  //Important: when a node connects to a new peer it querys for the latest block
  let previousBlock = getLatestBlock();
  let nextIndex = previousBlock.index +1;
  let nextTimestamp = new Date().getTime() / 1000;
  let nextHash = calculateHash(nextIndex, previousBlock.hash, nextTimestamp, blockdata);
  return new Block(nextIndex, previousBlock.hash, nextTimestamp, blockData, nextHash);
};

