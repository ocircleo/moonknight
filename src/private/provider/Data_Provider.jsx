import { useEffect } from "react";
import { createContext, useState } from "react";

export const dataContext = createContext(null);

// eslint-disable-next-line react/prop-types
const Data_Provider = ({ children }) => {
  const [navState, setNavState] = useState(false);
  const [initialData, setInitaialData] = useState([])
  const [spinner, setSpinner]= useState(true)
  let searchData = {};
  const setSearchData = (a, b) => {
    searchData.region = a;
    searchData.city = b;
    setTimeout(() => {
      searchData = {}
    }, 10000)
  }
  useEffect(() => {
    fetch(`https://moonknight-backend.vercel.app/user/productSearch?city=&region=&price=0&skip=0`)
    .then(res => res.json())
    .then(d => { setInitaialData(d)
      setSpinner(false)
    })
  }, [])

  const data = { navState, setNavState, searchData, setSearchData, initialData, spinner };


  return <dataContext.Provider value={data}>{children}</dataContext.Provider>;
};

export default Data_Provider;
