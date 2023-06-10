import React from "react";
import { NavLink } from "react-router-dom";
import ItemBlog from "../../components/home/ItemBlog";

const Blog = () => {
    const dataBlog = [
        {
            id: 1,
            slugBlog: '/',
            image: '21011598.jpg',
            title: 'Seppo - Corporate One Page HTML Template',
            content: 'There’s something intrinsically emotional about colors and color schemes, right? The way they speak to us is on a different level tha…',
            createDate: '11/06/2023',
            author: 'LeDucHai',
            slugAuthor: '/'
        },
        {
            id: 2,
            slugBlog: '/',
            image: '21011598.jpg',
            title: 'Seppo - Corporate One Page HTML Template',
            content: 'There’s something intrinsically emotional about colors and color schemes, right? The way they speak to us is on a different level tha…',
            createDate: '11/06/2023',
            author: 'LeDucHai',
            slugAuthor: '/'
        },
        {
            id: 3,
            slugBlog: '/',
            image: '21011598.jpg',
            title: 'Seppo - Corporate One Page HTML Template',
            content: 'There’s something intrinsically emotional about colors and color schemes, right? The way they speak to us is on a different level tha…',
            createDate: '11/06/2023',
            author: 'LeDucHai',
            slugAuthor: '/'
        },
        {
            id: 4,
            slugBlog: '/',
            image: '21011598.jpg',
            title: 'Seppo - Corporate One Page HTML Template',
            content: 'There’s something intrinsically emotional about colors and color schemes, right? The way they speak to us is on a different level tha…',
            createDate: '11/06/2023',
            author: 'LeDucHai',
            slugAuthor: '/'
        },
        {
            id: 5,
            slugBlog: '/',
            image: '21011598.jpg',
            title: 'Seppo - Corporate One Page HTML Template',
            content: 'There’s something intrinsically emotional about colors and color schemes, right? The way they speak to us is on a different level tha…',
            createDate: '11/06/2023',
            author: 'LeDucHai',
            slugAuthor: '/'
        }
    ]
    return (
        <div className="mt-16 px-[5%] pb-5">
            <div className="flex justify-between">
                <h2 className="text-[22px] font-bold mb-2">Tips, Tricks, and Trends</h2>
                <NavLink to="/" className="flex items-end gap-4 group">
                    <span className="transition-all group-hover:text-blue6">
                        Explore Our Blog
                    </span>
                    <svg
                        width="8"
                        height="12"
                        viewBox="0 0 8 12"
                        className="transition-all group-hover:text-blue6 stroke-gray1 group-hover:stroke-blue6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M1 1L6 6L1 11" strokeWidth="2" />
                    </svg>
                </NavLink>
            </div>
            <div className="grid w-full grid-cols-5 gap-6 mt-5">
                {dataBlog.length > 0 && dataBlog.map((item, index) => (
                    <ItemBlog key={item.id} slugBlog={item.slugBlog} image={item.image} title={item.title} content={item.content} createDate={item.createDate} author={item.author} slugAuthor={item.slugAuthor}></ItemBlog>
                ))}
            </div>
        </div>
    );
};

export default Blog;
