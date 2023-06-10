import React from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';

const LayoutMain = ({ children }) => {
    return (
        <div>
            <Header></Header>
            {children}
            <Footer></Footer>
        </div>
    );
};

export default LayoutMain;