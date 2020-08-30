class theBook {
  constructor(name, author, pages, year, read) {
    let info = {
      name: name,
      author: author,
      pages: pages,
      yaer: year,
    };
    read();
  }
}
const book = document.querySelector(".book");
const addBookBtn = document.querySelector("#addBookBtn");
const removeBookBtn = document.querySelector("#removeBookBtn");
const form = document.querySelector("#form");
const saveNewBook = document.querySelector("#submitBtn");
const name = document.querySelector("#name");
// const bookLocation = document.querySelector("#books");

addBookBtn.addEventListener("click", () => {
  if (form.style.display === "none") {
    form.style.display = "block";
  } else {
    form.style.display = "none";
  }
});
function addBook() {
  // saveNewBook.addEventListener("click", () => {
  // if (book >= 2) {
  var anotherBook = book.cloneNode(true);
  anotherBook.classList.add("newBook");
  document.querySelector("#books").appendChild(anotherBook);
  anotherBook.book.after(anotherBook);
  // } else {
  //   addBook();
  // }
}
