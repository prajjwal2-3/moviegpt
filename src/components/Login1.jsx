import { logo } from "../utils/constants";
import { cover } from "../utils/constants";
import { useRef, useState } from "react";
import Validate from "../utils/Validate";

const Login1 = () => {
  const [islogin, setislogin] = useState(true);
  const [err,seterr]  = useState(null)
  const handleclick = () => {
    setislogin(!islogin);
     };
     const naam = useRef(null);
     const email = useRef(null);
     const password = useRef(null);
  const handlebutton = ()=>{
    const val = Validate(email.current.value,password.current.value);
    seterr(val);
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
