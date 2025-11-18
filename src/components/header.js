

// import { useState, useEffect } from "react";
// import { auth } from "../utils/Firebase";
// import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { onAuthStateChanged, signOut } from "firebase/auth";
// import { addUser, removeUser } from "../utils/userSlice";
// import {Logo} from "../utils/constants"
// const Header = () => {
//   const [open, setOpen] = useState(false);
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   // get user from redux
//   const user = useSelector((store) => store.user);

//   const handleSignOut = async () => {
//     try {
//       await signOut(auth);
//       // update redux immediately for smoother UX
//       dispatch(removeUser());
//       setOpen(false);
//       navigate("/");
//     } catch (err) {
//       console.error("Sign-out error:", err);
//       // you may set an error state here to show to user
//     }
//   };

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
//       if (firebaseUser) {
//         const { uid, email, displayName, photoURL } = firebaseUser;
//         dispatch(
//           addUser({
//             uid,
//             email,
//             displayName,
//             photoURL,
//           })
//         );
//         // DO NOT navigate here — Header will be mounted inside /browser
//       } else {
//         dispatch(removeUser());
//         navigate("/");
//       }
//     });

//     return () => unsubscribe();
//   }, [dispatch, navigate]);

//   return (
//     <div className="w-screen px-8 py-4 bg-gradient-to-b from-black/80 to-transparent flex justify-between items-center">
//       {/* Logo */}
//       <img
//         src={Logo}
//         alt="Netflix Logo"
//         className="h-12"
//       />

//       {/* Show avatar only if logged in */}
//       {user?.uid && (
//         <div className="relative">
//           <img
//             src={
//                 user.photoURL ||
//               "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
//             }
//             alt={user.displayName ? `${user.displayName} avatar` : "User avatar"}
//             className="h-10 w-10 rounded cursor-pointer"
//             onClick={() => setOpen((s) => !s)}
//           />

//           {/* Dropdown */}
//           {open && (
//             <div className="absolute right-0 mt-3 bg-black/90 text-white w-36 rounded shadow-lg py-2">
//               <button
//                 onClick={handleSignOut}
//                 className="block w-full text-left px-4 py-2 hover:bg-gray-700"
//               >
//                 Sign Out
//               </button>
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Header;

import { useState, useEffect } from "react";
import { auth } from "../utils/Firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { Logo } from "../utils/constants";

const Header = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // get user from redux
  const user = useSelector((store) => store.user);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      dispatch(removeUser());
      setOpen(false);
      navigate("/");
    } catch (err) {
      console.error("Sign-out error:", err);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        const { uid, email, displayName, photoURL } = firebaseUser;
        dispatch(
          addUser({
            uid,
            email,
            displayName,
            photoURL,
          })
        );
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, [dispatch, navigate]);

  return (
    <div
      className="
        absolute top-0 left-0 w-full 
        px-8 py-4 
        z-50 
        bg-gradient-to-b from-black/70 to-transparent 
        flex justify-between items-center
      "
    >
      {/* Logo */}
      <img
        src={Logo}
        alt="Netflix Logo"
        className="h-12"
      />

      {/* Avatar only if logged in */}
      {user?.uid && (
        <div className="relative">
          <img
            src={
              user.photoURL ||
              "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            }
            alt="User avatar"
            className="h-10 w-10 rounded cursor-pointer"
            onClick={() => setOpen((s) => !s)}
          />

          {/* Dropdown */}
          {open && (
            <div className="absolute right-0 mt-3 bg-black/90 text-white w-36 rounded shadow-lg py-2">
              <button
                onClick={handleSignOut}
                className="block w-full text-left px-4 py-2 hover:bg-gray-700"
              >
                Sign Out
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;

