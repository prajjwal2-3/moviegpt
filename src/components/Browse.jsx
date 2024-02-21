import { logo } from "../utils/constants";

import { cover } from "../utils/constants";
import { auth } from "../utils/Firebase";
import { signOut } from "firebase/auth";
const Browser = () => {
  
    const handlesignout=()=>{
        
signOut(auth).then(() => {
  console.log("signed out")
}).catch((error) => {
  // An error happened.
});
    }
  return (
    <div className="">
      <div className="flex absolute">
      <div className="w-11/12"><img src={logo} alt="" className="w-2/12" /></div>
        <div className="text-white m-4 p-4 w-1/12 ">
            <button onClick={handlesignout}>Sign Out</button>
        </div>
        
      </div>

      <div className="flex h-screen ">
        <img src={cover} alt="" className="object-cover w-full " />
      </div>
    </div>
  );
};
export default Browser;
