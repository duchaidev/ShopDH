import React from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';
import { DropdownProvider } from '../context/dropdown-context';

const LayoutMain = ({ children }) => {
    return (
        <div>
            <DropdownProvider>
                <Header></Header>
                {children}
                <Footer></Footer>
            </DropdownProvider>
        </div>
    );
};

export default LayoutMain;