const RENDER = "bookshelf";
const STORAGE = "bookshelf";
const buttonAdd = document.getElementById("form-add");
const inputSearch = document.getElementById("form-search");
const books = [];

// get books
function getBooks(books = []) {
  const listUnfinished = document.getElementById("shelfbook-unfinished");
  const listFinished = document.getElementById("shelfbook-finished");

  listUnfinished.innerHTML = "";
  listFinished.innerHTML = "";

  books.forEach((book) => {
    if (book.isCompleted == false) {
      let el = `
            <div class="shelf-content-item">
                <div>
                    <h4>${book.title}</h4>
                    <p>Writer: ${book.author} | Year: ${book.year}</p>
                    </div>
                    <div class="shelf-content-item-action">
                    <button onClick="updateBookStatus(${book.id})" >
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24px"
                        height="24px"
                        viewBox="0 0 24 24"
                        style="color: #1f2937"
                        >
                            <path
                            fill="currentColor"
                            d="m9 20.42l-6.21-6.21l2.83-2.83L9 14.77l9.88-9.89l2.83 2.83L9 20.42Z"
                            />
                        </svg>    
                    </button>
                    <button onClick="updateBook(${book.id})" >
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24px"
                        height="24px"
                        viewBox="0 0 24 24"
                        style="color: #1f2937"
                        >
                        <path
                            fill="currentColor"
                            d="m19.3 8.925l-4.25-4.2l1.4-1.4q.575-.575 1.413-.575q.837 0 1.412.575l1.4 1.4q.575.575.6 1.388q.025.812-.55 1.387ZM17.85 10.4L7.25 21H3v-4.25l10.6-10.6Z"
                        />
                        </svg>
                    </button>
                    <button onClick="destroyBook(${book.id})">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24px"
                        height="24px"
                        viewBox="0 0 24 24"
                        style="color: #1f2937"
                        >
                        <path
                            fill="currentColor"
                            d="M7 21q-.825 0-1.412-.587Q5 19.825 5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413Q17.825 21 17 21Zm2-4h2V8H9Zm4 0h2V8h-2Z"
                        />
                        </svg>
                    </button>
                </div>
            </div>
            `;

      listUnfinished.innerHTML += el;
    } else {
      let el = `
            <div class="shelf-content-item">
                <div>
                    <h4>${book.title}</h4>
                    <p>Writer: ${book.author} | Year: ${book.year}</p>
                    </div>
                    <div class="shelf-content-item-action">
                    <button onClick="updateBookStatus(${book.id})" >
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24px"
                        height="24px"
                        viewBox="0 0 24 24"
                        style="color: #1f2937"
                        >
                            <g fill="none">
                            <path
                                d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z"
                            />
                            <path
                                fill="currentColor"
                                d="M7.16 10.972A7 7 0 0 1 19.5 15.5a1.5 1.5 0 1 0 3 0c0-5.523-4.477-10-10-10a9.973 9.973 0 0 0-7.418 3.295L4.735 6.83a1.5 1.5 0 1 0-2.954.52l1.042 5.91c.069.391.29.74.617.968c.403.282.934.345 1.385.202l5.644-.996a1.5 1.5 0 1 0-.52-2.954l-2.788.491Z"
                            />
                            </g>
                        </svg>                  
                    </button>
                    <button onClick="updateBook(${book.id})" >
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24px"
                        height="24px"
                        viewBox="0 0 24 24"
                        style="color: #1f2937"
                        >
                        <path
                            fill="currentColor"
                            d="m19.3 8.925l-4.25-4.2l1.4-1.4q.575-.575 1.413-.575q.837 0 1.412.575l1.4 1.4q.575.575.6 1.388q.025.812-.55 1.387ZM17.85 10.4L7.25 21H3v-4.25l10.6-10.6Z"
                        />
                        </svg>
                    </button>
                    <button onClick="destroyBook(${book.id})">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24px"
                        height="24px"
                        viewBox="0 0 24 24"
                        style="color: #1f2937"
                        >
                        <path
                            fill="currentColor"
                            d="M7 21q-.825 0-1.412-.587Q5 19.825 5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413Q17.825 21 17 21Zm2-4h2V8H9Zm4 0h2V8h-2Z"
                        />
                        </svg>
                    </button>
                </div>
            </div>
            `;

      listFinished.innerHTML += el;
    }
  });
}

