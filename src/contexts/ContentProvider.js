import React, {createContext, useContext ,useState} from 'react';
import UserProfile from '../component/UserProfile';

const StateContext = createContext();


const initalState = {
    chat:false,
    cart:false,
    UserProfile:false,
    Notification:false,
}

export const ContextProvider = ({ children }) =>{
  const [activeMenu, setActiveMenu] = useState(true);

  return (
    <StateContext.Provider value={{activeMenu,setActiveMenu,}}>
        {children}
    </StateContext.Provider>
  )
}
export const useStateContext = () => useContext(StateContext);