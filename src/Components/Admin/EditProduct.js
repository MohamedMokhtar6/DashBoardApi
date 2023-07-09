import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Row } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import notify from "../util/notify;";
import { useParams } from "react-router-dom";
function EditProduct() {
  const { id } = useParams();
  const [change, setChange] = useState(false);
  const [categories, setCategories] = useState(null);
  const [brands, setBrands] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [rate, setRate] = useState("");
  const [quantity, setQuantity] = useState("");
  const [catId, setCatId] = useState(0);
  const [brandId, setBrandId] = useState(0);
  const [poster, setPoster] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [res, setRes] = useState(false);

  const handleChangename = (event) => {
    event.persist();
    setName(event.target.value);
  };
  const handleChangePrice = (event) => {
    event.persist();
    setPrice(event.target.value);
  };
  const handleChangedescription = (event) => {
    event.persist();
    setDescription(event.target.value);
  };
  const handleChangeRate = (event) => {
    event.persist();
    setRate(event.target.value);
  };
  const handleChangeQuantity = (event) => {
    event.persist();
    setQuantity(event.target.value);
  };

  const handleChangeCatId = (event) => {
    event.persist();
    setCatId(event.target.value);
  };
  const handleChangeBrandId = (event) => {
    event.persist();
    setBrandId(event.target.value);
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
  formData.append("Name", name);
  formData.append("Description", description);
  formData.append("Price", price);
  formData.append("Rate", rate);
  formData.append("quntity", quantity);
  formData.append("poster", selectedFile);
  formData.append("CategoryId", catId);
  formData.append("BrandId", brandId);
  const UodateProduct = async () => {
    if (
      name === "" ||
      selectedFile === null ||
      catId === 0 ||
      brandId === 0 ||
      description === "" ||
      price === "" ||
      rate === "" ||
      quantity === ""
    ) {
      notify("Complete Data", "warn");
      return;
    }
    if (rate < 1 || rate > 5) {
      notify("Rate Must be in (1:5)", "warn");
      return;
    }
    if (quantity <= 0) {
      notify("quantity Must be Greater Than 0", "warn");
      return;
    }

    await axios
      .put(`https://localhost:7152/api/Products/id?id=${id}`, formData)
      .then((response) => {
        setRes(true);
        console.log(response.data);

        setInterval(() => {
          window.location.replace("/allProducts");
        }, 1000);
      })
      .catch(function (error) {
        if (error.response) {
          console.log(error.response.data);
          notify(error.response.data, "error");
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
      .get(`https://localhost:7152/api/Products/id?id=${id}`)
      .then((response) => {
        console.log(response.data);
        setName(response.data.name);
        setPoster(response.data.poster);
        setPrice(response.data.price);
        setQuantity(response.data.quntity);
        setRate(response.data.rate);
        setCatId(response.data.categoryId);
        setDescription(response.data.description);
        setBrandId(response.data.brandId);
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
    axios.get("https://localhost:7152/api/Brand").then((response) => {
      setBrands(response.data);
    });
  }, []);

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
          onClick={UodateProduct}
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
