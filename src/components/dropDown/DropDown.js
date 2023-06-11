import React, { useContext } from 'react';
import { DropdownContext } from '../../context/dropdown-context';

const DropDown = ({ className }) => {

    const { show1, setValue, dataButtonHead } = useContext(DropdownContext);

    return (
        <div className={`absolute top-[40px] max-w-max flex bg-white flex-col border border-blue1 rounded-md dropdown-content ${className} ${show1 ? "open" : ""}`}>
            {dataButtonHead?.map((item) => (
                <span className='px-5 py-2 cursor-pointer hover:bg-blue1' key={item.id} onMouseDown={() => { setValue(item.text); }}>{item.text}</span>
            ))}
        </div>
    );
};

export default DropDown;