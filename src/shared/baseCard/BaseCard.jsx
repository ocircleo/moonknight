import { Link } from "react-router-dom";

const BaseCard = ({ data }) => {
  let { location, price, type, rooms, ratings, max_people } = data;
  return (
    <div className="w-full min-[320px]:w-80 min-[440px]:w-56  flex flex-col p-3 items-start rounded shadow">
      <div className="h-36 min-[320px]:h-48 min-[420px]:h-36 w-full bg-gray-500 rounded mb-3">
        <img
          src="https://source.unsplash.com/random/140x150/?house"
          alt=""
          className="w-full h-36 min-[320px]:h-48 min-[420px]:h-36 bg-gray-500 rounded"
        />
      </div>
      <p>location: {location}</p>
      <p>
        price: {price}tk/{type.slice(0, 2)}
      </p>
      <p>rooms: {rooms}</p>
      <p>ratings: {ratings}/5</p>
      <p>max people : {max_people}</p>
      <Link className="bg-[#6A94FF] w-full text-center text-white font-semibold py-1 rounded mt-3 active:scale-95 duration-75">
        see more
      </Link>
    </div>
  );
};

export default BaseCard;
