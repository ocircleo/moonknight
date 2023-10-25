import { createContext } from "react";

export const dataContext = createContext(null);

// eslint-disable-next-line react/prop-types
const Data_Provider = ({ children }) => {
  const data = {name:'salman'};

  
  return <dataContext.Provider value={data}>{children}</dataContext.Provider>;
};

export default Data_Provider;
