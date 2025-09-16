import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
const DetailFood = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const category = useParams();
  const location = useLocation();
  const { category: catName } = location.state || {};

  const fetchDetail = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`/filter.php?c=${catName}`);
      setData(response.data.meals);
    } catch (error) {
      console.log("Error", error);
    } finally {
      setLoading(false);
    }
  };

  // console.log(data);

  useEffect(() => {
    if (catName) {
      fetchDetail();
    }
  }, [catName]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen w-full">
        <div className="h-12 w-12 border-4 border-amber-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div>
      <div className="py-13 w-full min-h-screen">
        <div className="container mx-auto max-sm:px-1">
          <div className=" flex flex-col py-5 px-3 mb-7 relative">
            <h2 className="text-3xl font-bold text-amber-600 my-1">
              {catName}
            </h2>
          </div>
          <div className="relative  mx-3">
            <h1 className="text-2xl font-semibold my-3 tracking-widest">
              MEALS
            </h1>
            <span className=" absolute -bottom-3 w-20 h-1 bg-amber-600 my-2"></span>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,200px)] gap-2">
            {data.map((meal, index) => {
              return (
                <Link
                  to={`/meal-detail/${meal.idMeal}`}
                  key={index}
                  className="w-full rounded-[0.6rem] relative p-3 group"
                >
                  <div className="mx-auto group-hover:scale-105 transition-all duration-300">
                    <img src={meal.strMealThumb} className=" w-full" />
                  </div>
                  <div className="my-4">
                    <p className="text-sm font-semibold">{meal.strMeal}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailFood;
