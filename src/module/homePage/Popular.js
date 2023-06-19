import React from 'react';
import { NavLink } from 'react-router-dom';
import ItemProduct from '../../components/home/ItemProduct';


const Popular = ({ title, url, explore, dataPopular }) => {
    return (
        <div className="mt-20 px-[5%] pb-5">
            <div className="flex justify-between">
                <h2 className="text-[22px] font-bold mb-2">{title}</h2>
                <NavLink to={url} className="flex items-end gap-4 group">
                    <span className="transition-all group-hover:text-blue6">{explore}</span>
                    <svg width="8" height="12" viewBox="0 0 8 12" className="transition-all group-hover:text-blue6 stroke-gray1 group-hover:stroke-blue6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L6 6L1 11" strokeWidth="2" />
                    </svg>
                </NavLink>
            </div>
            <div className="grid w-full grid-cols-5 gap-6 mt-5">
                {dataPopular?.map((item, index) => (
                    <ItemProduct key={item.id} image={item.imageProduct} slugProduct={`/product-details/${item.slug}`} title={item.title} author={item.author} slugAuthor={item.slugAuthor} price={item.price} ></ItemProduct>
                ))}
            </div>
        </div>
    );
};
export default Popular;