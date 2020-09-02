let myLibrary = [];

class theBook {
  constructor(name, author, pages, year, read) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.year = year;
    this.read = read;
  }
}

const book = document.querySelector(".book");
const addBookBtn = document.querySelector("#addBookBtn");
const removeBookBtn = document.querySelector("#removeBookBtn");

const form = document.querySelector("#form");

const modal = document.getElementById("myModal");
const modalContent = document.querySelector(".modal-content");
const close = document.querySelector(".close");

addBookBtn.addEventListener("click", () => {
  if (form.style.display === "none") {
    form.style.display = "block";
  } else {
    form.style.display = "none";
  }
});

function addBookToLibrary() {
  const name = document.querySelector("#name").value;
  const author = document.querySelector("#author").value;
  const pages = document.querySelector("#pages").value;
  const year = document.querySelector("#year").value;
  const read = document.querySelector("#read");
  const unread = document.querySelector("#unread");
  //Determine status of radio buttons
  if (read.checked === true) {
    read.value = "read";
  } else {
    read.value = "unread";
  }

  let newBook = new theBook(name, author, pages, year, read.value);

  myLibrary.push(newBook);
  displayBookData(newBook);

  //clear text fields
  name.value = "";
  author.value = "";
  pages.value = "";
  year.value = "";
  read.checked = false;
  unread.checked = false;
}
const submitBtn = document.querySelector("#submitBtn");
submitBtn.addEventListener("click", addBookToLibrary());

// function visualiseBook(newBook) {}
//     function addBook() {
//
//   document.querySelector("#books").appendChild(anotherBook);
// anotherBook.book.after(anotherBook);
// } else {
//   addBook();
// }

// Get the button that opens the modal
// var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
function displayBookData(newBook) {
  modalContent.textContent = Object.keys(newBook);
}
book.addEventListener("click", () => {
  if (modalContent.style.display === "none") {
    modalContent.style.display = "block";
  } else {
    modalContent.style.display = "none";
  }
  console.log(newBook.value);
  modalContent.textContent = newBook.value;
});

close.addEventListener("click", () => {
  modalContent.style.display = "none";
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
