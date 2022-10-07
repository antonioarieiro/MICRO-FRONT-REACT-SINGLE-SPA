import React from 'react';
import CurrentOption from './CurrentOption';
import { Breadcrumb } from 'flowbite-react';
import './Options.scss';
import KineContext from '../../../_context/KineContext';

export default function ShowCurrentSelectedOption() {
  const { currentSelectedOption } = React.useContext(KineContext);
  return (
    <>
      <div className="flex flex-col  mx-auto justify-center w-[95%] mt-8 current-selected p-4">
        <Breadcrumb className='text-white'>
          <Breadcrumb.Item
          >
            <span className='text-white flex items-center cursor-pointer'>
              Home
            </span>
          </Breadcrumb.Item>
          <Breadcrumb.Item >
            <span className='text-white cursor-pointer selected'>
              {currentSelectedOption}
            </span>
          </Breadcrumb.Item>
        </Breadcrumb>
        <CurrentOption />
      </div>
    </>
  );
}
