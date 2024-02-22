import { useDispatch } from "react-redux";
import { logo } from "../utils/constants";
import { options } from "../utils/constants";
import { auth } from "../utils/Firebase";
import { signOut } from "firebase/auth";
import { useEffect } from "react";
import { addnowplayingmovies, addpopularmovies,addtoprated,addupcoming } from "../utils/Movieslice";
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
      console.log(json3.results);
      dispatch(addnowplayingmovies(json1.results));
      dispatch(addpopularmovies(json2.results));
      dispatch(addtoprated(json3.results));
      dispatch(addupcoming(json4.results));
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
     
        <div className="w-11/12  z-40">
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
