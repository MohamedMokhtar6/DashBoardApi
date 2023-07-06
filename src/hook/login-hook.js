// import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import notify from "../Hooks/useNotification";
// import { loginAdmin, loginUser } from "../Redux/Actions/authAction";
// import { async } from "q";
// const LoginHook = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const res = useSelector((state) => state.authReducer.loginUser);
//   // const resAdmin = useSelector((state) => state.authReducer.loginAdmin);

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(true);
//   const [isPress, setIsPress] = useState(false);
//   const onChangeEmail = (e) => {
//     setEmail(e.target.value);
//   };

//   const onChangePassword = (e) => {
//     setPassword(e.target.value);
//   };

//   const validationValues = () => {
//     if (email === "") {
//       notify("enter user name", "error");
//       return;
//     }

//     if (!password) {
//       notify("Enter Password", "error");
//       return;
//     }
//   };

//   const onSubmit = async () => {
//     console.log("from submit");
//     validationValues();
//     console.log(email);
//     console.log(password);
//     setIsPress(true);
//     setLoading(true);
//     await dispatch(
//       loginUser({
//         email,
//         password,
//       })
//     );
//     // await dispatch(
//     //   loginAdmin({
//     //     email,
//     //     password,
//     //   })
//     // );
//     setLoading(false);
//     setIsPress(false);
//   };

//   useEffect(() => {
//     if (loading === false) {
//       if (res) {
//         console.log(res);
//         console.log(email);

//         if (res.data.token) {
//           localStorage.setItem("token", res.data.token);
//           localStorage.setItem("email", email);
//           localStorage.setItem("user", JSON.stringify(res.data.data));
//           notify("Login Succeeded", "success");
//           setTimeout(() => {
//             window.location.href = "/";
//           }, 1500);
//         } else {
//           localStorage.removeItem("token");
//           localStorage.removeItem("email");
//           localStorage.removeItem("user");
//         }

//         if (
//           res.data.title == "Unauthorized" ||
//           res.status == 401 ||
//           res.status == 404
//         ) {
//           localStorage.removeItem("token");
//           localStorage.removeItem("user");
//           localStorage.removeItem("email");
//           notify("There was problem in Email or Password", "error");
//         }
//         setLoading(true);
//       }
//     }
//   }, [loading]);

//   return [
//     email,
//     password,
//     loading,
//     onChangeEmail,
//     onChangePassword,
//     onSubmit,
//     isPress,
//   ];
// };

// export default LoginHook;
