import React, { useState } from 'react';
import { MdAddCircleOutline } from 'react-icons/md';
import { RiAddFill } from 'react-icons/ri';
import './Floating.scss';

export default function FloatingButton() {
  const [isShowOption, setIsShowOption] = useState(false);

  return (
    <>
    <button 
    className={
      isShowOption
      ? 'fixed bottom-4 right-8 opacity-100 flex flex-col items-center'
      : 'fixed bottom-4 right-8 opacity-50 hover:opacity-100 flex flex-col items-center'
    }
    onClick={() => {setIsShowOption(!isShowOption)}}
    >
      <div className={
        isShowOption
        ? 'font-bold border options'
        : 'hidden'
      }>
        <p className='flex items-center text-white'>
          <RiAddFill color='white' className='mr-2'/>
          Create Festival
          </p>
          <p className='flex items-center text-white'>
          <RiAddFill color='white' className='mr-2'/>
          Create Anon Festival
          </p>
        <p className='flex items-center text-white'>
        <RiAddFill color='white' className='mr-2'/>
          Create Ranking
          </p>
      </div>
      <MdAddCircleOutline size={80} color='white'/>
    </button>
    </>

  )
}