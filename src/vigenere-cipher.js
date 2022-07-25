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
const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

class VigenereCipheringMachine {

  constructor(variant) {
    this.variant = variant;
  }

  encrypt(message, key) {
    if(arguments == null || message == null || key == null) {
      throw new Error('Incorrect arguments!');
    }
    message = message.toUpperCase();
    key = key.toUpperCase();

    let result = '';
    let keyIndex = 0;

    for(let i = 0; i < message.length; i++) {
      if(!ALPHABET.includes(message[i]) || message[i] === ' ') {
        result += message[i];
      } else {
        let resultIndex = (ALPHABET.indexOf(message[i]) + ALPHABET.indexOf(key[keyIndex])) % 26;
        result += ALPHABET[resultIndex];
        keyIndex++;
        if(keyIndex === key.length) {
          keyIndex = 0;
        }  
      }
    }

    if(this.variant === false) {
      return result.split('').reverse().join('');
    } else {
      return result;
    }
   
  }

  decrypt(encryptedMessage, key) {
    if(arguments == null || encryptedMessage == null || key == null) {
      throw new Error('Incorrect arguments!');
    }
    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();

    let result = '';
    let keyIndex = 0;

    for(let i = 0; i < encryptedMessage.length; i++) {
      if(!ALPHABET.includes(encryptedMessage[i]) || encryptedMessage[i] === ' ') {
        result += encryptedMessage[i];
      } else {
        let decodedIndex = (ALPHABET.indexOf(encryptedMessage[i]) + 26 - ALPHABET.indexOf(key[keyIndex])) % 26;
        result += ALPHABET[decodedIndex];
        keyIndex++;
        if(keyIndex === key.length) {
          keyIndex = 0;
        } 
      }   
    }

    if(this.variant === false) {
      return result.split('').reverse().join('');
    } else {
      return result;
    }
  }
}


module.exports = {
  VigenereCipheringMachine
};

   