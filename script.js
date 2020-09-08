let myLibrary = [];
let currentElementId = 0;

class theBook {
  constructor(name, author, pages, year, read) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.year = year;
    this.read = read;
  }
}

const addBookBtn = document.querySelector("#addBookBtn");
const removeBookBtn = document.querySelector("#removeBookBtn");
const deleteBtn = document.querySelector("#deleteBtn");
const form = document.querySelector("#form");

const modal = document.getElementById("myModal");
const modalContent = document.querySelector(".modal-content");
const close = document.querySelector("#close");
const closeForm = document.querySelector("#close-form");
const bookContainer = document.querySelector("#books");
const header = document.querySelector("header");

const title = document.querySelector("#title");
const Author = document.querySelector("#modal-author");
const Pages = document.querySelector("#modal-pages");
const Year = document.querySelector("#modal-year");
const modalRead = document.querySelector("#modal-read");

addBookBtn.addEventListener("click", () => {
  if (form.style.display === "none") {
    form.style.display = "block";
  } else {
    form.style.display = "none";
  }
});

function assignID() {
  const allBooks = document.querySelectorAll(".book");

  allBooks.forEach((book, index) => {
    book.setAttribute("id", index);
  });
}

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
  console.log(myLibrary);
}

function visualiseBook() {
  const bookDiv = document.createElement("div");
  bookDiv.classList.add("book");
  bookContainer.appendChild(bookDiv);

  const whitePart = document.createElement("div");
  whitePart.classList.add("white-part");
  bookDiv.appendChild(whitePart);

  assignID();
}

const submitBtn = document.querySelector("#submitBtn");
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  addBookToLibrary();
  visualiseBook();
  form.reset();
  form.style.display = "none";
});

// When the user clicks on the button, open the modal
function displayBookData(selectedBookID) {
  modalContent.style.display = "block";

  // Assign the values from the array to the modal
  title.textContent = myLibrary[selectedBookID].name;
  Author.textContent = myLibrary[selectedBookID].author;
  Pages.textContent = myLibrary[selectedBookID].pages;
  Year.textContent = myLibrary[selectedBookID].year;
  modalRead.textContent = myLibrary[selectedBookID].read;
}
function updateBookData() {
  const bookDivs = document.querySelectorAll(".books");
  for (let i = 0; i < myLibrary.length; i++) {
    bookDivs[i].setAttribute("data-book", i);
    console.log(bookDivs[i]);
  }
}
deleteBtn.addEventListener("click", () => {
  myLibrary.splice(bookNumber, 1);
  const removedBook = document.querySelector(`[data-book="${bookNumber}"]`);
  console.log(removedBook);
  document.querySelector(".books").removeChild(removeBook);
  modalContent.style.display = "none";
});

bookContainer.addEventListener("click", (event) => {
  console.log(event);
  console.log(event.target);
  bookNumber = event.target.attributes[1].value;

  const selectedBookID = event.target.id;
  if (modalContent.style.display === "none") {
    modalContent.style.display = "block";
    console.log(myLibrary[selectedBookID]);
    displayBookData(selectedBookID);
  } else {
    modalContent.style.display = "none";
  }
});

close.addEventListener("click", () => {
  modalContent.style.display = "none";
});

closeForm.addEventListener("click", () => {
  form.style.display = "none";
});
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
