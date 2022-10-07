import React from 'react';
import KineContext from '../../../_context/KineContext';
import DefaultButton from '../Buttons/DefaultButton';
import AccountOptions from './AccountOptions';
import Login from '../../Modals/Login/Login';
import Logo from '../../../_assets/Kinergy.png';
import { Link } from 'react-router-dom';
import { Tooltip } from 'flowbite-react';
import './Header.scss';

export default function Header(props) {
    const { changeMenu, menu, user, setUser, setCurrentApp } = React.useContext(KineContext);
    const [login, setLogin] = React.useState(false);
    const [show, setShow] = React.useState(false);

    const showModal = () => {
        setLogin(true);
        setShow(true);
    }
    
    return (
        <>
            {
                login &&
                <Login show={show} setShow={setShow} />
            }
            <div className='flex justify-between header h-20'>
                <div className='flex items-center ml-8 mt-3'>
                    {
                        menu
                            ? <Tooltip
                                content='Close Menu'
                                style='light'
                                placement='bottom'
                            >
                                <span
                                    className="material-symbols-outlined text-[#F361AA] mr-4 cursor-pointer"
                                    onClick={() => { changeMenu() }}
                                >
                                    menu_open
                                </span>
                            </Tooltip>
                            : <Tooltip
                                content='Open Menu'
                                style='light'
                                placement='bottom'
                            >
                                <span
                                    className="material-symbols-outlined cursor-pointer text-[#F361AA] mr-4"
                                    onClick={() => { changeMenu() }}
                                >
                                    menu
                                </span>
                            </Tooltip>
                    }
                    <Link to="/">
                        <Tooltip
                            content='Home'
                            style='dark'
                            placement='bottom'
                        >
                            <img src={Logo} alt="logo" width={100} />
                        </Tooltip>
                    </Link>
                </div>
                <div className='flex items-center text-center font-bold text-white'>
                    
                        <p className='cursor-pointer hover:underline hover:-translate-y-1 transition ease-in-out delay-150'>Kine About</p>
                        <p className='ml-2 cursor-pointer hover:underline hover:-translate-y-1 transition ease-in-out delay-150'>Status</p>
                    
                </div>
                <div className='flex items-center mr-8'>
                    {
                        user && user !== undefined && user.address &&
                        <span className="material-symbols-outlined text-white m-4 cursor-pointer flex justify-end hover:text-pink-500">
                            <span className='animate-ping absolute boll'></span>
                            notifications
                        </span>
                    }
                    <div>
                        {
                            user && user !== undefined && user.address
                                ? <AccountOptions setUser={setUser} showModal={showModal} setCurrentApp={setCurrentApp}/>
                                : <DefaultButton text="Get Started" action={showModal} />
                        }
                    </div>
                </div>
            </div>
        </>
    );
}
