/*/Bài 1: Viết function truyền vào 1 số nguyên dường. Tính giai thừa của số đó
Ví dụ: calculateFactorial(5) = 5 * 4 * 3 * 2 * 1 = 120 /*/
function calculateFactorial(n) {
    if (n < 0) {
        return "Không có giai thừa cho số âm";
    } else if (n === 0 || n === 1) {
        return 1;
    } else {
        let result = 1;
        for (let i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    }
}

// Ví dụ sử dụng:
let number = 5;
let result = calculateFactorial(number);
console.log(`Giai thừa của ${number} là: ${result}`);



