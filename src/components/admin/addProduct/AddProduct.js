import React, { useState } from "react";
import styles from "./AddProduct.module.scss";
import Card from "../../card/Card";

const categories = [
  { id: 1, name: "Laptop" },
  { id: 2, name: "Electronics" },
  { id: 3, name: "Fashion" },
  { id: 4, name: "Phone" },
];

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: "",
    imgURL: "",
    price: null,
    category: "",
    brand: "",
    desc: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
    console.log("name", [name]);
    console.log("value", value);
  };
  const handleImageChange = (e) => {};

  const addProduct = (e) => {
    e.preventDefault();
    console.log(product);
  };

  return (
    <div className={styles.product}>
      <h1>Add New Product</h1>
      <Card cardClass={styles.card}>
        <form onSubmit={addProduct}>
          <label htmlFor="">Product name:</label>
          <input
            required
            type="text"
            name="name"
            placeholder="Product name"
            value={product.name}
            onChange={(e) => handleInputChange(e)}
          />
          <label htmlFor="">Product Image:</label>
          <Card cardClass={styles.group}>
            <div className={styles.progress}>
              <div className={styles["progress-bar"]} style={{ width: "50%" }}>
                Uploading 50%
              </div>
            </div>
            <input
              type="file"
              name="image"
              placeholder="Product Image"
              accept="image/*"
              value={product.imgURL}
              onChange={(e) => handleImageChange(e)}
            />
            <input
              // required
              disabled
              type="text"
              name="imageURL"
              placeholder="Image URL"
              value={product.imgURL}
            />
          </Card>
          <label htmlFor="">Product price:</label>
          <input
            required
            type="number"
            name="price"
            placeholder="Product price"
            value={product.price}
            onChange={(e) => handleInputChange(e)}
          />
          <label htmlFor="">Product category:</label>
          <select required name="category" value={product.category} onChange={(e) => handleInputChange(e)}>
            <option value="" disabled>
              -- Choose Product Category --
            </option>
            {categories.map((category, idx) => {
              return (
                <option key={category.id} value={category.name}>
                  {category.name}
                </option>
              );
            })}
          </select>
          <label htmlFor="">Product company/brand:</label>
          <input
            required
            type="text"
            name="brand"
            placeholder="Product brand"
            value={product.brand}
            onChange={(e) => handleInputChange(e)}
          />
          <label htmlFor="">Product Description:</label>
          <textarea
            required
            name="desc"
            cols="30"
            rows="10"
            value={product.desc}
            onChange={(e) => handleInputChange(e)}
          ></textarea>
          <button className="--btn --btn-primary">Add</button>
        </form>
      </Card>
    </div>
  );
};

export default AddProduct;
