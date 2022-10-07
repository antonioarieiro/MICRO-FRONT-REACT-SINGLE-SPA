import React from 'react';

export default function FestivalsCard() {


  const test = [1,2,3,4,5,6,7,8,98,9]
  return (
    <>
      <div className='flex flex-wrap items-center justify-center'>
        {
          test.map((_val, index) => (
<div className='card flex flex-col w-full items-center justify-center m-2' key={index}>
          <div className='flex items-center justify-center w-full justify-around'>
            <p>status</p>
            <p>lock</p>
          </div>
          <div className='flex flex-col items-center'>
            <p>name</p>
            <p>description</p>
          </div>
          <button className='view-btn font-bold mt-2 w-20'>
            View
          </button>
        </div>
          ))
        }
        
      </div>
    </>
  )
}