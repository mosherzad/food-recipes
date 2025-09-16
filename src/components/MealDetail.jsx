import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TbBowlSpoonFilled } from "react-icons/tb";
import { FaSpoon } from "react-icons/fa6";

const MealDetail = () => {
  const params = useParams();
  const { id } = params;
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchMeal = async () => {
      try {
        const response = await axios.get(`/lookup.php?i=${id}`);
        console.log(response.data.meals[0]);
        setData(response.data.meals[0]);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMeal();
  }, [id]);
  const ingredients = [];
  const measures = [];
  if (data) {
    for (let i = 1; i < 20; i++) {
      const ingredient = data[`strIngredient${i}`];

      if (ingredient?.trim() !== "" && ingredient !== null) {
        ingredients.push(ingredient);
      }
    }
    for (let i = 1; i < 20; i++) {
      const measure = data[`strMeasure${i}`];
      if (measure?.trim() !== "" && measure !== null) {
        measures.push(measure);
      }
    }
  }
  console.log(data);
  return (
    <div>
      <div className="py-13 overflow-hidden">
        <div className="container mx-auto">
          <div className="relative max-sm:mx-2">
            <h1 className="text-2xl font-semibold my-4 tracking-widest ">
              MEAL DETAILS
            </h1>
            <span className=" absolute -bottom-3 w-20 h-1 bg-amber-600 my-2"></span>
          </div>
          <div className="flex flex-col bg-white container p-5">
            <div className="flex lg:flex-row flex-col gap-7">
              <div className="max-w-95 ">
                <img src={data?.strMealThumb} className="w-full" />
              </div>
              <div>
                <div className="flex flex-col gap-y-2">
                  <h1 className="font-semibold text-amber-600 lg:text-2xl">
                    {data?.strMeal}
                  </h1>
                  <hr className="text-amber-600 border-1 mb-2" />
                  <p className="lg:text-lg tracking-widest text-neutral-600">
                    <span className="font-bold lg:text-xl mr-1 text-black">
                      Category:
                    </span>{" "}
                    {data?.strCategory}
                  </p>
                  <p className="lg:text-lg tracking-widest text-neutral-600">
                    <span className="font-bold lg:text-xl mr-1 text-black">
                      Country:
                    </span>{" "}
                    {data?.strArea}
                  </p>
                  <p className="lg:text-lg tracking-widest text-neutral-600">
                    <span className="font-bold lg:text-xl mr-1 text-black">
                      Youtube:
                    </span>{" "}
                    <a
                      href={data?.strYoutube}
                      className="text-[15px] max-sm:text-sm"
                    >
                      {data?.strYoutube}
                    </a>
                  </p>
                  <div className="bg-amber-600 p-5 rounded-[0.5rem] mt-1">
                    <h1 className="text-white text-xl font-semibold">
                      Ingredients
                    </h1>
                    <div className="grid lg:grid-cols-5 grid-cols-2 gap-3 text-white mt-3">
                      {ingredients.map((ingredient, index) => {
                        return (
                          <div key={index} className="flex items-center gap-2">
                            <TbBowlSpoonFilled className="text-xl" />
                            <h1 className="text-sm text-white">{ingredient}</h1>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 bg-amber-600 p-5 text-white rounded-[0.5rem]">
              <h1 className="text-2xl font-semibold mb-4">Measure</h1>
              <div className="grid lg:grid-cols-4 grid-cols-2 gap-3">
                {measures.map((measure, index) => {
                  return (
                    <div key={index} className="flex items-center gap-2">
                      <FaSpoon className="text-xl" />
                      <h1 className="text-sm">{measure}</h1>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="bg-gray-100 p-5 my-7">
              <h1 className="font-semibold text-2xl mb-3">Instructions</h1>
              <p className="text-justify max-sm:text-sm">
                {data?.strInstructions}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealDetail;
