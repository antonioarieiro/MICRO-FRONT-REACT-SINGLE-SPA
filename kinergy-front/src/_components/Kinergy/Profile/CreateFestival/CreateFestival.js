import React from 'react';
import FestivalCreateForm from './FestivalCreateForm';
import '../UserProfile.scss';

export default function CreateFestival() {
  return (
    <div className='flex flex-col w-full festival-create items-center justify-center mx-auto mt-4'>
    <FestivalCreateForm /> 
  </div>
  );
}
