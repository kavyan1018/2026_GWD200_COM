// let str1 = "Hello World";

// document.write(str1);


// let firstName = "Kavya";
// let lastName = "Reddy";

// let fullName = firstName + " " + lastName;
// document.write(fullName);


// let name = "Kavya Reddy";
// let age = 20;

// document.write(name + age)
// console.log("My name is " + name + " and i am " + age)
// console.log(`Her name is ${name} and she is ${age} years old.`)


// let str1 = "Hello World";
// let str2 = "Hello World 2";

// Length of the string
// document.write(str1.length());
// console.log(str1.length);

// trim -> removes whitespace from both ends of a string
// console.log(str1.trim());
// console.log(str1.trimEnd());
// console.log(str1.trimStart());
// console.log(str2);  


// char at  -> index -> char 
// console.log(str1.charAt(0));
// console.log(str1.charAt(1));
// console.log(str1.charAt(2));
// console.log(str1.at(index));
// console.log(str1.at(-1));
// console.log(str1.charCodeAt(0));    // -> ascii value of the character at index 0 -> H -> 72 a -> 97
// console.log(str1.codePointAt(0));



// concat
// console.log(str1.concat(", ", str2));

//  check if the string contains the specified substring
// console.log(str1.includes("2"));
// console.log(str1.startsWith("hello"))
// console.log(str1.endsWith("d"))


// indexof and search -> its returns the index of the first occurrence of the specified value in a string
// console.log(str1.indexOf("o"));
// console.log(str1.indexOf("H"));
// console.log(str1.search("o"));
// console.log(str1.search("H"));


// match -> returns an array of all matches
// console.log(str1.match("o"));


// replace -> replaces a specified value with another value in a string
// console.log(str1.replace("H", "h"));
// console.log(str1.replaceAll("o", "O"));


// uppercase and lowercase
// console.log(str1.toUpperCase());
// console.log(str1.toLocaleUpperCase());
// console.log(str2.toLowerCase());
// console.log(str2.toLocaleLowerCase());



let str1 = "hello World ";
let str2 = "Hello World 2";

// sclice -> extracts a part of a string and returns a new string
// console.log(str1.slice(start, end));
// console.log(str1.slice(0, 5));
// console.log(str1.substring(3));   0 1 2
// console.log(str1.substr(0, 3));



// value of -> returns the primitive value of a string
// console.log(str2.valueOf());
// console.log(str2.toString());

// repeat -> returns a new string with a specified number of copies of a string
// console.log(str1.repeat(5));


// padStart and padEnd -> pads the current string with another string until the resulting string reaches the given length
// console.log(str1.padStart(20, "ABC"));
// console.log(str1.padEnd(20, "ABC"));


// localCompare -> compares two strings in the current locale
// console.log(str1.localeCompare(str2));

// normalize -> returns the Unicode Normalization Form of a string
// lambda sine

// str = "😊";
// // console.log(str.normalize());
// // console.log(str.isWellFormed());
// console.log(str.toWellFormed());