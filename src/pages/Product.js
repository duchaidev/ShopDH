import React, { useState } from 'react';
import LayoutMain from '../layouts/LayoutMain';
import IconStar from './../components/icon/IconStar';
import IconHeart from './../components/icon/IconHeart';
import { NavLink } from 'react-router-dom';
import IconBootstrap from '../components/icon/IconBootstrap';
import IconDown from './../components/header/IconDown';
import IconTick from './../components/icon/IconTick';
import ItemProduct from '../components/home/ItemProduct';
import Popular from '../module/homePage/Popular';

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
const Product = () => {
    const [show, setShow] = useState(false);
    const [isActive, setIsActive] = useState(1);
    const [valueSort, setValueSort] = useState('');
    return (
        <LayoutMain>
            <div className=''>
                {/*-----------------------------------------title-----------------------------------------*/}
                <div className='flex flex-col gap-6 py-[40px] px-[5%] bg-blue2'>
                    <div className='flex items-center gap-1 text-[13px] font-bold'>
                        <span>All Items/</span>
                        <span>Webs Template</span>
                    </div>
                    <h1 className='text-[24px] text-gray2'>WebSite Templates</h1>
                    <span className='text-[14px] text-gray1'>Email, admin, landing page and website templates</span>
                </div>
                {/*-----------------------------------------contents-----------------------------------------*/}
                <div className='px-[5%] grid grid-cols-4 gap-10 pb-10 bg-grayFC'>
                    {/*-----------------------------------------filters box-----------------------------------------*/}
                    <div className='col-span-1 pt-6 border-r border-blue1'>
                        <div className='flex items-center justify-between pb-6 pr-5 border-b border-blue1'>
                            <div className='flex items-center gap-3'>
                                {/*-----------------------------------------Icon filter-----------------------------------------*/}
                                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.75 18.6033C11.4273 19.1917 12.2332 19.623 13.1069 19.8645C13.9806 20.106 14.8993 20.1516 15.7937 19.9976C16.6881 19.8437 17.5349 19.4943 18.2702 18.9758C19.0055 18.4574 19.6102 17.7833 20.0386 17.0046C20.467 16.2258 20.7079 15.3627 20.7433 14.4802C20.7786 13.5977 20.6074 12.7189 20.2426 11.9101C19.8778 11.1013 19.3289 10.3836 18.6373 9.81112C17.9457 9.23862 17.1294 8.82627 16.25 8.60516" stroke="black" strokeWidth="1.5" />
                                    <path d="M7.75 1.60754C8.9698 0.923506 10.3982 0.678401 11.7851 0.915134C13.1721 1.15187 14.4292 1.85535 15.3364 2.90245C16.2437 3.94955 16.7432 5.27354 16.7477 6.64267C16.7521 8.01179 16.2611 9.33882 15.3607 10.3915C14.4602 11.4441 13.2077 12.1553 11.8223 12.4005C10.437 12.6457 9.00701 12.4093 7.7828 11.7328C6.55859 11.0562 5.61811 9.9826 5.126 8.69979C4.63389 7.41699 4.6215 6.00676 5.091 4.71597" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
                                    <path d="M0.903 17.7204C0.951887 17.804 1.0173 17.8774 1.09547 17.9363C1.17364 17.9953 1.26303 18.0386 1.35848 18.0638C1.45394 18.089 1.55357 18.0955 1.65166 18.0832C1.74974 18.0708 1.84434 18.0396 1.93 17.9915C2.01565 17.9434 2.09068 17.8794 2.15076 17.803C2.21085 17.7266 2.25479 17.6394 2.28007 17.5464C2.30536 17.4534 2.31147 17.3565 2.29807 17.2612C2.28467 17.1659 2.25202 17.0742 2.202 16.9912L0.903 17.7204ZM5 19.2528C4.81236 19.1883 4.60606 19.199 4.4265 19.2824C4.24693 19.3658 4.1088 19.5152 4.0425 19.6976C3.9762 19.88 3.98715 20.0806 4.07295 20.2552C4.15874 20.4298 4.31236 20.5641 4.5 20.6286L5 19.2528ZM12 14.4389C12 17.2586 9.65 19.5435 6.75 19.5435V21.0019C8.54021 21.0019 10.2571 20.3105 11.523 19.0797C12.7888 17.8489 13.5 16.1796 13.5 14.4389H12ZM1.5 14.4389C1.49994 13.3071 1.88659 12.2074 2.59921 11.3125C3.31183 10.4176 4.31004 9.77819 5.437 9.49481L5.063 8.08304C3.61401 8.4472 2.33049 9.26906 1.41407 10.4195C0.497649 11.5699 0.000246457 12.9838 0 14.4389H1.5ZM11.656 12.6169C11.878 13.1808 12 13.7953 12 14.4389H13.5C13.5 13.6144 13.343 12.8249 13.057 12.0957L11.656 12.6169ZM2.202 16.9912C1.74063 16.2159 1.49844 15.3347 1.5 14.4389H0C0 15.6329 0.329 16.7549 0.903 17.7204L2.202 16.9912ZM6.75 19.5435C6.15391 19.5441 5.56208 19.4458 5 19.2528L4.5 20.6286C5.22272 20.8765 5.98363 21.0027 6.75 21.0019V19.5435Z" fill="black" />
                                </svg>
                                <span className='font-semibold text-[18px]'>Filters</span>
                            </div>
                            {/*-----------------------------------------Icon left-----------------------------------------*/}
                            <svg width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M0.381776 9.33525C0.137325 9.11613 0 8.81899 0 8.50915C0 8.19932 0.137325 7.90218 0.381776 7.68306L7.75815 1.07314C7.87844 0.961546 8.02232 0.872531 8.18141 0.811293C8.34049 0.750056 8.51159 0.717823 8.68473 0.716475C8.85787 0.715127 9.02957 0.744691 9.18982 0.803441C9.35007 0.862192 9.49566 0.948953 9.61809 1.05866C9.74052 1.16837 9.83734 1.29883 9.9029 1.44243C9.96846 1.58603 10.0015 1.73989 9.99995 1.89503C9.99845 2.05018 9.96248 2.2035 9.89414 2.34606C9.8258 2.48861 9.72646 2.61755 9.60192 2.72533L3.14743 8.50915L9.60192 14.293C9.83945 14.5134 9.97088 14.8085 9.96791 15.1149C9.96493 15.4212 9.8278 15.7143 9.58604 15.9309C9.34428 16.1476 9.01723 16.2705 8.67535 16.2731C8.33346 16.2758 8.00408 16.158 7.75815 15.9452L0.381776 9.33525Z" fill="#4B4B4B" />
                            </svg>
                        </div>
                        <div className='flex flex-col gap-4 pt-6'>
                            <span className='text-sm font-bold'>Refine by</span>
                            {/*-----------------------------------------filters category-----------------------------------------*/}
                            <div className='flex flex-col gap-3 pb-6 border-b border-blue1'>
                                <span className='text-sm font-bold text-gray1'>Categories</span>
                                <div className='flex flex-col gap-3 pr-5'>
                                    <div className='flex items-center justify-between'>
                                        <div className='flex items-center gap-3'>
                                            <input type="checkbox" className='w-[25px] h-[25px]' />
                                            <span className='font-bold text-gray2 text-[14px]'>Admin Templates</span>
                                        </div>
                                        <span className='font-semibold text-[14px]'>300</span>
                                    </div>
                                    <div className='flex items-center justify-between'>
                                        <div className='flex items-center gap-3'>
                                            <input type="checkbox" className='w-[25px] h-[25px] rounded-lg' />
                                            <span className='font-bold text-gray2 text-[14px]'>Email Template</span>
                                        </div>
                                        <span className='font-semibold text-[14px]'>300</span>
                                    </div>
                                    <div className='flex items-center justify-between'>
                                        <div className='flex items-center gap-3'>
                                            <input type="checkbox" className='w-[25px] h-[25px] rounded-lg' />
                                            <span className='font-bold text-gray2 text-[14px]'>Landing Page Template</span>
                                        </div>
                                        <span className='font-semibold text-[14px]'>300</span>
                                    </div>
                                </div>
                            </div>
                            {/*-----------------------------------------filters Properties-----------------------------------------*/}
                            <div className='flex flex-col gap-3 pb-6'>
                                <span className='text-sm font-bold text-gray1'>Properties</span>
                                <div className='flex flex-col gap-3 pr-5'>
                                    <div className='flex items-center justify-between'>
                                        <div className='flex items-center gap-3'>
                                            <input type="checkbox" className='w-[25px] h-[25px]' />
                                            <span className='font-bold text-gray2 text-[14px]'>Admin Templates</span>
                                        </div>
                                        <span className='font-semibold text-[14px]'>300</span>
                                    </div>
                                    <div className='flex items-center justify-between'>
                                        <div className='flex items-center gap-3'>
                                            <input type="checkbox" className='w-[25px] h-[25px] rounded-lg' />
                                            <span className='font-bold text-gray2 text-[14px]'>Email Template</span>
                                        </div>
                                        <span className='font-semibold text-[14px]'>300</span>
                                    </div>
                                    <div className='flex items-center justify-between'>
                                        <div className='flex items-center gap-3'>
                                            <input type="checkbox" className='w-[25px] h-[25px] rounded-lg' />
                                            <span className='font-bold text-gray2 text-[14px]'>Landing Page Template</span>
                                        </div>
                                        <span className='font-semibold text-[14px]'>300</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*-----------------------------------------product-----------------------------------------*/}
                    <div className='flex flex-col col-span-3 gap-5'>
                        {/*-----------------------------------------product head-----------------------------------------*/}
                        <div className='flex items-center mt-5 gap-14'>
                            <div className='flex items-center gap-3'>
                                <IconStar></IconStar>
                                <span>Trending:</span>
                                <NavLink to="/" className="flex items-center gap-2 px-3 py-1 rounded-full shadow-md">
                                    <IconBootstrap></IconBootstrap>
                                    <span>Bootstrap</span>
                                </NavLink>
                                <NavLink to="/" className="flex items-center gap-2 px-3 py-1 rounded-full shadow-md">
                                    <IconBootstrap></IconBootstrap>
                                    <span>Bootstrap</span>
                                </NavLink>
                            </div>
                            <div className='flex items-center gap-3'>
                                <IconHeart></IconHeart>
                                <span>Popular:</span>
                                <NavLink to="/" className="flex items-center gap-2 px-3 py-1 rounded-full shadow-md">
                                    <IconBootstrap></IconBootstrap>
                                    <span>Bootstrap</span>
                                </NavLink>
                                <NavLink to="/" className="flex items-center gap-2 px-3 py-1 rounded-full shadow-md">
                                    <IconBootstrap></IconBootstrap>
                                    <span>Bootstrap</span>
                                </NavLink>
                                <NavLink to="/" className="flex items-center gap-2 px-3 py-1 rounded-full shadow-md">
                                    <IconBootstrap></IconBootstrap>
                                    <span>Bootstrap</span>
                                </NavLink>
                            </div>
                        </div>
                        {/*-----------------------------------------product filter-----------------------------------------*/}
                        <div className='flex items-center justify-end'>
                            <div className='relative w-[260px] h-10 flex items-center border-[2px] border-blue1 rounded-md px-3' >
                                <div className='flex items-center justify-between w-full h-full' onClick={() => { setShow(!show) }}>
                                    <span className='font-semibold text-[14px] text-gray2'>{valueSort || "Sort by Popular"}</span>
                                    <IconDown></IconDown>
                                    <input type="text" className='absolute top-0 left-0 w-full h-full bg-black opacity-0 cursor-pointer' readOnly onBlur={() => { setShow(false) }} />
                                </div>
                                <div className={`absolute left-0 w-full bg-white dropdown-content ${show ? "open" : ""} border top-[38px] border-blue1 rounded-sm text-[14px]`}>
                                    <div className='flex justify-between px-3 py-3 transition-all border-b cursor-pointer border-grayEC hover:bg-blue2' onMouseDown={() => { setValueSort("Nổi bật"); setIsActive(1) }}>
                                        <span>Nổi bật</span>
                                        <span>
                                            {isActive === 1 && <IconTick></IconTick>}
                                        </span>
                                    </div>
                                    <div className='flex justify-between px-3 py-3 transition-all border-b cursor-pointer border-grayEC hover:bg-blue2' onMouseDown={() => { setValueSort("Bán chạy"); setIsActive(2) }}>
                                        <span>Bán chạy</span>
                                        <span>{isActive === 2 && <IconTick></IconTick>}</span>
                                    </div>
                                    <div className='flex justify-between px-3 py-3 transition-all border-b cursor-pointer border-grayEC hover:bg-blue2' onMouseDown={() => { setValueSort("% Giảm giá"); setIsActive(3) }}>
                                        <span>% giảm giá</span>
                                        <span>{isActive === 3 && <IconTick></IconTick>}</span>
                                    </div>
                                    <div className='flex justify-between px-3 py-3 transition-all border-b cursor-pointer border-grayEC hover:bg-blue2' onMouseDown={() => { setValueSort("Giá cao đến thấp"); setIsActive(4) }}>
                                        <span>Giá cao đến thấp</span>
                                        <span>{isActive === 4 && <IconTick></IconTick>}</span>
                                    </div>
                                    <div className='flex justify-between px-3 py-3 transition-all cursor-pointer border-grayEC hover:bg-blue2' onMouseDown={() => { setValueSort("Giá thấp đến cao"); setIsActive(5) }}>
                                        <span>Giá thấp đến cao</span>
                                        <span>{isActive === 5 && <IconTick></IconTick>}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*-----------------------------------------product list-----------------------------------------*/}
                        <div className='grid w-full grid-cols-4 gap-6 mt-5'>
                            {dataPopularCode.map((item, index) => (
                                <ItemProduct key={item.id} image={item.image} slugProduct={item.slugAuthor} title={item.title} author={item.author} slugAuthor={item.slugAuthor} price={item.price} ></ItemProduct>
                            ))}
                        </div>
                        <div className='w-full mt-6 flexCustom'>
                            <button className='w-[320px] h-[40px] flexCustom border border-blue1 rounded-lg gap-4 hover:bg-blue1 transition-all'>
                                <span>Xem thêm 20 sản phẩm</span>
                                <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 4.86148L0 0H10L5 4.86148Z" fill="black" />
                                </svg>

                            </button>
                        </div>
                    </div>
                </div>
                <div className='pt-10'>
                    <Popular title="Popular Graphics123" explore="Explore Graphics"></Popular>
                </div>
            </div>
        </LayoutMain>
    );
};

export default Product;