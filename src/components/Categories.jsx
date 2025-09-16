import { Link } from "react-router-dom";
const Categories = ({ data }) => {
  return (
    <div className="py-13">
      <div className="container mx-auto max-sm:px-1">
        <div className="relative">
          <h1 className="text-2xl font-semibold my-3 tracking-widest">
            CATEGORIES
          </h1>
          <span className=" absolute -bottom-3 w-20 h-1 bg-amber-600 my-2"></span>
        </div>
        <div className="grid lg:grid-cols-[repeat(auto-fit,200px)] grid-cols-2 gap-3 my-10">
          {data.map((item, index) => {
            return (
              <Link
                to={`/detail/${item.strCategory}`}
                state={{
                  category: item.strCategory,
                }}
                key={index}
                className="w-full bg-white rounded-[0.6rem] relative p-3 group"
              >
                <div className="w-[95%] mx-auto group-hover:scale-110 transition-all duration-300">
                  <img
                    src={item.strCategoryThumb}
                    className="rounded-[0.6rem]"
                  />
                </div>
                <span className="font-semibold text-[13px] absolute top-0 right-0 bg-amber-600 text-white rounded-2xl px-2 m-1">
                  {item.strCategory}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Categories;
