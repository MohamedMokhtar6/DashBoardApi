import React, { useEffect, useState } from "react";
import { Button, Row } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import notify from "../util/notify;";
import axios from "axios";
import avatar from "../../Images/add.png";
const baseURL = "https://localhost:7152/api/Brand";
const baseURL2 = "https://localhost:7152/api/Categorys";

function CreateBrand() {
  const [categories, setCategories] = useState(null);
  const [name, setName] = useState("");
  const [catId, setCatId] = useState(0);
  const [poster, setPoster] = useState(avatar);
  const [selectedFile, setSelectedFile] = useState(null);
  const [res, setRes] = useState(false);
  const handleChange = (event) => {
    event.persist();
    setName(event.target.value);
  };

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setPoster(URL.createObjectURL(event.target.files[0]));
      setSelectedFile(event.target.files[0]);
    }
  };
  const handleChangeId = (event) => {
    event.persist();
    setCatId(event.target.value);
  };
  const formData = new FormData();
  formData.append("name", name);
  formData.append("poster", selectedFile);
  formData.append("CategoryId", catId);
  const createBrand = async () => {
    if (name === "" || selectedFile === null || catId === 0) {
      notify("Complete Data", "warn");
      return;
    }
    await axios
      .post(baseURL, formData)
      .then((response) => {
        setRes(true);
        console.log(response.data);

        setInterval(() => {
          // eslint-disable-next-line no-restricted-globals
          location.reload();
        }, 1000);
      })
      .catch(function (error) {
        if (error.response) {
          console.log(error.response.data);
          notify("Category not found", "warn");
        }
      });
  };
  useEffect(() => {
    axios.get(baseURL2).then((response) => {
      setCategories(response.data);
    });
  }, []);
  if (categories) {
    console.log(categories);
  }
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
              style={{ cursor: "pointer", maxWidth: "100%" }}
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
