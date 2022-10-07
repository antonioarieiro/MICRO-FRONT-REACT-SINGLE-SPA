import React from 'react';
import FestivalCard from './FestivalsCards/FestivalCards';
import FestivalCategories from './Categories/FestivalCategories';

export default function Festivals() {
  return (
    <>
      <div className="flex flex-col">
        <FestivalCategories />
        <FestivalCard />
      </div>
    </>
  );
}
