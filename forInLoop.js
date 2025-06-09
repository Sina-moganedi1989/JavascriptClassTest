const prompt=require("prompt-sync")({sigint:true}); 
const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};

for (let key in car) {
    console.log(`${key}: ${car[key]}`);
} 


// map

/*let anotherMap = new Map([
    ['name', 'GFG'],
    ['age', 30],
    ['city', 'Noida']
]);
anotherMap.set("surname","moganedi")
console.log(anotherMap.get("name"));*/

