import React, { Suspense } from 'react';
import { Route, Routes } from "react-router-dom";

const LayoutMain = React.lazy(() => import("./layouts/LayoutMain"));
const LayoutProfile = React.lazy(() => import("./layouts/LayoutProfile"));
const HomePage = React.lazy(() => import("./pages/HomePage"));
const ProductPage = React.lazy(() => import("./pages/ProductPage"));
const ProductDetailsPage = React.lazy(() => import("./pages/ProductDetailsPage"));
const CartPage = React.lazy(() => import("./pages/CartPage"));
const HistoryProductPage = React.lazy(() => import("./pages/HistoryProductPage"));

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
          <Route path='/' element={<LayoutMain></LayoutMain>}>
            <Route path="/" element={<HomePage></HomePage>}></Route>
            <Route path="/product" element={<ProductPage></ProductPage>}></Route>
            <Route path="/cart" element={<CartPage></CartPage>}></Route>
            <Route path="/product-details/:slug" element={<ProductDetailsPage></ProductDetailsPage>}></Route>
          </Route>
          <Route path='/' element={<LayoutMain></LayoutMain>}>
            <Route element={<LayoutProfile></LayoutProfile>}>
              <Route path="/profile/history-product" element={<HistoryProductPage></HistoryProductPage>}></Route>
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};

// export default React.memo(App);
export default App;