import React from 'react';
import '../Festival.scss';
export default function FestivalInformations() {
  return (
    <>
      <div className="flex  w-full  details-section text-white mt-8">
        <div className='left md:w-8/12 w-full p-4'>
          <div className='flex flex-col font-bold festivals-info'>
            <h1>Festival Title</h1>
            <span>Festival Owner</span>
            <p>
              Festival Description, Festival Description , Festival Description, Festival Description, Festival Description , Festival Description, 
              Festival Description, Festival Description , Festival Description, 
              Festival Description, Festival Description , Festival Description, 
              Festival Description, Festival Description , Festival Description, 
              Festival Description, Festival Description , Festival Description, 
              Festival Description, Festival Description , Festival Description, 
              Festival Description, Festival Description , Festival Description, 
              Festival Description, Festival Description , Festival Description, 

            </p>
          </div>
        </div>
        <div className='right w-4/12 font-bold p-4'>
          <div className='flex flex-col'>
            <h1>Votes</h1>
            <p>Total Votes: </p>
            <p></p>
          </div>
        </div>
      </div>
    </>
  )
}