import { useState } from "react";
import axios from "axios";
import { FormEvent, ChangeEvent } from "react";
import type { Product } from "../interfaces/";
import { useRouter } from "next/router";

function AddProduct() {
  const { push } = useRouter();
  const [item, setItem] = useState<Product>({
    name: "",
    price: 0.0,
    description: "",
    createdAt: new Date().getTime().toString(),
  });
  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setItem({ ...item, [target.name]: target.value });
  };
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await axios.post("/api/products", item);
    alert(`El articulo: ${item.name} fue guardado`);
    push("/");
  };
  return (
    <div className="w-full max-w-xs">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-400 shadow-md rounded px-8  pt-6 pb-8"
      >
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          onChange={handleChange}
          className="border shadow rounded px-3 py-2"
        />
        <label htmlFor="Price">Price</label>
        <input
          type="number"
          name="price"
          id="price"
          onChange={handleChange}
          className="border shadow rounded px-3 my-2"
        />
        <label htmlFor="Description">Description</label>
        <input
          type="text"
          name="description"
          id="description"
          onChange={handleChange}
          className="border shadow rounded px-3 my-2"
        />
        <button className="bg-red-700 hover:bg-red-800 py-2 px-4 rounded focus:outline-none focus:shadow-outline text-white font-bold">
          Save
        </button>
      </form>
    </div>
  );
}

export default AddProduct;
