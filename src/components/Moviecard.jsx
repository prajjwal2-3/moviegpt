
import { IMG_URL } from "../utils/constants";
const Moviecard = (movies) => {

  return (
    
      <div className="mx-4 flex-shrink-0 on hover:scale-105 duration-200 ">
     <img src={IMG_URL+movies.movie.poster_path} alt="poster image" className="w-52 rounded-xl " />
    
    </div>
   
  )
};
export default Moviecard;
