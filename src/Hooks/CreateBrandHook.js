import { useEffect, useState } from "react";
import notify from "../Components/util/notify;";
import axios from "axios";
import avatar from "../Images/add.png";
const baseURL = "https://localhost:7152/api/Brand";
const baseURL2 = "https://localhost:7152/api/Categorys";
function CreateBrandHook() {
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
  return [
    categories,
    name,
    poster,
    res,
    handleChange,
    handleChangeId,
    onImageChange,
    createBrand,
  ];
}

export default CreateBrandHook;
