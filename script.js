let myLibrary = [];

class theBook {
  constructor(name, author, pages, year, read) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.yaer = year;
    this.read = read;
  }
}

const book = document.querySelector(".book");
const addBookBtn = document.querySelector("#addBookBtn");
const removeBookBtn = document.querySelector("#removeBookBtn");

const form = document.querySelector("#form");
const submitBtn = document.querySelector("#submitBtn");

// const bookLocation = document.querySelector("#books");

addBookBtn.addEventListener("click", () => {
  if (form.style.display === "none") {
    form.style.display = "block";
  } else {
    form.style.display = "none";
  }
  addBookToLibrary();
});

const read = document.querySelector("#read");
const unread = document.querySelector("#unread");
submitBtn.addEventListener("click", addBookToLibrary);

function addBookToLibrary() {
  const name = document.querySelector("#name").value;
  const author = document.querySelector("#author").value;
  const pages = document.querySelector("#pages").value;
  const year = document.querySelector("#year").value;

  //Determine status of radio buttons
  if (read.checked === true) {
    read.value = "read";
  } else {
    read.value = "unread";
  }

  let newBook = new theBook(name, author, pages, year, read.value);

  console.log(newBook.year);
  myLibrary.push(newBook);
  createCard(newBook);

  //clear text fields
  name.value = "";
  author.value = "";
  pages.value = "";
  year.value = "";
  read.checked = false;
  unread.checked = false;
}
function createCard(newBook) {}
// function visualiseBook(newBook) {}
//     function addBook() {
//
//   document.querySelector("#books").appendChild(anotherBook);
// anotherBook.book.after(anotherBook);
// } else {
//   addBook();
// }

var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
