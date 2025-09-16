import { useState } from "react";
import Background from "../assets/images/background.webp";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";
const Search = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    const value = e.target.value;
    setQuery(value);

    if (!value) {
      setResults([]);
      return;
    }

    try {
      const response = await axios.get(`/search.php?s=${value}`);
      setResults(response?.data?.meals || []);
      console.log(response?.data?.meals);
    } catch (error) {
      console.log("Error", error);
    }
  };
  return (
    <div>
      <div className=" w-full h-80 relative">
        <div>
          <div className=" relative w-full h-80">
            <img src={Background} className="w-full h-full object-cover " />
            <div className="absolute inset-0 flex items-center justify-center gap-x-3 z-1">
              <input
                type="text"
                placeholder="Search Meal"
                className="lg:px-8 py-2 rounded-full border px-6 bg-white focus:outline-none "
                value={query}
                onChange={handleSearch}
              />
              <div className="p-2 bg-amber-600 rounded-full">
                <FaSearch className="text-white text-2xl cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
        <div className=" w-full absolute top-0 h-full bg-gradient-to-t from-neutral-900 to-transparent"></div>
      </div>
      {query !== "" ? (
        <div className="container mx-auto relative">
          <h1 className="text-2xl font-semibold my-3 tracking-widest">MEALS</h1>
          <span className=" absolute -bottom-3 w-20 h-1 bg-amber-600 my-2"></span>
        </div>
      ) : (
        ""
      )}
      <div className="container mx-auto grid grid-cols-[repeat(auto-fit,200px)] gap-3 my-5">
        {results?.map((recipe, index) => {
          return (
            <Link
              to={`/meal-detail/${recipe?.idMeal}`}
              key={index}
              className="w-full bg-white rounded-[0.5rem] relative p-3 group"
            >
              <div className="w-[95%] mx-auto group-hover:scale-95 transition-all duration-300">
                <img src={recipe?.strMealThumb} className="rounded-[0.5rem]" />
              </div>
              <span className="font-semibold text-[13px] absolute top-0 right-0 bg-amber-600 text-white rounded-2xl px-2 m-1">
                {recipe?.strCategory}
              </span>
              <p className="text-sm mt-3">{recipe?.strMeal}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Search;
