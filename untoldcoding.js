
let currentPage = 1;

function toggleClass(e, toggleClassName) {
  if (e.classList.contains(toggleClassName)) {
    e.classList.remove(toggleClassName);
  } else {
    e.classList.add(toggleClassName);
  }
}

function movePage(e, page) {
  if (page === currentPage) {
    toggleClass(e, "left-side");
    currentPage++;
  } else if (page === currentPage - 1) {
    toggleClass(e, "left-side");
    currentPage--;
  }
}
