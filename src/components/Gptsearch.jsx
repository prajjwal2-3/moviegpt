import Gptbar from "./Gptbar"
import { IMG_URL, cover } from "../utils/constants";

import Airesults from "./Airesults";
const Gptsearch1=()=>{
    
    return(
        <>
        <div className="flex justify-center">
           
        <img src={cover} alt="" className=" object-cover w-full h-screen fixed " />
            
            <div className="absolute  ">
                <div className="flex justify-center w-full items-center mt-8"> <Gptbar/></div>
               
                <div className="mt-20  "><Airesults/></div>
                </div>
               
          </div>
          
         
        </>
    )
}
export default Gptsearch1;