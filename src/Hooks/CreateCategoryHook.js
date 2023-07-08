import { useState } from "react";
import notify from "../Components/util/notify;";
import axios from "axios";
const baseURL = "https://localhost:7152/api/Categorys";
function CreateCategoryHook() {
  const [name, setName] = useState("");
  const [res, setRes] = useState(false);
  const category = { name: name };
  const handleChange = (event) => {
    event.persist();
    setName(event.target.value);
  };

  const createCategory = async () => {
    if (name === "") {
      notify("Enter Category Name", "error");
      return;
    }
    await axios.post(baseURL, category).then((response) => {
      setRes(true);
      console.log(response.data);
      setInterval(() => {
        window.location.reload();
      }, 1000);
    });
  };
  return [name, handleChange, createCategory, res];
}

export default CreateCategoryHook;
