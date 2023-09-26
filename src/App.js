import React, { Suspense, useState } from "react";
import { Outlet, Route, Router, Routes, useParams } from "react-router-dom";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import AffiliateMarketing from "./pages/Profile/AffiliateMarketing";

const LayoutMain = React.lazy(() => import("./layouts/LayoutMain"));
const LayoutProfile = React.lazy(() => import("./layouts/LayoutProfile"));
const LayoutSeller = React.lazy(() => import("./layouts/LayoutSeller"));
const HomePage = React.lazy(() => import("./pages/Home/HomePage"));
const BlogPage = React.lazy(() => import("./pages/Home/BlogPage"));
const SellPage = React.lazy(() => import("./pages/Home/SellPage"));
const AffiliatesPage = React.lazy(() => import("./pages/Home/AffiliatesPage"));
const SellApplyPage = React.lazy(() => import("./pages/Home/SellApplyPage"));
const BlogDetailsPage = React.lazy(() =>
  import("./pages/Home/BlogDetailsPage")
);
const ProductPage = React.lazy(() => import("./pages/Home/ProductPage"));
const ProductDetailsPage = React.lazy(() =>
  import("./pages/Home/ProductDetailsPage")
);
const CartPage = React.lazy(() => import("./pages/Home/CartPage"));
const HistoryProductPage = React.lazy(() =>
  import("./pages/Profile/HistoryProductPage")
);
const DepositWithdrawal = React.lazy(() =>
  import("./pages/Profile/DepositWithdrawal")
);
const MyProfilePage = React.lazy(() => import("./pages/Profile/MyProfilePage"));
const ChangePasswordPage = React.lazy(() =>
  import("./pages/Profile/ChangePasswordPage")
);
const VourcherPage = React.lazy(() => import("./pages/Profile/VourcherPage"));
const NotificationPage = React.lazy(() =>
  import("./pages/Profile/NotificationPage")
);
const AccumulatePoints = React.lazy(() =>
  import("./pages/Profile/AccumulatePoints")
);
const HomeSellerPage = React.lazy(() =>
  import("./pages/Seller/HomeSellerPage")
);
const OrderSellerPage = React.lazy(() =>
  import("./pages/Seller/OrderSellerPage")
);
const AddProductSellerPage = React.lazy(() =>
  import("./pages/Seller/AddProductSellerPage")
);
const ManageProduct = React.lazy(() => import("./pages/Seller/ManageProduct"));
const AddCategory = React.lazy(() => import("./pages/Seller/AddCategory"));

const LoadingFallback = () => (
  <div className="bg-[#ffffff] min-h-screen min-w-full flex items-center justify-center">
    <div className="custom-loader w-[50px] h-[50px]"></div>
  </div>
);

const App = () => {
  return (
    <div className="w-[100%]">
      <Suspense fallback={<LoadingFallback></LoadingFallback>}>
        <Routes>
          {/* -------------------------------------Auth------------------------------------- */}
          <Route path="/register" element={<Register></Register>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>

          {/* -------------------------------------Main------------------------------------- */}
          <Route element={<LayoutMain></LayoutMain>}>
            <Route path="/" element={<HomePage></HomePage>}></Route>
            <Route
              path="/product/:slug"
              element={<ProductPage></ProductPage>}
            ></Route>
            <Route path="/cart" element={<CartPage></CartPage>}></Route>
            <Route path="/sell" element={<SellPage></SellPage>}></Route>
            <Route
              path="/sell/apply"
              element={<SellApplyPage></SellApplyPage>}
            ></Route>
            <Route
              path="/affiliates"
              element={<AffiliatesPage></AffiliatesPage>}
            ></Route>
            <Route path="/blog" element={<BlogPage></BlogPage>}></Route>
            <Route
              path="/blog/:slug"
              element={<BlogDetailsPage></BlogDetailsPage>}
            ></Route>
            <Route
              path="/product-details/:slug"
              element={<ProductDetailsPage></ProductDetailsPage>}
            ></Route>
            -------------------------------------Profile-------------------------------------
            <Route path="/profile" element={<LayoutProfile></LayoutProfile>}>
              <Route
                path="my-profile"
                element={<MyProfilePage></MyProfilePage>}
              ></Route>
              <Route
                path="deposit-withdrawal"
                element={<DepositWithdrawal></DepositWithdrawal>}
              ></Route>
              <Route
                path="affiliate"
                element={<AffiliateMarketing></AffiliateMarketing>}
              ></Route>
              <Route
                path="history-product"
                element={<HistoryProductPage></HistoryProductPage>}
              ></Route>
              <Route
                path="change-password"
                element={<ChangePasswordPage></ChangePasswordPage>}
              ></Route>
              <Route
                path="vourcher"
                element={<VourcherPage></VourcherPage>}
              ></Route>
              <Route
                path="noti"
                element={<NotificationPage></NotificationPage>}
              ></Route>
              <Route
                path="accumulate-points"
                element={<AccumulatePoints></AccumulatePoints>}
              ></Route>
            </Route>
          </Route>

          {/* -------------------------------------Seller------------------------------------- */}
          <Route path="/seller" element={<LayoutSeller></LayoutSeller>}>
            <Route path="" element={<HomeSellerPage></HomeSellerPage>}></Route>
            <Route
              path="order"
              element={<OrderSellerPage></OrderSellerPage>}
            ></Route>
            <Route
              path="add-product"
              element={<AddProductSellerPage></AddProductSellerPage>}
            ></Route>
            <Route
              path="edit-product/:id"
              element={<AddProductSellerPage></AddProductSellerPage>}
            ></Route>
            <Route
              path="product"
              element={<ManageProduct></ManageProduct>}
            ></Route>
            <Route
              path="add-category"
              element={<AddCategory></AddCategory>}
            ></Route>
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};

export default React.memo(App);
// export default App;
