import React from 'react';
import { Card } from 'flowbite-react';
import { useNavigate } from 'react-router-dom';
import '../Festival.scss';

export default function FestivalCards() {
  const navigate = useNavigate();
  return (
    <>
      <div className='mt-4 flex flex-wrap items-center'>
        <div className="max-w-sm">
          <Card >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
            </p>
            <button 
            className='btn-ranking btn-ranking font-bold flex items-center w-48'
            onClick={() => {navigate('/festival');}}
            >
              View Festival
              <svg
                className="ml-2 -mr-1 h-4 w-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </Card>
        </div>
      </div>
    </>
  );
}
