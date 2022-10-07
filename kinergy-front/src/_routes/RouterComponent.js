import React from "react";
import KineContext from "../_context/KineContext";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Pages } from "../_pages/Pages";
import { Components } from "../_components/Components";

const RouterComponent = () => {
  const { menu } = React.useContext(KineContext);

  return (
    <>
      <Router>
        <div className='flex flex-col h-full w-full app overflow-x-hidden'>
        <Components.Header />
          <div className='flex min-h-full w-full'>
         
              <div className={
                menu
                  ? 'flex side-bar-open h-screen'
                  : 'side-bar h-full'
              }>
                <Components.SideBar />
              </div>
           
           
            <div className='components h-full'>
              <Routes>
                <Route exact path="/" element={<Pages.Home />} />
                <Route exact path="/festival" element={<Pages.FestivalDetails />} />
                <Route exact path="/rankings" element={<Pages.Ranking />} />
                <Route exact path="/profile" element={<Pages.Profile />} />
              </Routes>
            </div>
          </div>
          <div className='floating'>
            <Components.FloatingButton />
          </div>
        </div>
      </Router>
    </>
  )
}

export default RouterComponent;
