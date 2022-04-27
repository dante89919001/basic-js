const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
 class VigenereCipheringMachine {
  constructor(direction) {
    this.isDirect = direction;
    this.alphabet = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I',
    'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
    'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
    ];
    this.cryptFunction = function (message, key, functionType) {
      let keyAlphabetIndex;
      let elemAlphabetIndex;
      let outputIndex;
      let repeatedKeyArray = key.toUpperCase()
      .repeat(Math.ceil(message.length/key.length))
      .split('');

      const msgArr = message.toUpperCase().split('');
      const codedMessageArray = msgArr.map((elem, index) => {
        elemAlphabetIndex = this.alphabet.indexOf(elem);
        if (elemAlphabetIndex == -1) {
          repeatedKeyArray.splice(index, 0 , elem);
          return elem;
        }
        keyAlphabetIndex = this.alphabet.indexOf(repeatedKeyArray[index]);

        outputIndex = functionType(elemAlphabetIndex, keyAlphabetIndex);

        if (outputIndex >= 26) {
          outputIndex -= 26;
        }
        if (outputIndex < 0) {
          outputIndex += 26;
        }
        return this.alphabet[outputIndex];
      })

      if (String(this.isDirect) == 'false') {
        return codedMessageArray.reverse().join('');
      } else return codedMessageArray.join('');  
    }
  }
  
  encrypt(message, key) {
    const encryptType = (Index1, Index2) => Index1 + Index2;
    if (message == undefined || key == undefined) throw new Error('Incorrect arguments!');
    return this.cryptFunction(message, key, encryptType);
  }

  decrypt(message, key) {
    const decryptType = (Index1, Index2) => Index1 - Index2;
    if (message == undefined || key == undefined) throw new Error('Incorrect arguments!');
    return this.cryptFunction(message, key, decryptType);
  }
}


module.exports = {
  VigenereCipheringMachine
};
