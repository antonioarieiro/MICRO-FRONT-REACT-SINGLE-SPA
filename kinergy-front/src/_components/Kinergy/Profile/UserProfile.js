import React from 'react';
import UserTabs from './Tabs/UserTabs';
import DashBoard from './Dashboard/Dashboard';
import MyFestivalsErankings from './MyFestivalsErankings/MyFestivalsErankings';
import UploadMovies from './UploadMovies/UploadMovies';
import CreateFestival from './CreateFestival/CreateFestival';
import Ranking from './Ranking/Ranking';
export default function UserProfile() {
  const [currentOption, setCurrentOption] = React.useState('Dashboard')
  return (
    <>
      <div className='w-full h-full flex flex-col text-white'>
        <UserTabs currentOption={currentOption} setCurrentOption={setCurrentOption} />
        {
          currentOption === 'Dashboard' &&
          <DashBoard />
        }
          {
          currentOption === 'Festivals & Rankings' &&
          <MyFestivalsErankings />
        }
         {
          currentOption === 'Upload Movie' &&
          <UploadMovies />
        }
        {
          currentOption === 'Create Festival' &&
          <CreateFestival />
        }
          {
          currentOption === 'Create Ranking' &&
          <Ranking />
        }
      </div>
    </>
  )
}