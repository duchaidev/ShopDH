import React, { useState } from 'react';

const HistoryProductPage = () => {
    const [showDetailPrice, setShowDetailPrice] = useState(Array().fill(false));

    const handleShowDetailPrice = (index) => {
        const newDropdownStates = [...showDetailPrice];
        newDropdownStates[index] = !newDropdownStates[index];
        setShowDetailPrice(newDropdownStates);
    };

    return (
        <div className='mb-32'>
            {/*----------------------------------------Header History-----------------------------------*/}
            <div className='flex items-center justify-between w-full bg-white'>
                <span className='flex-1 cursor-pointer py-4 font-medium text-center border-b-[2px] border-blue6 text-blue6'>Tất cả</span>
                <span className='flex-1 cursor-pointer py-4 font-medium text-center border-b-[2px] border-transparent'>Chờ thanh toán</span>
                <span className='flex-1 cursor-pointer py-4 font-medium text-center border-b-[2px] border-transparent'>Đang xử lí</span>
                <span className='flex-1 cursor-pointer py-4 font-medium text-center border-b-[2px] border-transparent'>Hoàn thành</span>
                <span className='flex-1 cursor-pointer py-4 font-medium text-center border-b-[2px] border-transparent'>Đã hủy</span>
                <span className='flex-1 cursor-pointer py-4 font-medium text-center border-b-[2px] border-transparent'>Khiếu nại/ Hoàn tiền</span>
            </div>
            {/*----------------------------------------Search History-----------------------------------*/}
            <div className='w-full mt-3 h-[45px]'>
                <input type="text" className='w-full h-full px-6 py-2 outline-none bg-blue1' />
            </div>
            {/*----------------------------------------Item History-----------------------------------*/}
            <div className='w-full mt-3 bg-white'>
                {/*----------------------------------------Product Header-----------------------------------*/}
                <div className='flex items-center justify-between px-4 py-3 '>
                    <div className='flex items-center gap-5'>
                        <div className='flex items-center gap-1'>
                            <div className='w-5 h-5 overflow-hidden rounded-full'>
                                <img src="/21011598.jpg" alt="" className='object-cover w-full h-full overflow-hidden rounded-full' />
                            </div>
                            <span className='font-medium'>DucHaiShop</span>
                        </div>
                        <button className='flex items-center gap-1 p-2 bg-blue6'>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.55556 10.3333V11.8889C9.55556 12.0952 9.47361 12.293 9.32775 12.4389C9.18189 12.5847 8.98406 12.6667 8.77778 12.6667H3.33333L1 15V7.22222C1 7.01594 1.08194 6.81811 1.22781 6.67225C1.37367 6.52639 1.5715 6.44444 1.77778 6.44444H3.33333M15 9.55556L12.6667 7.22222H7.22222C7.01594 7.22222 6.81811 7.14028 6.67225 6.99442C6.52639 6.84855 6.44444 6.65072 6.44444 6.44444V1.77778C6.44444 1.5715 6.52639 1.37367 6.67225 1.22781C6.81811 1.08194 7.01594 1 7.22222 1H14.2222C14.4285 1 14.6263 1.08194 14.7722 1.22781C14.9181 1.37367 15 1.5715 15 1.77778V9.55556Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span className='text-[12px] font-medium text-white'>Chat</span>
                        </button>
                        <button className='flex items-center gap-1 p-2 border border-blue6'>
                            { /*Icon Shop*/}
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.28032 1H8.41285L8.82134 5.08294C8.84918 5.35898 8.81885 5.6378 8.73229 5.9014C8.64573 6.165 8.50486 6.40752 8.31879 6.61331C8.13271 6.81911 7.90555 6.9836 7.65197 7.09618C7.3984 7.20877 7.12403 7.26694 6.84659 7.26694C6.56914 7.26694 6.29478 7.20877 6.0412 7.09618C5.78762 6.9836 5.56047 6.81911 5.37439 6.61331C5.18831 6.40752 5.04745 6.165 4.96089 5.9014C4.87433 5.6378 4.84399 5.35898 4.87184 5.08294L5.28032 1Z" fill="#00C09E" stroke="#348879" strokeWidth="1.5" />
                                <path d="M1.41478 3.09942C1.5263 2.54183 1.58206 2.26304 1.69546 2.03687C1.81361 1.80133 1.97998 1.59326 2.18376 1.42618C2.38753 1.2591 2.62417 1.13674 2.8783 1.06704C3.12264 1 3.40707 1 3.97594 1H5.28032L4.82611 5.53904C4.80214 5.7988 4.7254 6.05095 4.6006 6.28003C4.4758 6.50911 4.30555 6.71031 4.10029 6.87131C3.89503 7.03232 3.65907 7.14973 3.40686 7.21638C3.15464 7.28302 2.89148 7.29748 2.63348 7.25889C2.37547 7.22029 2.12807 7.12945 1.90639 6.99191C1.68472 6.85438 1.49345 6.67305 1.34429 6.45903C1.19513 6.24501 1.09122 6.0028 1.03892 5.74722C0.986622 5.49165 0.987033 5.22809 1.04013 4.97267L1.41478 3.09942ZM12.2784 3.09942C12.1669 2.54183 12.1111 2.26304 11.9977 2.03687C11.8796 1.80133 11.7132 1.59326 11.5094 1.42618C11.3056 1.2591 11.069 1.13674 10.8149 1.06704C10.5705 1 10.2861 1 9.71724 1H8.41285L8.86707 5.53904C8.89104 5.7988 8.96778 6.05095 9.09258 6.28003C9.21738 6.50911 9.38762 6.71031 9.59288 6.87131C9.79815 7.03232 10.0341 7.14973 10.2863 7.21638C10.5385 7.28302 10.8017 7.29748 11.0597 7.25889C11.3177 7.22029 11.5651 7.12945 11.7868 6.99191C12.0085 6.85438 12.1997 6.67305 12.3489 6.45903C12.498 6.24501 12.602 6.0028 12.6543 5.74722C12.7066 5.49165 12.7061 5.22809 12.653 4.97267L12.2784 3.09942Z" fill="#00C09E" stroke="#348879" strokeWidth="1.5" />
                                <path opacity="0.5" d="M4.81044 13.2169C4.81044 13.3415 4.85995 13.461 4.94807 13.5491C5.03619 13.6372 5.1557 13.6867 5.28032 13.6867C5.40494 13.6867 5.52446 13.6372 5.61258 13.5491C5.7007 13.461 5.7502 13.3415 5.7502 13.2169H4.81044ZM7.94297 13.2169C7.94297 13.3415 7.99248 13.461 8.0806 13.5491C8.16872 13.6372 8.28823 13.6867 8.41285 13.6867C8.53747 13.6867 8.65699 13.6372 8.74511 13.5491C8.83323 13.461 8.88273 13.3415 8.88273 13.2169H7.94297ZM7.15984 13.0602H6.53334V14H7.15984V13.0602ZM1.99117 8.51807V6.63855H1.05141V8.51807H1.99117ZM11.702 6.63855V8.51807H12.6418V6.63855H11.702ZM6.53334 13.0602C5.33859 13.0602 4.4903 13.059 3.84562 12.9725C3.21599 12.8879 2.85261 12.7288 2.5876 12.4638L1.9235 13.1279C2.39213 13.5978 2.98668 13.8052 3.72095 13.9041C4.44143 14.0012 5.36553 14 6.53334 14V13.0602ZM1.05141 8.51807C1.05141 9.68588 1.05015 10.6093 1.14726 11.3305C1.24625 12.0647 1.45425 12.6593 1.92288 13.1285L2.58697 12.4644C2.32259 12.1988 2.16346 11.8354 2.07888 11.2052C1.99242 10.5617 1.99117 9.71281 1.99117 8.51807H1.05141ZM7.15984 14C8.32765 14 9.25112 14.0012 9.97223 13.9041C10.7065 13.8052 11.301 13.5972 11.7703 13.1285L11.1062 12.4644C10.8406 12.7288 10.4772 12.8879 9.84693 12.9725C9.20288 13.059 8.35459 13.0602 7.15984 13.0602V14ZM11.702 8.51807C11.702 9.71281 11.7008 10.5617 11.6143 11.2058C11.5297 11.8354 11.3706 12.1988 11.1056 12.4638L11.7697 13.1279C12.2396 12.6593 12.4469 12.0647 12.5459 11.3305C12.643 10.61 12.6418 9.68588 12.6418 8.51807H11.702ZM5.7502 13.2169V11.3373H4.81044V13.2169H5.7502ZM7.94297 11.3373V13.2169H8.88273V11.3373H7.94297ZM6.84659 10.241C7.14794 10.241 7.34278 10.241 7.49001 10.2547C7.63097 10.2673 7.68235 10.2892 7.70803 10.3042L8.17791 9.48978C7.98558 9.37889 7.78134 9.33754 7.57521 9.31874C7.37473 9.30057 7.1304 9.3012 6.84659 9.3012V10.241ZM8.88273 11.3373C8.88273 11.0535 8.88273 10.8086 8.86519 10.6087C8.8464 10.4026 8.80505 10.1984 8.69415 10.006L7.8797 10.4759C7.89473 10.501 7.91666 10.553 7.92919 10.6939C7.94235 10.8412 7.94297 11.036 7.94297 11.3373H8.88273ZM7.70803 10.3042C7.77938 10.3456 7.83859 10.4044 7.8797 10.4759L8.69415 10.006C8.57037 9.79161 8.39232 9.61356 8.17791 9.48978L7.70803 10.3042ZM5.7502 11.3373C5.7502 11.036 5.7502 10.8412 5.76399 10.6939C5.77652 10.553 5.79844 10.5016 5.81348 10.4759L4.99902 10.006C4.88813 10.1984 4.84678 10.4026 4.82799 10.6087C4.80982 10.8092 4.81044 11.0535 4.81044 11.3373H5.7502ZM6.84659 9.3012C6.56215 9.3012 6.31782 9.3012 6.11796 9.31874C5.91184 9.33754 5.7076 9.37889 5.51526 9.48978L5.98514 10.3042C6.0102 10.2892 6.0622 10.2679 6.20317 10.2547C6.3504 10.2416 6.54524 10.241 6.84659 10.241V9.3012ZM5.81348 10.4759C5.85485 10.4045 5.91364 10.3453 5.98514 10.3042L5.51526 9.48978C5.30083 9.61354 5.12278 9.79159 4.99902 10.006L5.81348 10.4759Z" fill="#00C09E" />
                            </svg>
                            <span className='text-[12px] font-medium text-blue6'>Xem Shop</span>
                        </button>
                    </div>
                    <div>
                        <span className='pr-3 border-r border-blue6 text-blue6'>Đơn hàng thành công</span>
                        <span className='pl-3 uppercase text-greenText'>Hoàn thành</span>
                    </div>
                </div>
                {/*----------------------------------------Product-----------------------------------*/}
                <div className='bg-white '>
                    {/*----------------------------------------Product-----------------------------------*/}
                    <div className='flex items-center justify-between py-5 pl-5 pr-10 border-t border-b border-blue1'>
                        <div className='flex items-center gap-4'>
                            <div className='w-[80px] h-[80px]'>
                                <img src="https://images.unsplash.com/photo-1666919643134-d97687c1826c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80" alt="" className='object-cover w-full h-full overflow-hidden' />
                            </div>
                            <div className='flex flex-col gap-3'>
                                <h3 className='font-semibold text-[18px]'>Seppo - Corporate One Page HTML Template</h3>
                                <span className='text-[14px]'>Phân loại/ GÓi bảo hành</span>
                            </div>
                        </div>
                        <span className='font-semibold text-blue6'>200.000</span>
                    </div>
                    <div className='border-b border-grayE8 bg-greenBorder bg-opacity-5'>
                        {/*----------------------------------------Price-----------------------------------*/}
                        <div className='px-2 py-8'>
                            <div className='flex items-end justify-end w-full gap-4 pr-3'>
                                <span className='font-medium'>Thành tiền:</span>
                                <span className='text-[20px] font-semibold text-blue7'>200.000</span>
                            </div>
                            <div className='flex items-center justify-between pl-5 pr-3 mt-10'>
                                <div>
                                    <span className='italic font-[14px] text-gray1'>Đánh giá sản phẩm để nhận điểm tích lũy</span>
                                </div>
                                <div className='flex items-center gap-6'>
                                    <button className='px-5 py-3 font-medium text-white border rounded-sm border-blue6 bg-blue6'>Đánh giá</button>
                                    <button className='px-5 py-3 font-medium bg-white border border-blue6 text-blue6'>Liên hệ người bán </button>
                                    <button className='flex items-center gap-3 ml-6' onClick={() => { handleShowDetailPrice(0) }}><span className='font-semibold'>Chi tiết hóa đơn</span>

                                        <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg" className={`transition-all ${showDetailPrice[0] ? "-rotate-90" : ""}`}>
                                            <path fillRule="evenodd" clipRule="evenodd" d="M0.898133 6.66858C0.751462 6.52187 0.669067 6.3229 0.669067 6.11545C0.669067 5.90799 0.751462 5.70903 0.898133 5.56232L5.32396 1.13649C5.39613 1.06177 5.48246 1.00216 5.57791 0.961162C5.67336 0.920159 5.77602 0.898577 5.87991 0.897675C5.98379 0.896772 6.08681 0.916567 6.18296 0.955905C6.27911 0.995243 6.36646 1.05334 6.43992 1.12679C6.51338 1.20025 6.57147 1.2876 6.61081 1.38375C6.65015 1.4799 6.66994 1.58293 6.66904 1.68681C6.66814 1.79069 6.64655 1.89335 6.60555 1.9888C6.56455 2.08425 6.50495 2.17058 6.43022 2.24275L2.55752 6.11545L6.43022 9.98815C6.57274 10.1357 6.65159 10.3333 6.64981 10.5385C6.64803 10.7436 6.56575 10.9398 6.42069 11.0849C6.27563 11.2299 6.07941 11.3122 5.87428 11.314C5.66914 11.3158 5.47152 11.2369 5.32396 11.0944L0.898133 6.66858Z" fill="#545454" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/*----------------------------------------Payment-----------------------------------*/}
                        <div className={`grid grid-cols-10 ${showDetailPrice[0] ? "dropDownShowDetailPriceProductHistory" : "hidden"}`}>
                            <div className='flex flex-col col-span-7 text-right'>
                                <span className='px-3 py-3 border-t border-r border-grayE8'>Tổng tiền hàng</span>
                                <span className='px-3 py-3 border-t border-r border-grayE8'>Voucher từ Duc Hai</span>
                                <span className='px-3 py-3 border-t border-r border-grayE8'>Voucher từ Shop</span>
                                <span className='px-3 py-2 border-t border-r text-[18px] font-bold border-grayE8 text-blue7'>Thành tiền</span>
                                <span className='px-3 py-3 border-t border-r border-grayE8'>Phương thức thanh toán</span>
                            </div>
                            <div className='flex flex-col col-span-3 text-right'>
                                <span className='px-3 py-3 border-t border-r border-grayE8'>200.000</span>
                                <span className='px-3 py-3 border-t border-r border-grayE8'>0</span>
                                <span className='px-3 py-3 border-t border-r border-grayE8'>0</span>
                                <span className='px-3 py-2 font-bold border-t border-r border-grayE8 text-[18px] text-blue7'>200.000</span>
                                <span className='px-3 py-3 border-t border-r border-grayE8'>Banking</span>
                            </div>
                        </div>
                    </div>

                </div>


            </div>

            <div className='w-full mt-3 bg-white'>
                {/*----------------------------------------Product Header-----------------------------------*/}
                <div className='flex items-center justify-between px-4 py-3 '>
                    <div className='flex items-center gap-5'>
                        <div className='flex items-center gap-1'>
                            <div className='w-5 h-5 overflow-hidden rounded-full'>
                                <img src="/21011598.jpg" alt="" className='object-cover w-full h-full overflow-hidden rounded-full' />
                            </div>
                            <span className='font-medium'>DucHaiShop</span>
                        </div>
                        <button className='flex items-center gap-1 p-2 bg-blue6'>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.55556 10.3333V11.8889C9.55556 12.0952 9.47361 12.293 9.32775 12.4389C9.18189 12.5847 8.98406 12.6667 8.77778 12.6667H3.33333L1 15V7.22222C1 7.01594 1.08194 6.81811 1.22781 6.67225C1.37367 6.52639 1.5715 6.44444 1.77778 6.44444H3.33333M15 9.55556L12.6667 7.22222H7.22222C7.01594 7.22222 6.81811 7.14028 6.67225 6.99442C6.52639 6.84855 6.44444 6.65072 6.44444 6.44444V1.77778C6.44444 1.5715 6.52639 1.37367 6.67225 1.22781C6.81811 1.08194 7.01594 1 7.22222 1H14.2222C14.4285 1 14.6263 1.08194 14.7722 1.22781C14.9181 1.37367 15 1.5715 15 1.77778V9.55556Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span className='text-[12px] font-medium text-white'>Chat</span>
                        </button>
                        <button className='flex items-center gap-1 p-2 border border-blue6'>
                            { /*Icon Shop*/}
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.28032 1H8.41285L8.82134 5.08294C8.84918 5.35898 8.81885 5.6378 8.73229 5.9014C8.64573 6.165 8.50486 6.40752 8.31879 6.61331C8.13271 6.81911 7.90555 6.9836 7.65197 7.09618C7.3984 7.20877 7.12403 7.26694 6.84659 7.26694C6.56914 7.26694 6.29478 7.20877 6.0412 7.09618C5.78762 6.9836 5.56047 6.81911 5.37439 6.61331C5.18831 6.40752 5.04745 6.165 4.96089 5.9014C4.87433 5.6378 4.84399 5.35898 4.87184 5.08294L5.28032 1Z" fill="#00C09E" stroke="#348879" strokeWidth="1.5" />
                                <path d="M1.41478 3.09942C1.5263 2.54183 1.58206 2.26304 1.69546 2.03687C1.81361 1.80133 1.97998 1.59326 2.18376 1.42618C2.38753 1.2591 2.62417 1.13674 2.8783 1.06704C3.12264 1 3.40707 1 3.97594 1H5.28032L4.82611 5.53904C4.80214 5.7988 4.7254 6.05095 4.6006 6.28003C4.4758 6.50911 4.30555 6.71031 4.10029 6.87131C3.89503 7.03232 3.65907 7.14973 3.40686 7.21638C3.15464 7.28302 2.89148 7.29748 2.63348 7.25889C2.37547 7.22029 2.12807 7.12945 1.90639 6.99191C1.68472 6.85438 1.49345 6.67305 1.34429 6.45903C1.19513 6.24501 1.09122 6.0028 1.03892 5.74722C0.986622 5.49165 0.987033 5.22809 1.04013 4.97267L1.41478 3.09942ZM12.2784 3.09942C12.1669 2.54183 12.1111 2.26304 11.9977 2.03687C11.8796 1.80133 11.7132 1.59326 11.5094 1.42618C11.3056 1.2591 11.069 1.13674 10.8149 1.06704C10.5705 1 10.2861 1 9.71724 1H8.41285L8.86707 5.53904C8.89104 5.7988 8.96778 6.05095 9.09258 6.28003C9.21738 6.50911 9.38762 6.71031 9.59288 6.87131C9.79815 7.03232 10.0341 7.14973 10.2863 7.21638C10.5385 7.28302 10.8017 7.29748 11.0597 7.25889C11.3177 7.22029 11.5651 7.12945 11.7868 6.99191C12.0085 6.85438 12.1997 6.67305 12.3489 6.45903C12.498 6.24501 12.602 6.0028 12.6543 5.74722C12.7066 5.49165 12.7061 5.22809 12.653 4.97267L12.2784 3.09942Z" fill="#00C09E" stroke="#348879" strokeWidth="1.5" />
                                <path opacity="0.5" d="M4.81044 13.2169C4.81044 13.3415 4.85995 13.461 4.94807 13.5491C5.03619 13.6372 5.1557 13.6867 5.28032 13.6867C5.40494 13.6867 5.52446 13.6372 5.61258 13.5491C5.7007 13.461 5.7502 13.3415 5.7502 13.2169H4.81044ZM7.94297 13.2169C7.94297 13.3415 7.99248 13.461 8.0806 13.5491C8.16872 13.6372 8.28823 13.6867 8.41285 13.6867C8.53747 13.6867 8.65699 13.6372 8.74511 13.5491C8.83323 13.461 8.88273 13.3415 8.88273 13.2169H7.94297ZM7.15984 13.0602H6.53334V14H7.15984V13.0602ZM1.99117 8.51807V6.63855H1.05141V8.51807H1.99117ZM11.702 6.63855V8.51807H12.6418V6.63855H11.702ZM6.53334 13.0602C5.33859 13.0602 4.4903 13.059 3.84562 12.9725C3.21599 12.8879 2.85261 12.7288 2.5876 12.4638L1.9235 13.1279C2.39213 13.5978 2.98668 13.8052 3.72095 13.9041C4.44143 14.0012 5.36553 14 6.53334 14V13.0602ZM1.05141 8.51807C1.05141 9.68588 1.05015 10.6093 1.14726 11.3305C1.24625 12.0647 1.45425 12.6593 1.92288 13.1285L2.58697 12.4644C2.32259 12.1988 2.16346 11.8354 2.07888 11.2052C1.99242 10.5617 1.99117 9.71281 1.99117 8.51807H1.05141ZM7.15984 14C8.32765 14 9.25112 14.0012 9.97223 13.9041C10.7065 13.8052 11.301 13.5972 11.7703 13.1285L11.1062 12.4644C10.8406 12.7288 10.4772 12.8879 9.84693 12.9725C9.20288 13.059 8.35459 13.0602 7.15984 13.0602V14ZM11.702 8.51807C11.702 9.71281 11.7008 10.5617 11.6143 11.2058C11.5297 11.8354 11.3706 12.1988 11.1056 12.4638L11.7697 13.1279C12.2396 12.6593 12.4469 12.0647 12.5459 11.3305C12.643 10.61 12.6418 9.68588 12.6418 8.51807H11.702ZM5.7502 13.2169V11.3373H4.81044V13.2169H5.7502ZM7.94297 11.3373V13.2169H8.88273V11.3373H7.94297ZM6.84659 10.241C7.14794 10.241 7.34278 10.241 7.49001 10.2547C7.63097 10.2673 7.68235 10.2892 7.70803 10.3042L8.17791 9.48978C7.98558 9.37889 7.78134 9.33754 7.57521 9.31874C7.37473 9.30057 7.1304 9.3012 6.84659 9.3012V10.241ZM8.88273 11.3373C8.88273 11.0535 8.88273 10.8086 8.86519 10.6087C8.8464 10.4026 8.80505 10.1984 8.69415 10.006L7.8797 10.4759C7.89473 10.501 7.91666 10.553 7.92919 10.6939C7.94235 10.8412 7.94297 11.036 7.94297 11.3373H8.88273ZM7.70803 10.3042C7.77938 10.3456 7.83859 10.4044 7.8797 10.4759L8.69415 10.006C8.57037 9.79161 8.39232 9.61356 8.17791 9.48978L7.70803 10.3042ZM5.7502 11.3373C5.7502 11.036 5.7502 10.8412 5.76399 10.6939C5.77652 10.553 5.79844 10.5016 5.81348 10.4759L4.99902 10.006C4.88813 10.1984 4.84678 10.4026 4.82799 10.6087C4.80982 10.8092 4.81044 11.0535 4.81044 11.3373H5.7502ZM6.84659 9.3012C6.56215 9.3012 6.31782 9.3012 6.11796 9.31874C5.91184 9.33754 5.7076 9.37889 5.51526 9.48978L5.98514 10.3042C6.0102 10.2892 6.0622 10.2679 6.20317 10.2547C6.3504 10.2416 6.54524 10.241 6.84659 10.241V9.3012ZM5.81348 10.4759C5.85485 10.4045 5.91364 10.3453 5.98514 10.3042L5.51526 9.48978C5.30083 9.61354 5.12278 9.79159 4.99902 10.006L5.81348 10.4759Z" fill="#00C09E" />
                            </svg>
                            <span className='text-[12px] font-medium text-blue6'>Xem Shop</span>
                        </button>
                    </div>
                    <div>
                        <span className='pr-3 border-r border-blue6 text-blue6'>Đơn hàng thành công</span>
                        <span className='pl-3 uppercase text-greenText'>Hoàn thành</span>
                    </div>
                </div>
                {/*----------------------------------------Product-----------------------------------*/}
                <div className='bg-white '>
                    {/*----------------------------------------Product-----------------------------------*/}
                    <div className='flex items-center justify-between py-5 pl-5 pr-10 border-t border-b border-blue1'>
                        <div className='flex items-center gap-4'>
                            <div className='w-[80px] h-[80px]'>
                                <img src="https://images.unsplash.com/photo-1666919643134-d97687c1826c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80" alt="" className='object-cover w-full h-full overflow-hidden' />
                            </div>
                            <div className='flex flex-col gap-3'>
                                <h3 className='font-semibold text-[18px]'>Seppo - Corporate One Page HTML Template</h3>
                                <span className='text-[14px]'>Phân loại/ GÓi bảo hành</span>
                            </div>
                        </div>
                        <span className='font-semibold text-blue6'>200.000</span>
                    </div>
                    <div className='border-b border-grayE8 bg-greenBorder bg-opacity-5'>
                        {/*----------------------------------------Price-----------------------------------*/}
                        <div className='px-2 py-8'>
                            <div className='flex items-end justify-end w-full gap-4 pr-3'>
                                <span className='font-medium'>Thành tiền:</span>
                                <span className='text-[20px] font-semibold text-blue7'>200.000</span>
                            </div>
                            <div className='flex items-center justify-between pl-5 pr-3 mt-10'>
                                <div>
                                    <span className='italic font-[14px] text-gray1'>Đánh giá sản phẩm để nhận điểm tích lũy</span>
                                </div>
                                <div className='flex items-center gap-6'>
                                    <button className='px-5 py-3 font-medium text-white border rounded-sm border-blue6 bg-blue6'>Đánh giá</button>
                                    <button className='px-5 py-3 font-medium bg-white border border-blue6 text-blue6'>Liên hệ người bán </button>
                                    <button className='flex items-center gap-3 ml-6' onClick={() => { handleShowDetailPrice(1) }}><span className='font-semibold'>Chi tiết hóa đơn</span>

                                        <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg" className={`transition-all ${showDetailPrice[1] ? "-rotate-90" : ""}`}>
                                            <path fillRule="evenodd" clipRule="evenodd" d="M0.898133 6.66858C0.751462 6.52187 0.669067 6.3229 0.669067 6.11545C0.669067 5.90799 0.751462 5.70903 0.898133 5.56232L5.32396 1.13649C5.39613 1.06177 5.48246 1.00216 5.57791 0.961162C5.67336 0.920159 5.77602 0.898577 5.87991 0.897675C5.98379 0.896772 6.08681 0.916567 6.18296 0.955905C6.27911 0.995243 6.36646 1.05334 6.43992 1.12679C6.51338 1.20025 6.57147 1.2876 6.61081 1.38375C6.65015 1.4799 6.66994 1.58293 6.66904 1.68681C6.66814 1.79069 6.64655 1.89335 6.60555 1.9888C6.56455 2.08425 6.50495 2.17058 6.43022 2.24275L2.55752 6.11545L6.43022 9.98815C6.57274 10.1357 6.65159 10.3333 6.64981 10.5385C6.64803 10.7436 6.56575 10.9398 6.42069 11.0849C6.27563 11.2299 6.07941 11.3122 5.87428 11.314C5.66914 11.3158 5.47152 11.2369 5.32396 11.0944L0.898133 6.66858Z" fill="#545454" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/*----------------------------------------Payment-----------------------------------*/}
                        <div className={`grid grid-cols-10 ${showDetailPrice[1] ? "dropDownShowDetailPriceProductHistory" : "hidden"}`}>
                            <div className='flex flex-col col-span-7 text-right'>
                                <span className='px-3 py-3 border-t border-r border-grayE8'>Tổng tiền hàng</span>
                                <span className='px-3 py-3 border-t border-r border-grayE8'>Voucher từ Duc Hai</span>
                                <span className='px-3 py-3 border-t border-r border-grayE8'>Voucher từ Shop</span>
                                <span className='px-3 py-2 border-t border-r text-[18px] font-bold border-grayE8 text-blue7'>Thành tiền</span>
                                <span className='px-3 py-3 border-t border-r border-grayE8'>Phương thức thanh toán</span>
                            </div>
                            <div className='flex flex-col col-span-3 text-right'>
                                <span className='px-3 py-3 border-t border-r border-grayE8'>200.000</span>
                                <span className='px-3 py-3 border-t border-r border-grayE8'>0</span>
                                <span className='px-3 py-3 border-t border-r border-grayE8'>0</span>
                                <span className='px-3 py-2 font-bold border-t border-r border-grayE8 text-[18px] text-blue7'>200.000</span>
                                <span className='px-3 py-3 border-t border-r border-grayE8'>Banking</span>
                            </div>
                        </div>
                    </div>

                </div>


            </div>
        </div>
    );
};

export default HistoryProductPage;