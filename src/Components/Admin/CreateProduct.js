import React from "react";
import { Button, Row } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import CreateProductHook from "../../Hooks/CreateProductHook";

function CreateProduct() {
  const [
    name,
    handleChangename,
    price,
    handleChangePrice,
    rate,
    handleChangeRate,
    quantity,
    handleChangeQuantity,
    description,
    handleChangedescription,
    poster,
    onImageChange,
    handleChangeCatId,
    brands,
    createProduct,
    res,
    categories,
    handleChangeBrandId,
    clicked,
  ] = CreateProductHook();

  return (
    <>
      <Row className="m-3 flex-column align-items-center ">
        <div className=" fw-bold fs-4 my-3 text-center">Add New Product</div>
        <div className="d-flex justify-content-between p-0">
          <input
            placeholder="Product Name"
            type={"text"}
            className="fit userInput my-2 "
            value={name}
            onChange={handleChangename}
          />
          <input
            placeholder="Product Price"
            type={"number"}
            className="fit userInput my-2 "
            value={price}
            onChange={handleChangePrice}
          />
        </div>
        <div className="d-flex justify-content-between p-0">
          <input
            placeholder="Product Rate"
            type={"number"}
            className="fit userInput my-2 "
            value={rate}
            onChange={handleChangeRate}
          />
          <input
            placeholder="Product Quantity"
            type="number"
            className="fit userInput my-2 "
            value={quantity}
            onChange={handleChangeQuantity}
          />
        </div>
        <textarea
          placeholder="Product Description"
          type="text"
          rows={5}
          className="fit  my-2  w-100 "
          value={description}
          onChange={handleChangedescription}
          style={{ resize: "none", borderRadius: "20px", padding: "10px" }}
        />
        <p className="text-center">Product Image</p>
        <div className="w-50 text-center">
          <label htmlFor="upload-photo">
            <img
              src={poster}
              alt="fzx"
              style={{
                cursor: "pointer",
                maxWidth: "100%",
                width: "8rem",
                height: "8rem",
              }}
            />
          </label>
          <input
            type="file"
            name="photo"
            onChange={onImageChange}
            id="upload-photo"
          />
        </div>
        <div className="d-flex justify-content-between p-0">
          <select
            name="category"
            id="cat"
            className="userInput my-3 px-2 "
            onChange={handleChangeCatId}
          >
            <option value="0">select Category</option>
            {categories
              ? categories.map((item) => {
                  return (
                    <option key={item.id} value={item.id}>
                      {item.name}
                    </option>
                  );
                })
              : null}
          </select>
          <select
            name="category"
            id="cat"
            className="userInput my-3 px-2 "
            onChange={handleChangeBrandId}
          >
            <option value="0">select Brand</option>
            {brands.length > 0 &&
              brands.map((brand) => (
                <option key={brand.id} value={brand.id}>
                  {brand.name}
                </option>
              ))}
          </select>
        </div>
        <Button
          variant="dark"
          className={
            clicked ? "fit m-3 main-color disabled" : "fit m-3 main-color"
          }
          onClick={createProduct}
        >
          Save
        </Button>
        {res && <h4 className="text-center text-success">Product added</h4>}
        <ToastContainer />
      </Row>
    </>
  );
}

export default CreateProduct;
