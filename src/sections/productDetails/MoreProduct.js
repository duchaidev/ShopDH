import React from 'react';
import ItemProduct from '../../components/home/ItemProduct';
import { NavLink } from 'react-router-dom';

const dataPopularCode =
    [
        {
            id: 1,
            image: "https://images.unsplash.com/photo-1666919643134-d97687c1826c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
            slugProduct: "/",
            title: "Seppo - Corporate One Page HTML Template",
            author: "LeDucHai",
            slugAuthor: "/",
            price: "140.000"
        },
        {
            id: 2,
            image: "https://images.unsplash.com/photo-1666919643134-d97687c1826c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
            slugProduct: "/",
            title: "Seppo - Corporate One Page HTML Template",
            author: "LeDucHai",
            slugAuthor: "/",
            price: "140.000"
        },
        {
            id: 3,
            image: "https://images.unsplash.com/photo-1666919643134-d97687c1826c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
            slugProduct: "/",
            title: "Seppo - Corporate One Page HTML Template",
            author: "LeDucHai",
            slugAuthor: "/",
            price: "140.000"
        },
        {
            id: 4,
            image: "https://images.unsplash.com/photo-1666919643134-d97687c1826c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
            slugProduct: "/",
            title: "Seppo - Corporate One Page HTML Template",
            author: "LeDucHai",
            slugAuthor: "/",
            price: "140.000"
        },
        {
            id: 5,
            image: "https://images.unsplash.com/photo-1666919643134-d97687c1826c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
            slugProduct: "/",
            title: "Seppo - Corporate One Page HTML Template",
            author: "LeDucHai",
            slugAuthor: "/",
            price: "140.000"
        },
    ];
const MoreProduct = () => {
    return (
        <div className="pb-5 mt-28">
            <div className="flex justify-between">
                <h2 className="text-[22px] font-bold mb-2">You May Also Like</h2>
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

export default MoreProduct;