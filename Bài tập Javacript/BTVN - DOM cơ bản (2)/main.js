let colors = [
    '#3498db',
    '#9b59b6',
    '#e74c3c',
    '#2c3e50',
    '#d35400',
]

/*/Yêu cầu
1. Render số box = số lượng màu ra ngoài màn hình bằng javascript (5 box)
2. Box được tạo bởi thẻ div, có class=“box”, background tương ứng với từng mã màu
3. Cập nhật số lượng total box trong thẻ <span> có class “points”
4. Khi bấm vào box bất kỳ thì box đó biến mất, đồng thời số lượng total box giảm đi 1
5. Khi click vào nút “more box” thì số lượng box tăng lên 5 (tương ứng với 5 màu trong mảng colors), đồng thời số lượng total box cũng tăng lên 5/*/
let totalBoxes = 0;
// Hàm tạo box
function createBox(color) {
    let box = document.createElement('div');
    box.classList.add('box');
    box.style.backgroundColor = color;

    box.addEventListener('click', function () {
        this.remove();
        updateStotalBox(-1);
    });
    return box;
}
//Hàm cập nhật số box
function updateStotalBox(value) {
    totalBoxes += value;
    document.querySelector('.points').textContent = totalBoxes;
}
//Hàm thêm box
function createBoxes(num) {
    for (let i = 0; i < num; i++) {
        let box = createBox(colors[i]);
        document.querySelector('.boxes').appendChild(box);
        updateStotalBox(1);
    }
}

document.getElementById('btn').addEventListener('click', function () {
    createBoxes(5);
});


createBoxes(5);