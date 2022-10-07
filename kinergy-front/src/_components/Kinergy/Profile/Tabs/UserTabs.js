import React from 'react';
import '../UserProfile.scss';
const options = ['Dashboard', 'Festivals & Rankings', 'Upload Movie', 'Create Festival']
export default function UserTabs(props) {
  const { currentOption, setCurrentOption } = props;
  return (
    <>
      <div className='flex items-center justify-around board-user justify-center mx-auto  mt-24 text-white font-bold'>
        {
          options.map((value, index) => (
            <p
              key={index}
              className={
                value === currentOption
                  ? 'board-option flex items-center justify-center selected-board'
                  : 'board-option flex items-center justify-center'
              }
              onClick={() => {setCurrentOption(value);}}
            >
              {value}
            </p>
          ))
        }
      </div>
    </>
  );
}
