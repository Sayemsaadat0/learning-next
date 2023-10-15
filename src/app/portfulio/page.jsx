import Image from 'next/image';
import React from 'react';
import app from '../../../public/app.png'
import web from '../../../public/web.png'
import illust from '../../../public/illust.png'
import Link from 'next/link';

const Portfulio = () => {
    return (
        <div>
            <h2 className='mt-10'>Choose a gallary</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 lg:grid-cols-4 mb-20 mt-4'>
                <Link className='relative' href='/portfulio/illustrations'>
                    <Image className='border-4 border-[#35bdcd]  rounded-sm opacity-80' src={illust} alt='illust'></Image>
                    <h3 className='text-4xl font-bold text-gray-600 absolute hover:text-[#35bdcd] right-4 bottom-4 '>Illustrator</h3>
                </Link>
                <Link className='relative' href='/portfulio/websites'>
                    <Image className='border-4 border-[#35bdcd]  rounded-sm opacity-80' src={web} alt='illust'></Image>
                    <h3 className='text-4xl font-bold text-gray-600 absolute hover:text-[#35bdcd] right-4 bottom-4 '>Web Sites</h3>
                </Link>
                <Link className='relative' href='/portfulio/applications'>
                    <Image className='border-4 border-[#35bdcd]  rounded-sm opacity-80' src={app} alt='illust'></Image>
                    <h3 className='text-4xl font-bold text-gray-400 absolute hover:text-[#35bdcd] right-4 bottom-4 '>Apps</h3>
                </Link>
            </div>
        </div>
    );
};

export default Portfulio;