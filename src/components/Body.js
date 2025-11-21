// import React,{useEffect} from 'react';
// import { createBrowserRouter, useNavigate } from "react-router-dom";
// import Browser from './Browser'
// import { useDispatch } from 'react-redux';
// import {auth} from '../utils/Firebase';
// import { onAuthStateChanged } from "firebase/auth";
// import { addUser,removeUser } from '../utils/userSlice';
// import { RouterProvider } from "react-router-dom";
// import Login from './Login';
// const Body = () => {
//       const dispatch=useDispatch();
//     const navigate=useNavigate();
//     const appRouter=createBrowserRouter([
//           {
//               path:"/",
//               element:<Login/>
//           },{
//               path:"/Browser",
//               element:<Browser/>
//           },
//          ]);
        
//     useEffect(()=>{
// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     const {uid,email,displayName}=user
//    dispatch(addUser({uid:uid,email:email,displayName:displayName}));
//    navigate("/browser");
//   } else {
//    dispatch(removeUser());
//    navigate("/");
//   }
// });
//     },[]);
//     return (
//           <div>
//            <RouterProvider router={appRouter}/>
//           </div>
//         );
// };

  


// export default Body;
// import React, { useEffect } from 'react';
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Browser from './Browser';
// import Login from './Login';
// import { useDispatch } from 'react-redux';
// import { auth } from '../utils/Firebase';
// import { onAuthStateChanged } from "firebase/auth";
// import { addUser, removeUser } from '../utils/userSlice';

// const Body = () => {

//   const dispatch = useDispatch();

//   // Create Router
//   const appRouter = createBrowserRouter([
//     {
//       path: "/",
//       element: <Login />
//     },
//     {
//       path: "/browser",
//       element: <Browser />
//     }
//   ]);

//   // Auth listener
//  useEffect(() => {
//   onAuthStateChanged(auth, async (user) => {
//     if (user) {
//       await user.reload();   // ⬅ VERY IMPORTANT

//       const refreshedUser = auth.currentUser;

//       const { uid, email, displayName, photoURL } = refreshedUser;

//       dispatch(addUser({ uid:uid, email:email, displayName:displayName, photoURL:photoURL }));
     
//     } else {
//       dispatch(removeUser());
      
//     }
//   });
// }, []);
//   return (
//     <div>
//       <RouterProvider router={appRouter} />
//     </div>
//   );
// };

// export default Body;

import { createBrowserRouter } from "react-router-dom";
import Browser from "./Browser";
import Login from "./login";
import { RouterProvider } from "react-router-dom";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browser",
      element: <Browser />,
    },
  ]);

  return (
    <div className="body overflow-x-hidden overflow-y-hidden">
      <RouterProvider router={appRouter} />
    </div>
  );
};
export default Body;