const book = {
    title: 'Asma book',
    author: 'Asma',
    year: 2024,
    isAvailable: true,
    borrow: () => {
        book.isAvailable = false
        console.log("الكتاب غير متوفر")
    },
    publisher: {
        name: 'Tuwaiq',
        location: { city: 'Riyadh', country: 'SA' }
    }
}

console.log(book);
console.log(book.title)
book.year=new Date().getFullYear();
console.log(book)


delete book.author;
console.log(book)

book.borrow();
console.log(book);

console.log(book.publisher)

console.log(book.publisher.location.city)