# creditcardverify 

- This Node.js module checks the verification and authenticity of the credit card number. (English)
- Bu Node.js Modülü  Kredi Kartı Numarasının doğruluğunu ve geçerliliğini kontrol etmektedir. (Turkish) 
- npm link address =>  https://www.npmjs.com/package/creditcardverify

# How to use ?  

"""

let cv = require("creditcardverify");

let cardNoInValid = "1234567898765432";

let cardNoValid = "4556737586899855";

console.log(cv.creditCardValidation(cardNoValid));  // Output : This is a valid card True

"""
