const searchInput = document.getElementById("searchInput");
const SearchIcon = document.getElementById("srcIcon");
const menuList = document.getElementById("menuList");
const items = menuList.getElementsByTagName("li");

var clickTime = "";
srcIcon.addEventListener("click", function () {
  if (clickTime == 0) {
    searchInput.style.display = "block";
    clickTime = 1;
  } else {
    searchInput.style.display = "none";
    menuList.style.display = "none";
    clickTime = 0;
  }
});

searchInput.addEventListener("keyup", function (event) {
  const searchText = event.target.value.toLowerCase();
  menuList.style.display = "block";
  Array.from(items).forEach(function (item) {
    const itemName = item.textContent.toLowerCase();
    if (itemName.includes(searchText)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
});
