import React, { useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import IconDown from '../components/header/IconDown';
import IconDate from '../components/icon/IconDate';
import IconSize from '../components/icon/IconSize';
import IconRule from '../components/icon/IconRule';
import IconLayer from '../components/icon/IconLayer';
import CommentProduct from '../module/productDetails/CommentProduct';
import MoreProduct from '../module/productDetails/MoreProduct';

const ProductDetailsPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        // window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, []);
    const { slug } = useParams();
    console.log(slug);
    return (
        <div className='px-[8%] mt-[50px] mb-28'>
            <h1 className='font-bold text-[24px]'>Vintage Collage Creator 750+ Assets</h1>
            <div className='flex items-center gap-4 mt-5'>
                <img src="/21011598.jpg" alt="" className='w-[25px] h-[25px] object-cover rounded-full' />
                <span className='text-[14px]'>Graphic Goods</span>
            </div>
            {/*-----------------------------------------productDetail Image + Price-----------------------------------------*/}
            <div className='grid grid-cols-10 gap-10 mt-8'>
                {/*-----------------------------------------productDetail Image-----------------------------------------*/}
                <div className='flex flex-col col-span-7 gap-3'>
                    <img src="https://images.unsplash.com/photo-1666919643134-d97687c1826c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80" alt="" className='w-full object-cover aspect-[7/4] rounded-lg' />
                    <div className='flex items-center w-full gap-3'>
                        <img src="https://images.unsplash.com/photo-1666919643134-d97687c1826c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80" alt="" className='w-[12%] object-cover aspect-[7/4]' />
                        <img src="https://images.unsplash.com/photo-1666919643134-d97687c1826c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80" alt="" className='w-[12%] object-cover aspect-[7/4]' />
                        <img src="https://images.unsplash.com/photo-1666919643134-d97687c1826c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80" alt="" className='w-[12%] object-cover aspect-[7/4]' />
                        <img src="https://images.unsplash.com/photo-1666919643134-d97687c1826c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80" alt="" className='w-[12%] object-cover aspect-[7/4]' />
                        <img src="https://images.unsplash.com/photo-1666919643134-d97687c1826c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80" alt="" className='w-[12%] object-cover aspect-[7/4]' />
                        <img src="https://images.unsplash.com/photo-1666919643134-d97687c1826c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80" alt="" className='w-[12%] object-cover aspect-[7/4]' />
                        <button className='flex flex-col items-center justify-center ml-4'>
                            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 14C0 16.7689 0.821086 19.4757 2.35943 21.778C3.89777 24.0803 6.08427 25.8747 8.64243 26.9343C11.2006 27.9939 14.0155 28.2712 16.7313 27.731C19.447 27.1908 21.9416 25.8574 23.8995 23.8995C25.8574 21.9416 27.1908 19.447 27.731 16.7313C28.2712 14.0155 27.9939 11.2006 26.9343 8.64243C25.8747 6.08427 24.0803 3.89777 21.778 2.35943C19.4757 0.821086 16.7689 0 14 0C10.287 0 6.72601 1.475 4.1005 4.1005C1.475 6.72601 0 10.287 0 14ZM6 13H18.15L12.57 7.393L14 6L22 14L14 22L12.57 20.573L18.15 15H6V13Z" fill="#AFAFAF" />
                            </svg>
                            <span className='text-sm font-semibold text-blue6'>Show More</span>
                        </button>
                    </div>
                </div>
                {/*-----------------------------------------productDetail Price-----------------------------------------*/}
                <div className='flex flex-col col-span-3 gap-3'>
                    {/*-----------------------------------------productDetail Price Box1-----------------------------------------*/}
                    <div className='border rounded-lg flex flex-col gap-3 border-blue1 p-[25px]'>
                        <div className='text-[16px] font-bold flex justify-between mb-2'>
                            <span>Price</span>
                            <span>$24.00USD</span>
                        </div>
                        <button className='w-full py-4 border-[2px] border-blue7 text-blue7 font-bold text-[18px] transition-all over:opacity-90 cursor-pointer hover:scale-95 rounded-lg'>Add To Cart</button>
                        <button className='w-full py-4 border-[2px] border-blue7 text-white bg-blue7 font-bold transition-all hover:opacity-90 cursor-pointer hover:scale-95 text-[18px] rounded-lg'>Buy Now</button>
                        <div className='flex flex-col gap-4 mt-4'>
                            <div className='flex items-center justify-between'>
                                <span className='font-semibold'>License</span>
                                <span>Personal license</span>
                            </div>
                            <div className='flex items-center justify-between'>
                                <p className='flex items-center gap-3 font-semibold'>
                                    <button className=' w-[20px] h-[20px] rounded-full flexCustom border-[2px] border-blue7'>
                                        <span className='w-[8px] h-[8px] rounded-full bg-blue7'></span>
                                    </button>
                                    <span>Personal</span>
                                </p>
                                <span>$25.00USD</span>
                            </div>
                            <div className='flex items-center justify-between'>
                                <p className='flex items-center gap-3 font-semibold'>
                                    <button className='relative w-[20px] h-[20px] rounded-full flexCustom border-[2px] border-gray1'>
                                        {/* <span className='absolute w-[8px] h-[8px] rounded-full bg-blue7'></span> */}
                                    </button>
                                    <span>Personal</span>
                                </p>
                                <span>$25.00USD</span>
                            </div>
                            <div className='flex items-center justify-between'>
                                <p className='flex items-center gap-3 font-semibold'>
                                    <button className='relative w-[20px] h-[20px] rounded-full flexCustom border-[2px] border-gray1'>
                                        {/* <span className='absolute w-[8px] h-[8px] rounded-full bg-blue7'></span> */}
                                    </button>
                                    <span>Personal</span>
                                    <span className='px-3 py-1 text-xs font-semibold rounded-sm bg-blue3'>Suggested</span>
                                </p>
                                <span>$25.00USD</span>
                            </div>
                            <div className='flex items-center justify-between mt-3'>
                                <span className='font-semibold'>Categories</span>
                                <span>Graphics / Objects</span>
                            </div>
                        </div>
                    </div>
                    {/*-----------------------------------------productDetail Price Box2-----------------------------------------*/}
                    <div className='rounded-lg bg-blue3 py-[20px] px-[10%] flex flex-col gap-5 items-center'>
                        <span className='font-medium text-center text-blue7'>Save 20% on our entire catalogue with a membership</span>
                        <span className='font-semibold underline cursor-pointer text-blue5'>Add To Card</span>
                    </div>
                </div>
            </div>
            {/*-----------------------------------------productDetail Description-----------------------------------------*/}
            <div className='grid grid-cols-10 gap-10 mt-16'>
                {/*-----------------------------------------productDetail About-----------------------------------------*/}
                <div className='flex flex-col col-span-7 gap-5 pr-10'>
                    <h2 className='text-[24px] font-bold'>About the Product</h2>
                    <div className='relative w-full h-full'>
                        <span className='leading-[22px] text-black line-clamp-5 overflow-ellipsis'>20/07/2022 BONUS UPDATE: 50 new assets added! Now more than 800 assets included in the pack!
                            Build stunning collages in no-time, simply drag & drop assets into your canvas. A multitude of assets gives you the ability to create original artworks with endless combinations of elements.
                            This huge pack includes 750+ assets (update: now 800+) sourced from a variety of vintage photos, illustrations, art and ephemera.
                            See a PDF preview of all included assets here: https://graphicgoods.net/docs/Vintage_Collage_Creator-All_Assets_Preview.pdf
                            All assets are very highly detailed, dimensions vary from 2000px to 6000px on the long edge. Images were carefully isolated, no jugged or blurry edges.
                            0/07/2022 BONUS UPDATE: 50 new assets added! Now more than 800 assets included in the pack!
                            Build stunning collages in no-time, simply drag & drop assets into your canvas. A multitude of assets gives you the ability to create original artworks with endless combinations of elements.
                            This huge pack includes 750+ assets (update: now 800+) sourced from a variety of vintage photos, illustrations, art and ephemera.
                            See a PDF preview of all included assets here: https://graphicgoods.net/docs/Vintage_Collage_Creator-All_Assets_Preview.pdf
                            All assets are very highly detailed, dimensions vary from 2000px to 6000px on the long edge. Images were carefully isolated, no jugged or blurry edges.
                        </span>
                        <div className='absolute bottom-[-6px] w-full h-8 bg_linear'></div>
                    </div>
                    <div className='flex items-center gap-2 cursor-pointer'>
                        <span className='text-blue7'>Show more</span>
                        <div className='mt-1'>
                            <IconDown></IconDown>
                        </div>
                    </div>
                    <div className='px-[35px] py-[30px] bg-blue2 flex justify-between items-center rounded-md'>
                        <div className='flex flex-col justify-center gap-4'>
                            <h3 className='text-[18px] font-semibold'>Spread the Word and Earn!</h3>
                            <span>Earn commission from each customer you refer.</span>
                        </div>
                        <div>
                            <NavLink to="/" className="font-semibold underline text-blue7">Join our Partner Program</NavLink>
                        </div>
                    </div>
                </div>
                {/*-----------------------------------------productDetail Specs-----------------------------------------*/}
                <div className='flex flex-col col-span-3 gap-7'>
                    <h2 className='text-[24px] font-bold'>Product Specs</h2>
                    <div className='flex items-center gap-3 mt-[-8px]'>
                        <IconDate></IconDate>
                        <span className=''>Created: Jun 12, 2023</span>
                    </div>
                    <div className='flex items-center gap-3'>
                        <IconSize></IconSize>
                        <span className=''>File Size: 707.24 MB</span>
                    </div>
                    <div className='flex items-center gap-3'>
                        <IconRule></IconRule>
                        <span className=''>Dimensions: 3000 x 3000 px</span>
                    </div>
                    <div className='flex items-center gap-3'>
                        <IconLayer></IconLayer>
                        <span className=''>Layered</span>
                    </div>
                    <span className='font-semibold cursor-pointer text-blue7'>Preview the Files</span>
                </div>
            </div>
            {/*-----------------------------------------productDetail Comment-----------------------------------------*/}
            <CommentProduct></CommentProduct>
            {/*-----------------------------------------productDetail You May Also Like-----------------------------------------*/}
            <MoreProduct></MoreProduct>
            {/*-----------------------------------------productDetail Keep Exploring-----------------------------------------*/}
            <div className='flex flex-col mt-20'>
                <h2 className="text-[22px] font-bold mb-2">Keep Exploring</h2>
                <div className='flex gap-3 mt-5'>
                    <button className='px-5 py-2 bg-[#dceefc] hover:bg-[#b9ddff] transition-all rounded-full'>Stylish</button>
                    <button className='px-5 py-2 bg-[#dceefc] hover:bg-[#b9ddff] transition-all rounded-full'>Classy</button>
                    <button className='px-5 py-2 bg-[#dceefc] hover:bg-[#b9ddff] transition-all rounded-full'>Font</button>
                    <button className='px-5 py-2 bg-[#dceefc] hover:bg-[#b9ddff] transition-all rounded-full'>Typeface</button>
                    <button className='px-5 py-2 bg-[#dceefc] hover:bg-[#b9ddff] transition-all rounded-full'>Sharp</button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailsPage;