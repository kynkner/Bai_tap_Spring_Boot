/*/Bài 4: Cho function truyền vào 1 chuỗi dài hơn 15 ký tự. Viết 1 function cắt chuỗi, lấy ra 10 ký tự đầu tiên và thêm vào dấu “…” ở cuối chuỗi.
Ví dụ : subString(“xinchaocacbandenvoiTechmaster”) => “xinchaocac…” /*/

function subString(inputString) {
    if (inputString.length > 15) {
        return inputString.slice(0, 10) + "...";
    } else {
        return "Chuỗi không đủ dài";
    }
}

// Ví dụ:
let input1 = "xinchaocacbandenvoiTechmaster";
let result1 = subString(input1);
console.log(result1);