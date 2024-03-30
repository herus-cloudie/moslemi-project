import React, { useEffect, useRef, useState } from "react";
import { SlMagnifier } from "react-icons/sl";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { getCategories } from "../../../../features/dashboard/action";
import {
  deleteAllFilters,
  sortByCategory,
  sortByName,
} from "../../../../features/products/productSlice";

function CategoriesP() {
  const categories = useSelector((state) => state.dashboard.categories);
  const products = useSelector((state) => state.products.products);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const filteredProducts = useSelector(
    (state) => state.products.FilteredProducts
  );
  const isBeProducts =
    categories.find((cate) => cate.title === "محصولات") === undefined
      ? false
      : true;
  const dispatch = useDispatch();
  const radioRef = useRef();
  const [searchParams, setSearchParams] = useSearchParams();
  let params = searchParams.get("category");
  let paramsKey = categories.find((cate) => cate.title === params)?.id || "";

  const searchRef = useRef();
  useEffect(() => {
    if (params !== null) {
      filterHandler(paramsKey);
    }
  }, [paramsKey, categories]);

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  const searchHandler = (e, value) => {
    let searchValue = searchRef.current.value;
    if (e.key === "Enter" || value === "search") {
      dispatch(sortByName(searchValue));
    }
  };
// hmd code
  const filterHandler = (value) => {
    const allPro = products.filter((item) => item.category_id == value);
    dispatch(sortByCategory(allPro));
  };
  // hmd code
  const clearFilter = () => {
    searchRef.current.value = "";
    const radioButtons = document.querySelectorAll('input[type="radio"]');
    radioButtons.forEach((radio) => {
      radio.checked = false;
    });

    dispatch(deleteAllFilters());
  };
  return (
    <div className="flex flex-col w-full mt-5 gap-3 2xl:gap-8">
      <span
        className="px-3 py-3 text-sm font-[shabnamBold] text-stone-700"
        style={{ borderRight: "solid 5px #02AAF1" }}
      >
        دسته بندی محصولات
      </span>
      <div
        style={{ border: "solid 1px #AAAAC8" }}
        className="flex bg-[#ffffff] px-2 justify-between items-center w-full sm:w-[50%] lg:w-full 2xl:w-[70%]"
      >
        <input
          onKeyDown={(e) => searchHandler(e)}
          onChange={(e) =>
            e.target.value === "" ? dispatch(sortByName("")) : null
          }
          ref={searchRef}
          type="search"
          name=""
          id=""
          placeholder="جستجو..."
          className="p-1 text-sm font-[shabnamBold] text-stone-600 outline-none w-[90%]"
        />
        <SlMagnifier
          onClick={(e) => searchHandler(e, "search")}
          className="rounded-sm font-bold p-1 hover:bg-[#57C053] transition-all hover:text-white scale-150"
        />
      </div>
      <div>
        {isBeProducts ? (
          <fieldset
            className="text-xs  font-bold flex flex-col gap-5"
            onChange={(e) => {
              filterHandler(e.target.id);
            }}
          >
            {categories
              .filter(
                (cate) =>
                  cate.category_id ===
                  categories.find((cate) => cate.title === "محصولات").id
              )
              .map((item) => (
                <div key={item.id} className="flex flex-col items-start  gap-2">
                  <div className="flex items-center gap-1 text-stone-600 text-sm">
                    <span className="font-[shabnamBold]">{item.title}</span>
                  </div>
                  <div className="flex flex-col gap-1 pr-3">
                    {categories
                      .filter((Case) => Case.category_id === item.id)
                      .map((Instance) => (
                        <div className="flex items-center gap-1 text-stone-600">
                          <input
                            type="radio"
                            name="cate"
                            id={Instance.id}
                            ref={radioRef}
                          />
                          <label
                            htmlFor={Instance.title}
                            className="font-[shabnamBold]"
                          >
                            {Instance.title}
                          </label>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            <button
              onClick={() => {
                clearFilter();
              }}
              class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300"
            >
              پاک کردن فیلتر
            </button>
          </fieldset>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default CategoriesP;
