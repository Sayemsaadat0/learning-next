"use client"
import { useContext } from 'react';
import { BsSun, BsMoonFill } from 'react-icons/bs';
import { ThemeContext } from '../../../context/ThemeContext';

const Darkmood = () => {
    const { toggle, mode } = useContext(ThemeContext)
    return (
        <div onClick={toggle} className='flex border relative items-center rounded-full px-1 py-1 gap-2'>
            <div><BsSun className='text-amber-500'></BsSun> </div>
            <div><BsMoonFill className='text-black'></BsMoonFill> </div>
            <div style={mode === 'light' ? { left: '2px' } : { right: '2px' }} className='w-5 h-5 cursor-pointer absolute bg-[#35bccd] rounded-full'></div>
        </div>
    );
};

export default Darkmood;



// steps to make darktheme 
/* 
1. make a folder where will be the light mood and dark mood icon and also a rounded shape thing that will wrap the icons 
2. make a Context api that will help to wrap the whole website and in that api make a function name toggle and pass the mode 
3.pass the value in the button onclick
*/