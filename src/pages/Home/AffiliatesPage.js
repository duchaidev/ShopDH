import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const AffiliatesPage = () => {
  const { dataUser } = useSelector((state) => state.register.login);
  return (
    <div className="w-full h-[90vh] flex flex-col items-center justify-center gap-9">
      <img src="/partner-hero.png" alt="affilate" className="h-[30vh]" />
      <h3 className="text-[50px] font-medium">
        Kiếm tiền thông qua việc chia sẻ sản phẩm!
      </h3>
      <p className="text-2xl leading-9 w-[60%] text-center">
        Hãy giới thiệu trang web của chúng tôi tới bạn bè và cộng đồng của bạn,
        và bạn sẽ nhận 20% hoa hồng từ giao dịch đầu tiên của khách hàng mới và
        10% từ giao dịch tiếp theo của khách hàng đó.
      </p>
      <NavLink
        to={dataUser?.id ? "/profile/affiliate" : "/login"}
        className="px-12 py-5 rounded-md text-[18px] font-medium hover:scale-95 transition-all text-white bg-blue6"
      >
        Lấy mã giới thiệu
      </NavLink>
    </div>
  );
};

export default AffiliatesPage;