// get books by search
function getBooksBySearch() {
  const listUnfinished = document.getElementById("shelfbook-unfinished");
  const listFinished = document.getElementById("shelfbook-finished");
  const valueSearch = inputSearch.value.toLowerCase();

  listUnfinished.innerHTML = "";
  listFinished.innerHTML = "";

  if (valueSearch == "") {
    document.dispatchEvent(new Event(RENDER));
    return;
  }

  for (const book of books) {
    if (book.title.toLowerCase().includes(valueSearch)) {
      if (book.isCompleted == false) {
        let el = `
                  <div class="shelf-content-item">
                    <div>
                        <h4>${book.title}</h4>
                        <p>Writer: ${book.author} | Year: ${book.year}</p>
                        </div>
                        <div class="shelf-content-item-action">
                        <button onClick="updateBookStatus(${book.id})" >
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24px"
                            height="24px"
                            viewBox="0 0 24 24"
                            style="color: #1f2937"
                            >
                                <path
                                fill="currentColor"
                                d="m9 20.42l-6.21-6.21l2.83-2.83L9 14.77l9.88-9.89l2.83 2.83L9 20.42Z"
                                />
                            </svg>    
                        </button>
                        <button onClick="updateBook(${book.id})" >
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24px"
                            height="24px"
                            viewBox="0 0 24 24"
                            style="color: #1f2937"
                            >
                            <path
                                fill="currentColor"
                                d="m19.3 8.925l-4.25-4.2l1.4-1.4q.575-.575 1.413-.575q.837 0 1.412.575l1.4 1.4q.575.575.6 1.388q.025.812-.55 1.387ZM17.85 10.4L7.25 21H3v-4.25l10.6-10.6Z"
                            />
                            </svg>
                        </button>
                        <button onClick="destroyBook(${book.id})">
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24px"
                            height="24px"
                            viewBox="0 0 24 24"
                            style="color: #1f2937"
                            >
                            <path
                                fill="currentColor"
                                d="M7 21q-.825 0-1.412-.587Q5 19.825 5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413Q17.825 21 17 21Zm2-4h2V8H9Zm4 0h2V8h-2Z"
                            />
                            </svg>
                        </button>
                    </div>
                </div>
            `;

        listUnfinished.innerHTML += el;
      } else {
        let el = `
                  <div class="shelf-content-item">
                    <div>
                        <h4>${book.title}</h4>
                        <p>Writer: ${book.author} | Year: ${book.year}</p>
                        </div>
                        <div class="shelf-content-item-action">
                        <button onClick="updateBookStatus(${book.id})" >
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24px"
                            height="24px"
                            viewBox="0 0 24 24"
                            style="color: #1f2937"
                            >
                                <g fill="none">
                                <path
                                    d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M7.16 10.972A7 7 0 0 1 19.5 15.5a1.5 1.5 0 1 0 3 0c0-5.523-4.477-10-10-10a9.973 9.973 0 0 0-7.418 3.295L4.735 6.83a1.5 1.5 0 1 0-2.954.52l1.042 5.91c.069.391.29.74.617.968c.403.282.934.345 1.385.202l5.644-.996a1.5 1.5 0 1 0-.52-2.954l-2.788.491Z"
                                />
                                </g>
                            </svg>                  
                        </button>
                        <button onClick="updateBook(${book.id})" >
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24px"
                            height="24px"
                            viewBox="0 0 24 24"
                            style="color: #1f2937"
                            >
                            <path
                                fill="currentColor"
                                d="m19.3 8.925l-4.25-4.2l1.4-1.4q.575-.575 1.413-.575q.837 0 1.412.575l1.4 1.4q.575.575.6 1.388q.025.812-.55 1.387ZM17.85 10.4L7.25 21H3v-4.25l10.6-10.6Z"
                            />
                            </svg>
                        </button>
                        <button onClick="destroyBook(${book.id})">
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24px"
                            height="24px"
                            viewBox="0 0 24 24"
                            style="color: #1f2937"
                            >
                            <path
                                fill="currentColor"
                                d="M7 21q-.825 0-1.412-.587Q5 19.825 5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413Q17.825 21 17 21Zm2-4h2V8H9Zm4 0h2V8h-2Z"
                            />
                            </svg>
                        </button>
                    </div>
                </div>
              `;

        listFinished.innerHTML += el;
      }
    }
  }
}

