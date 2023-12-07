/*/Bài 3: Viết function truyền vào mã quốc gia. Trả về message có ý nghĩa là “Xin chào”, tương ứng với mã quốc gia được truyền vào
Ví dụ: translate(‘VN’) => “Xin chào”
translate(‘EN’) => “Hello”
Gợi ý : Sử dụng switch - case . Học viên tự nghĩ ra 1 vài mã quốc gia và câu chào tương ứng với quốc gia đó/*/

function translate(country) {
    switch (country) {
        case 'VN':
            return "Xin chào";
        case 'EN':
            return "Hello";
        default:
            return "Không xác định";
    }
}

// Ví dụ :
let greetingVN = translate('VN');
console.log(`Mã quốc gia VN: ${greetingVN}`);

let greetingEN = translate('EN');
console.log(`Mã quốc gia EN: ${greetingEN}`);