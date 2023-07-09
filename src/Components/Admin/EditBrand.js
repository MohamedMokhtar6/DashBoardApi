import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import notify from "../util/notify;";
function EditBrand() {
  const { id } = useParams();
  const [res, setRes] = useState(false);
  const [categories, setCategories] = useState(null);
  const [name, setName] = useState("");
  const [catId, setCatId] = useState(0);
  const [poster, setPoster] = useState(null);
  const [change, setChange] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleChange = (event) => {
    event.persist();
    setName(event.target.value);
  };
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setPoster(URL.createObjectURL(event.target.files[0]));
      setSelectedFile(event.target.files[0]);
      console.log(selectedFile);
      setChange(true);
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
  const UpdateBrand = async () => {
    if (name === "" || selectedFile === null || catId === 0) {
      notify("Complete Data", "warn");
      return;
    }
    await axios
      .put(`https://localhost:7152/api/Brand?id=${id}`, formData)
      .then((response) => {
        setRes(true);
        console.log(response.data);

        setInterval(() => {
          window.location.replace("/allBrands");
        }, 1000);
      })
      .catch(function (error) {
        if (error.response) {
          console.log(error.response.data);
          notify("Category not found", "warn");
        }
      });
  };
  function dataURLtoFile(dataurl, filename) {
    var arr = dataurl.split(","),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
  }

  useEffect(() => {
    axios
      .get(`https://localhost:7152/api/Brand/id?id=${id}`)
      .then((response) => {
        setName(response.data.name);
        setCatId(response.data.categoryId);
        setPoster(response.data.poster);
        setSelectedFile(
          dataURLtoFile(
            `data:image/png;base64,${response.data.poster}`,
            "brand.png"
          )
        );
      });
    axios.get("https://localhost:7152/api/Categorys").then((response) => {
      setCategories(response.data);
    });
  }, []);

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
        <p className="text-center">Brand Image</p>
        <div className="w-50 text-center">
          <label htmlFor="upload-photo">
            <img
              src={change ? poster : "data:image/png;base64," + poster}
              alt="brand"
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
          onClick={UpdateBrand}
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

export default EditBrand;
