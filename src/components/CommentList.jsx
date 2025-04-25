import React from "react";
import Comment from "./Comment";

const CommentList = ({ comments }) => {
  return (
    <div>
      {comments.map((comment, index) => (
        <div key={index}>
          <Comment data={comment} />
          <div className="ml-4 border-l-1 border-gray-300">
            <CommentList comments={comment.replies} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommentList;
