const books = [
  { title: "Книга 1", price: 300 },
  { title: "Книга 2", price: 500 },
  { title: "Книга 3", price: 100 },
  { title: "Книга 4", price: 400 },
  { title: "Книга 5", price: 200 },
  { title: "Книга 6", price: 200 },
  { title: "Книга 7", price: 700 },
  { title: "Книга 8", price: 900 },
  { title: "Книга 9", price: 600 },
  { title: "Книга 10", price: 800 },
];

const filter = (books) => {
  return books.filter((book) => book.price < 400);
};
filter(books);
