import React from 'react';

const SectionTitle = ({ title }) => {
    return (
        <div className='border-b-2'>
            <h2 className='border-b-4 w-36 border-b-black'>{title}</h2>
        </div>
    );
};

export default SectionTitle;