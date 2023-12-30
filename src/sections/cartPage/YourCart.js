import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { NavLink } from "react-router-dom";
import {
  fetchProductCartPage,
  removeProductInCart,
} from "../../services/apiRequestCart";
import { useDispatch, useSelector } from "react-redux";
import { convertBase64ToImage } from "../../untils/componentHandle";
import SkeletonProductCartPage from "../../components/skeleton/SkeletonProductCartPage";
import Swal from "sweetalert2";
import TotalPrice from "./TotalPrice";
import DropDownCategoryProduct from "../../components/dropDown/DropDownCategoryProduct";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

const YourCart = () => {
  const dataCart = useSelector((state) => state.cart.getAllProductInCart);
  const dispatch = useDispatch();
  const { dataUser } = useSelector((state) => state?.register?.login);
  const [dataInCart, setDataInCart] = useState();
  const [checked, setChecked] = useState({});
  const {
    data: dataInCartPage,
    refetch,
    isLoading,
  } = useQuery(["dataProductCart"], () => fetchProductCartPage(dataUser?.id));

  useEffect(() => {
    setDataInCart(dataInCartPage);
  }, [dataInCartPage]);

  useEffect(() => {
    refetch();
  }, [dataCart]);

  const handleDeleteProductInCart = async (productId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          let newData = [...dataInCart?.data];
          newData = newData.filter((item) => item.id !== productId);
          setDataInCart({
            data: newData,
            message: "Delete product in cart successfully",
            success: true,
          });
          removeProductInCart(dispatch, dataCart, dataUser?.id, productId);
        } catch (e) {
          Swal.fire("Error", e, "error");
        }
      }
    });
  };

  const [selectedProduct, setSelectedProduct] = useState([]);

  const handleCheckAll = (event) => {
    const selectedProducts = [];
    const updatedChecked = {};
    dataInCart?.data?.forEach((item) => {
      updatedChecked[item.id] = event.target.checked;
      if (event.target.checked) {
        selectedProducts.push(item); // Thêm sản phẩm vào mảng nếu được chọn
      }
    });
    setChecked(updatedChecked);
    setSelectedProduct(selectedProducts);
  };

  const handleChangeCheckItem = (event, id) => {
    setChecked((prevChecked) => ({
      ...prevChecked,
      [id]: event.target.checked,
    }));

    setSelectedProduct((prevSelectedProducts) => {
      const updatedProducts = [...prevSelectedProducts];
      if (event.target.checked) {
        // Nếu sản phẩm được chọn, thêm vào mảng
        const productToAdd = dataInCart?.data?.find((item) => item.id === id);
        if (productToAdd) {
          updatedProducts.push(productToAdd);
        }
      } else {
        // Nếu sản phẩm bị bỏ chọn, loại bỏ khỏi mảng
        const indexToRemove = updatedProducts.findIndex(
          (item) => item.id === id
        );
        if (indexToRemove !== -1) {
          updatedProducts.splice(indexToRemove, 1);
        }
      }

      return updatedProducts;
    });
  };

  return (
    <div className="mt-[45px] px-[5%] grid grid-cols-10 gap-20">
      {/*--------------------------------------List Product--------------------------------------*/}
      <div className="col-span-7">
        <div className="h-10">
          <span className="text-2xl font-bold text-center text-gray2">
            Your Cart
          </span>
          <NavLink
            to="/"
            className="ml-4 text-lg font-semibold text-center text-blue6"
          >
            <span>Lịch sử mua hàng</span>
          </NavLink>
        </div>
        {dataInCart?.data?.length === 0 && isLoading === false ? (
          <div>Giỏ hàng trống</div>
        ) : (
          <div>
            <FormControlLabel
              control={
                <Checkbox
                  checked={
                    Object.values(checked).every((value) => value) &&
                    Object.keys(checked).length === dataInCart?.data?.length
                  }
                  indeterminate={
                    Object.values(checked).some((value) => value) &&
                    !Object.values(checked).every((value) => value)
                  }
                  onChange={handleCheckAll}
                />
              }
            />
            {/*--------------------------------------Items Product--------------------------------------*/}
            {isLoading === true ? (
              <div className="">
                {Array.from({ length: 2 }).map((_, index) => (
                  <div
                    // className="w-full px-6 py-4 mt-3 border-t border-blue1"
                    key={index}
                  >
                    <SkeletonProductCartPage></SkeletonProductCartPage>
                  </div>
                ))}
              </div>
            ) : (
              <div>
                {dataInCart?.data?.length > 0 &&
                  dataInCart?.data?.map((item) => (
                    <div
                      className={`grid grid-cols-20 pr-6 py-4 mt-3 border-t border-blue1`}
                      key={item.id}
                    >
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={checked[item.id] || false}
                            onChange={(event) =>
                              handleChangeCheckItem(event, item.id)
                            }
                          />
                        }
                      />
                      <div className="flex items-center gap-5 col-span-15">
                        <div className="w-48 p-[6px] border rounded-sm border-blue1">
                          <img
                            src={convertBase64ToImage(
                              item?.productInCart?.image || ""
                            )}
                            alt="img"
                            className="w-full object-cover aspect-[7/4] rounded-sm border border-blue2"
                          />
                        </div>
                        <div className="flex flex-col gap-3 text-base">
                          <div>
                            <h3 className="text-lg font-medium">
                              {item?.title}
                            </h3>
                            <p>
                              <span>by </span>
                              <span className="font-medium text-blue6">
                                {item?.user?.username ||
                                  item?.user?.firstName +
                                    " " +
                                    item?.user?.lastName}
                              </span>
                            </p>
                          </div>
                          <div className="relative">
                            <span className="text-sm font-semibold text-gray2">
                              License Type
                            </span>
                            {/* ======================== DropDown Category ======================== */}
                            <DropDownCategoryProduct
                              product={item}
                              dataInCart={dataInCart}
                              setDataInCart={setDataInCart}
                              userId={dataUser?.id}
                            ></DropDownCategoryProduct>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-end col-span-4">
                        <span className="text-lg font-bold">
                          ${item?.productInCart?.price}
                        </span>
                        <button
                          className="text-base font-normal text-blue6"
                          onClick={() => {
                            handleDeleteProductInCart(item?.id);
                          }}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/*--------------------------------------Price Product--------------------------------------*/}
      <div className="flex flex-col items-end w-full col-span-3 ">
        <div className="h-10">
          <NavLink to="/" className="text-lg font-semibold text-blue6">
            <span>Need Support?</span>
          </NavLink>
        </div>
        <TotalPrice selectedProduct={selectedProduct}></TotalPrice>
      </div>
    </div>
  );
};

export default YourCart;
