import React, { useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import avatar from '../data/avatar.jpg';
import Cart from '../component/Cart';
import Chat from './LineChart';
import Notification from '../component/Notification';
import UserProfile from '../component/UserProfile';


import { useStateContext } from '../contexts/ContentProvider';


const NavButton = ({ title, customFunc, icon, color, dotColor }) => {
    return (
      <TooltipComponent content={title} position='BottomCenter'>
        <button
          type='button'
          onClick={customFunc}
          style={{ color }}
          className='relative text-xl rounded-full p-3 hover:bg-light-gray'
        >
          <span
            style={{ background: dotColor }}
            className='absolute inline-flex rounded-full h-2 w-2 right-2 top-2'
          />
          {icon}
        </button>
      </TooltipComponent>
    );
  };
  

  const Navbar = () => {
    const {
      activeMenu, 
      setActiveMenu, 
      isClicked, 
      setIsClicked, 
      handleClick,
      screenSize,
      setScreenSize } = useStateContext();

      useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth);
    
        window.addEventListener('resize', handleResize); 
        handleResize(); // Set initial screen size on mount
    
        return () => window.removeEventListener('resize', handleResize);
      }, []);
    
      useEffect(() => {
        if (screenSize <= 900) {
          setActiveMenu(false);
        } else {
          setActiveMenu(true);
        }
      }, [screenSize]);
    
    return (
      <div className='flex justify-between p-2 md:mx-6 relative'>
        <NavButton 
          title="Menu" 
          customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)} 
          color="blue"
          icon={<AiOutlineMenu />} 
        />
        <div className='flex'>
          <NavButton 
            title="Cart" 
            customFunc={() => handleClick('Cart')} 
            color="blue"
            icon={<FiShoppingCart />} 
          />
          <NavButton 
            title="Chat" 
            dotColor="#03C907"
            customFunc={() => handleClick('Chat')} 
            color="blue"
            icon={<BsChatLeft />} 
          />
          <NavButton 
            title="Notifications" 
            dotColor="#03C907"
            customFunc={() => handleClick('Notification')} 
            color="blue"
            icon={<RiNotification3Line />} 
          />
          <TooltipComponent content="Profile" position='BottomCenter'>
            <div className='flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg'
                 onClick={() => handleClick('UserProfile')}>
              <img src={avatar} className='rounded-full w-8 h-8' alt="" />
              <p>
                <span className='text-gray-400 text-14'>Hi, </span>{``}
                <span className='text-gray-400 font-bold ml-1 text-14'>Micheal</span>
              </p>
              <MdKeyboardArrowDown className='text-gray-400 text-14' />
            </div>
          </TooltipComponent>
          {isClicked.Cart && <Cart />}
          {isClicked.Chat && <Chat />}
          {isClicked.Notification && <Notification />}
          {isClicked.UserProfile && <UserProfile />}
        </div>
      </div>
    );
  }
  
  export default Navbar;
  