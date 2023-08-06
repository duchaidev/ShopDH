import React, { Suspense } from 'react';
import { Route, Routes } from "react-router-dom";
import Register from './pages/Auth/Register';
import Login from './pages/Auth/Login';

const LayoutMain = React.lazy(() => import("./layouts/LayoutMain"));
const LayoutProfile = React.lazy(() => import("./layouts/LayoutProfile"));
const LayoutSeller = React.lazy(() => import("./layouts/LayoutSeller"));
const HomePage = React.lazy(() => import("./pages/Home/HomePage"));
const BlogPage = React.lazy(() => import("./pages/Home/BlogPage"));
const SellPage = React.lazy(() => import("./pages/Home/SellPage"));
const AffiliatesPage = React.lazy(() => import("./pages/Home/AffiliatesPage"));
const SellApplyPage = React.lazy(() => import("./pages/Home/SellApplyPage"));
const BlogDetailsPage = React.lazy(() => import("./pages/Home/BlogDetailsPage"));
const ProductPage = React.lazy(() => import("./pages/Home/ProductPage"));
const ProductDetailsPage = React.lazy(() => import("./pages/Home/ProductDetailsPage"));
const CartPage = React.lazy(() => import("./pages/Home/CartPage"));
const HistoryProductPage = React.lazy(() => import("./pages/Profile/HistoryProductPage"));
const DepositWithdrawal = React.lazy(() => import("./pages/Profile/DepositWithdrawal"));
const MyProfilePage = React.lazy(() => import("./pages/Profile/MyProfilePage"));
const ChangePasswordPage = React.lazy(() => import("./pages/Profile/ChangePasswordPage"));
const VourcherPage = React.lazy(() => import("./pages/Profile/VourcherPage"));
const NotificationPage = React.lazy(() => import("./pages/Profile/NotificationPage"));
const AccumulatePoints = React.lazy(() => import("./pages/Profile/AccumulatePoints"));
const HomeSellerPage = React.lazy(() => import("./pages/Seller/HomeSellerPage"));
const ProductSellerPage = React.lazy(() => import("./pages/Seller/ProductSellerPage"));

const App = () => {

  return (
    <div className='w-[100%]'>
      <Suspense
        fallback={
          <div className="bg-[#ffffff] min-h-screen min-w-full flex items-center justify-center">
            <div className='custom-loader w-[50px] h-[50px]'></div>
          </div>
        }
      >
        <Routes>
          {/* -------------------------------------Main------------------------------------- */}
          <Route path='/' element={<LayoutMain></LayoutMain>}>
            <Route path="" element={<HomePage></HomePage>}></Route>
            <Route path="product" element={<ProductPage></ProductPage>}></Route>
            <Route path="cart" element={<CartPage></CartPage>}></Route>
            <Route path="sell" element={<SellPage></SellPage>}></Route>
            <Route path="sell/apply" element={<SellApplyPage></SellApplyPage>}></Route>
            <Route path="affiliates" element={<AffiliatesPage></AffiliatesPage>}></Route>
            <Route path="blog" element={<BlogPage></BlogPage>}></Route>
            <Route path="blog/:slug" element={<BlogDetailsPage></BlogDetailsPage>}></Route>
            <Route path="product-details/:slug" element={<ProductDetailsPage></ProductDetailsPage>}></Route>
          </Route>

          {/* -------------------------------------Profile------------------------------------- */}
          <Route element={<LayoutMain></LayoutMain>}>
            <Route path='/profile' element={<LayoutProfile></LayoutProfile>}>
              <Route path="my-profile" element={<MyProfilePage></MyProfilePage>}></Route>
              <Route path="deposit-withdrawal" element={<DepositWithdrawal></DepositWithdrawal>}></Route>
              <Route path="history-product" element={<HistoryProductPage></HistoryProductPage>}></Route>
              <Route path="change-password" element={<ChangePasswordPage></ChangePasswordPage>}></Route>
              <Route path="vourcher" element={<VourcherPage></VourcherPage>}></Route>
              <Route path="noti" element={<NotificationPage></NotificationPage>}></Route>
              <Route path="accumulate-points" element={<AccumulatePoints></AccumulatePoints>}></Route>
            </Route>
          </Route>

          {/* -------------------------------------Auth------------------------------------- */}
          <Route path='/register' element={<Register></Register>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>

          {/* -------------------------------------Seller------------------------------------- */}
          <Route path='/seller' element={<LayoutSeller></LayoutSeller>} >
            <Route path='' element={<HomeSellerPage></HomeSellerPage>}></Route>
            <Route path='product' element={<ProductSellerPage></ProductSellerPage>}></Route>
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};

// export default React.memo(App);
export default App;