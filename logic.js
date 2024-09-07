const searchInput = document.getElementById("searchInput");
const searchIcon = document.getElementById("srcIcon");
const menuList = document.getElementById("menuList");
const items = menuList.getElementsByTagName("li");

let isSearchVisible = false;

searchIcon.addEventListener("click", function () {
  isSearchVisible = !isSearchVisible;
  searchInput.style.display = isSearchVisible ? "block" : "none";
  menuList.style.display = isSearchVisible ? "block" : "none";

  if (!isSearchVisible) {
    searchInput.value = "";
    Array.from(items).forEach(function (item) {
      item.style.display = "block";
    });
  }
});

searchInput.addEventListener("keyup", function (event) {
  const searchText = event.target.value.toLowerCase();
  Array.from(items).forEach(function (item) {
    const itemName = item.textContent.toLowerCase();
    item.style.display = itemName.includes(searchText) ? "block" : "none";
  });
});
