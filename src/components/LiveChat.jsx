import React, { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessages } from "../utils/chatSlice";
import { generateRandomName, getRandomMessage } from "../utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatArray = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessages({ name: generateRandomName(), text: getRandomMessage() })
      );
    }, 2000);

    return () => clearInterval(i);
  }, []);

  return (
    <div className="w-full border border-gray-400 h-[360px] bg-gray-100 rounded-lg overflow-y-scroll ">
      <h1 className="text-lg font-semibold p-2 ">Live Chat:</h1>
      <div className=" flex flex-col-reverse">
        {chatArray.map((chat, index) => (
          <ChatMessage key={index} name={chat.name} text={chat.text} />
        ))}
      </div>
    </div>
  );
};

export default LiveChat;
