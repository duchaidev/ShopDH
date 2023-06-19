import React, { Suspense } from 'react';
import { Route, Routes } from "react-router-dom";
import ProductDetails from './pages/ProductDetails';

const HomePage = React.lazy(() => import("./pages/HomePage"));
const Product = React.lazy(() => import("./pages/Product"));

const App = () => {

  return (
    <div className='w-[100%]'>
      <Suspense
        fallback={
          <div className="bg-[#1F2833] min-h-screen min-w-full flex items-center justify-center">
            <span>Loading</span>
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="/product" element={<Product></Product>}></Route>
          <Route path="/product-details/:slug" element={<ProductDetails></ProductDetails>}></Route>
        </Routes>
      </Suspense>
    </div>
  );
};

// export default React.memo(App);
export default App;