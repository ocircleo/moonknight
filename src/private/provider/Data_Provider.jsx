import { useEffect } from "react";
import { createContext, useState } from "react";

export const dataContext = createContext(null);

// eslint-disable-next-line react/prop-types
const Data_Provider = ({ children }) => {
  const [navState, setNavState] = useState(false);
  const [initialData, setInitaialData] = useState([])
  const [spinner, setSpinner] = useState(true)
  const [stat, setStat] = useState({})
  let searchData = { city: '' };
  const setSearchData = (city) => {
    searchData.city = city;
    setTimeout(() => {
      searchData.city = '';
    }, 3000)
  }
  useEffect(() => {
    fetch(`https://moonknight-backend.vercel.app/user/productSearch?city=&region=&price=0&skip=0`)
      .then(res => res.json())
      .then(d => {
        setInitaialData(d)
        setSpinner(false)
      })
    fetch('https://moonknight-backend.vercel.app/user/getEstimate').then(res => res.json()).then(data => { console.log(data); setStat(data) })
  }, [])

  const data = { navState, setNavState, searchData, setSearchData, initialData, spinner, stat };


  return <dataContext.Provider value={data}>{children}</dataContext.Provider>;
};

export default Data_Provider;
