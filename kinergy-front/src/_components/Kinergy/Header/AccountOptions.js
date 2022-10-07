import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ImProfile } from 'react-icons/im';
import { TiSocialAtCircular } from 'react-icons/ti';
import { AiOutlineSetting, AiOutlineLogin } from 'react-icons/ai';
import { CgArrowsExchangeAlt } from 'react-icons/cg';
import './Header.scss';
const options = [
  {
    name: 'Profile',
    Icon: ImProfile
  },
  {
    name: 'Social Page',
    Icon: TiSocialAtCircular,
  },
  {
    name: 'Config',
    Icon: AiOutlineSetting
  },
  {
    name: 'Change Account',
    Icon: CgArrowsExchangeAlt,
  },
  {
    name: 'Exit',
    Icon: AiOutlineLogin,
  }
]
export default function AccountOptions(props) {
  const { setUser, showModal, setCurrentApp } = props;
  const [isShowOptionsUser, setIsShowOptionsUser] = React.useState(false);
  const navigate = useNavigate();

  const changeApp = (_social) => {
      navigate(_social);
      setCurrentApp(true);
  }

  const goToOption = (_target) => {
    navigate(_target);
    setCurrentApp(false);
}
  return (
    <>
      <div className='flex flex-col m-4 z-50'
       onMouseEnter={() => {setIsShowOptionsUser(true)}}
      >
        <span 
        className="material-symbols-outlined text-white cursor-pointer"
       
        >
          account_circle
        </span>
        <div className={
          isShowOptionsUser
          ? 'absolute text-white mt-12 border p-4 -ml-48 menu-user w-64 z-50'
          : 'hidden'
        }
        onMouseLeave={() => {setIsShowOptionsUser(false)}}
        >
        {
          options.map((value, index) => (
            <p
            className='flex items-center cursor-pointer'
            key={index}
            onClick={() => {
             value.name === 'Exit' &&  setUser([]);
             value.name === 'Profile' && goToOption('/profile')
             value.name === 'Social Page' && changeApp('/social')
             value.name === 'Change Account' && showModal()
            }}
            >
              <span className='mr-2'>
                <value.Icon size={25}/>
              </span>
              {value.name}
            </p>
          ))
        }
        </div>
      </div>
    </>
  )
}