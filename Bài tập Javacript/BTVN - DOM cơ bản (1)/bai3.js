/*/Câu 3. Cho mã HTML có nội dung như sau (tạo thẻ ul-li bằng html):
<ul id="list">
   <li>Item 1</li>
   <li>Item 2</li>
   <li>Item 3</li>
   <li>Item 4</li>
   <li>Item 5</li>
   <li>Item 6</li>
   <li>Item 7</li>
</ul>
---Sử dụng javascript để thực hiện những công việc sau:
1. Thêm 3 thẻ <li> có nội dung Item 8, Item 9, Item 10 vào cuối danh sách
2. Sửa nội dung cho thẻ <li> 1 thành màu đỏ (color)
3. Sửa background cho thẻ <li> 3 thành màu xanh (background-color)
4. Remove thẻ <li> 4
5. Thêm thẻ <li> mới thay thế cho thẻ <li> 4 bị xóa ở bước trước, thẻ <li> mới có nội dung bất kỳ./*/


const ul2 = document.getElementById("list");


//1. Thêm 3 thẻ <li> có nội dung Item 8, Item 9, Item 10 vào cuối danh sách
for(let i = 8; i <= 10; i++){
   const item = document.createElement("li");
   item.textContent = "Item " + i;
   ul2.appendChild(item)
};

//2. Sửa nội dung cho thẻ <li> 1 thành màu đỏ (color)
ul2.firstElementChild.style.color = "red";

//3. Sửa background cho thẻ <li> 3 thành màu xanh (background-color)
ul2.children[2].style.backgroundColor = "green";

//4. Remove thẻ <li> 4
ul2.removeChild(ul2.children[3]);

//5. Thêm thẻ <li> mới thay thế cho thẻ <li> 4 bị xóa ở bước trước, thẻ <li> mới có nội dung bất kỳ./*/
const newitem = document.createElement("li");
newitem.textContent = "New Item";
ul2.appendChild(newitem);
ul2.insertBefore(newitem, ul2.children[3]);