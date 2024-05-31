import { useRef } from "react";

import { options } from "../utils/constants.js";
import { useDispatch } from "react-redux";
import { addrecommendedmovies } from "../utils/Movieslice.js";
import { useState } from "react";
import axios from "axios";
const Gptbar = () => {
  const prompt = useRef(null);
  const dispatch = useDispatch();
  const [input, setinput] = useState("");
  const [sea,setsea]=useState(false)
  let data = JSON.stringify({
    message: `${input}`,
  });
  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "https://roadmap-be.vercel.app/api",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  const Tmbdmovies = async (movie) => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/search/movie?query=" +
          movie +
          "&include_adult=false&language=en-US&page=1",
        options
      );
      const json = await data.json();
      return json;
    } catch (error) {}
  };

  const handleclick = async () => {
    try {
        setsea(true)
      async function get_movies() {
        axios
          .request(config)
          .then(async (response) => {
            setsea(false)
            const gptMovies =
            response.data?.split(",") || [];
          const promisearray = gptMovies?.map((movies) =>
            Tmbdmovies(movies.trim())
          );
          const rough = await Promise.all(promisearray);
          const FINAL_LIST = rough?.map((array) => array.results[0]);
    
          dispatch(addrecommendedmovies(FINAL_LIST));
          })
          .catch((error) => {
            setsea(false)
            alert(error);
          });
      }
get_movies()
     
    } catch (error) {
        setsea(false)
        alert('kand hogya'+error)
    }
  };

  return (
    <div className="z-50">
      <input
        type="text"
        placeholder="Enter text to search movies"
        className="p-2 rounded-l-md opacity-80 w-56 outline-none"
        onChange={(e)=>{
            setinput(e.target.value)
        }}
        ref={prompt}
      />
      <button
        className="text-white p-2 rounded-r-md  bg-purple-600"
        onClick={handleclick}
      >
       {sea?`Searching...`:`Search`}
      </button>
    </div>
  );
};
export default Gptbar;
