import { createContext, useContext, useState } from "react";

const DropdownContext = createContext();
const dataButtonHead = [
    {
        id: 0,
        text: 'All items',
    },
    {
        id: 1,
        text: 'Item 1',
    },
    {
        id: 2,
        text: 'Item 2',
    },
    {
        id: 3,
        text: 'Item 3',
    },
    {
        id: 4,
        text: 'Item 4',
    }
];
function DropdownProvider(props) {
    //Dropdown Header Items
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [value, setValue] = useState("");
    //Dropdown Header Items
    const toggle = () => {
        setShow1(!show1);
    };

    //Dropdown Header Slider Home
    const toggle2 = () => {
        setShow2(!show2);
    };
    const values = { show1, setShow1, show2, setShow2, toggle, toggle2, value, setValue, dataButtonHead };
    return (
        <DropdownContext.Provider value={values}>
            {props.children}
        </DropdownContext.Provider>
    );
}
function useDropdown() {
    const context = useContext(DropdownContext);
    if (typeof context === "undefined")
        throw new Error("useDropdown must be used within DropdownProvider");
    return context;
}
export { useDropdown, DropdownProvider, DropdownContext };
