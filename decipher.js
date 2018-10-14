const CryptoJS = require('crypto-js');
const readline = require('readline-sync');
const ciphertext = readline.question('What do you want decipher? ');
const mySecretKey = readline.question('What is the key to decipher? ');

// Decrypt
var bytes  = CryptoJS.AES.decrypt(ciphertext, mySecretKey);
var originalText = bytes.toString(CryptoJS.enc.Utf8);

console.log(originalText); // 'my message'


