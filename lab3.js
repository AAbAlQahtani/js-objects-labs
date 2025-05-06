
const movies = [
    {
      title: "The Matrix",
      director: "Wachowski Brothers",
      year: 1999,
      rating: 8.7,
    },
    {
      title: "Inception",
      director: "Christopher Nolan",
      year: 2010,
      rating: 8.8,
    },
    {
      title: "Interstellar",
      director: "Christopher Nolan",
      year: 2014,
      rating: 8.6,
    },
    {
      title: "The Godfather",
      director: "Francis Ford Coppola",
      year: 1972,
      rating: 9.2,
    },
    {
      title: "The Dark Knight",
      director: "Christopher Nolan",
      year: 2008,
      rating: 9.0,
    },
    { title: "Fight Club", director: "David Fincher", year: 1999, rating: 8.8 },
  ];


  console.log("1. احصل على عنوان أول فيلم تم إصداره بعد عام 2000.")

const filmName= movies.find(f =>{
    return f.year>2000
})
console.log(filmName.title)

console.log(" 2. احصل على عنوان أول فيلم تقييمه أعلى من 9.")
const filmRate= movies.find(f =>{
    return f.rating>9
})
console.log(filmRate.title)

console.log(" احصل على الأفلام التي أخرجها Christopher Nolan فقط.")
const moviesByNolan = movies.filter(c=>{
    return c.director === "Christopher Nolan";
})
console.log(moviesByNolan)

console.log("4. احصل على الأفلام التي تم إصدارها قبل عام 2010.")
const before2010 = movies.filter(b=>{
    return b.year<2010
})
console.log(before2010)

console.log("5. احصل على مصفوفة تحتوي فقط عناوين الأفلام.")
const moviesTitle = movies.map(c=>{
    return c.title
})
console.log(moviesTitle)

console.log("6. احصل على متوسط تقييم جميع الأفلام.")
const avgRates = movies.reduce((total, film)=>{
    return (total+film.rating);},0)/movies.length;
console.log(avgRates)

console.log("7. قم بترتيب الأفلام حسب السنة (الأقدم إلى الأحدث).")
const sortByYears = movies.slice().sort((a,b)=>{
    return a.year - b.year;
})
console.log(sortByYears)

console.log("8. قم بترتيب الأفلام حسب التقييم (من الأعلى إلى الأقل).")
const sortByRates = movies.slice().sort((a,b)=>{
    return b.rating - a.rating;
})
console.log(sortByRates)

console.log("9. هل جميع الأفلام تقييمها أعلى من 8؟")
const rateMore8 = movies.every(a=>{
    return a.rating>8;
})
console.log(rateMore8)

console.log("10. هل يوجد فيلم واحد على الأقل تم إصداره في عام 1999؟")
const year1999= movies.some(a=>{
    return a.year=== 1999;
})
console.log(year1999)

console.log("هل جميع الأفلام أخرجها نفس المخرج؟")
const everyDirector= movies.every(a=>{
    return a.director=== movies[0].director;
})
console.log(everyDirector)

console.log("12. هل يوجد فيلم واحد على الأقل تقييمه أقل من 8.5؟")
const rateless8= movies.some(a=>{
    return a.rating<8.5;
})
console.log(rateless8)