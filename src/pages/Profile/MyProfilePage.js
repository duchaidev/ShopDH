import React, { useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { styled } from '@mui/material/styles';

const MyProfilePage = () => {
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
    console.log(value);
    return (
        <div className='p-8 mb-32 bg-white'>
            <div className='flex flex-col gap-2 pb-8 text-black border-b border-blue1'>
                <span className='font-bold text-[18px]'>Hồ Sơ Của Tôi</span>
                <span className='text-[14px]'>Quản lí thông tin hồ sơ để bảo mật tài khoản</span>
            </div>
            <div className='grid grid-cols-10 mt-6'>
                {/*--------------------------------------Information--------------------------------------*/}
                <div className='col-span-6 border-r border-blue1'>
                    <div className='grid grid-cols-10 gap-10'>
                        <div className='grid col-span-3 items-center justify-end h-[320px] grid-rows-6'>
                            <label htmlFor="" className='font-normal text-end text-gray2'>Tên đăng nhập</label>
                            <label htmlFor="name" className='font-normal text-end text-gray2'>Tên</label>
                            <label htmlFor="" className='font-normal text-end text-gray2'>Email</label>
                            <label htmlFor="" className='font-normal text-end text-gray2'>Số điện thoại</label>
                            <label htmlFor="" className='font-normal text-end text-gray2'>Giới tính</label>
                            <label htmlFor="" className='font-normal text-end text-gray2'>Ngày sinh</label>
                        </div>
                        <div className='h-[320px] items-center grid-rows-6 grid col-span-7'>
                            <span className='font-medium'>LeDucHai-Store</span>
                            <input type="text" id='name' autoComplete='off' className='px-2 focus:shadow-[0_0_4px_0_#00c09e] border-blue1 focus:border-blue6 transition-all w-[70%] py-1 outline-none rounded-sm text-[14px] border' />
                            <p className='flex items-center gap-3'>
                                <span className='font-medium text-black'>leduchai2k3@gmail.com</span>
                                <button className='text-[11px] text-white font-semibold px-2 py-[6px] bg-blue6'>Thay đổi</button>
                            </p>
                            <p className='flex items-center gap-3'>
                                <span className='font-medium text-black'>0343335657</span>
                                <button className='text-[11px] text-white font-semibold px-2 py-[6px] bg-blue6'>Thay đổi</button>
                            </p>
                            <FormControl className=''>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group"
                                    value={value}
                                    onChange={handleChange}
                                >
                                    <FormControlLabel value="female" control={<StyledRadio />} label="Female" />
                                    <FormControlLabel value="male" control={<StyledRadio />} label="Male" />
                                    <FormControlLabel value="other" control={<StyledRadio />} label="Other" />
                                </RadioGroup>
                            </FormControl>
                            <input type="text" autoComplete='off' className='px-2 focus:shadow-[0_0_4px_0_#00c09e] border-blue1 focus:border-blue6 transition-all w-[70%] py-1 outline-none rounded-sm text-[14px] border' />
                        </div>
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

export default MyProfilePage;