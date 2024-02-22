
import { IMG_URL } from "../utils/constants";
const Moviecard = ({movies}) => {

  return <div className="">
    {movies[0].title}
    <img src={IMG_URL+movies[0].poster_path} alt="poster image" className="w-48" />
    
    </div>;
};
export default Moviecard;
