console.log("************** DELIVERABLE 04 *********************");
var isBookRead = function (books, titleToSearch) {
    return books.some(function (book) {
        return book.title === titleToSearch && (book === null || book === void 0 ? void 0 : book.isRead);
    });
};
var books = [
    { title: "Harry Potter y la piedra filosofal", isRead: true },
    { title: "Canción de hielo y fuego", isRead: false },
    { title: "Devastación", isRead: true },
];
console.log(isBookRead(books, "Devastación")); // true
console.log(isBookRead(books, "Canción de hielo y fuego")); // false
console.log(isBookRead(books, "Los Pilares de la Tierra")); // false
