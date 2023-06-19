import React from "react";
import IconCart from "./../header/IconCart";
import { NavLink } from "react-router-dom";

const ItemProduct = ({
    image,
    slugProduct,
    title,
    author,
    slugAuthor,
    price,
}) => {
    return (
        <div className="transition-all aspect-square group/parent hover:bg-blue2">
            <NavLink to={slugProduct} className="relative">
                <img
                    src={image}
                    alt=""
                    className="object-cover w-full aspect-[7/5] cursor-pointer transition-all"
                />
                <div className="absolute max-w-max top-[5%] right-[5%] opacity-0 group-hover/parent:opacity-100 group/item transition-all flex flex-col border border-blue1 bg-white rounded-md">
                    <span className="flex items-center gap-[10px] p-2 border-b border-blue1 hover:text-blue6 group/item1">
                        <svg
                            width="20"
                            height="19"
                            viewBox="0 0 20 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="transition-all fill-black group-hover/item1:fill-blue6"
                        >
                            <path d="M10.1 15.55L10 15.65L9.89 15.55C5.14 11.24 2 8.39 2 5.5C2 3.5 3.5 2 5.5 2C7.04 2 8.54 3 9.07 4.36H10.93C11.46 3 12.96 2 14.5 2C16.5 2 18 3.5 18 5.5C18 8.39 14.86 11.24 10.1 15.55ZM14.5 0C12.76 0 11.09 0.81 10 2.08C8.91 0.81 7.24 0 5.5 0C2.42 0 0 2.41 0 5.5C0 9.27 3.4 12.36 8.55 17.03L10 18.35L11.45 17.03C16.6 12.36 20 9.27 20 5.5C20 2.41 17.58 0 14.5 0Z" />
                        </svg>
                        <span className="text-[14px] font-semibold hidden group-hover/item:block transition-all">
                            Like
                        </span>
                    </span>
                    <span className="flex items-center gap-2 p-2 group/item hover:text-blue6 group/item2">
                        <svg
                            width="22"
                            height="16"
                            viewBox="0 0 22 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="transition-all fill-black group-hover/item2:fill-blue6"
                        >
                            <path d="M11 5C11.7956 5 12.5587 5.31607 13.1213 5.87868C13.6839 6.44129 14 7.20435 14 8C14 8.79565 13.6839 9.55871 13.1213             10.1213C12.5587 10.6839 11.7956 11 11 11C10.2044 11 9.44129 10.6839 8.87868 10.1213C8.31607 9.55871 8 8.79565 8 8C8 7.20435 8.31607 6.44129 8.87868 5.87868C9.44129 5.31607 10.2044 5 11 5ZM11 0.5C16 0.5 20.27 3.61 22 8C20.27 12.39 16 15.5 11 15.5C6 15.5 1.73 12.39 0 8C1.73 3.61 6 0.5 11 0.5ZM2.18 8C2.98825 9.65031 4.24331 11.0407 5.80248 12.0133C7.36165 12.9858 9.1624 13.5013 11 13.5013C12.8376 13.5013 14.6383 12.9858 16.1975 12.0133C17.7567 11.0407 19.0117 9.65031 19.82 8C19.0117 6.34969 17.7567 4.95925 16.1975 3.98675C14.6383 3.01424 12.8376 2.49868 11 2.49868C9.1624 2.49868 7.36165 3.01424 5.80248 3.98675C4.24331 4.95925 2.98825 6.34969 2.18 8Z" />
                        </svg>
                        <span className="text-[14px] font-semibold hidden group-hover/item:block transition-all">
                            Review
                        </span>
                    </span>
                </div>
            </NavLink>
            <div className="flex flex-col gap-2 p-2 scroll-px-32">
                <NavLink
                    to={slugProduct}
                    className="text-[14px] font-semibold leading-5 cursor-pointer"
                >
                    {title}
                </NavLink>
                <NavLink to={slugAuthor} className="cursor-pointer text-gray1">
                    {author}
                </NavLink>
                <div className="flex justify-end gap-3">
                    <button>
                        <IconCart width={18} height={18}></IconCart>
                    </button>
                    <span className="flex items-end p-2 rounded-md bg-blue3 max-w-max">
                        <svg
                            width="8"
                            height="10"
                            viewBox="0 0 6 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M4.5 0C4.22344 0 4 0.223438 4 0.5H3.5C3.22344 0.5 3 0.723437 3 1C3 1.27656 3.22344 1.5 3.5 1.5H4V2.26719C3.70625 2.09687 3.36406 2 3 2C1.89531 2 1 2.89531 1 4C1 5.10469 1.89531 6 3 6C3.38281 6 3.74063 5.89219 4.04375 5.70625C4.12188 5.87969 4.29688 6 4.5 6C4.77656 6 5 5.77656 5 5.5V1.5C5.27656 1.5 5.5 1.27656 5.5 1C5.5 0.723437 5.27656 0.5 5 0.5C5 0.223438 4.77656 0 4.5 0ZM2 4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3C3.26522 3 3.51957 3.10536 3.70711 3.29289C3.89464 3.48043 4 3.73478 4 4C4 4.26522 3.89464 4.51957 3.70711 4.70711C3.51957 4.89464 3.26522 5 3 5C2.73478 5 2.48043 4.89464 2.29289 4.70711C2.10536 4.51957 2 4.26522 2 4ZM0.5 6.5C0.223438 6.5 0 6.72344 0 7C0 7.27656 0.223438 7.5 0.5 7.5H5.5C5.77656 7.5 6 7.27656 6 7C6 6.72344 5.77656 6.5 5.5 6.5H0.5Z"
                                fill="black"
                            />
                        </svg>
                        <span className="text-[14px] font-medium">{price}</span>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default ItemProduct;
