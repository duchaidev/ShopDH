import React from 'react';
import { NavLink } from 'react-router-dom';
import ItemProduct from '../../components/home/ItemProduct';

const dataPopularCode =
    [
        {
            id: 1,
            image: "21011598.jpg",
            slugProduct: "/",
            title: "Seppo - Corporate One Page HTML Template",
            author: "LeDucHai",
            slugAuthor: "/",
            price: "140.000"
        },
        {
            id: 2,
            image: "21011598.jpg",
            slugProduct: "/",
            title: "Seppo - Corporate One Page HTML Template",
            author: "LeDucHai",
            slugAuthor: "/",
            price: "140.000"
        },
        {
            id: 3,
            image: "21011598.jpg",
            slugProduct: "/",
            title: "Seppo - Corporate One Page HTML Template",
            author: "LeDucHai",
            slugAuthor: "/",
            price: "140.000"
        },
        {
            id: 4,
            image: "21011598.jpg",
            slugProduct: "/",
            title: "Seppo - Corporate One Page HTML Template",
            author: "LeDucHai",
            slugAuthor: "/",
            price: "140.000"
        },
        {
            id: 5,
            image: "21011598.jpg",
            slugProduct: "/",
            title: "Seppo - Corporate One Page HTML Template",
            author: "LeDucHai",
            slugAuthor: "/",
            price: "140.000"
        },
    ];
const PopularGraphics = () => {
    return (
        <div className="mt-16 px-[5%] pb-5">
            <div className="flex justify-between">
                <h2 className="text-[22px] font-bold mb-2">Popular Graphics</h2>
                <NavLink to="/" className="flex items-end gap-4 group">
                    <span className="transition-all group-hover:text-blue6">Explore Graphics</span>
                    <svg width="8" height="12" viewBox="0 0 8 12" className="transition-all group-hover:text-blue6 stroke-gray1 group-hover:stroke-blue6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L6 6L1 11" strokeWidth="2" />
                    </svg>
                </NavLink>
            </div>
            <div className="grid w-full grid-cols-5 gap-6 mt-5">
                {dataPopularCode.map((item, index) => (
                    <ItemProduct key={item.id} image={item.image} slugProduct={item.slugAuthor} title={item.title} author={item.author} slugAuthor={item.slugAuthor} price={item.price} ></ItemProduct>
                ))}
            </div>
        </div>
    );
};

export default PopularGraphics;