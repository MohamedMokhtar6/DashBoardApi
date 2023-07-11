import axios from "axios";
import notify from "../Components/util/notify;";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function EditCategoryHook() {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [res, setRes] = useState(false);

  const handleChange = (event) => {
    event.persist();
    setName(event.target.value);
  };

  const UpdateCategory = async () => {
    if (name === "") {
      notify("Enter Category Name", "error");
      return;
    }
    await axios
      .put(`https://localhost:7152/api/Categorys?id=${id}`, { name: name })
      .then((response) => {
        setRes(true);
        setInterval(() => {
          window.location.replace("/allCategories");
        }, 1000);
      });
  };

  useEffect(() => {
    axios
      .get(`https://localhost:7152/api/Categorys/id?id=${id}`)
      .then((response) => {
        setName(response.data.name);
      });
  }, []);
  return [res, UpdateCategory, handleChange, name];
}

export default EditCategoryHook;
