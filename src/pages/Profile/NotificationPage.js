import React from 'react';

const NotificationPage = () => {
    return (
        <div className='mb-32 bg-white'>
            <div className='flex items-center justify-between p-5'>
                <span className='text-[18px] font-semibold'>Thông báo</span>
                <span className='text-[14px] text-gray2 cursor-pointer'>Đánh dấu tất cả là đã đọc</span>
            </div>
            <div className='border-t border-blue1'>
                <div className='flex items-center justify-between p-5'>
                    <div className='flex items-center gap-4'>
                        <div className='w-[90px] aspect-square rounded-sm'>
                            <img src="/21011598.jpg" alt="" className='object-cover w-full h-full rounded-sm' />
                        </div>
                        <div className='flex w-[75%] flex-col gap-2'>
                            <span className='font-semibold'>Đánh giá sản phẩm</span>
                            <p className='flex flex-col gap-1'>
                                <span className='text-sm'>Đơn hàng 122323534 đã hoàn thành. Bạn hãy đánh giá trước ngày xx/yy/zzzz để nhận được 500 xu và giúp người khác hiểu hơn về sản phẩm nhé!</span>
                                <span className='text-sm italic text-gray1'>22:22 22-05-2023</span>
                            </p>
                        </div>
                    </div>
                    <button className='px-4 h-[35px] border rounded-sm whitespace-nowrap border-blue1 hover:bg-blue6 hover:border-blue6 hover:text-white transition-all'>Đánh giá sản phẩm</button>
                </div>
                <div className='flex items-center justify-between p-5'>
                    <div className='flex items-center gap-4'>
                        <div className='w-[90px] aspect-square rounded-sm'>
                            <img src="/21011598.jpg" alt="" className='object-cover w-full h-full rounded-sm' />
                        </div>
                        <div className='flex w-[75%] flex-col gap-2'>
                            <span className='font-semibold'>Đánh giá sản phẩm</span>
                            <p className='flex flex-col gap-1'>
                                <span className='text-sm'>Đơn hàng 122323534 đã hoàn thành. Bạn hãy đánh giá trước ngày xx/yy/zzzz để nhận được 500 xu và giúp người khác hiểu hơn về sản phẩm nhé!</span>
                                <span className='text-sm italic text-gray1'>22:22 22-05-2023</span>
                            </p>
                        </div>
                    </div>
                    <button className='px-4 h-[35px] border rounded-sm whitespace-nowrap border-blue1 hover:bg-blue6 hover:border-blue6 hover:text-white transition-all'>Đánh giá sản phẩm</button>
                </div>
                <div className='flex items-center justify-between p-5'>
                    <div className='flex items-center gap-4'>
                        <div className='w-[90px] aspect-square rounded-sm'>
                            <img src="/21011598.jpg" alt="" className='object-cover w-full h-full rounded-sm' />
                        </div>
                        <div className='flex w-[75%] flex-col gap-2'>
                            <span className='font-semibold'>Đánh giá sản phẩm</span>
                            <p className='flex flex-col gap-1'>
                                <span className='text-sm'>Đơn hàng 122323534 đã hoàn thành. Bạn hãy đánh giá trước ngày xx/yy/zzzz để nhận được 500 xu và giúp người khác hiểu hơn về sản phẩm nhé!</span>
                                <span className='text-sm italic text-gray1'>22:22 22-05-2023</span>
                            </p>
                        </div>
                    </div>
                    <button className='px-4 h-[35px] border rounded-sm whitespace-nowrap border-blue1 hover:bg-blue6 hover:border-blue6 hover:text-white transition-all'>Đánh giá sản phẩm</button>
                </div>
            </div>
        </div>
    );
};

export default NotificationPage; 