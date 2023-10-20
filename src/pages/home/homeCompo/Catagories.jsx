import { Link } from "react-router-dom";

const Catagories = ({ data }) => {
  return (
    <Link className="no-underline">
      <div className="h-16 w-20 md:h-24 md:w-28 flex items-center justify-center gap-2 bg-white hover:bg-blue-50 cursor-pointer active:scale-90 duration-100 border-[3px] border-black border-dashed rounded text-black font-semibold capitalize text-base">
        {data.category}
      </div>
    </Link>
  );
};

export default Catagories;
