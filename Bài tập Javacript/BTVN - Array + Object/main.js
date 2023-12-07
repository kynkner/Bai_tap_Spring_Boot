const grades = [
    {name: 'John', grade: 8, sex: 'M'},
    {name: 'Sarah', grade: 12, sex: 'F'},
    {name: 'Bob', grade: 16, sex: 'M'},
    {name: 'Johnny', grade: 2, sex: 'M'},
    {name: 'Ethan', grade: 4, sex: 'M'},
    {name: 'Paula', grade: 18, sex: 'F'},
    {name: 'Donald', grade: 5, sex: 'M'},
    {name: 'Jennifer', grade: 13, sex: 'F'},
    {name: 'Courtney', grade: 15, sex: 'F'},
    {name: 'Jane', grade: 9, sex: 'F'}
   ]

//    1. Viết function tính thứ hạng trung bình của cả lớp
function tinhTrungBinhLop(grades) {
    const soHocVien = grades.length;
    const tongDiem = grades.reduce((tong, hocVien) => tong + hocVien.grade, 0);
    return soHocVien > 0 ? tongDiem / soHocVien : 0;
}
console.log("1. Thứ hạng trung bình của cả lớp: " + tinhTrungBinhLop(grades));
//    2. Viết function tính thứ hạng trung bình của nam trong lớp
function tinhTrungBinhNam(grades) {
    const nam = grades.filter(hocVien => hocVien.sex === 'M');
    return tinhTrungBinhLop(nam);
}
console.log("2. Thứ hạng trung bình của nam trong lớp: " + tinhTrungBinhNam(grades));
//    3. Viết function tính thứ hạng trung bình của Nữ trong lớp
function tinhTrungBinhNu(grades){
    const nu = grades.filter(hocVien => hocVien.sex === "F");
    return tinhTrungBinhLop(nu)
}
console.log("3. Thứ hạng trung bình của nữ trong lớp: " +tinhTrungBinhNu(grades))
//    4. Viết function tìm học viên Nam có thứ hạng cao nhất trong lớp
function thuHangNamMax(grades){
    const nam = grades.filter(hocVien => hocVien.sex == 'M');
    return nam.reduce((max, hocVien) => (hocVien.grade > max.grade ? hocVien : max), nam[0])
}
console.log("4. Học viên Nam có thứ hạng cao nhất trong lớp: ", thuHangNamMax(grades))
//    5. Viết function tìm học viên Nữ có thứ hạng cao nhất trong lớp
function thuHangNuMax(grades){
    const nu = grades.filter(hocVien => hocVien.sex == "F");
    return nu.reduce((max, hocVien) => (hocVien.grade > max.grade ? hocVien : max), nu[0])
}
console.log("5. Học viên Nữ có thứ hạng cao nhất trong lớp : ", thuHangNuMax(grades))
//    6. Viết function tìm học viên Nam có thứ hạng thấp nhất trong lớp
function thuHangNamMin(grades) {
    const nam = grades.filter(hocVien => hocVien.sex === 'M');
    return nam.reduce((min, hocVien) => (hocVien.grade < min.grade ? hocVien : min), nam[0]);
}
console.log("6. Học viên Nam có thứ hạng thấp nhất trong lớp: ",thuHangNamMin(grades))
//    7. Viết function tìm học viên Nữ có thứ hạng thấp nhất trong lớp
function thuHangNuMin(grades) {
    const nu = grades.filter(hocVien => hocVien.sex === 'F');
    return nu.reduce((min, hocVien) => (hocVien.grade < min.grade ? hocVien : min), nu[0]);
}
console.log("7. Học viên Nữ có thứ hạng thấp nhất trong lớp: ", thuHangNuMin(grades))
//    8. Viết function thứ hạng cao nhất của cả lớp
function thuHangAllMax(grades) {
    return grades.reduce((max, hocVien) => (hocVien.grade > max.grade ? hocVien : max), grades[0]);
}
console.log("8. Thứ hạng cao nhất trong lớp: ", thuHangAllMax(grades))
//    9. Viết function thứ hạng thấp nhất của cả lớp
function thuHangAllMin(grades) {
    return grades.reduce((min, hocVien) => (hocVien.grade < min.grade ? hocVien : min), grades[0]);
}
console.log("9. Thứ hạng thấp nhất trong lớp: ", thuHangAllMin(grades))
//    10. Viết function lấy ra danh sách tất cả học viên Nữ trong lớp
function danhSachNu(grades) {
    return grades.filter(hocVien => hocVien.sex === 'F');
}
console.log("10. Danh sách tất cả học viên Nữ trong lớp: ", danhSachNu(grades))
//    11. Viết function sắp xếp tên học viên theo chiều tăng dần của bảng chữ cái
function sapXepTheoMax(grades) {
    return grades.slice().sort((a, b) => a.name.localeCompare(b.name));
}
console.log("11. Sắp xếp tên học viên theo chiều tăng dần của bảng chữ cái: ", sapXepTheoMax(grades))
//    12. Viết function sắp xếp thứ hạng học viên theo chiều giảm dần
function sapXepTheoMin(grades) {
    return grades.slice().sort((a, b) => b.grade - a.grade);
}
console.log("12. Sắp xếp thứ hạng học viên theo chiều giảm dần : ", sapXepTheoMin(grades))
//    13. Viết function lấy ra học viên Nữ có tên bắt đầu bằng “J”
function nuBatDauJ(grades) {
    return grades.filter(hocVien => hocVien.sex === 'F' && hocVien.name.startsWith('J'));
}
console.log('13. Học viên Nữ có tên bắt đầu bằng "j" :  ', nuBatDauJ(grades))
//    14. Viết function lấy ra top 5 người có thứ hạng cao nhất trong lớp
function top5Max(grades) {
    return grades.slice().sort((a, b) => b.grade - a.grade).slice(0, 5);
}
console.log("Top 5 người có thứ hạng cao nhất trong lớp : ", top5Max(grades))