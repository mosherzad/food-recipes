import { GrRestaurant } from "react-icons/gr";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <div className="bg-amber-600 flex items-center justify-between p-4 w-full h-16">
        <Link to={"/"}>
          <GrRestaurant className="text-3xl mx-4 cursor-pointer text-white" />
        </Link>
        <div>
          <RxHamburgerMenu className="text-3xl mx-4 cursor-pointer text-white" />
        </div>
      </div>
    </div>
  );
};

export default Header;