// store book
function storeBook() {
  const inputTitle = document.getElementById("form-title").value;
  const inputAuthor = document.getElementById("form-author").value;
  const inputYear = document.getElementById("form-year").value;
  const isCompleted = checkStatusBook();

  const id = +new Date();
  const newBook = {
    id: id,
    title: inputTitle,
    author: inputAuthor,
    year: inputYear,
    isCompleted: isCompleted,
  };

  books.unshift(newBook);
  document.dispatchEvent(new Event(RENDER));

  saveBook();

  showAlert("Added book successfully!");
}

// update book
function updateBook(bookId) {
  const inputTitle = document.getElementById("form-title");
  const inputAuthor = document.getElementById("form-author");
  const inputYear = document.getElementById("form-year");
  const buttonCancel = document.getElementById("form-cancel");
  const buttonEdit = document.getElementById("form-edit");

  buttonAdd.style.display = "none";
  buttonEdit.style.display = "block";
  buttonCancel.style.display = "block";

  bookTarget = findBookIndex(bookId);
  // set old value
  inputTitle.setAttribute("value", books[bookTarget].title);
  inputAuthor.setAttribute("value", books[bookTarget].author);
  inputYear.setAttribute("value", books[bookTarget].year);
  // update data
  buttonEdit.addEventListener("click", (e) => {
    e.preventDefault();

    books[bookTarget].title = inputTitle.value;
    books[bookTarget].author = inputAuthor.value;
    books[bookTarget].year = inputYear.value;
    document.dispatchEvent(new Event(RENDER));

    form.reset();

    buttonAdd.style.display = "block";
    buttonEdit.style.display = "none";
    buttonCancel.style.display = "none";

    saveBook();

    showAlert("Book has been successfully edited!");
  });

  buttonCancel.addEventListener("click", (e) => {
    e.preventDefault();

    form.reset();

    buttonAdd.style.display = "block";
    buttonEdit.style.display = "none";
    buttonCancel.style.display = "none";

    showAlert("Canceled to edit book!");
  });
}

// update book status
function updateBookStatus(bookId) {
  const bookIndex = findBookIndex(bookId);
  for (const index in books) {
    if (index === bookIndex) {
      if (books[index].isCompleted === true) {
        books[index].isCompleted = false;
        showAlert("Book change status to unfinished");
      } else {
        books[index].isCompleted = true;
        showAlert("Book change status to finished");
      }
    }
  }

  document.dispatchEvent(new Event(RENDER));
  saveBook();
}

// function remove book
function destroyBook(bookId) {
  const bookTarget = findBookIndex(bookId);

  books.splice(bookTarget, 1);
  document.dispatchEvent(new Event(RENDER));
  saveBook();

  showAlert("Deleted book successfully");
}

// load books from storage
function loadBooksFromStorage() {
  const serializedData = localStorage.getItem(STORAGE);
  let data = JSON.parse(serializedData);

  if (data !== null) {
    data.forEach((book) => {
      books.unshift(book);
    });
  }
  document.dispatchEvent(new Event(RENDER));
  return books;
}

// checkbox status book
function checkStatusBook() {
  const isCheckComplete = document.getElementById("form-isComplete");
  if (isCheckComplete.checked) {
    return true;
  }
  return false;
}

// find book index
function findBookIndex(bookId) {
  for (const index in books) {
    if (books[index].id == bookId) {
      return index;
    }
  }
  return null;
}

// save book
function saveBook() {
  const parsed = JSON.stringify(books);
  localStorage.setItem(STORAGE, parsed);

  document.dispatchEvent(new Event(RENDER));
}

// show alert
function showAlert(message) {
  const alertEl = document.querySelector(".alert");

  alertEl.innerText = message;
  alertEl.classList.add("active");

  setTimeout(() => {
    alertEl.classList.remove("active");
    alertEl.innerText = "";
  }, [3000]);
}

inputSearch.addEventListener("keyup", (e) => {
  e.preventDefault();
  getBooksBySearch();
});

// button add on click
document.addEventListener("DOMContentLoaded", function () {
  buttonAdd.addEventListener("click", function (e) {
    e.preventDefault();
    storeBook();

    form.reset();
  });

  loadBooksFromStorage();
});

// get books on load
document.addEventListener(RENDER, () => {
  getBooks(books);
});
