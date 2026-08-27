console.log("1");    // -> immediate

setTimeout(() => {    // setTimeout is start timer, donot block the code
    console.log("2");
}, 3000);

console.log("3");  // -> immediate


// 2 -> 3 sec later


// api calls 
// database operations
// setTimeout
// file read/write
// fetch the data 
// user events 


// api calls 
/*  
        Your Website
            |
          api call
            |
          Server
            |
        process the request
            |
        Response
           |
        your Website

*/

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))


/*
    api methods 

    post -> create new data
    get -> read data
    put -> update data
    delete -> remove data
    patch -> update data partially
*/

// function SendData() {


//     let name = document.getElementById("productName").value;
//     let productId = document.getElementById("productId").value;
//     let price = document.getElementById("productPrice").value;

//     fetch("https://jsonplaceholder.typicode.com/todos/1", {

//         method: "POST",

//         headers: {
//             "Content-Type": "application/json"
//         },

//         body: JSON.stringify({
//             name: name,
//             productId: productId,
//             price: price
//         })
//     })


//         // convert the response to json
//         .then(response => response.json())


//         // print the response
//         .then(data => {
//             console.log("Api Response: ", data), 
//             alert("Data Sent Successfully") 
//         })

//         // Handle any errors
//         .catch(error => {
//             console.error("Error sending data:", error);
//             alert("Error sending data. Please try again.");
//         });
// }

