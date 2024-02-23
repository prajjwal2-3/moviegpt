import { useDispatch } from "react-redux";
import { logo } from "../utils/constants";
import { options } from "../utils/constants";
import { auth } from "../utils/Firebase";
import { signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { addnowplayingmovies, addpopularmovies,addtoprated,addupcoming } from "../utils/Movieslice";
import Maincon from "./Maincon";
import Lowercon from "./Lowercon";
import Gptsearch1 from "./Gptsearch";
const Browser = () => {
  const dispatch = useDispatch();
  const[gptsearch,setgptsearch]=useState("Smart Search");
  useEffect(() => {
    apicall();
   
  }, []);
  const apicall = async () => {
    try {
      const data1 = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing",
        options)
      const data2 = await fetch(
        "https://api.themoviedb.org/3/movie/popular",
        options);
        const data3 = await fetch(
          "https://api.themoviedb.org/3/movie/top_rated",
          options);
          const data4 = await fetch(
            "https://api.themoviedb.org/3/movie/upcoming",
            options);
      const json1 = await data1.json();
      const json2 = await data2.json();
      const json3 = await data3.json();
      const json4 = await data4.json();
      
      dispatch(addnowplayingmovies(json1.results));
      dispatch(addpopularmovies(json2.results));
      dispatch(addtoprated(json3.results));
      dispatch(addupcoming(json4.results));
    } catch (error) {}
  };
  const handlegptclick=()=>{
        gptsearch==="Smart Search"? setgptsearch("Home"): setgptsearch("Smart Search")
  }

  const handlesignout = () => {
    signOut(auth)
      .then(() => {
        
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className="">
      
      <div className="flex absolute justify-around">
     
        <div className="w-9/12  z-40">
        <img src={logo} alt="" className="w-2/12" />
        </div>
        
      <div className="m-4 p-4  z-40 ">
        <button className="text-white p-2 rounded-md  bg-purple-600" onClick={handlegptclick}>{gptsearch}</button>
        </div>
        <div className=" m-4 p-4 w-1/12 z-40 ">
          <button className="text-white bg-red-500 p-2 rounded-md" onClick={handlesignout}>Sign Out</button>
        </div>
      </div>
      {gptsearch==="Home"? <Gptsearch1/>:
     <>
      <Maincon/>
    <div className="z-40"> <Lowercon/></div>
     </>}
      
   
     
    </div>
  );
};
export default Browser;
