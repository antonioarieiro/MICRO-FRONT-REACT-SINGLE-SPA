import React, { useEffect, useState } from 'react';
import KineContext from './KineContext';

export const KineProvider = ({children}) => {
  const [menu, setMenu] = useState(false);
  const [user, setUser] = useState([]);
  const [currentSelectedOption, setCurrentOption] = useState('Festivals');
  const [currentApp, setCurrentApp] = useState(false);

  useEffect(() => {
    window.location.pathname.includes('/social') ? setCurrentApp(true) : setCurrentApp(false)
  })

  const changeMenu = () => {
    setMenu(!menu);
  };

  return (
    <KineContext.Provider value={{menu, changeMenu, user, setUser, currentSelectedOption, setCurrentOption, currentApp, setCurrentApp}}>
      {children}
    </KineContext.Provider>
  );
}
