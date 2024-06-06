import { ChatGoogleGenerativeAI } from "@langchain/google-genai";

const llm = new ChatGoogleGenerativeAI({
  model: "gemini-pro", 
  apiKey: import.meta.env.VITE_GOOGLE_GENAI_API_KEY, 
});

export async function getAnswer(question) {
  let answer = "";
  try {
    answer = await llm.predict(question);
  } catch (e) {
    console.error(e);
  }
  return answer;
}
