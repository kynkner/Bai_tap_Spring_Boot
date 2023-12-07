/*/Câu 2. Sử dụng vòng lặp để đặt màu chữ cho tất cả thẻ li thành màu blue (tạo thẻ ul-li bằng html):
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>
/*/
// cách 1
const ul = document.querySelectorAll("#text + ul");

Array.from(ul).map(li => {
    li.style.color = "blue";
});

//cách 2
Array.from(document.querySelectorAll("#text + ul")).map(li => {
    li.style.color = "blue";
});
