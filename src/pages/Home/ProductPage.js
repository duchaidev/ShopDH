import React, { useEffect, useState } from 'react';
import IconStar from '../../components/icon/IconStar';
import IconHeart from '../../components/icon/IconHeart';
import { NavLink } from 'react-router-dom';
import IconBootstrap from '../../components/icon/IconBootstrap';
import IconDown from '../../components/header/IconDown';
import IconTick from '../../components/icon/IconTick';
import ItemProduct from '../../components/home/ItemProduct';
import Popular from '../../module/homePage/Popular';
import axios from 'axios';


const ProductPage = () => {
    const [showDropDownFilter, setShowDropDownFilter] = useState(false);
    const [isActive, setIsActive] = useState(1);
    const [valueFilterDropDown, setValueFilterDropDown] = useState('');
    const [showFilters, setShowFilters] = useState(true);
    const [popular, setPopular] = useState([]);

    //-------------------------------------------Scroll leend đầu trang lần đầu tiên------------------------------------------
    useEffect(() => {
        window.scrollTo(0, 0);
        // window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);


    //-------------------------------------------Fetch Data------------------------------------------
    useEffect(() => {
        async function fetchData() {
            const popularRes = await axios.get("http://localhost:3000/popularGraphics");
            setPopular(popularRes.data)
        }
        fetchData();
    }, []);
    const handleShowFilter = () => {
        setShowFilters(!showFilters);
    }
    return (
        <div className=' mb-28'>
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
            <div className={`px-[5%]  grid-cols-4 gap-10 pb-10 bg-grayFC ${showFilters ? "grid" : "flex"}`}>
                {/*-----------------------------------------filters box-----------------------------------------*/}
                <div className='col-span-1 pt-6 border-r border-blue1'>
                    <div className={`flex items-center justify-between pb-6 pr-5 ${showFilters ? "border-b border-blue1 " : ""}`}>
                        <div className={`flex items-center gap-3`} >
                            {/*-----------------------------------------Icon filter-----------------------------------------*/}
                            <button onClick={handleShowFilter} className='flex items-center justify-center w-8 h-8 transition-all rounded-full hover:bg-blue1'>
                                <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 3.00001C4.73478 3.00001 4.48043 3.10537 4.29289 3.2929C4.10536 3.48044 4 3.73479 4 4.00001C4 4.26523 4.10536 4.51958 4.29289 4.70712C4.48043 4.89465 4.73478 5.00001 5 5.00001C5.26522 5.00001 5.51957 4.89465 5.70711 4.70712C5.89464 4.51958 6 4.26523 6 4.00001C6 3.73479 5.89464 3.48044 5.70711 3.2929C5.51957 3.10537 5.26522 3.00001 5 3.00001ZM2.17 3.00001C2.3766 2.41448 2.75974 1.90744 3.2666 1.5488C3.77346 1.19015 4.37909 0.997559 5 0.997559C5.62091 0.997559 6.22654 1.19015 6.7334 1.5488C7.24026 1.90744 7.6234 2.41448 7.83 3.00001H15C15.2652 3.00001 15.5196 3.10537 15.7071 3.2929C15.8946 3.48044 16 3.73479 16 4.00001C16 4.26523 15.8946 4.51958 15.7071 4.70712C15.5196 4.89465 15.2652 5.00001 15 5.00001H7.83C7.6234 5.58554 7.24026 6.09258 6.7334 6.45122C6.22654 6.80986 5.62091 7.00246 5 7.00246C4.37909 7.00246 3.77346 6.80986 3.2666 6.45122C2.75974 6.09258 2.3766 5.58554 2.17 5.00001H1C0.734784 5.00001 0.48043 4.89465 0.292893 4.70712C0.105357 4.51958 0 4.26523 0 4.00001C0 3.73479 0.105357 3.48044 0.292893 3.2929C0.48043 3.10537 0.734784 3.00001 1 3.00001H2.17ZM11 9.00001C10.7348 9.00001 10.4804 9.10537 10.2929 9.2929C10.1054 9.48044 10 9.73479 10 10C10 10.2652 10.1054 10.5196 10.2929 10.7071C10.4804 10.8947 10.7348 11 11 11C11.2652 11 11.5196 10.8947 11.7071 10.7071C11.8946 10.5196 12 10.2652 12 10C12 9.73479 11.8946 9.48044 11.7071 9.2929C11.5196 9.10537 11.2652 9.00001 11 9.00001ZM8.17 9.00001C8.3766 8.41448 8.75974 7.90744 9.2666 7.5488C9.77346 7.19015 10.3791 6.99756 11 6.99756C11.6209 6.99756 12.2265 7.19015 12.7334 7.5488C13.2403 7.90744 13.6234 8.41448 13.83 9.00001H15C15.2652 9.00001 15.5196 9.10537 15.7071 9.2929C15.8946 9.48044 16 9.73479 16 10C16 10.2652 15.8946 10.5196 15.7071 10.7071C15.5196 10.8947 15.2652 11 15 11H13.83C13.6234 11.5855 13.2403 12.0926 12.7334 12.4512C12.2265 12.8099 11.6209 13.0025 11 13.0025C10.3791 13.0025 9.77346 12.8099 9.2666 12.4512C8.75974 12.0926 8.3766 11.5855 8.17 11H1C0.734784 11 0.48043 10.8947 0.292893 10.7071C0.105357 10.5196 0 10.2652 0 10C0 9.73479 0.105357 9.48044 0.292893 9.2929C0.48043 9.10537 0.734784 9.00001 1 9.00001H8.17ZM5 15C4.73478 15 4.48043 15.1054 4.29289 15.2929C4.10536 15.4804 4 15.7348 4 16C4 16.2652 4.10536 16.5196 4.29289 16.7071C4.48043 16.8947 4.73478 17 5 17C5.26522 17 5.51957 16.8947 5.70711 16.7071C5.89464 16.5196 6 16.2652 6 16C6 15.7348 5.89464 15.4804 5.70711 15.2929C5.51957 15.1054 5.26522 15 5 15ZM2.17 15C2.3766 14.4145 2.75974 13.9074 3.2666 13.5488C3.77346 13.1902 4.37909 12.9976 5 12.9976C5.62091 12.9976 6.22654 13.1902 6.7334 13.5488C7.24026 13.9074 7.6234 14.4145 7.83 15H15C15.2652 15 15.5196 15.1054 15.7071 15.2929C15.8946 15.4804 16 15.7348 16 16C16 16.2652 15.8946 16.5196 15.7071 16.7071C15.5196 16.8947 15.2652 17 15 17H7.83C7.6234 17.5855 7.24026 18.0926 6.7334 18.4512C6.22654 18.8099 5.62091 19.0025 5 19.0025C4.37909 19.0025 3.77346 18.8099 3.2666 18.4512C2.75974 18.0926 2.3766 17.5855 2.17 17H1C0.734784 17 0.48043 16.8947 0.292893 16.7071C0.105357 16.5196 0 16.2652 0 16C0 15.7348 0.105357 15.4804 0.292893 15.2929C0.48043 15.1054 0.734784 15 1 15H2.17Z" fill="black" />
                                </svg>
                            </button>
                            <span className={`font-semibold text-[18px] ${showFilters ? "block" : "hidden"}`}>Filters</span>
                        </div>
                        {/*-----------------------------------------Icon right-----------------------------------------*/}
                        <button onClick={handleShowFilter} className={`items-center justify-center w-8 h-8 transition-all rounded-full hover:bg-blue1 ${showFilters ? "flex " : " hidden"}`}>
                            <svg width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg" className='cursor-pointer'>
                                <path fillRule="evenodd" clipRule="evenodd" d="M0.381776 9.33525C0.137325 9.11613 0 8.81899 0 8.50915C0 8.19932 0.137325 7.90218 0.381776 7.68306L7.75815 1.07314C7.87844 0.961546 8.02232 0.872531 8.18141 0.811293C8.34049 0.750056 8.51159 0.717823 8.68473 0.716475C8.85787 0.715127 9.02957 0.744691 9.18982 0.803441C9.35007 0.862192 9.49566 0.948953 9.61809 1.05866C9.74052 1.16837 9.83734 1.29883 9.9029 1.44243C9.96846 1.58603 10.0015 1.73989 9.99995 1.89503C9.99845 2.05018 9.96248 2.2035 9.89414 2.34606C9.8258 2.48861 9.72646 2.61755 9.60192 2.72533L3.14743 8.50915L9.60192 14.293C9.83945 14.5134 9.97088 14.8085 9.96791 15.1149C9.96493 15.4212 9.8278 15.7143 9.58604 15.9309C9.34428 16.1476 9.01723 16.2705 8.67535 16.2731C8.33346 16.2758 8.00408 16.158 7.75815 15.9452L0.381776 9.33525Z" fill="#4B4B4B" />
                            </svg>
                        </button>
                    </div>
                    <div className={`flex flex-col gap-4 pt-6 ${showFilters ? "flex" : "hidden"}`}>
                        <span className='text-sm font-bold'>Refine by</span>
                        {/*-----------------------------------------filters category-----------------------------------------*/}
                        <div className='flex flex-col gap-3 pb-6 border-b border-blue1'>
                            <span className='text-sm font-bold text-gray1'>Categories</span>
                            <div className='flex flex-col gap-3 pr-5'>
                                <div className='flex items-center justify-between'>
                                    <div className='flex items-center gap-3'>
                                        <input type="checkbox" className='w-[25px] h-[25px]' id='checkbox1' />
                                        <label className='font-bold text-gray2 text-[14px]' htmlFor='checkbox1'>Admin Templates</label>
                                    </div>
                                    <span className='font-semibold text-[14px]'>300</span>
                                </div>
                                <div className='flex items-center justify-between'>
                                    <div className='flex items-center gap-3'>
                                        <input type="checkbox" className='w-[25px] h-[25px] rounded-lg' id='checkbox2' />
                                        <label className='font-bold text-gray2 text-[14px]' htmlFor='checkbox2'>Email Template</label>
                                    </div>
                                    <span className='font-semibold text-[14px]'>300</span>
                                </div>
                                <div className='flex items-center justify-between'>
                                    <div className='flex items-center gap-3'>
                                        <input type="checkbox" className='w-[25px] h-[25px] rounded-lg' id='checkbox3' />
                                        <label className='font-bold text-gray2 text-[14px]' htmlFor='checkbox3'>Landing Page Template</label>
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
                                        <input type="checkbox" className='w-[25px] h-[25px]' id='checkbox4' />
                                        <span className='font-bold text-gray2 text-[14px]' htmlFor='checkbox4'>Admin Templates</span>
                                    </div>
                                    <span className='font-semibold text-[14px]'>300</span>
                                </div>
                                <div className='flex items-center justify-between'>
                                    <div className='flex items-center gap-3'>
                                        <input type="checkbox" className='w-[25px] h-[25px] rounded-lg' id='checkbox5' />
                                        <label htmlFor='checkbox5' className='font-bold text-gray2 text-[14px]' >Email Template</label>
                                    </div>
                                    <span className='font-semibold text-[14px]'>300</span>
                                </div>
                                <div className='flex items-center justify-between'>
                                    <div className='flex items-center gap-3'>
                                        <input type="checkbox" className='w-[25px] h-[25px] rounded-lg' id='checkbox6' />
                                        <label htmlFor='checkbox6' className='font-bold text-gray2 text-[14px]' >Landing Page Template</label>
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
                            <div className='flex items-center justify-between w-full h-full' onClick={() => { setShowDropDownFilter(!showDropDownFilter) }}>
                                <span className='font-semibold text-[14px] text-gray2'>{valueFilterDropDown || "Sort by Popular"}</span>
                                <IconDown></IconDown>
                                <input type="text" className='absolute top-0 left-0 w-full h-full bg-black opacity-0 cursor-pointer' readOnly onBlur={() => { setShowDropDownFilter(false) }} />
                            </div>
                            <div className={`absolute z-10 left-0 w-full bg-white dropdown-content ${showDropDownFilter ? "open" : ""} border top-[38px] border-blue1 rounded-sm text-[14px]`}>
                                <div className='flex justify-between px-3 py-3 transition-all border-b cursor-pointer border-grayEC hover:bg-blue2' onMouseDown={() => { setValueFilterDropDown("Nổi bật"); setIsActive(1) }}>
                                    <span>Nổi bật</span>
                                    <span>
                                        {isActive === 1 && <IconTick></IconTick>}
                                    </span>
                                </div>
                                <div className='flex justify-between px-3 py-3 transition-all border-b cursor-pointer border-grayEC hover:bg-blue2' onMouseDown={() => { setValueFilterDropDown("Bán chạy"); setIsActive(2) }}>
                                    <span>Bán chạy</span>
                                    <span>{isActive === 2 && <IconTick></IconTick>}</span>
                                </div>
                                <div className='flex justify-between px-3 py-3 transition-all border-b cursor-pointer border-grayEC hover:bg-blue2' onMouseDown={() => { setValueFilterDropDown("% Giảm giá"); setIsActive(3) }}>
                                    <span>% giảm giá</span>
                                    <span>{isActive === 3 && <IconTick></IconTick>}</span>
                                </div>
                                <div className='flex justify-between px-3 py-3 transition-all border-b cursor-pointer border-grayEC hover:bg-blue2' onMouseDown={() => { setValueFilterDropDown("Giá cao đến thấp"); setIsActive(4) }}>
                                    <span>Giá cao đến thấp</span>
                                    <span>{isActive === 4 && <IconTick></IconTick>}</span>
                                </div>
                                <div className='flex justify-between px-3 py-3 transition-all cursor-pointer border-grayEC hover:bg-blue2' onMouseDown={() => { setValueFilterDropDown("Giá thấp đến cao"); setIsActive(5) }}>
                                    <span>Giá thấp đến cao</span>
                                    <span>{isActive === 5 && <IconTick></IconTick>}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*-----------------------------------------product list-----------------------------------------*/}
                    <div className={`grid w-full gap-6 mt-5 ${showFilters ? "grid-cols-4" : "grid-cols-5"}`}>
                        {popular.map((item, index) => (
                            <ItemProduct key={item.id} image={item.imageProduct} slugProduct={`/product-details/${item.slug}`} title={item.title} author={item.author} slugAuthor={item.slugAuthor} price={item.price}></ItemProduct>
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
                <Popular title="Popular Graphics123" explore="Explore Graphics" dataPopular={popular} url="/product"></Popular>
            </div>
        </div>
    );
};

export default ProductPage;