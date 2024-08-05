import React from "react";

const commentsData = [
  {
    name: "Ashay",
    text: "perfect",
    replies: [],
  },
  {
    name: "Anjali",
    text: "oops!excellent",
    replies: [
      {
        name: "Hemant",
        text: "Hiiii",
        replies: [],
      },
      {
        name: "deva",
        text: "motu -patslu",
        replies: [
          {
            name: "backh ",
            text: "i use this style",
            replies: [
              {
                name: "Raju Bhai",
                text: "I don't like it",
                replies: [
                  {
                    name: "Akshay santi",
                    text: "nice",
                    replies: [
                      {
                        name: "Ram kempad",
                        text: "I love you content sir",
                        replies: [],
                      },
                    ],
                  },
                  {
                    name: "Rahul Huchgond",
                    text: "Nice Viedo",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "tanya",
    text: "best",
    replies: [],
  },
  {
    name: "RAHUl Huchgomd",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "RgJDFV",
    text: "like this one",
    replies: [],
  },
  {
    name: "Hanmant huch",
    text: "loke your content",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-2">
      <img
        className="w-12 h-12"
        alt="user"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  // Disclaimer: Don't use indexes as keys
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-5 border border-l-black ml-5">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments: </h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
