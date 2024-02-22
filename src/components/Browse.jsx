import { useDispatch } from "react-redux";
import { logo } from "../utils/constants";
import { options } from "../utils/constants";

import { auth } from "../utils/Firebase";
import { signOut } from "firebase/auth";
import { useEffect } from "react";
import { addnowplayingmovies } from "../utils/Movieslice";
import Maincon from "./Maincon";
import Lowercon from "./Lowercon";

const Browser = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    apicall();
    console.log("Movie api called");
  }, []);
  const apicall = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing",
        options
      );
      const json = await data.json();
      console.log(json.results);
      dispatch(addnowplayingmovies(json.results));
    } catch (error) {}
  };

  const handlesignout = () => {
    signOut(auth)
      .then(() => {
        console.log("signed out");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className="">
      
      <div className="flex absolute">
     
        <div className="w-11/12  z-50">
        <img src={logo} alt="" className="w-2/12" />
        </div>
        <div className="text-black m-4 p-4 w-1/12 ">
          <button className="text-white" onClick={handlesignout}>Sign Out</button>
        </div>
      </div>
      <Maincon/>
     <Lowercon/>
   
     
    </div>
  );
};
export default Browser;
