import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Popular from '../../module/homePage/Popular';
import axios from 'axios';

const CartPage = () => {
    const [popular, setPopular] = useState([]);

    //------------------------------------------fetch data------------------------------------------
    useEffect(() => {
        const fetchDataPopular = async () => {
            try {
                const popularResponse = await axios.get("http://localhost:3000/popularGraphics");

                setPopular(popularResponse.data);
            } catch (err) {
                console.log("err: " + err);
            }
        }
        fetchDataPopular();
    }, []);
    return (
        <div className='mb-32'>
            {/*--------------------------------------Cart--------------------------------------*/}
            <div className='mt-[45px] px-[5%] grid grid-cols-10 gap-20'>
                {/*--------------------------------------List Product--------------------------------------*/}
                <div className='col-span-7'>
                    <div className='h-10'>
                        <span className='text-2xl font-bold text-center text-gray2'>Your Cart</span>
                        <NavLink to="/" className="ml-4 text-lg font-semibold text-center text-blue6"><span>Lịch sử mua hàng</span>
                        </NavLink>
                    </div>
                    {/*--------------------------------------Items Product--------------------------------------*/}
                    <div className='grid grid-cols-11 px-6 pt-4 mt-3 border-t border-blue1'>
                        <div className='flex items-center col-span-8 gap-5'>
                            <div className='w-48 p-[6px] border rounded-sm border-blue1'>
                                <img src="https://images.creativemarket.com/0.1.0/ps/16036930/220/146/m2/fpnw/wm0/vintage-collage-creator-01-.jpg?1666887682&s=2dccff9e44c78706f30f868a0c8c34b7" alt="img" className='w-full object-cover aspect-[7/4] rounded-sm border border-blue2' />
                            </div>
                            <div className='flex flex-col gap-3 text-base'>
                                <div>
                                    <h3 className='text-lg font-medium'>Vintage Collage Creator 750+ Assets</h3>
                                    <p>
                                        <span>by {" "}</span>
                                        <span className='font-medium text-blue6'>Le Duc Hai</span>
                                    </p>
                                </div>
                                <div className=''>
                                    <span className='text-sm font-semibold text-gray2'>License Type</span>
                                    <button className='flex w-[340px] h-[42px] items-center px-3 justify-between border bg-blue2 mt-1 rounded-sm border-blue1'>
                                        <span className='text-[15px] font-medium'>Personal License</span>
                                        <span className='flex items-center gap-3 text-[15px] font-medium'>
                                            <span>$24.00USD</span>
                                            <span><svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M6.58905 7.08917C6.43277 7.24539 6.22085 7.33316 5.99988 7.33316C5.77891 7.33316 5.56699 7.24539 5.41071 7.08917L0.696546 2.375C0.616954 2.29813 0.553469 2.20617 0.509794 2.1045C0.46612 2.00283 0.443132 1.89348 0.44217 1.78284C0.441209 1.67219 0.462294 1.56245 0.504194 1.46004C0.546095 1.35763 0.607973 1.26458 0.686217 1.18634C0.764461 1.10809 0.857504 1.04622 0.959917 1.00432C1.06233 0.962415 1.17206 0.941331 1.28271 0.942292C1.39336 0.943254 1.50271 0.966242 1.60438 1.00992C1.70605 1.05359 1.79801 1.11708 1.87488 1.19667L5.99988 5.32167L10.1249 1.19667C10.282 1.04487 10.4925 0.960874 10.711 0.962772C10.9295 0.964671 11.1386 1.05231 11.2931 1.20682C11.4476 1.36133 11.5352 1.57034 11.5371 1.78883C11.539 2.00733 11.455 2.21783 11.3032 2.375L6.58905 7.08917Z" fill="black" />
                                            </svg>
                                            </span>
                                        </span>
                                    </button>
                                </div>
                            </div>
                            {/* <div className='flex items-end h-full gap-5'>
                                <button className='font-medium text-[24px] px-2'>-</button>
                                <span>1 seat</span>
                                <span className='font-medium text-[18px] px-2'>+</span>
                            </div> */}
                        </div>
                        <div className='flex flex-col items-end col-span-3'>
                            <span className='text-lg font-bold'>$24</span>
                            <button className='text-base font-normal text-blue6'>
                                Remove
                            </button>
                        </div>
                    </div>
                </div>
                {/*--------------------------------------Price Product--------------------------------------*/}
                <div className='flex flex-col items-end w-full col-span-3 '>
                    <div className='h-10'>
                        <NavLink to="/" className="text-lg font-semibold text-blue6"><span>Need Support?</span></NavLink>
                    </div>
                    <div className='flex flex-col w-full gap-5 p-5 mt-3 border rounded-sm border-blue1'>
                        <span className='text-[15px] font-semibold leading-5'>Save up to 20% with a membership, or checkout without one and pay full price.
                        </span>
                        {/*--------------------------------------Choose Type--------------------------------------*/}
                        <div className='flex flex-col gap-5 p-5 border rounded-lg border-blue1'>
                            <div className='flex gap-3'>
                                <button className='flex items-center justify-center w-5 h-5 rounded-full bg-blue7'><span className='w-2 h-2 bg-white rounded-full'></span></button>
                                <div className='flex flex-col gap-2'>
                                    <span className='font-bold text-gray2'>Pay full amount</span>
                                    <span className='text-[15px] text-gray2'>$63.000 USD</span>
                                </div>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <span className='text-sm text-blue5'>Subscribe and Save</span>
                                <div className='flex gap-3'>
                                    <button className='flex items-center justify-center w-5 h-5 rounded-full bg-blue7'><span className='w-2 h-2 bg-white rounded-full'></span></button>
                                    <div className='flex flex-col gap-2'>
                                        <span className='font-bold text-gray2'>Save up to 20% on my cart</span>
                                        <span className='text-[15px] text-gray2'>Renews monthly</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*--------------------------------------Show Price--------------------------------------*/}
                        <div className='w-full'>
                            <div className='flex items-center justify-between w-full mt-4 text-base font-bold text-gray2'>
                                <span>Cart Subtotal</span>
                                <span className='line-through text-gray1'>$63.00 USD</span>
                            </div>
                            <div className='flex items-center justify-between w-full mt-2 text-base font-bold text-gray2'>
                                <span>Your total after membership</span>
                                <span className='text-blue6'>$53.55 USD</span>
                            </div>
                        </div>

                        <button className='w-full py-4 text-[20px] font-bold text-white rounded-md bg-blue7'>Thanh toán</button>
                    </div>
                </div>
            </div>
            {/*--------------------------------------Popular--------------------------------------*/}
            <Popular title="Popular Graphics" explore="Explore Graphics" dataPopular={popular} url="/product"></Popular>
            <Popular title="Popular Graphics" explore="Explore Graphics" dataPopular={popular} url="/product"></Popular>
        </div>
    );
};

export default CartPage;