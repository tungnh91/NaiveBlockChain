// first block ever in the chain is hard coded.
let getGenesisBlock = () => {
  return new Block(0, "0", 1490561400585, 'This is my Genesis Block', "816534932c2b7154836da6afc367695e6337db8a921823784c14378abed4f7d7");

}
let blockchain = [getGenesisBlock()];
