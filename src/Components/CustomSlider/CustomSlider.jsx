import React, { useRef } from "react";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
import { RiShoppingCartLine } from "react-icons/ri";
import { products } from "../../API/data";
import { Link, useNavigate } from "react-router-dom";
import { MdUpdate } from "react-icons/md";
import moment from "moment-jalaali";
import { PiStarFill } from "react-icons/pi";

const CustomSlider = ({
  title,
  translate,
  items,
  discounts,
  tags,
  isLoading,
}) => {
  const sliderRef = useRef();
  const navigate = useNavigate();
  const discountIds = discounts.map((dis) => dis.product_id);
  const swiperCustome = (data) => {
    if (sliderRef.current) {
      const width = sliderRef.current.offsetWidth;
      sliderRef.current.scrollTo(
        sliderRef.current.scrollLeft + width * data,
        0
      );
    }
  };

  const addSignToMoney = (number) => {
    const options = { style: "decimal" };
    return number.toLocaleString("fa-IR", options) + " تومان";
  };

  return (
    <div className="w-[90%] sm:w-[95%] 2xl:w-[90%] mx-auto  py-5 bg-[#f3f3f5] rounded-xl p-3">
      <div className="flex items-center sm:gap-0 justify-between">
        <div className="border-r-4 flex-col text-[#868686] border-[#07B235] font-bold border-solid flex items-start pr-1 gap-1">
          <span className="text-xl mr-1 font-[shabnambold]">{title}</span>
          <div className="flex items-center gap-1">
            <PiStarFill className="text-2xl text-orange-400" />
            <span className="text-sm tracking-wider">{translate}</span>
          </div>
        </div>
        <div className="flex justify-end items-center w-fit sm:w-[15rem]">
          <div className="flex gap-x-4 text-2xl">
            <HiOutlineChevronRight
              onClick={() => swiperCustome(1)}
              className="bg-white text-[#868686] hover:bg-[#2ac954] rounded-lg w-8 h-8 hover:text-white transition-all duration-500 cursor-pointer"
            />
            <HiOutlineChevronLeft
              onClick={() => swiperCustome(-1)}
              className="bg-white text-[#868686] hover:bg-[#2ac954] rounded-lg w-8 h-8 hover:text-white transition-all duration-500 cursor-pointer"
            />
          </div>
        </div>
      </div>
      {isLoading ? (
        <div className="w-full">
          <img
            src="/img/Spinner-1s-229px.svg"
            alt="loading"
            className="mx-auto w-20"
          />
        </div>
      ) : (
        <div ref={sliderRef} className="sliderContainer overflow-x-scroll">
          <div
            className="flex items-center justify-start gap-5 py-8"
            onClick={(e) => navigate("/hioj")}
          >
            {items.map((product, index) => (
              <Link
                to={`/shop/product/${product.id}/${product.title}`}
                target="_blank"
                key={`product-slide${index}`}
                className="sliderItem"
              >
                <div className="sm:w-[40vw] lg:w-[25vw] xl:w-[20vw] 2xl:w-[16.5vw] cursor-pointer hover:brightness-125 w-[85vw] flex h-[370px] flex-col bg-white justify-around  overflow-hidden rounded-2xl   hover:-translate-y-2 transition-all duration-500 hover:shadow-[4px_4px_17px_-10px_rgba(0,0,0,1)] shadow-[0px_2px_8px_rgba(0,0,0,0.15)]">
                  <div className="flex items-start justify-center h-full">
                    <img
                      className="rounded-tl-2xl rounded-tr-2xl w-full h-auto max-h-[230px] bg-green-400"
                      alt="product_Slide_Image"
                      src={product.image}
                    />
                  </div>
                  <div className="flex flex-col items-start justify-center gap-3 h-[50%] py-3">
                    <div className="mr-3">
                      <div className="flex items-center gap-2">
                        {tags
                          ?.filter((tag) => tag.product_id === product.id)
                          .map((item, index) => (
                            <p
                              key={`product-tag-${index}`}
                              className="py-1 my-2 px-1 text-[0.7rem] bg-[#e2e2e2] rounded-md"
                            >
                              {item.title}
                            </p>
                          ))}
                      </div>
                      <span className="text-[#656666] font-[shabnambold] line-clamp-1 text-[1rem] mb-3">
                        {product.title}
                      </span>
                      <div className="flex items-center gap-1 text-[#717171]">
                        <MdUpdate className="scale-125 text-green-700" />
                        <span className="font-[shabnamBold] text-sm">
                          {moment(product.created_at).format("jYYYY/jMM/jDD")}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center justify-end w-full gap-x-2">
                        {discountIds.includes(product.id) ? (
                          <div className="flex items-center gap-3 bg-[#888888] px-5 py-1 rounded-tr-lg rounded-br-lg text-white">
                            <p className="font-[shabnamBold] line-through text-red-900">
                              {addSignToMoney(product.price)}
                            </p>
                            <p className="font-[shabnamBold]">
                              {addSignToMoney(
                                product.price -
                                  (product.price *
                                    discounts.find(
                                      (discount) =>
                                        discount.product_id === product.id
                                    )?.value) /
                                    100
                              )}
                            </p>
                          </div>
                        ) : (
                          <p className="bg-[#888888] px-5 py-1 rounded-tr-lg rounded-br-lg text-white font-[shabnamBold]">
                            {addSignToMoney(product.price)}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomSlider;
