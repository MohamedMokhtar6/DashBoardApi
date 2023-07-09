import React from "react";
import { Button, Row } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import CreateBrandHook from "../../Hooks/CreateBrandHook";

function CreateBrand() {
  const [
    categories,
    name,
    poster,
    res,
    handleChange,
    handleChangeId,
    onImageChange,
    createBrand,
  ] = CreateBrandHook();
  return (
    <>
      <Row className="m-3 flex-column align-items-center ">
        <div className=" fw-bold fs-4 my-3 text-center">Add New Brand</div>
        <input
          placeholder="Brand Name"
          type={"text"}
          className="fit userInput my-2 "
          value={name}
          onChange={handleChange}
        />

        <select
          name="category"
          id="cat"
          className="userInput my-3 px-2 "
          onChange={handleChangeId}
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
        <p className="text-center">Brand Image</p>
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

        <Button
          onClick={createBrand}
          variant="dark"
          className="fit m-3 main-color"
        >
          Save
        </Button>
        {res && <h4 className="text-center text-success">Brand added</h4>}
        <ToastContainer />
      </Row>
    </>
  );
}

export default CreateBrand;
