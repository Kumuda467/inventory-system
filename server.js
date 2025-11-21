import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

let products = [
  { id: 1, name: "Laptop", stock: 15 },
  { id: 2, name: "Mouse", stock: 40 }
];

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.post("/api/products", (req, res) => {
  const item = { id: Date.now(), ...req.body };
  products.push(item);
  res.json(item);
});

app.listen(5000, () => console.log("Backend running on port 5000"));
