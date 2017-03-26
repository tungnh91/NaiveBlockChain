let replaceChain = (newBlock) => {
  // check when length is diffenrent between known block and new block
  if (isValidChain(newBlocks) && newBlocks.length > blockchain.length) {
    console.log('Received blockchain is valid. Replacing curren blockchain with received blockchain');
    blockchain = newBlocks;
    //important: when a node generated a new Block, it boradcasts to the network
    broadcast(responseLatestMsg());
  } else {
    console.log('Received blockchain invalid');
  }
};

