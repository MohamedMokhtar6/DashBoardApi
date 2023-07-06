// import React, { useState } from "react";
// import img from "../../Images/avatar-06.png";
// import { Button, Row, Spinner } from "react-bootstrap";
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
// import { createUser } from "../../Redux/Actions/userAction";
// import { ToastContainer } from "react-toastify";
// import notify from "../../Hooks/useNotification";

// const CreateUserHook = () => {
//   const [name, setName] = useState("");
//   const [password, setPassword] = useState("");
//   const [email, setEmail] = useState("");
//   const [role, setRole] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [gender, setGender] = useState("");
//   const [loading, setLoading] = useState(true);
//   const [isPress, setIsPress] = useState(false);

//   const res = useSelector((state) => state.UserReducer.user);

//   const dispatch = useDispatch();

//   const onSubmit = async (event) => {
//     event.preventDefault();
//     if (phoneNumber.length <= 10) {
//       notify("there was problem in phone number", "warn");
//       return;
//     }

//     if (
//       name === "" ||
//       password === "" ||
//       email === "" ||
//       role === "" ||
//       phoneNumber === "" ||
//       gender === ""
//     ) {
//       notify("please complet data", "warn");
//       return;
//     }
//     setIsPress(true);
//     setLoading(true);
//     await dispatch(
//       createUser({
//         password: password,
//         email: email,
//         userName: name,
//         phoneNumber: phoneNumber,
//         gender: gender,
//         roleId: role,
//       })
//     );
//     console.log(gender);
//     console.log(role);
//     setLoading(false);
//   };
//   useEffect(() => {
//     if (loading === false) {
//       setLoading(true);
//       setIsPress(false);
//       console.log(res);
//       if (res.data.status) {
//         setName("");
//         setPassword("");
//         setEmail("");
//         setRole(null);
//         setPhoneNumber("");
//         setGender("");
//         console.log("تم الانتهاء");
//       }
//       if (res.data.status) {
//         notify("user has been Added successfully", "success");
//       } else {
//         notify(res.data.message, "warn");
//       }
//     }
//   }, [loading]);
// };

// export default CreateUserHook;
