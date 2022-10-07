import React from 'react';
import DefaultButton from '../../Buttons/DefaultButton';
export default function Votes() {
  return (
    <>
      <div className='flex flex-col text-white p-8'>
        <div className='flex items-center'>
          Current Votes : 0
        </div>
        <div className='flex items-center mt-10'>
          <span className='mr-4'>
          Vote in Ranking
          </span>
          <DefaultButton text={'Vote in Movie'}/>
        </div>
      </div>
    </>
  )
}