import React from 'react';
import UploadMoviesForm from './UploadMovieForm';
import '../UserProfile.scss';
export default function UploadMovies() {
  return (
    <>
    <div className='flex flex-col w-full movies items-center justify-center mx-auto mt-4'>

      <UploadMoviesForm /> 
    </div>
    </>
  )
}