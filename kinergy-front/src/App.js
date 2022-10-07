import React from "react";
import RouterComponent from './_routes/RouterComponent'
import { KineProvider } from "./_context/KineProvider";
import './app.css';

export const App = () => {
  return (
    <>
    <KineProvider>
    <div className='w-full h-[100vh] home'>
      <RouterComponent />
      </div>
      </KineProvider>
    </>
  )
}