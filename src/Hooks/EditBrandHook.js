import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import notify from "../Components/util/notify;";

function EditBrandHook() {
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
  return [
    res,
    UpdateBrand,
    onImageChange,
    poster,
    change,
    categories,
    catId,
    handleChange,
    handleChangeId,
    name,
  ];
}

export default EditBrandHook;
