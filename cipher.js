const CryptoJS = require('crypto-js');
const readline = require('readline-sync');

const myText = readline.question('What is your text? ');
const mySecretKey = readline.question('What is your secret key? ');

// Encrypt
console.log(myText, mySecretKey);
const ciphertext = CryptoJS.AES.encrypt(myText, mySecretKey).toString();
console.log('cipherText: ', ciphertext);






