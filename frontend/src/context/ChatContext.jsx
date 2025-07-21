import axios from "axios";
import { createContext, useContext, useState } from "react";

const ChatContext = createContext();
export const ChatProvider = ({children}) => {
    const [messages, setMessages] = useState([]);
    const [prompt, setPrompt] = useState("");
    const [newRequestLoading, setNewRequestLoading] = useState(false);

    async function fetchResponse() {
        if(prompt === "") return alert("Please give prompt first");
        setNewRequestLoading(true);
        setPrompt("");
        try {
            const response = await axios({
                url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyAAjC1dJpXdjYdnESNWPb64iVEeopMkOZ0",
                method: "post",
                data: {
                    contents: [{parts: [{text: prompt}]}],
                },
            });
            const message = {
                question: prompt,
                answer: response["data"]["candidates"][0]["content"]["parts"][0]["text"],
            };
            setMessages((prev) => [...prev, message]);
            setNewRequestLoading(false);
        } catch (error) {
            alert("something went wrong");
            console.log(error);
            setNewRequestLoading(false);
        }
    }
    return <ChatContext.Provider value={{ fetchResponse, messages, prompt, setPrompt, newRequestLoading }}>{children}</ChatContext.Provider>
}

export const ChatData = () => useContext(ChatContext);