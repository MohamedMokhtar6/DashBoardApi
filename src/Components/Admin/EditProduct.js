import React from "react";
import { Button, Row } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import EditProductHook from "../../Hooks/EditProductHook";

function EditProduct() {
  const [
    res,
    UpdateProduct,
    brands,
    brandId,
    handleChangeBrandId,
    categories,
    catId,
    handleChangeCatId,
    onImageChange,
    poster,
    change,
    handleChangedescription,
    description,
    handleChangeQuantity,
    quantity,
    handleChangeRate,
    rate,
    handleChangePrice,
    price,
    handleChangename,
    name,
  ] = EditProductHook();
  return (
    <>
      <Row className="m-3 flex-column align-items-center ">
        <div className=" fw-bold fs-4 my-3 text-center"> Edit Product</div>
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
              src={change ? poster : "data:image/png;base64," + poster}
              alt="product"
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
            value={catId}
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
            name="brand"
            id="brand"
            className="userInput my-3 px-2 "
            onChange={handleChangeBrandId}
            value={brandId}
          >
            <option value="0">select Brand</option>
            {brands
              ? brands.map((item) => {
                  return (
                    <option key={item.id} value={item.id}>
                      {item.name}
                    </option>
                  );
                })
              : null}
          </select>
        </div>
        <Button
          variant="dark"
          className="fit m-3 main-color"
          onClick={UpdateProduct}
        >
          Save
        </Button>
        {res && <h4 className="text-center text-success">Product Edited</h4>}
        <ToastContainer />
      </Row>
    </>
  );
}

export default EditProduct;
