import React from "react";
import CommentList from "./CommentList";

const CommentContainer = () => {
  const commentData = [
    {
      name: "Sweta Mishra",
      text: "lorem ipsum ddjhcgsdufcvsyde gtsuycfgsuyfc juysdghcfuybf",
      replies: [
        {
          name: "Sweta Cutie",
          text: "lorem ipsum ddjhcgsdufcvsyde gtsuycfgsuyfc juysdghcfuybf",
          replies: [
            {
              name: "Subham Chor",
              text: "lorem ipsum ddjhcgsdufcvsyde gtsuycfgsuyfc juysdghcfuybf",
              replies: [
                {
                  name: "Ankita Gadhi",
                  text: "lorem ipsum ddjhcgsdufcvsyde gtsuycfgsuyfc juysdghcfuybf",
                  replies: [],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "Sweta Mishra",
      text: "lorem ipsum ddjhcgsdufcvsyde gtsuycfgsuyfc juysdghcfuybf",
      replies: [
        {
          name: "Subham Idiot",
          text: "lorem ipsum ddjhcgsdufcvsyde gtsuycfgsuyfc juysdghcfuybf",
          replies: [
            {
              name: "Ankita Pagal",
              text: "lorem ipsum ddjhcgsdufcvsyde gtsuycfgsuyfc juysdghcfuybf",
              replies: [],
            },
          ],
        },
      ],
    },
    {
      name: "Akshay Kumar",
      text: "fdcxfgdc jhgcgsydvcf jhdbchjsdbcuyhs",
      replies: [],
    },
  ];

  return (
    <div className="mt-4 py-2">
      <h1 className="text-lg font-bold">Comments :</h1>
      <CommentList comments={commentData} />
    </div>
  );
};

export default CommentContainer;
