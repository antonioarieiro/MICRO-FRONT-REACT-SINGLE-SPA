import React from 'react';
import KinergyStatus from './KinergyStatus';
import SocialStatus from './SocialStatus';
import '../UserProfile.scss';
export default function DashBoard() {
  return (
    <>
    <div className='flex items-center justify-center mt-2'>
          <div className='welcome'>
            <h1>Welcome, User</h1>
          </div>
          <div className='ml-8 flex flex-col items-center welcome'>
            <h4>We are happy to have you here</h4>
            <h4>#kine-team</h4>
          </div>
        </div>
      <div className='flex items-center justify-around w-full dashboard mx-auto mt-10'>
        
        <div className='containers-board mr-8'>
          <KinergyStatus />
        </div>
        <div className='containers-board'>
          <SocialStatus />
        </div>
      </div>
    </>
  )
}