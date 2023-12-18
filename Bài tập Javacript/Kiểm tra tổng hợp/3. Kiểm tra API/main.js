function loadData(resource) {

    document.querySelectorAll('button').forEach(btn => {
        btn.classList.remove('active');
    });

    document.getElementById(`${resource}Btn`).classList.add('active');

    fetch(`https://jsonplaceholder.typicode.com/${resource}`)
        .then(response => response.json())
        .then(data => {
            const dataList = document.getElementById('dataList');
            dataList.innerHTML = ''; 

            data.forEach(item => {
                const listItem = document.createElement('li');
                listItem.textContent = item.title;
                dataList.appendChild(listItem);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
}