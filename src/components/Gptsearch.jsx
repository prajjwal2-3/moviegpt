import Gptbar from "./Gptbar"
import { cover } from "../utils/constants";
const Gptsearch1=()=>{
    return(
        <div className="flex h-screen ">
            
        <img src={cover} alt="" className="object-cover w-full " />
        <div className="absolute flex justify-center w-full items-center mt-8"><Gptbar/></div>
      </div>
    )
}
export default Gptsearch1;