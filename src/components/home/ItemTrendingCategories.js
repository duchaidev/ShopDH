import React from 'react';
import { NavLink } from 'react-router-dom';

const ItemTrendingCategories = ({ url, image, title }) => {
    return (
        <NavLink to={url} className='aspect-[19/20] bg-blue2 flex flex-col items-center gap-[7%]'>
            <div className='w-[80%] mt-[4%]'>
                <img src={image} alt="" className='object-cover w-full aspect-square' />
            </div>
            <span className='text-[16px] font-semibold text-center w-[60%] pb-4'>{title}</span>
        </NavLink>
    );
};

export default ItemTrendingCategories;