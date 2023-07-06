// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
// import { getAdmins, getUsers } from "../Redux/Actions/userAction";
// const ViewAllUserHook = () => {
//   const dispatch = useDispatch();
//   const getAllUser = async () => {
//     await dispatch(getUsers());
//   };
//   const getAllAdmins = async () => {
//     await dispatch(getAdmins());
//   };

//   useEffect(() => {
//     getAllUser();
//     getAllAdmins();
//   }, []);

//   const allUser = useSelector((state) => state.UserReducer.allUsers);
//   const alladmins = useSelector((state) => state.UserReducer.allAdmins);

//   let users = [];
//   let admins = [];
//   try {
//     if (allUser && alladmins) {
//       users = allUser;
//       admins = alladmins;
//       // users = users.concat(admin);

//       //   console.log(users.status);
//       //   console.log(users.responseObject);
//     } else {
//       users = [];
//       admins = [];
//     }
//   } catch (error) {
//     console.log(error);
//   }
//   return [users.responseObject, admins.responseObject];
// };

// export default ViewAllUserHook;
