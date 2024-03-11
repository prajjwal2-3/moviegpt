import { useEffect } from "react";
import { options } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addtrailer } from "../utils/Movieslice";
const Mainvideo = ({ id }) => {
    const dispatch = useDispatch();
   
    
  useEffect(() => {
    trailor();
  }, []);
  const trailor = async () => {
    try {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/" + id + "/videos?language=en-US",
        options
      );
      const json = await data.json();
      const maintrailor = json.results.filter(
        (data) => data.type === "Trailer"
      );
      dispatch(addtrailer(maintrailor))
     
    } catch (error) {
      console.error(error);
    }
  };
  const key = useSelector((state)=> state.Movies?.maintrailer?.[0]?.key)
  
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-black "></div>
      <iframe
       className="w-full aspect-video "
        src={"https://www.youtube.com/embed/"+key+"?playlist="+key+"&loop=1&autoplay=1&mute=1&controls=0"}
        title="YouTube video player"
       
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        
      ></iframe>
    </div>
  );
};

export default Mainvideo;
