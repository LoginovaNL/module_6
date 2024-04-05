let str = 'А роза упала на лапу Азора';
let userStr = str;
userStr = userStr.toLowerCase().replace(/\s/g, '');
let reversedStr = '';
for (let i = userStr.length -1; i >= 0; i--) {
    reversedStr += userStr[i];
}
if(reversedStr === userStr) {
    console.log('Слово ' + str + ' является палиндромом');
} else {
    console.log('Слово ' + str + ' не является палиндромом');
}