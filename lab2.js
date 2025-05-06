
const characters = [{
    name: "Luke Skywalker",
    height: 177,
    gender: "male",
    mass: 77,
    eye_color: "brown",
},
{
    name: "Leia Organa",
    height: 160,
    gender: "female",
    mass: 56,
    eye_color: "blue",
},
{
    name: "Han Solo",
    height: 180,
    gender: "male",
    mass: 80,
    eye_color: "brown",
},
{
    name: "Chewie",
    height: 222,
    gender: "male",
    mass: 190,
    eye_color: "black",
},
{
    name: "Kevin",
    height: 106,
    gender: "male",
    mass: 32.2,
    eye_color: "red",
},
];
console.log("name of a character whose mass is more than 75")
const fisrtName = characters.find(c=>{
    return c.mass>75;
})
console.log(fisrtName.name); 


console.log("first eye color of a character shorter than 180.")
const firstEye = characters.find(c =>{
    return c.height<180
})
console.log(firstEye.eye_color); 

console.log("characters whose height is greater than 150 but less than 210.")
const heightBetween = characters.filter (c=>{
    return c.height>150 && c.height<210;
})
console.log(heightBetween)

console.log("all female characters.")
const females= characters.filter(c => {
    return c.gender === "female"
})
console.log(females)

console.log("array of all eye colors only.")
const eyeColors= characters.map(c=>{
    return c.eye_color;
})
console.log(eyeColors);

console.log("array of all masses only.")
const masses = characters.map(c=>{
    return c.mass
})
console.log(masses)

console.log("Sort by name alphabetically (A to Z).")
const sortNames= characters.slice().sort((a,b)=>{
    return (a.name.localeCompare(b.name));
})
console.log(sortNames);

console.log("Sort by height (low to high).")
const sortHeight = characters.slice().sort((a,b)=>{
    return a.height - b.height
})
console.log(sortHeight);

console.log("Does every character have a height greater than 100?")
const greater100 = characters.every(c=>{
    return c.height>100;
})
console.log(greater100)

console.log("10. Is every character lighter than 200?")
const lighter200 = characters.every(c=>{
    return c.mass < 200;
})
console.log(lighter200)

console.log("Is there at least one character with black eyes?")
const blackEyes= characters.some(c=>{
    return c.eye_color.toLocaleLowerCase() === "black";
})
console.log(blackEyes);

console.log("12. Is there at least one character with a height of exactly 177?")
const height177= characters.some(c=>{
    return c.height === 177;
})
console.log(height177);