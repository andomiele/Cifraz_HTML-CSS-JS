const button = document.querySelector(".add-book");
const basket = document.querySelector(".books-list");

let num = 1;

const addBook = () => {
  const book = document.createElement("p");
  book.textContent = `Книга ${num}`;
  num += 1;
  basket.append(book);
};

button.addEventListener('click', addBook)
