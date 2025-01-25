const apiKey = "AIzaSyC-sIvY_37sz1uupv1B-SuD1WWcP6kvNPw"
import { GoogleGenerativeAI } from "@google/generative-ai"; // Use import for ES modules

const genAI = new GoogleGenerativeAI(apiKey); // Ensure the environment variable is prefixed with REACT_APP_

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash-exp",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

async function run(prompt) {
  try {
    const chatSession = model.startChat({
      generationConfig,
      history: [],
    });

    const result = await chatSession.sendMessage(prompt);
    console.log(result.response.text());
    return result.response.text();
  } catch (error) {
    console.error("Error occurred:", error);
  }
}

export default run;
