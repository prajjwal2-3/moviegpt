import { adduser,removeuser } from "../utils/Userslice";
import {  useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { auth } from '../utils/Firebase';
import { logo } from "../utils/constants";
const Header = ()=>{
    const dispatch = useDispatch();
  const navigate =useNavigate();
 
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
     if (user) {
       const {uid,email,displayName} = user;
      dispatch(adduser({uid:uid, email:email, displayName:displayName}));
      console.log("action dispatched")
     navigate("/browse");
     } else {
       dispatch(removeuser());
       navigate("/login")
     }
   });
   },[])
    return(
    <div className="header absolute text-white">
       jebihjnoiht
    </div>
    )
}
export default Header;