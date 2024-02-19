import { logo } from "../utils/constants";
import { cover } from "../utils/constants";
import { useRef, useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import Validate from "../utils/Validate";
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/Firebase";
import { adduser,removeuser } from "../utils/Userslice";
import {  useDispatch } from "react-redux";
const Login1 = () => {
  const dispatch = useDispatch();
  const navigate =useNavigate();
  const [islogin, setislogin] = useState(false);
  const [err,seterr]  = useState(null)
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
     if (user) {
       const {uid,email,displayName} = user;
      dispatch(adduser({uid:uid, email:email, displayName:displayName}));
      console.log("action dispatched")
     navigate("/browse");
     } else {
       dispatch(removeuser());
     }
   });
   },[])
  const handleclick = () => {
    setislogin(!islogin);
     };
     const naam = useRef(null);
     const email = useRef(null);
     const password = useRef(null);
  const handlebutton = ()=>{
    // const val = Validate(email.current.value,password.current.value);
    // seterr(val);
    
    if(!islogin){
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
       
        const user = userCredential.user;
        console.log(user)
        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
       seterr(errorCode+ " " +errorMessage)
      });
      }else{
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    
    const user = userCredential.user;
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterr(errorCode+ " " +errorMessage)
  });
      }
  }
  
     
  return (
    
    <>
    
      <div className="w-full h-screen absolute flex justify-center items-center ">
        <div className="flex  flex-col p-8 bg-black bg-opacity-90 rounded-md py-16">
          <h1 className="text-white">{islogin ? "SIGN IN" : "SIGN UP"}</h1>
          <input
          ref={email}
            type="email"
             placeholder="someone@gmail.com"
            className="my-4 p-2 rounded-md bg-slate-600"
          />
        
          {!islogin &&
             <input
             ref={naam}
             type="text"
             placeholder="Full name"
             className="my-4 p-2 rounded-md bg-slate-600"
           />
          }
          <input ref={password} type="password" placeholder="Password"className="my-4 rounded-md p-2 bg-slate-600" />
          <p className="text-red-600">{err}</p>
          <button className="p-2 bg-red-700 my-4 rounded-md " onClick={handlebutton}>
            {islogin ? "SIGN IN" : "SIGN UP"}
          </button>
          <h2 className="text-white cursor-pointer" onClick={handleclick}>
            {islogin
              ? "new user? click here to Register."
              : "Already a user? Sign in now."}
          </h2>
        </div>
      </div>
      <img src={logo} alt="" className="absolute w-2/12" />

      <div className="flex h-screen ">
        <img src={cover} alt="" className="object-cover w-full " />
      </div>
    </>
  );
};
export default Login1;
