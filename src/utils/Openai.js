import OpenAI from "openai";



const Openai = new OpenAI(
   { apiKey: process.env.OPENAIKEY,
    dangerouslyAllowBrowser: true,
}
);
export default Openai
