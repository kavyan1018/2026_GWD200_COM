const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());              // lets Live Server (port 5500) call this API
app.use(express.json());      // parses JSON request bodies

// temporary storage — resets when server restarts
let products = [];
let nextId = 1;

// CREATE
app.post("/product/add", (req, res) => {
    const { name, productId, price } = req.body;

    if (!name || !productId || !price) {
        return res.status(400).json({ message: "name, productId and price are required" });
    }

    const product = { id: nextId++, name, productId, price };
    products.push(product);

    res.status(201).json({ message: "Product added", product });
});

// READ ALL
app.get("/product", (req, res) => {
    res.json(products);
});

// READ ONE
app.get("/product/:id", (req, res) => {
    const product = products.find(p => p.id === Number(req.params.id));

    if (!product) {
        return res.status(404).json({ message: "Product not found" });
    }

    res.json(product);
});

// UPDATE
app.put("/product/:id", (req, res) => {
    const product = products.find(p => p.id === Number(req.params.id));

    if (!product) {
        return res.status(404).json({ message: "Product not found" });
    }

    const { name, productId, price } = req.body;

    if (name) product.name = name;
    if (productId) product.productId = productId;
    if (price) product.price = price;

    res.json({ message: "Product updated", product });
});

// DELETE
app.delete("/product/:id", (req, res) => {
    const index = products.findIndex(p => p.id === Number(req.params.id));

    if (index === -1) {
        return res.status(404).json({ message: "Product not found" });
    }

    const removed = products.splice(index, 1)[0];
    res.json({ message: "Product deleted", product: removed });
});

app.listen(3000, () => {
    console.log("API running on http://localhost:3000");
});