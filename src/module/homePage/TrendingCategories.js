import React, { useEffect, useState } from "react";
import ItemTrendingCategories from "../../components/home/ItemTrendingCategories";
import axios from "axios";

const TrendingCategories = () => {
    const [dataTrendsCate, setDataTrendsCate] = useState([]);
    useEffect(() => {
        async function fetchDataTrendsCate() {
            try {
                const dataTrendsCateRes = await axios.get("http://localhost:3000/TrendingCategories");
                setDataTrendsCate(dataTrendsCateRes.data);
            } catch (err) { console.error("err: " + err); }
        }
        fetchDataTrendsCate();
    }, []);

    return (
        <div className="mt-20 px-[5%]">
            <h2 className="text-[22px] font-bold">Browse Trending Categories</h2>
            <div className="grid w-full grid-cols-6 gap-6 mt-5">
                {dataTrendsCate.map((items) => (
                    <ItemTrendingCategories
                        key={items.id}
                        image={items.image}
                        title={items.title}
                        url={items.url}
                    ></ItemTrendingCategories>
                ))}
            </div>
        </div>
    );
};

export default TrendingCategories;
