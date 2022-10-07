import React from 'react';
import KineContext from '../../../_context/KineContext';
import './Options.scss';

const options = ['Festivals', 'Rankings', 'AnonFestivals']
export default function Options() {
  const { currentSelectedOption, setCurrentOption } = React.useContext(KineContext);
  return (
    <>
      <div className='w-full h-20 flex flex-col items-center justify-center'>
        <div className='flex font-bold text-white p-4  mt-12 header-main min-w-[30%] items-center justify-center'>
          {
            options.map((value, index) => (
              <p
                className={
                  value === currentSelectedOption
                  ? 'selected-option cursor-pointer mr-2'
                  : 'option cursor-pointer mr-2'
                }
                key={index}
                onClick={() => {setCurrentOption(value)}}
              >
                {value}
              </p>
            ))
          }
        </div>
      </div>
    </>
  );
}
