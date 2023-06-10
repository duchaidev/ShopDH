import React from 'react';
import IconCart from './../header/IconCart';
import { NavLink } from 'react-router-dom';

const ItemProduct = ({ image, slugProduct, title, author, slugAuthor, price }) => {
    return (
        <div className='transition-all aspect-square group hover:bg-blue2'>
            <NavLink to={slugProduct}>
                <img src={image} alt="" className='object-cover w-full aspect-[7/5] cursor-pointer group-hover:opacity-80 transition-all' />
            </NavLink>
            <div className='flex flex-col gap-2 p-2 scroll-px-32'>
                <NavLink to={slugProduct} className='text-[14px] font-semibold  cursor-pointer'>{title}</NavLink>
                <NavLink to={slugAuthor} className='cursor-pointer text-gray1'>{author}</NavLink>
                <div className='flex justify-end gap-3'>
                    <button><IconCart width={18} height={18}></IconCart></button>
                    <span className='flex items-end p-2 rounded-md bg-blue3 max-w-max'>
                        <svg width="8" height="10" viewBox="0 0 6 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.5 0C4.22344 0 4 0.223438 4 0.5H3.5C3.22344 0.5 3 0.723437 3 1C3 1.27656 3.22344 1.5 3.5 1.5H4V2.26719C3.70625 2.09687 3.36406 2 3 2C1.89531 2 1 2.89531 1 4C1 5.10469 1.89531 6 3 6C3.38281 6 3.74063 5.89219 4.04375 5.70625C4.12188 5.87969 4.29688 6 4.5 6C4.77656 6 5 5.77656 5 5.5V1.5C5.27656 1.5 5.5 1.27656 5.5 1C5.5 0.723437 5.27656 0.5 5 0.5C5 0.223438 4.77656 0 4.5 0ZM2 4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3C3.26522 3 3.51957 3.10536 3.70711 3.29289C3.89464 3.48043 4 3.73478 4 4C4 4.26522 3.89464 4.51957 3.70711 4.70711C3.51957 4.89464 3.26522 5 3 5C2.73478 5 2.48043 4.89464 2.29289 4.70711C2.10536 4.51957 2 4.26522 2 4ZM0.5 6.5C0.223438 6.5 0 6.72344 0 7C0 7.27656 0.223438 7.5 0.5 7.5H5.5C5.77656 7.5 6 7.27656 6 7C6 6.72344 5.77656 6.5 5.5 6.5H0.5Z" fill="black" />
                        </svg>
                        <span className='text-[14px] font-medium'>{price}</span>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default ItemProduct;