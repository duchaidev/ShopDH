import React, { useContext } from 'react';
import { DropdownContext } from '../../context/dropdown-context';

const DropDown = ({ className }) => {

    const { show2, setValue, dataButtonHead } = useContext(DropdownContext);
    return (
        <div className={`absolute top-[43px] min-w-[124px] right-0 flex bg-white flex-col items-start border border-blue1 rounded-md dropdown-content ${show2 ? "open" : ""} ${className}`}>
            {dataButtonHead?.map((item) => (
                <span className='w-full px-5 py-2 cursor-pointer hover:bg-blue1' key={item.id} onMouseDown={() => { setValue(item.text); }}>{item.text}</span>
            ))}
        </div>
    );
};

export default DropDown;