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
const books = document.querySelector("#books");

addBookBtn.addEventListener("click", () => {
  if (form.style.display === "none") {
    form.style.display = "block";
  } else {
    form.style.display = "none";
  }
});
//While clicking outside form, close it
window.onclick = function (event) {
  if (event.target == form) {
    form.style.display = "none";
  }
};

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
  displayBookData(newBook);

  // visualiseBook(newBook);

  //clear text fields
  name.value = "";
  author.value = "";
  pages.value = "";
  year.value = "";
  read.checked = false;
  unread.checked = false;
}

function visualiseBook() {
  const bookDiv = document.createElement("div");
  bookDiv.classList.add("book");
  books.appendChild(bookDiv);

  const whitePart = document.createElement("div");
  whitePart.classList.add("white-part");
  bookDiv.appendChild(whitePart);
}

const submitBtn = document.querySelector("#submitBtn");
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  addBookToLibrary();
  visualiseBook();
  form.style.display = "none";
});

// When the user clicks on the button, open the modal
function displayBookData() {
  modalContent.style.display = "block";
  modalContent.textContent = Object.keys(myLibrary);
  // for (let i = 0; i <= myLibrary.length; i++) {
  //   modalContent.textContent = Object.keys(myLibrary[i]);
  // }
  // modalContent.textContent = addBookToLibrary();
}

book.addEventListener("click", () => {
  if (modalContent.style.display === "none") {
    modalContent.style.display = "block";
  } else {
    modalContent.style.display = "none";
  }
  displayBookData();
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
