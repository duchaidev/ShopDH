import { Pagination, PaginationItem, Stack } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const DepositWithdrawal = () => {
    return (
        <div className='flex flex-col gap-3 mb-32'>
            {/*--------------------------------------Chuyển khoản--------------------------------------*/}
            <div className='flex flex-col bg-white '>
                <span className='p-5 font-semibold text-[18px] border-b border-blue1'>Nạp tiền qua ngân hàng - ATM - Ví điện tử</span>
                {/*--------------------------------------Lưu ý--------------------------------------*/}
                <div className='flex flex-col gap-3 p-5 border-b border-blue1'>
                    <p className='flex items-center gap-3'>
                        <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.4041 1.422C13.3591 -0.474 10.6341 -0.474 9.58908 1.422L0.346075 18.17C-0.664925 20.003 0.660074 22.248 2.75407 22.248H21.2361C23.3291 22.248 24.6561 20.003 23.6441 18.17L14.4041 1.42V1.422ZM12.9961 17.25C12.9961 17.5152 12.8907 17.7696 12.7032 17.9571C12.5156 18.1446 12.2613 18.25 11.9961 18.25C11.7309 18.25 11.4765 18.1446 11.289 17.9571C11.1014 17.7696 10.9961 17.5152 10.9961 17.25C10.9961 16.9848 11.1014 16.7304 11.289 16.5429C11.4765 16.3554 11.7309 16.25 11.9961 16.25C12.2613 16.25 12.5156 16.3554 12.7032 16.5429C12.8907 16.7304 12.9961 16.9848 12.9961 17.25ZM11.2461 14V7.5C11.2461 7.30109 11.3251 7.11032 11.4657 6.96967C11.6064 6.82902 11.7972 6.75 11.9961 6.75C12.195 6.75 12.3858 6.82902 12.5264 6.96967C12.6671 7.11032 12.7461 7.30109 12.7461 7.5V14C12.7461 14.1989 12.6671 14.3897 12.5264 14.5303C12.3858 14.671 12.195 14.75 11.9961 14.75C11.7972 14.75 11.6064 14.671 11.4657 14.5303C11.3251 14.3897 11.2461 14.1989 11.2461 14Z" fill="black" />
                        </svg>
                        <span className='font-semibold text-[18px]'>Lưu ý</span>
                    </p>
                    <span className='font-medium text-red'>*  Bank auto cộng tiền liền hoặc sau vài phút(không quá 15p) chưa cộng LH Zalo để được hỗ trợ!</span>
                    <span className='font-medium text-red'>* Nạp sai nội dung sẽ bị trừ 10% tiền nạp.</span>
                    <span className='font-medium text-greenText'>*Ưu tiên nạp Ngân Hàng Auto cộng tiền nhanh.</span>
                    <span className='font-medium'>- Cố tình nạp dưới mức nạp sẽ không hỗ trợ(Sẽ hỗ trợ cộng dồn cho lần nạp tiếp theo).</span>
                    <p className='font-medium'>
                        <span>* Hướng dẫn nạp tiền:{" "}</span>
                        <NavLink to="/" className="text-greenText">Tại đây</NavLink>
                    </p>
                </div>
                {/*--------------------------------------Chuyển khoản--------------------------------------*/}
                <div className='grid grid-cols-2 gap-5 p-5'>
                    {/*--------------------------------------Chuyển khoản MBBANK--------------------------------------*/}
                    <div className='border border-blue1'>
                        <div className='grid grid-cols-7 border-b border-blue1'>
                            <span className='col-span-3 p-4 font-medium text-center border-r border-blue1'>Chuyển khoản bằng mã QR</span>
                            <span className='col-span-4 p-4 font-medium text-center'>Chuyển khoản thủ công</span>
                        </div>
                        <div className='grid grid-cols-7'>
                            {/*--------------------------------------Chuyển khoản QR--------------------------------------*/}
                            <div className='flex flex-col items-center justify-center col-span-3 gap-4 p-2 border-r border-blue1'>
                                <span className='text-[14px] text-gray2 text-center leading-4'>Mở App Ngân Hàng quét mã QRCode và nhập số tiền cần chuyển</span>
                                <div className='w-[80%] aspect-square'>
                                    <img src="/QRCODE.png" alt="" className='object-cover w-full h-full aspect-square' />
                                </div>
                            </div>
                            {/*--------------------------------------Chuyển khoản thủ công--------------------------------------*/}
                            <div className='flex flex-col items-center col-span-4 gap-2'>
                                <div>
                                    <img src="/Logo_MB.png" alt="" className='py-2' />
                                </div>
                                <div className='w-full '>
                                    <div className='grid w-full grid-cols-7 px-2 py-3 border-b border-blue1'>
                                        <span className='col-span-3 font-medium '>Chủ Tài khoản:</span>
                                        <span className='col-span-4'>Le Duc Hai</span>
                                    </div>
                                    <div className='grid w-full grid-cols-7 px-2 py-3 border-b border-blue1'>
                                        <span className='col-span-3 font-medium '>Số tài khoản:</span>
                                        <span className='relative col-span-4 max-w-max'>
                                            <span>800200399999</span>
                                            <button className='absolute p-1 cursor-pointer -right-5 -top-2'>
                                                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" className=''>
                                                    <path d="M9.58333 0H2.91667C2.80616 0 2.70018 0.0438988 2.62204 0.122039C2.5439 0.200179 2.5 0.30616 2.5 0.416667V2.5H0.416667C0.30616 2.5 0.200179 2.5439 0.122039 2.62204C0.0438988 2.70018 0 2.80616 0 2.91667V9.58333C0 9.69384 0.0438988 9.79982 0.122039 9.87796C0.200179 9.9561 0.30616 10 0.416667 10H7.08333C7.19384 10 7.29982 9.9561 7.37796 9.87796C7.4561 9.79982 7.5 9.69384 7.5 9.58333V7.5H9.58333C9.69384 7.5 9.79982 7.4561 9.87796 7.37796C9.9561 7.29982 10 7.19384 10 7.08333V0.416667C10 0.30616 9.9561 0.200179 9.87796 0.122039C9.79982 0.0438988 9.69384 0 9.58333 0ZM6.66667 9.16667H0.833333V3.33333H6.66667V9.16667ZM9.16667 6.66667H7.5V2.91667C7.5 2.80616 7.4561 2.70018 7.37796 2.62204C7.29982 2.5439 7.19384 2.5 7.08333 2.5H3.33333V0.833333H9.16667V6.66667Z" fill="#9C9C9C" />
                                                </svg>
                                            </button>
                                        </span>
                                    </div>
                                    <div className='grid w-full grid-cols-7 px-2 py-3 border-b border-blue1'>
                                        <span className='col-span-3 font-medium '>Ngân hàng:</span>
                                        <span className='col-span-4'>MB Bank</span>
                                    </div>
                                    <div className='grid w-full grid-cols-7 px-2 py-3 border-b border-blue1'>
                                        <span className='col-span-3 font-medium '>Nạp tối thiểu:</span>
                                        <span className='col-span-4'>5,000 VNĐ</span>
                                    </div>
                                    <div className='grid w-full grid-cols-7 px-2 py-3 border-b border-blue1'>
                                        <span className='col-span-3 font-medium '>Nội dung:</span>
                                        <span className='relative col-span-4 max-w-max'>
                                            <span>SHOPDH2003</span>
                                            <button className='absolute p-1 cursor-pointer -right-5 -top-2'>
                                                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" className=''>
                                                    <path d="M9.58333 0H2.91667C2.80616 0 2.70018 0.0438988 2.62204 0.122039C2.5439 0.200179 2.5 0.30616 2.5 0.416667V2.5H0.416667C0.30616 2.5 0.200179 2.5439 0.122039 2.62204C0.0438988 2.70018 0 2.80616 0 2.91667V9.58333C0 9.69384 0.0438988 9.79982 0.122039 9.87796C0.200179 9.9561 0.30616 10 0.416667 10H7.08333C7.19384 10 7.29982 9.9561 7.37796 9.87796C7.4561 9.79982 7.5 9.69384 7.5 9.58333V7.5H9.58333C9.69384 7.5 9.79982 7.4561 9.87796 7.37796C9.9561 7.29982 10 7.19384 10 7.08333V0.416667C10 0.30616 9.9561 0.200179 9.87796 0.122039C9.79982 0.0438988 9.69384 0 9.58333 0ZM6.66667 9.16667H0.833333V3.33333H6.66667V9.16667ZM9.16667 6.66667H7.5V2.91667C7.5 2.80616 7.4561 2.70018 7.37796 2.62204C7.29982 2.5439 7.19384 2.5 7.08333 2.5H3.33333V0.833333H9.16667V6.66667Z" fill="#9C9C9C" />
                                                </svg>
                                            </button>

                                        </span>
                                    </div>
                                    <div className='py-4 text-center text-[13px] italic'><span>Xử lí giao dịch tự động trong vài giây</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*--------------------------------------Chuyển khoản MOMO--------------------------------------*/}
                    <div className='border border-blue1'>
                        <div className='grid grid-cols-7 border-b border-blue1'>
                            <span className='col-span-3 p-4 font-medium text-center border-r border-blue1'>Chuyển khoản bằng mã QR</span>
                            <span className='col-span-4 p-4 font-medium text-center'>Chuyển khoản thủ công</span>
                        </div>
                        <div className='grid grid-cols-7'>
                            {/*--------------------------------------Chuyển khoản QR--------------------------------------*/}
                            <div className='flex flex-col items-center justify-center col-span-3 gap-4 p-2 border-r border-blue1'>
                                <span className='text-[14px] text-gray2 text-center leading-4'>Mở App Ngân Hàng quét mã QRCode và nhập số tiền cần chuyển</span>
                                <div className='w-[80%] aspect-square'>
                                    <img src="/QRCODE.png" alt="" className='object-cover w-full h-full aspect-square' />
                                </div>
                            </div>
                            {/*--------------------------------------Chuyển khoản thủ công--------------------------------------*/}
                            <div className='flex flex-col items-center col-span-4 gap-2'>
                                <div>
                                    <img src="/Logo_MM.png" alt="" className='py-2' />
                                </div>
                                <div className='w-full '>
                                    <div className='grid w-full grid-cols-7 px-2 py-3 border-b border-blue1'>
                                        <span className='col-span-3 font-medium '>Chủ Tài khoản:</span>
                                        <span className='col-span-4'>Le Duc Hai</span>
                                    </div>
                                    <div className='grid w-full grid-cols-7 px-2 py-3 border-b border-blue1'>
                                        <span className='col-span-3 font-medium '>Số tài khoản:</span>
                                        <span className='relative col-span-4 max-w-max'>
                                            <span>800200399999</span>
                                            <button className='absolute p-1 cursor-pointer -right-5 -top-2'>
                                                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" className=''>
                                                    <path d="M9.58333 0H2.91667C2.80616 0 2.70018 0.0438988 2.62204 0.122039C2.5439 0.200179 2.5 0.30616 2.5 0.416667V2.5H0.416667C0.30616 2.5 0.200179 2.5439 0.122039 2.62204C0.0438988 2.70018 0 2.80616 0 2.91667V9.58333C0 9.69384 0.0438988 9.79982 0.122039 9.87796C0.200179 9.9561 0.30616 10 0.416667 10H7.08333C7.19384 10 7.29982 9.9561 7.37796 9.87796C7.4561 9.79982 7.5 9.69384 7.5 9.58333V7.5H9.58333C9.69384 7.5 9.79982 7.4561 9.87796 7.37796C9.9561 7.29982 10 7.19384 10 7.08333V0.416667C10 0.30616 9.9561 0.200179 9.87796 0.122039C9.79982 0.0438988 9.69384 0 9.58333 0ZM6.66667 9.16667H0.833333V3.33333H6.66667V9.16667ZM9.16667 6.66667H7.5V2.91667C7.5 2.80616 7.4561 2.70018 7.37796 2.62204C7.29982 2.5439 7.19384 2.5 7.08333 2.5H3.33333V0.833333H9.16667V6.66667Z" fill="#9C9C9C" />
                                                </svg>
                                            </button>
                                        </span>
                                    </div>
                                    <div className='grid w-full grid-cols-7 px-2 py-3 border-b border-blue1'>
                                        <span className='col-span-3 font-medium '>Ngân hàng:</span>
                                        <span className='col-span-4'>MB Bank</span>
                                    </div>
                                    <div className='grid w-full grid-cols-7 px-2 py-3 border-b border-blue1'>
                                        <span className='col-span-3 font-medium '>Nạp tối thiểu:</span>
                                        <span className='col-span-4'>5,000 VNĐ</span>
                                    </div>
                                    <div className='grid w-full grid-cols-7 px-2 py-3 border-b border-blue1'>
                                        <span className='col-span-3 font-medium '>Nội dung:</span>
                                        <span className='relative col-span-4 max-w-max'>
                                            <span>SHOPDH2003</span>
                                            <button className='absolute p-1 cursor-pointer -right-5 -top-2'>
                                                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" className=''>
                                                    <path d="M9.58333 0H2.91667C2.80616 0 2.70018 0.0438988 2.62204 0.122039C2.5439 0.200179 2.5 0.30616 2.5 0.416667V2.5H0.416667C0.30616 2.5 0.200179 2.5439 0.122039 2.62204C0.0438988 2.70018 0 2.80616 0 2.91667V9.58333C0 9.69384 0.0438988 9.79982 0.122039 9.87796C0.200179 9.9561 0.30616 10 0.416667 10H7.08333C7.19384 10 7.29982 9.9561 7.37796 9.87796C7.4561 9.79982 7.5 9.69384 7.5 9.58333V7.5H9.58333C9.69384 7.5 9.79982 7.4561 9.87796 7.37796C9.9561 7.29982 10 7.19384 10 7.08333V0.416667C10 0.30616 9.9561 0.200179 9.87796 0.122039C9.79982 0.0438988 9.69384 0 9.58333 0ZM6.66667 9.16667H0.833333V3.33333H6.66667V9.16667ZM9.16667 6.66667H7.5V2.91667C7.5 2.80616 7.4561 2.70018 7.37796 2.62204C7.29982 2.5439 7.19384 2.5 7.08333 2.5H3.33333V0.833333H9.16667V6.66667Z" fill="#9C9C9C" />
                                                </svg>
                                            </button>

                                        </span>
                                    </div>
                                    <div className='py-4 text-center text-[13px] italic'><span>Xử lí giao dịch tự động trong vài giây</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*--------------------------------------Lịch sử nạp tiền --------------------------------------*/}
            <div className='bg-white'>
                <div className='flex items-center justify-between w-full p-5 border-b border-blue1'>
                    <span className='font-semibold'>Lịch sử nạp tiền</span>
                    <button className='px-5 py-3 font-medium text-white rounded-md bg-blue6'>Sắp xếp theo</button>
                </div>
                <div className='w-full p-5 '>
                    <table className='w-full '>
                        <thead className='border-b border-blue1'>
                            <tr className=''>
                                <th className='px-5 pb-3 text-start'>#</th>
                                <th className='pb-3 text-start'>Mã giao dịch</th>
                                <th className='pb-3 text-start'>Loại Bank</th>
                                <th className='pb-3 text-start'>Số tiền</th>
                                <th className='pb-3 text-start'>Thời gian nạp</th>
                                <th className='pb-3 text-start'>Trạng thái</th>
                            </tr>
                        </thead>
                        <tbody className=''>
                            <tr className='border-b border-grayEC'>
                                <td className='px-5 py-4'>123</td>
                                <td className='py-4'>200312</td>
                                <td className='py-4'>MB Bank</td>
                                <td className='py-4'>50,500 VNĐ</td>
                                <td className='py-4'>2023-05-22 21:49:10</td>
                                <td className=''>
                                    <span className='px-3 py-1 text-xs font-medium border border-blue6'>Thành công</span>
                                </td>
                            </tr>
                            <tr className='border-b border-grayEC'>
                                <td className='px-5 py-4'>123</td>
                                <td className='py-4'>200312</td>
                                <td className='py-4'>MB Bank</td>
                                <td className='py-4'>50,500 VNĐ</td>
                                <td className='py-4'>2023-05-22 21:49:10</td>
                                <td className=''>
                                    <span className='px-3 py-1 text-xs font-medium border border-blue6'>Thành công</span>
                                </td>
                            </tr>
                            <tr className='border-b border-grayEC'>
                                <td className='px-5 py-4'>123</td>
                                <td className='py-4'>200312</td>
                                <td className='py-4'>MB Bank</td>
                                <td className='py-4'>50,500 VNĐ</td>
                                <td className='py-4'>2023-05-22 21:49:10</td>
                                <td className=''>
                                    <span className='px-3 py-1 text-xs font-medium border border-blue6'>Thành công</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='flex justify-center py-6 text-center'>
                    <Stack spacing={2}>
                        <Pagination
                            count={10}
                            renderItem={(item) => (
                                <PaginationItem
                                    slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                                    {...item}
                                />
                            )}
                        />
                    </Stack>
                </div>
            </div>
        </div>
    );
};

export default DepositWithdrawal;