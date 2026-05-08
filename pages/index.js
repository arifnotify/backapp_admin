import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const addProduct = async () => {
    await fetch("https://backapp-pkmg.onrender.com/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, price: Number(price) }),
    });

    alert("Product Added");
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Add Product</h1>

      <input
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />

      <br /><br />

      <input
        placeholder="Price"
        onChange={(e) => setPrice(e.target.value)}
      />

      <br /><br />

      <button onClick={addProduct}>Add</button>
    </div>
  );
}