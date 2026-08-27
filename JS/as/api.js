function SendData() {

    let name = document.getElementById("productName").value;
    let productId = document.getElementById("productId").value;
    let price = document.getElementById("productPrice").value;

    fetch("http://localhost:3000/product/add", {

        method: "POST",

        headers: {
            "Content-Type": "application/json",
        },

        body: JSON.stringify({
            name: name,
            productId: productId,
            price: price
        })
    })

    .then(response => response.json().then(data => ({ ok: response.ok, data })))

    .then(result => {
        console.log("API Response:", result.data);

        if (!result.ok) {
            alert("Failed: " + result.data.message);
            return;
        }

        alert("Data Sent Successfully");
    })

    .catch(error => {
        console.error("Error sending data:", error);
        alert("Error sending data. Please try again.");
    });
}