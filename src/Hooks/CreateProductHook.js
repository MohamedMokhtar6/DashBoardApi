import { useEffect, useState } from "react";
import notify from "../Components/util/notify;";
import axios from "axios";
import avatar from "../Images/add.png";

const baseURL = "https://localhost:7152/api/Products";
const brandURL = "https://localhost:7152/api/Brand";
const categoryUrl = "https://localhost:7152/api/Categorys";
function CreateProductHook() {
  const [categories, setCategories] = useState(null);
  const [brands, setBrands] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [rate, setRate] = useState("");
  const [quantity, setQuantity] = useState("");
  const [catId, setCatId] = useState(0);
  const [brandId, setBrandId] = useState(0);
  const [poster, setPoster] = useState(avatar);
  const [selectedFile, setSelectedFile] = useState(null);
  const [res, setRes] = useState(false);
  const [clicked, setClicked] = useState(false);

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

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setPoster(URL.createObjectURL(event.target.files[0]));
      setSelectedFile(event.target.files[0]);
    }
  };
  const handleChangeCatId = (event) => {
    event.persist();
    setCatId(event.target.value);
  };
  const handleChangeBrandId = (event) => {
    event.persist();
    setBrandId(event.target.value);
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
  const createProduct = async () => {
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
    setClicked(true);
    await axios
      .post(baseURL, formData)
      .then((response) => {
        setRes(true);
        console.log(response.data);

        setInterval(() => {
          setClicked(false);
          // eslint-disable-next-line no-restricted-globals
          location.reload();
        }, 1500);
      })
      .catch(function (error) {
        if (error.response) {
          console.log(error.response.data);
          notify(error.response.data, "error");
          setClicked(false);
        }
      });
  };
  useEffect(() => {
    axios.get(categoryUrl).then((response) => {
      setCategories(response.data);
    });
    axios.get(brandURL).then((response) => {
      setBrands(response.data);
    });
  }, []);
  return [
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
  ];
}

export default CreateProductHook;
