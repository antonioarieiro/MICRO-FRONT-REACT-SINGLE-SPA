import React from 'react';
import { _web3 } from '../../../../_service/Web3Storage';
import CancelButton from '../../Buttons/CancelButton';
import { Toast } from 'flowbite-react';
import '../UserProfile.scss';
export default function UploadMovieForm() {
  const [type, setType] = React.useState('1');
  const [fileInput, setFile] = React.useState([]);
  const newType = (e) => {
    setType(e.target.value)
  }

  return (
    <>
      <div className='w-full flex flex-col justify-center mx-auto'>
        <div className='flex items-center m-4'>
          <Toast style={{ 'minWidth': '60%' }}>
            <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-orange-100 text-orange-500 dark:bg-orange-700 dark:text-orange-200">
              !
            </div>
            <div className="ml-3 text-sm font-bold text-red-700">
              Failure to copyright and inappropriate content can lead to irreversible punishments.
            </div>
            <Toast.Toggle />
          </Toast>
        </div>
        <div className='flex flex-col items-center justify-around w-full'>
          <div className='flex movie-form'>
            <div className='flex flex-col'>
              <label htmlFor="title" className='flex items-center justify-center'>
                Title
              </label>
              <input className='text-black font-bold' id="title" type="text" placeholder='insert movie title' />
            </div>
            <div className='flex flex-col ml-4'>
              <label htmlFor="title" className='flex items-center justify-center'>
                Type
              </label>
              <select
                className='text-black font-bold'
                onChange={newType}
              >
                <option value="1">INSERT URL</option>
                <option value="2">UPLOAD FILE</option>
              </select>
            </div>
          </div>
          <div className='flex movie-form'>
            <div className='flex flex-col'>
              <label htmlFor="title" className='flex items-center justify-center'>
                Description
              </label>
              <input className='text-black font-bold' id="title" type="text" placeholder='insert movie title' />
            </div>
            <div className='flex flex-col ml-4'>
              <label htmlFor="title" className='flex items-center justify-center'>
                Categorie
              </label>
              <input className='text-black font-bold' id="title" type="text" placeholder='insert movie title' />
            </div>
          </div>
          <div className='flex movie-form'>
            <div className='flex flex-col'>
              <label htmlFor="title" className='flex items-center justify-center'>
                Author
              </label>
              <input className='text-black font-bold' id="title" type="text" placeholder='insert movie title' />
            </div>
            <div className='flex flex-col ml-4'>
              <label htmlFor="title" className='flex items-center justify-center'>
                Age group
              </label>
              <input className='text-black font-bold' id="title" type="text" placeholder='insert movie title' />
            </div>
          </div>
          <div className='flex flex-col movie-form w-[70%]'>
            <label htmlFor="title" className='flex items-center justify-center'>
              {type === '1' ? 'Insert URL' : 'Select File'}
            </label>
            <input onChange={(event) => { setFile(event.target) }} className='text-black font-bold' id="title" type={type === '1' ? 'text' : 'file'} placeholder={type === '1' ? 'Insert URL' : 'Select File'} />
          </div>
          <div className='flex items-center mt-2 mb-4'>
            <CancelButton text="cancel" />
            <button className="movie-btn" onClick={() => { _web3.uploadNewFile(fileInput) }}>
              Upload Movie
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
