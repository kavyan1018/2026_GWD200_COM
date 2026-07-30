/*

    if(){
    
        if(){

        } ele{
         
        }

    }

*/

let age = 20;
// let age = 10;
let citizenship = true;
// let citizenship = false;


if(age >= 18){


    if(citizenship == true){

        console.log("You are eligible to vote.");

    }
    else{
        console.log("You are not eligible to vote because you are not a citizen.");
    }
}else{
    console.log("You are not eligible to vote because you are underage.");
}