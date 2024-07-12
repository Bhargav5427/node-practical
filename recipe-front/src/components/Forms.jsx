import axios from "axios";
import React, { useRef } from "react";

const Forms = () => {
  let title = useRef();
  let description = useRef();
  let ingredients = useRef();
  let instructions = useRef();

  let getUser = JSON.parse(localStorage.getItem("userData"));

  let handleSubmit = async () => {
    let data = {
      title: title.current.value,
      description: description.current.value,
      ingredients: ingredients.current.value,
      instructions: instructions.current.value,
      createdBy: getUser._id,
    };

    let res = await axios.post(
      "http://localhost:8001/v1/recipe/addrecipe",
      data
    );
    console.log(res.data);
  };
  return (
    <>
      <form className="max-w-sm mx-auto">
        <div className="mb-5">
          <label
            for="title"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            title
          </label>
          <input
            type="title"
            id="title"
            ref={title}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="Enter Title"
            required
          />
        </div>
        <div className="mb-5">
          <label
            for="description"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            description
          </label>
          <input
            type="description"
            ref={description}
            placeholder="Enter Description"
            id="description"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
          />
        </div>
        <div className="mb-5">
          <label
            for="ingredients"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            ingredients
          </label>
          <input
            type="ingredients"
            ref={ingredients}
            id="ingredients"
            placeholder="Enter Ingredients"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
          />
        </div>
        <div className="mb-5">
          <label
            for="instruction"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            instructions
          </label>
          <input
            ref={instructions}
            type="instruction"
            id="instruction"
            placeholder="Enter Instructions"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
          />
        </div>

        <button
          type="submit"
          onClick={handleSubmit}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Add Recipes
        </button>
      </form>
    </>
  );
};

export default Forms;
