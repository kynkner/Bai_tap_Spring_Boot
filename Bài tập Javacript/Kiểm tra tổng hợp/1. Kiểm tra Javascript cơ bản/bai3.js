// Viết function truyền vào 1 mảng các chuỗi. Trả về Object hiển thị xem mỗi phần tử trong mảng xuất hiện bao nhiêu lần
function Countappears (arr){
        const count = {};
        arr.forEach(element => {
            if(count[element]){
                count[element] += 1;
            }else{
                count[element] = 1;
            }
        });
        return count;
}

const getCountElement = ["one", "two", "three", "one", "one", "three"];
const result3 = Countappears(getCountElement);
console.log(result3);