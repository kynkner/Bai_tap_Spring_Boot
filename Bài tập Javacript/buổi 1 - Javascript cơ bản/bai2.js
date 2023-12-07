/*/Bài 2: Viết function truyền vào 1 chuỗi. In ra chuỗi đảo ngược của chuỗi đó
Ví dụ: reverseString(‘hello’) => olleh/*/

function reverseString(inputString) {
    return inputString.split('').reverse().join('');
}
// Ví dụ :
let input = 'hello';
let resultString = reverseString(input);
console.log(`Chuỗi đảo ngược của "${input}" là "${resultString}"`);