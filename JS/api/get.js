function getData(){

    fetch("https://node5.onrender.com/user/user", {
        method : "GET",
    })

    .then(response => response.json())

    .then(data => {

        console.log("Get Responce !", data);
    })

    .catch(error => {
        console.log("Get Error !", error);
    })

}