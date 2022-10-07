import React from 'react';
import FestivalInformations from './FestivalDetails/FestivalInformations';
import FestivalBanner from './FestivalDetails/FestivalBanner';
export default function FestivalDetails() {
  return (
    <>
    <div className='flex flex-col w-full'>
      <FestivalBanner />
      <FestivalInformations />
    </div>
    </>
  );
}
