import axios from "axios";
import React, { useEffect, useState } from "react";
import { GiFullFolder } from "react-icons/gi";
const Myrecipes = () => {
  const getUser = JSON.parse(localStorage.getItem("userData"));
  const [recipesData, setRecipesData] = useState([]);
  const [comments, setComments] = useState({});
  const [getComment, setGetComment] = useState([]);

  const getRecipesData = async () => {
    try {
      const res = await axios.get(`http://localhost:8001/v1/recipe/myrecipes/${getUser._id}`);
      setRecipesData(res.data);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  const getComments = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8001/v1/comments/getcomment"
      );
      setGetComment(res.data);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  useEffect(() => {
    getComments();
    getRecipesData();
  }, []);

  if (!recipesData) {
    return (
      <div className="flex flex-col items-center justify-center h-[500px] text-white">
        <div className="fileicon text-[17rem]">
          <GiFullFolder />
        </div>
        <div className="text-file text-white font-bold text-2xl">
          <h1>no recipes</h1>
        </div>
      </div>
    );
  }

  const handleCommentChange = (e, id) => {
    setComments({ ...comments, [id]: e.target.value });
  };

  const addComments = async (id) => {
    const data = {
      text: comments[id],
      createdBy: getUser._id,
      recipe: id,
    };

    try {
      const res = await axios.post(
        "http://localhost:8001/v1/comments/addcomment",
        data
      );
      console.log("Comment added:", res.data);
      // Clear the comment input field after successful submission
      setComments({ ...comments, [id]: "" });
      getComments(); // Refresh comments after adding a new one
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  return (
    <div className="grid grid-cols-3 gap-5">
      {recipesData?.data?.map((val) => (
        <div
          key={val._id}
          className="flex flex-col justify-between gap-2 max-w-sm p-7 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
        >
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <span className="text-3xl text-slate-100 capitalize">
                title -
              </span>
              {val.title}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            <span className="text-slate-100 font-bold text-lg capitalize">
              createdBy -
            </span>
            {val.createdBy.email}
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            <span className="text-slate-100 font-bold text-lg capitalize">
              description -
            </span>
            {val.description}
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            <span className="text-slate-100 font-bold text-lg capitalize">
              ingredients -
            </span>
            {val.ingredients}
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            <span className="text-slate-100 font-bold text-lg capitalize">
              instructions -
            </span>
            {val.instructions}
          </p>
          <div className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            <span className="text-slate-100 font-bold text-lg capitalize">
              comments -
            </span>
            <div className="h-[80px] overflow-auto  bg-transparent border border-slate-600 rounded p-2 my-2 w-full">
              {getComment?.data
                ?.filter((comment) => comment.recipe._id === val._id)
                .map((comment) => (
                  <p key={comment._id}>
                    <span className="text-white font-bold">
                      {comment.createdBy.email} -{" "}
                    </span>
                    {comment.text}
                  </p>
                ))}
            </div>
          </div>
          <div>
            <textarea
              className="bg-transparent border border-slate-600 rounded w-full p-2"
              placeholder="Enter your comments"
              value={comments[val._id] || ""}
              onChange={(e) => handleCommentChange(e, val._id)}
            ></textarea>
          </div>
          <button
            className="bg-blue-600 p-3 rounded-lg text-white font-bold"
            onClick={() => addComments(val._id)}
          >
            Add Comment
          </button>
        </div>
      ))}
    </div>
  );
};

export default Myrecipes;
