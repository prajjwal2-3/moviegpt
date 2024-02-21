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
      console.log(maintrailor);
    } catch (error) {
      console.error(error);
    }
  };
  const key = useSelector((state)=> state.Movies?.maintrailer?.[0]?.key)
  console.log(key)
  return (
    <div className="">
      <iframe
       className="w-full aspect-video"
        src={"https://www.youtube.com/embed/"+key}
        title="YouTube video player"
       
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        
      ></iframe>
    </div>
  );
};

export default Mainvideo;
