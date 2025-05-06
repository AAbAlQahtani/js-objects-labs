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
console.log("- اطبع الكائن `Book`.")
console.log(book);
console.log("- اطبع الخاصية `title`.")
console.log(book.title)
console.log("- قم بتعديل قيمة الخاصية `year` إلى السنة الحالية واطبع الكائن.")
book.year=new Date().getFullYear();
console.log(book)

console.log("- احذف الخاصية `author` واطبع الكائن.")
delete book.author;
console.log(book)
console.log("- استدعِ الدالة `borrow` لتغيير `isAvailable` إلى false واطبع الكائن.")
book.borrow();
console.log(book);
console.log("- اطبع الخاصية `publisher`.")
console.log(book.publisher)
console.log("- اطبع الخاصية `city` من داخل `location` obj .")
console.log(book.publisher.location.city)