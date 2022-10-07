import React from 'react';
import Options from '../../_components/Kinergy/Home/Options';
import ShowCurrentSelectedOption from '../../_components/Kinergy/Home/ShowCurrentSelectedOption';
import './Home.scss';

export default function Home() {
    return (
        <>
            <div className='w-full home-component flex flex-col'>
                <Options />
                <ShowCurrentSelectedOption />
            </div>
        </>
    )
}