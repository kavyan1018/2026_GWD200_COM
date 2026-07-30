const person = {
    name: "John",
    age: 30,
    city: "gujarat"
};

// document.write(person);

console.log(person);
// console.log(person.name);
// document.write(person.name);
// document.write(person.age);
// document.write(person.city);


// console.log(person["name"]);

// const key = "age";
// const key = "name";
// const key = "city";
// console.log(person.key);
// console.log(person[key]);
// console.log(key);


// new object 
/*
    syntax :

    const objectName = new Object();
*/

const newPerson = new Object();

newPerson.name = "Jane";
newPerson.nge = 25;
newPerson.city = "Los Angeles";

console.log(newPerson);
// Update the new property to the object
newPerson.city = "Chicago";
console.log(newPerson);


// add the new property to the object

newPerson.country = "USA";
console.log(newPerson);

person.country = "india";
console.log(person);


// delete the property from the object

delete newPerson.nge;
console.log(newPerson);


// for in loop

const person1 = {
    name: "John",
    age: 30,
    city: "gujarat"
};

for (const x in person1) {

    console.log(x)
    console.log(x + " : " + person1[x]);

}