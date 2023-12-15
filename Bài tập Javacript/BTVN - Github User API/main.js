const userTbody = document.querySelector("tbody");
const searchTextbox = document.querySelector("input");
const searchButton = document.querySelector("button");
const paginationContainer = document.querySelector(".pagination-container ul");
const itemPerPage = 10;
const apiUrl = "https://api.github.com/users";

const fetchData = async () => {
  const response = await fetch(`${apiUrl}`);
  const data = await response.json();
  return data;
};

const renderData = async data => {
  userTbody.innerHTML = "";
  let html = "";

  data.forEach(user => {
    html += `
        <tr>
        <td>${user.id}</td>
        <td>
            <img
            src="${user.avatar_url}"
            alt="${user.login}"
            />
        </td>
        <td>${user.login}</td>
        <td>${user.url}</td>
        <td>${user.repos_url}</td>
        </tr>    
        `;
  });

  userTbody.innerHTML = html;
};

const renderPagination = (totalPages, currentPage) => {
  paginationContainer.innerHTML = "";

  for (let i = 1; i <= totalPages; i++) {
    const listItem = document.createElement("li");
    const link = document.createElement("a");
    link.textContent = i;
    link.href = "#";
    listItem.appendChild(link);

    if (i === currentPage) {
      listItem.classList.add("active");
    }

    link.addEventListener("click", async function () {
      const data = await fetchData();
      renderData(data);
      renderPagination(totalPages, i);
    });

    paginationContainer.appendChild(listItem);
  }
};

searchButton.addEventListener("click", async () => {
  let html;
  const name = searchTextbox.value;
  if (name !== null && name !== "") {
    userTbody.innerHTML = "";

    try {
      let response = await fetch(`${apiUrl}/${name}`);
      let user = await response.json();
      console.log(user);

      if (response.status === 200) {
        html = `
        <tr>
        <td>${user.id}</td>
        <td>
            <img
            src="${user.avatar_url}"
            alt="${user.login}"
            />
        </td>
        <td>${user.login}</td>
        <td>${user.url}</td>
        <td>${user.repos_url}</td>
        </tr>    
        `;
      } else if (response.status === 404) {
        html = `<tr><td colspan="5">No user found</td></tr>`;
      }
    } catch (error) {
      console.log(error);
    }
  } else {
    renderData();
  }

  userTbody.innerHTML = html;
});

(async function () {
  const initialData = await fetchData();
  const totalPages = Math.ceil(initialData.length / itemPerPage);
  renderData(initialData);
  renderPagination(totalPages, 1);
})();