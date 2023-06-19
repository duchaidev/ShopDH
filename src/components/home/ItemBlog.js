import React from 'react';
import { NavLink } from 'react-router-dom';

const ItemBlog = ({ slugBlog, image, title, content, createDate, author, slugAuthor }) => {
    return (
        <div className="transition-all aspect-square">
            <NavLink to={slugBlog}>
                <img
                    src={image}
                    alt=""
                    className="object-cover w-full aspect-[7/5] cursor-pointer transition-all"
                />
            </NavLink>
            <div className="flex flex-col gap-3 p-2 scroll-px-32">
                <NavLink
                    to={slugBlog}
                    className="text-[14px] font-semibold  cursor-pointer leading-5"
                >
                    {title}
                </NavLink>
                <span className="text-[14px] leading-4 text-gray2 line-clamp-4 overflow-ellipsis">
                    {content}
                </span>
                <div className="flex justify-between">
                    <div className="flex gap-2">
                        <NavLink
                            to={slugAuthor}
                            className="cursor-pointer text-[14px] font-semibold text-gray1"
                        >
                            {author}
                        </NavLink>
                        <span className="text-[14px] text-gray1">{createDate}</span>
                    </div>
                    <NavLink to={slugBlog} className="mr-2 text-blue6 hover:text-blue7 transition-all text-[14px]">
                        Read More
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default ItemBlog;