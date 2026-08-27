function addUser(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let age = document.getElementById("age").value;

    fetch("https://node5.onrender.com/user/user", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({

            name: name,
            email: email,
            password: password,
            age: Number(age)

        })

    })

    .then(response => response.json())

    .then(data => {

        console.log(data);

        document.getElementById("message").innerHTML =
            "User added successfully!";

        console.log("Response:", data);

    })

    .catch(error => {

        console.log(error);

        document.getElementById("message").innerHTML =
            "Error adding user!";

    });
}