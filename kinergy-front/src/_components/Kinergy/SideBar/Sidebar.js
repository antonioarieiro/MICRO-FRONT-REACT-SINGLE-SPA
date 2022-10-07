import React from 'react';
import { MdOutlineFestival } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import Kinergy from '../../../_assets/Logo.png'
import { Tooltip } from 'flowbite-react';
import { BiMoviePlay } from 'react-icons/bi';
import { AiOutlineHome } from 'react-icons/ai';
import { TbStars } from 'react-icons/tb';
import KineContext from '../../../_context/KineContext';
import './Sidebar.scss';

export default function SideBar() {
  const { menu, setCurrentApp } = React.useContext(KineContext);
  const navigate = useNavigate()

  const changeApp = (_social) => {
    navigate(_social);
    setCurrentApp(true);
}
  return (
    <>
    <div className='hidden md:flex h-full'>
    <div className='w-full min-h-full side justify-center flex flex-col'>
    <div className='pt-4 ml-4 flex items-center text-white cursor-pointer' onClick={() => {navigate('/')}}>
          <Tooltip
            content='Home'
            style='dark'
            placement='right'
          >
            <AiOutlineHome size={30} color='white' className='mr-2' />
          </Tooltip>
          {
            menu && <span className='font-bold text-white hover:text-pink-500'>Home</span>
          }
        </div>
        <div className='pt-4 ml-4 flex items-center text-white cursor-pointer'>
          <Tooltip
            content='Festivals'
            style='dark'
            placement='right'
          >
            <MdOutlineFestival size={30} color='white' className='mr-2' />
          </Tooltip>
          {
            menu && <span className='font-bold text-white hover:text-pink-500'>Festivals</span>
          }
        </div>
        <div className='mt-4 ml-4 flex items-center text-white cursor-pointer'>
          <Tooltip
            content='Movies'
            style='dark'
            placement='right'
          >
            <BiMoviePlay size={30} color='white' className='mr-2' />
          </Tooltip>
          {
            menu && <span className='font-bold text-white hover:text-pink-500'>Movies</span>
          }
        </div>
        <div className='mt-4 ml-4 flex items-center text-white cursor-pointer'>
          <Tooltip
            content='Rankings'
            style='dark'
            placement='right'
          >
            <TbStars size={30} color='white' className='mr-2' />
          </Tooltip>
          {
            menu && <span className='font-bold text-white hover:text-pink-500'>Rankings</span>
          }
        </div>
        <div
        onClick={() => {changeApp('/social')}}
        className='mt-4 ml-4 flex items-center text-white cursor-pointer'>
          <Tooltip
            content='Kinergy Social'
            style='dark'
            placement='right'
          >
            <img src={Kinergy} alt='img' width={50} className='mr-2' />
          </Tooltip>
          {
            menu && <span
            className='font-bold text-white hover:text-pink-500'
            onClick={() => {changeApp('/social')}}
            >Social Page</span>
          }
        </div>
      </div>      
    </div>
    </>
  )
}