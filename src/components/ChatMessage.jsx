import React from "react";

const ChatMessage = ({ name, text }) => {
  return (
    <div className="text-base  p-2 my-2 w-auto bg-gray-200 rounded shadow mx-4">
      <div className="flex items-center mx-1 ">
        <img
          alt="user"
          className="h-8 mr-3"
          src="https://publicdomainvectors.org/tn_img/abstract-user-flat-4.webp"
        />
        <div>
          <span className="font-semibold">{name} : </span>
          <span>{text}</span>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
