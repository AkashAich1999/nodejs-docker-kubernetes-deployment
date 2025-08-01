const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Hello from Node.js App Running on Kubernetes!")
});

app.listen(PORT, () => {
    console.log(`Server is Running on Port ${PORT}`);
});