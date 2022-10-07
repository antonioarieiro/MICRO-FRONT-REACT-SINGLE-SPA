import React from 'react';
import CreateRankingForm from './CreateRankingForm';
import '../UserProfile.scss';

export default function Ranking() {
  return (
    <div className='flex flex-col w-full ranking-create items-center justify-center mx-auto mt-4'>
    <CreateRankingForm /> 
  </div>
  );
}
