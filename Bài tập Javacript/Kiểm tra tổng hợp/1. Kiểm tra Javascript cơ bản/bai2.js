let users = [
    {
        name: "Bùi Công Sơn",
        age: 30,
        isStatus: true
    },
    {
        name: "Nguyễn Thu Hằng",
        age: 27,
        isStatus: false
    },
    {
        name: "Phạm Văn Dũng",
        age: 20,
        isStatus: false
    }
];
// Viết function truyền vào 1 mảng các object user. Trả về mảng các user có age > 25 và isStatus = true

function FunisStatus (users) {
    return users.filter(user => user.age > 25 && user.isStatus)
};

const result1 = FunisStatus(users);
console.log(result1);

// Viết function truyền vào 1 mảng các object user. Trả về mảng các user có age tăng dần
function Agegraduallyincreases (users){
    return users.slice().sort((a, b) => a.age - b.age);
}

const result2 = Agegraduallyincreases(users);
console.log(result2);