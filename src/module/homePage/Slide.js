import React from 'react';
import IconSearch from '../../components/header/IconSearch';
import IconDown from '../../components/header/IconDown';
import { NavLink } from 'react-router-dom';

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
    return (
        <div className="flex flex-col items-center mt-20 px-9">
            <div className="w-[60%] flex items-center flex-col">
                <span className="text-[100px] font-bold text-center leading-[120px]">
                    Bring your creative ideas to life.
                </span>
                <div className="w-[670px] h-[68px] rounded-lg flex items-center pl-6 bg-blue2 mt-[40px]">
                    <IconSearch></IconSearch>
                    <input
                        type="text"
                        className="flex-grow h-full px-4 outline-none bg-blue2"
                        placeholder="Search millions of photos, fonts, graphics, and more, ..."
                    />
                    <button className="flex gap-3 px-5 border-l border-blue1 items-center h-[30px]">
                        <span className="text-gray1">All Items</span>
                        <IconDown></IconDown>
                    </button>
                </div>
                <div className="mt-[25px] flex gap-4">
                    {data.map((items, index) => (
                        <NavLink to={items.url} key={items.id}>
                            <button
                                className="px-[35px] py-[14px] rounded-full border border-blue1"
                            >
                                {items.category}
                            </button>
                        </NavLink>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SlideHome;