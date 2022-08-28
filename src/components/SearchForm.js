import { useState } from "react";

const SearchForm = ({ onGetUserQuery, getUserSearchResults }) => {
  const [userInput, setUserInput] = useState("");

  const changeHandler = (event) => {
    setUserInput(event.target.value);
    onGetUserQuery(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    getUserSearchResults();
    setUserInput("");
  };

  return (
    <form onSubmit={submitHandler} className="space-x-2 flex items-center" action="POST">
      <input
        onChange={changeHandler}
        className="bg-slate-100 rounded-full py-1 pl-3 placeholder-slate-500"
        value={userInput}
        type="text"
        id="cityInput"
        placeholder="e.g. Paris"
      />
      <button
        className="bg-amber-300 rounded-full aspect-square flex items-center w-8 justify-center"
        type="submit"
      >
        <i class="fa-solid fa-magnifying-glass fa-sm text-slate-800"></i>
      </button>
    </form>
  );
};

export default SearchForm;
