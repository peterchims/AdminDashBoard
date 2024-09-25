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
  const [isClicked, setIsClicked] = useState(initalState);
  const [screenSize, setScreenSize] = useState(undefined);

   const handleClick = (clicked) =>{
    setIsClicked({...initalState, [clicked] : true});
   }

  return (
    <StateContext.Provider value={{
    activeMenu,
    setActiveMenu,
    isClicked,
    setIsClicked,
    handleClick,
    screenSize,
    setScreenSize}}>
        {children}
    </StateContext.Provider>
  )
}
export const useStateContext = () => useContext(StateContext);