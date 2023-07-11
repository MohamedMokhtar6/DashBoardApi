import axios from "axios";
import { useEffect, useState } from "react";
import notify from "../Components/util/notify;";
import { useParams } from "react-router-dom";

function EditProductHook() {
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
  const UpdateProduct = async () => {
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
  return [
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
  ];
}

export default EditProductHook;
