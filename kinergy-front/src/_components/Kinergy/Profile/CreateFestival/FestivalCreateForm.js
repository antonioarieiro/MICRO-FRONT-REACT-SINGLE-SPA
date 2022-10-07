import React from 'react';
import CancelButton from '../../Buttons/CancelButton';
import { Toast } from 'flowbite-react';
import '../UserProfile.scss';
export default function FestivalCreateForm() {
  const [isAnon, setIsAnon] = React.useState('');
  return (
    <>
      <div className='w-full flex flex-col justify-center mx-auto'>
        <div className='flex items-center m-4'>
          <Toast style={{ 'minWidth': '70%' }}>
            <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-orange-100 text-orange-500 dark:bg-orange-700 dark:text-orange-200">
              !
            </div>
            <div className="ml-3 text-sm font-bold text-red-700">
            Remember to pay attention to the category and details of the festival.
            </div>
            <Toast.Toggle />
          </Toast>
        </div>
        <div className='flex flex-col items-center justify-around w-full'>
          <div className='flex movie-form'>
            <div className='flex flex-col'>
              <label htmlFor="title" className='flex items-center justify-center mb-2'>
                Festival Title
              </label>
              <input className='text-black font-bold' id="title" type="text" placeholder='insert movie title' />
            </div>
            <div className='flex flex-col ml-4'>
              <label htmlFor="title" className='flex items-center justify-center mb-2'>
                Time Duration
              </label>
              <select
                className='text-black font-bold'
              >
                <option value="1">1H</option>
                <option value="2">1D</option>
                <option value="2">2D</option>
                <option value="2">3D</option>
                <option value="2">1S</option>
              </select>
            </div>
          </div>
          <div className='flex movie-form'>
            <div className='flex flex-col area'>
              <label htmlFor="title" className='flex items-center justify-center mb-2'>
                Description
              </label>
              <textarea className='text-black font-bold flex items-center h-32 p-4' id="title" type="text" placeholder='insert movie title' />
            </div>
          </div>
          <div className='flex movie-form'>
            <div className='flex flex-col'>
              <label htmlFor="categorie" className='flex items-center justify-center mb-2'>
                Categorie
              </label>
              <select id="categorie" className='p-2 text-black font-bold'>
                <option>Categories</option>
              </select>
            </div>
            <div className='flex flex-col ml-4'>
              <label htmlFor="title" className='flex items-center justify-center mb-2'>
                Min-entry
              </label>
              <input className='text-black font-bold' id="title" type="text" placeholder='insert movie title' />
            </div>
          </div>
          <div className='flex flex-col w-[31%]'>
              <label htmlFor="type" className='flex items-center justify-center mb-2'>
                Festival Type
              </label>
             <select
             id="type"
             className='p-4 text-black font-bold'
             onChange={(event) => {setIsAnon(event.target.value)}}
             >
              <option value="common" className='p-2'>Common Festival</option>
              <option value="anon" className='p-2'>Anon Festival</option>
             </select>
            </div>
            <div className={
              isAnon === 'anon'
              ? 'border p-4 mt-4 mb-4 font-bold text-xl'
              : 'hidden'
            }
            >
              {
                isAnon === 'anon' &&
                'When creating an anonymous festival remember that votes will be encrypted.'
              }
            </div>
          <div className='flex items-center mt-2 mb-4'>
            <CancelButton text="cancel" />
            <button className="movie-btn">
              Upload Movie
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
