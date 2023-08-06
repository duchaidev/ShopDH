import React, { useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { styled } from '@mui/material/styles';

const ChangePasswordPage = () => {
    const StyledRadio = styled(Radio)`
     & .MuiSvgIcon-root {
    font-size: 20px;
    color: #00C09E;
  }
    `;
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    };
    return (
        <div className='p-8 mb-32 bg-white'>
            <div className='flex flex-col gap-2 pb-8 text-black border-b border-blue1'>
                <span className='font-bold text-[18px]'>Hồ Sơ Của Tôi</span>
                <span className='text-[14px]'>Quản lí thông tin hồ sơ để bảo mật tài khoản</span>
            </div>
            <div className='grid grid-cols-10 mt-6'>
                {/*--------------------------------------Information--------------------------------------*/}
                <div className='flex flex-col col-span-6 gap-6 border-r border-blue1'>
                    <div className='grid items-center grid-cols-10 gap-10'>
                        <label htmlFor="" className='col-span-3 row-span-1 font-normal text-end text-gray2'>Tên đăng nhập</label>
                        <span className='col-span-7 row-span-1 font-medium'>LeDucHai-Store</span>
                    </div>
                    <div className='grid items-center grid-cols-10 gap-10'>
                        <label htmlFor="" className='col-span-3 row-span-1 font-normal text-end text-gray2'>Email</label>
                        <p className='flex items-end col-span-7 row-span-1 gap-3'>
                            <span className='font-medium text-black'>leduchai2k3@gmail.com</span>
                            <button className='text-[14px] cursor-pointer font-semibold text-blue6 underline'>Gửi mã</button>
                        </p>
                    </div>
                    <div className='grid items-center grid-cols-10 gap-10'>
                        <label htmlFor="" className='col-span-3 row-span-1 font-normal text-end text-gray2'>Số điện thoại</label>
                        <span className='row-span-1 font-medium text-black'>0343335657</span>
                    </div>
                    <div className='grid items-center grid-cols-10 gap-10'>
                        <label htmlFor="" className='col-span-3 row-span-1 font-normal text-end text-gray2'>Nhập mật khẩu</label>
                        <input type="text" placeholder='Nhập mật khẩu' autoComplete='off' className='row-span-1 px-2 focus:shadow-[0_0_4px_0_#00c09e] border-blue1 focus:border-blue6 transition-all w-[70%] py-1 outline-none col-span-7 rounded-sm text-[14px] border' />
                    </div>
                    <div className='grid items-center grid-cols-10 gap-10'>
                        <label htmlFor="" className='col-span-3 row-span-1 font-normal text-end text-gray2'>Nhập mật khẩu mới</label>
                        <input type="text" placeholder='Nhập mật khẩu mới' autoComplete='off' className='row-span-1 px-2 focus:shadow-[0_0_4px_0_#00c09e] border-blue1 focus:border-blue6 transition-all w-[70%] py-1 outline-none col-span-7 rounded-sm text-[14px] border' />
                    </div>
                    <div className='grid items-center grid-cols-10 gap-10'>
                        <label htmlFor="" className='col-span-3 row-span-1 font-normal text-end text-gray2'>Xác nhận mật khẩu</label>
                        <input type="text" placeholder='Xác nhận mật khẩu mới' autoComplete='off' className='row-span-1 px-2 focus:shadow-[0_0_4px_0_#00c09e] border-blue1 focus:border-blue6 transition-all w-[70%] py-1 outline-none col-span-7 rounded-sm text-[14px] border' />
                    </div>
                    <div className='grid items-center grid-cols-10 gap-10'>
                        <label htmlFor="" className='col-span-3 row-span-1 font-normal text-end text-gray2'>Nhập mã xác nhận</label>
                        <input type="text" placeholder='Nhập mã gửi về email' autoComplete='off' className='row-span-1 px-2 focus:shadow-[0_0_4px_0_#00c09e] border-blue1 focus:border-blue6 transition-all w-[70%] py-1 outline-none col-span-7 rounded-sm text-[14px] border' />
                    </div>
                    <div className='flex items-center justify-center mt-5'>
                        <button className='m-auto py-3 px-8 border-[2px] border-blue6 bg-blue6 text-white font-semibold'>Lưu</button>
                    </div>
                </div>
                {/*--------------------------------------Avatar--------------------------------------*/}
                <div className='flex flex-col items-center justify-center col-span-4 gap-6'>
                    <div className='border w-44 h-44 border-blue1'>
                        <img src="https://images.unsplash.com/photo-1686836342891-6d1b01101f3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80" alt="avatar" className='object-cover w-full h-full' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <button className='py-3 px-6 font-semibold text-blue6 border-blue6 border-[2px]'>Chọn ảnh</button>
                        <span className='text-[14px] text-gray1'>Dung lượng file tối đa 3mb <br /> Định dạng: .JPEG, .PNG</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChangePasswordPage;