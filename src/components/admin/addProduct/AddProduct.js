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

  const handleInputChange = (e) => {};
  const handleImageChange = (e) => {};

  return (
    <div className={styles.product}>
      <h1>Add New Product</h1>
      <Card cardClass={styles.card}>
        <form onSubmit={handleInputChange}>
          <label htmlFor="">Product name:</label>
          <input
            required
            type="text"
            name="name"
            id=""
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
              id=""
              placeholder="Product Image"
              accept="image/*"
              value={product.imgURL}
              onChange={(e) => handleImageChange(e)}
            />
            <input required type="text" name="imageURL" disabled />
          </Card>
          <label htmlFor="">Product price:</label>
          <input
            required
            type="number"
            name="price"
            id=""
            placeholder="Product price"
            value={product.price}
            onChange={(e) => handleInputChange(e)}
          />
          <label htmlFor="">Product category:</label>
          <select required name="category" id="" value={product.category} onChange={(e) => handleInputChange(e)}>
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
            id=""
            placeholder="Product brand"
            value={product.brand}
            onChange={(e) => handleInputChange(e)}
          />
          <label htmlFor="">Product Description:</label>
          <textarea
            required
            name="desc"
            id=""
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
