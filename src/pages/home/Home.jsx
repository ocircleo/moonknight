import { useContext } from "react";
import { dataContext } from "../../private/provider/Data_Provider";

const Home = () => {
  const { name } = useContext(dataContext);
  console.log(name);
  return <div>welcome home</div>;
};

export default Home;
