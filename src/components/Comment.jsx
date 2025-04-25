import React from "react";

const Comment = ({ data }) => {
  const { name, text } = data;
  return (
    <div className="flex m-2 bg-gray-100 rounded-lg p-1">
      <img
        alt="user"
        className="h-8 mr-3"
        src="https://publicdomainvectors.org/tn_img/abstract-user-flat-4.webp"
      />
      <div>
        <p className="text-sm font-bold">{name}</p>
        <p className="text-sm">{text}</p>
      </div>
    </div>
  );
};

export default Comment;
