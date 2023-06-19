import React, { useContext } from 'react';
import IconSearch from '../../components/header/IconSearch';
import IconDown from '../../components/header/IconDown';
import { NavLink } from 'react-router-dom';
import DropDownSlide from '../../components/dropDown/DropDownSlide';
import { DropdownContext } from '../../context/dropdown-context';

const data = [
    {
        id: 1,
        category: "Photos",
        url: "/",
    },
    {
        id: 2,
        category: "Fonts",
        url: "/",
    },
    {
        id: 3,
        category: "Graphics",
        url: "/",
    },
];
const SlideHome = () => {
    const { toggle2, value, setShow2 } = useContext(DropdownContext);
    return (
        <div className="flex flex-col items-center mt-20 px-9">
            <div className="w-[60%] flex items-center flex-col">
                <span className="text-[80px] font-bold text-center leading-[120px]">
                    Bring your creative ideas to life.
                </span>
                <div className="w-[670px] h-[68px] rounded-lg flex items-center pl-6 bg-blue2 mt-[40px]">
                    <IconSearch></IconSearch>
                    <input
                        type="text"
                        className="flex-grow h-full px-4 outline-none bg-blue2"
                        placeholder="Search millions of photos, fonts, graphics, and more, ..."
                    />
                    <button className="relative w-[130px] flex gap-3 px-5 border-l border-blue1 items-center h-[30px] cursor-pointer" onClick={toggle2}>
                        {/* <input type="text" className='absolute top-0 w-full h-full opacity-0 cursor-pointer' /> */}
                        <span className="text-gray1">{value || "All items"}</span>
                        <IconDown></IconDown>
                        <DropDownSlide width={"135px"}></DropDownSlide>
                    </button>
                </div>
                <div className="mt-[25px] flex gap-4 transition-all">
                    {data.map((items, index) => (
                        <NavLink to={items.url} key={items.id} className="transition-all">
                            <button
                                className="px-[25px] h-12 items-center rounded-full border border-blue1 flex gap-4 hover:border-blue7 transition-all group"
                            >
                                <span className='transition-all group-hover:text-blue7'>
                                    {items.category}
                                </span>
                            </button>
                        </NavLink>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SlideHome;