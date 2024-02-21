import { useDispatch } from "react-redux";
import { logo } from "../utils/constants";
import { options } from "../utils/constants";
import { cover } from "../utils/constants";
import { auth } from "../utils/Firebase";
import { signOut } from "firebase/auth";
import { useEffect } from "react";
import { addnowplayingmovies } from "../utils/Movieslice";
import Maincon from "./Maincon";
import Mainvideo from "./Mainvideo";
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
    <div className="bg-gradient-to-r from-black">
      <div className="flex absolute">
        <div className="w-11/12 ">
        <img src={logo} alt="" className="w-2/12  " />
        </div>
        <div className="text-black m-4 p-4 w-1/12 ">
          <button onClick={handlesignout}>Sign Out</button>
        </div>
      </div>
      <div className="absolute"> <Maincon  /></div>
     <div className=""><Mainvideo/> </div>
   
     
    </div>
  );
};
export default Browser;
