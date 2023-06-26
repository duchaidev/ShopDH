import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { locales } from '../../i18n/i18n';

const DropdownInfo = ({ show }) => {
    const { t } = useTranslation(["home"]);
    const { i18n } = useTranslation();
    const handleLanguageChange = (lng) => {
        i18n.changeLanguage(lng);
    };
    return (
        <div className={`absolute transition-all right-0 top-9 w-[200px] border border-blue1 text-xs rounded-lg bg-white font-medium dropdown-content ${show ? "open" : ""}`}>
            <div className='flex flex-col gap-[6px] border-b border-blue1 p-3'>
                <NavLink to="/my-profile" className='text-[14px] cursor-pointer'>{t("HELLO")}, Lê Đức Hải</NavLink>
                <div className='flex items-center justify-between'>
                    <span className='italic text-gray1'>{t("SURPLUS")}: 2,500,345đ</span>
                    <NavLink to="/profile/deposit-withdrawal" className="px-2 py-1 text-white rounded-md cursor-pointer bg-blue7">{t("DEPOSIT")}/ {t("WITHDRAW")}</NavLink>
                </div>
            </div>
            <div className='flex flex-col pt-2 border-b border-blue1'>
                <NavLink to="/my-profile" className="px-3 py-[6px] hover:bg-blue1">{t("PROFILE")}</NavLink>
                <NavLink to="/" className="px-3 py-[6px] hover:bg-blue1">{t("NOTIFICATION")}</NavLink>
                <NavLink to="/" className="px-3 py-[6px] hover:bg-blue1 mb-2">Tin nhắn</NavLink>
            </div>
            <div className='flex flex-col pt-2 border-b border-blue1'>
                <NavLink to="/profile/deposit-withdrawal" className="px-3 py-[6px] hover:bg-blue1">Nạp/ Rút tiền</NavLink>
                <NavLink to="/ " className="px-3 py-[6px] hover:bg-blue1">Mã khuyến mãi</NavLink>
                <NavLink to="/profile/history-product" className="px-3 py-[6px] hover:bg-blue1 mb-2">Lịch sử mua hàng</NavLink>
            </div>
            <div className='flex flex-col pt-2 border-b border-blue1'>
                <NavLink to="/" className="px-3 py-[6px] hover:bg-blue1">Liên hệ hỗ trợ/ báo cáo </NavLink>
                <NavLink to="/" className="px-3 py-[6px] hover:bg-blue1 mb-2">Góp ý cải thiện chất lượng</NavLink>
            </div>
            <div className='flex flex-col border-b border-blue1'>
                <div className='flex gap-2 px-3 py-3'>
                    {Object.entries(locales).map(([code, name]) => (
                        <button className='font-medium text-[12px] text-white px-2 py-1 rounded-md bg-blue6' key={code} value={code} onMouseDown={() => {
                            handleLanguageChange(code)
                        }}>
                            {name}
                        </button>
                    ))}
                    {/* <button className='font-medium text-[12px] text-white px-2 py-1 rounded-md bg-blue6' onMouseDown={() => {
                        handleLanguageChange("VN")
                    }}>Tiếng Việt</button>

                    <button className='font-medium text-[12px] text-white px-2 py-1 rounded-md bg-blue6' onMouseDown={() => {
                        handleLanguageChange("EN")
                    }}>English</button> */}
                </div>
            </div>
            <div className='flex flex-col pt-2'>
                <NavLink to="/" className="px-3 py-[6px] hover:bg-blue1 mb-2">Đăng xuất</NavLink>
            </div>
        </div>
    );
};

export default DropdownInfo;