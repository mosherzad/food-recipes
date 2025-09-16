import Categories from "../components/Categories";
import Search from "../components/Search";
import useFetch from "../hooks/useFetch";
const Home = () => {
  const { data: category, loading, error } = useFetch("/categories.php");

  if (loading)
    return (
      <div className="flex items-center justify-center h-screen w-full">
        <div className="h-12 w-12 border-4 border-amber-600 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  if (error)
    return (
      <p className="flex items-center justify-center text-red-500">
        Failed to load data.
      </p>
    );
  return (
    <div>
      <Search />
      <Categories data={category} />
    </div>
  );
};

export default Home;
