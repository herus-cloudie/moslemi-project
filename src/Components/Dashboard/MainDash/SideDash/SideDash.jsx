import { React, useState } from "react";
import { BiCategory, BiSolidMask } from "react-icons/bi";
// import { BsPersonBoundingBox } from "react-icons/bs";
import { FaLink, FaTags, FaWindowClose } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import { GiClockwork, GiNewspaper } from "react-icons/gi";
import { ImNewspaper, ImUsers } from "react-icons/im";
import {
  MdOutlineArrowLeft,
  MdOutlineArticle,
  MdShoppingCart,
} from "react-icons/md";
import { RiCoupon3Fill } from "react-icons/ri";
import { TbDiscountCheckFilled } from "react-icons/tb";
// import { FaIdCard } from "react-icons/fa";
// import Cookies from "js-cookie";

import { useDispatch, useSelector } from "react-redux";
import {
  setContent,
  setSwitch,
  setSwitchCategories,
} from "../../../../features/dashboard/dashboardSlice";
// import { getUsers, getEmployee } from "../../../../features/dashboard/action";
// import { getRoles } from "@testing-library/react";
import { RiUserStarFill } from "react-icons/ri";

function SideDash({ dropMenu, setDropMenu }) {
  // const [cRotate,setCRotate] = useState(false);
  const [aRotate, setARotate] = useState(false);
  const [eRotate, setERotate] = useState(false);
  const [pRotate, setPRotate] = useState(false);
  const [prRotate, setPRRotate] = useState(false);
  const [cRotate, setCRotate] = useState(false);
  const [gRotate, setGRotate] = useState(false);
  const [rRotate, setRRotate] = useState(false);
  const [wRotate, setWRotate] = useState(false);
  const [wsRotate, setWsRotate] = useState(false);
  const [dRotate, setDRotate] = useState(false);
  const [coRotate, setCoRotate] = useState(false);
  const [tRotate, setTRotate] = useState(false);
  const [nRotate, setNRotate] = useState(false);
  const [lRotate, setLRotate] = useState(false);
  const [bRotate, setBRotate] = useState(false);
  const content = useSelector((state) => state.dashboard.content);
  const aCriterion = useSelector((state) => state.dashboard.articlesSwitch);
  const wsCriterion = useSelector((state) => state.dashboard.worksampleSwitch);
  const eCriterion = useSelector((state) => state.dashboard.employeesSwitch);
  const pCriterion = useSelector((state) => state.dashboard.productsSwitch);
  const gCriterion = useSelector((state) => state.dashboard.gallerySwitch);
  const bCriterion = useSelector((state) => state.dashboard.bannerSwitch);
  const rCriterion = useSelector((state) => state.dashboard.rolesSwitch);
  // const roles = useSelector((state) => state.dashboard.roles);
  const prCriterion = useSelector((state) => state.dashboard.projectSwitch);
  const dCriterion = useSelector((state) => state.dashboard.discountSwitch);
  const tCriterion = useSelector((state) => state.dashboard.tagsSwitch);
  const coCriterion = useSelector((state) => state.dashboard.couponSwitch);
  const nCriterion = useSelector((state) => state.dashboard.newsSwitch);
  const lCriterion = useSelector((state) => state.dashboard.linksSwitch);
  // const loginStatus = useSelector((state) => state.authentication.loginStatus);

  // const users = useSelector((state) => state.dashboard.users);

  const dispatch = useDispatch();

  const listSwitch = (value) => {
    dispatch(setContent(value));
    if (
      aRotate |
        cRotate |
        gRotate |
        rRotate |
        prRotate |
        dRotate |
        wRotate |
        tRotate |
        coRotate |
        eRotate |
        nRotate |
        bRotate |
        wsRotate |
        lRotate &&
      value !== "articles"
    ) {
      setCRotate(false);
      setGRotate(false);
      setRRotate(false);
      setWRotate(false);
      setARotate(false); /**/
      setPRRotate(false);
      setDRotate(false);
      setCoRotate(false);
      setTRotate(false);
      setNRotate(false);
      setLRotate(false);
      setERotate(false);
      setBRotate(false);
      setWsRotate(false);
    } else if (
      pRotate |
        cRotate |
        gRotate |
        rRotate |
        prRotate |
        dRotate |
        wRotate |
        tRotate |
        coRotate |
        nRotate |
        eRotate |
        bRotate |
        wsRotate |
        lRotate &&
      value !== "products"
    ) {
      setCRotate(false);
      setGRotate(false);
      setRRotate(false);
      setWRotate(false);
      setPRotate(false);/**/
      setPRRotate(false);
      setDRotate(false);
      setCoRotate(false);
      setTRotate(false);
      setNRotate(false);
      setLRotate(false);
      setERotate(false);
      setBRotate(false);
      setWsRotate(false);
    }
  };
  return (
    <div
      className={
        dropMenu
          ? "background-gra-green dashboard_side absolute lg:static top-0 right-0 w-[80vw] sm:w-[60vw] md:w-[50vw] z-[101] lg:w-[25%] overflow-y-scroll h-screen lg:h-[90%]  lg:z-10 flex transition-all duration-300 justify-center px-1 py-5"
          : "background-gra-green dashboard_side absolute lg:static top-0 right-[-35rem] w-[70vw] sm:w-[60vw] md:w-[50vw] z-[100] 2xl:w-[15%] xl:w-[20%] lg:w-[25%] overflow-y-scroll h-screen lg:h-[90%] transition-all duration-300  lg:z-10 flex justify-center px-1 py-5"
      }
    >
      <ul className="w-full flex flex-col items-center gap-3">
        <div className="w-full flex items-center justify-end px-3 py-1 lg:hidden">
          <FaWindowClose
            className="text-[#2dbaa5] text-xl"
            onClick={() => setDropMenu(false)}
          />
        </div>
        <div
          onClick={() => {
            listSwitch("categories");
            dispatch(setSwitchCategories({ key: "PARENT", title: "" }));
          }}
          style={{ backgroundColor: content === "categories" ? "#232c38" : "" }}
          className="flex justify-between items-center rounded-sm w-[80%] py-2 px-2 cursor-default hover:bg-[#2a3441] hover:brightness-125 transition-all duration-300"
        >
          <BiCategory className="bg-[#356E65] p-1 rounded-md text-white w-[2rem] h-[2rem]" />
          <li className="text-white font-bold text-lg  text-center">
            دسته بندی
          </li>
          <div className="w-[1.5rem] h-[1.5rem]"></div>
        </div>
        <div className="w-full flex flex-col items-center">
          <div
            onClick={() => {
              listSwitch("articles");
              setARotate(!aRotate);
              dispatch(setSwitch({ key: "articles", value: "all", id: null }));
            }}
            style={{ backgroundColor: content === "articles" ? "#232c38" : "" }}
            className="flex justify-between items-center rounded-sm w-[80%] py-2 px-2 cursor-default hover:bg-[#2a3441] hover:brightness-125 transition-all duration-300"
          >
            <MdOutlineArticle className="bg-[#356E65] p-1 rounded-md text-white w-[2rem] h-[2rem]" />
            <li className="text-white font-bold text-lg  text-center">
              مقالات
            </li>
            <MdOutlineArrowLeft
              className="text-white w-[1.5rem] h-[1.5rem] transition-all duration-300"
              style={{ rotate: aRotate ? "-90deg" : "0deg" }}
            />
          </div>
          <div
            className="flex flex-col text-white gap-3 text-sm bg-[#313e4d] justify-center items-center rounded-sm w-[50%] cursor-default transition-all ease-in-out duration-400"
            style={{
              height: aRotate ? "fit-content" : "0px",
              padding: aRotate ? "10px" : "0px",
              overflow: aRotate ? "" : "hidden",
              visibility: aRotate ? "visible" : "hidden",
              marginTop: aRotate ? "1rem" : "0px",
            }}
          >
            <button
              className="font-normal cursor-default w-full hover:bg-[#ffffff0c] transition-all duration-300 p-1"
              onClick={() =>
                dispatch(setSwitch({ key: "articles", value: "all", id: null }))
              }
              style={{
                backgroundColor:
                  aCriterion === "all" || aCriterion === "edit"
                    ? "#ffffff4d"
                    : "",
              }}
            >
              همه مقالات
            </button>
            <button
              className="font-normal cursor-default w-full hover:bg-[#ffffff0c] transition-all duration-300 p-1"
              onClick={() =>
                dispatch(setSwitch({ key: "articles", value: "new", id: null }))
              }
              style={{
                backgroundColor: aCriterion === "new" ? "#ffffff4d" : "",
              }}
            >
              مقاله جدید
            </button>
          </div>
        </div>
        <div className="w-full flex flex-col items-center">
          <div
            onClick={() => {
              listSwitch("products");
              setPRotate(!pRotate);
              dispatch(setSwitch({ key: "products", value: "all", id: null }));
            }}
            style={{ backgroundColor: content === "products" ? "#232c38" : "" }}
            className="flex justify-between items-center rounded-sm w-[80%] py-2 px-2 cursor-default hover:bg-[#2a3441] hover:brightness-125 transition-all duration-300"
          >
            <FiShoppingBag className="bg-[#356E65] p-1 rounded-md text-white w-[2rem] h-[2rem]" />
            <li className="text-white font-bold text-lg  text-center">
              محصولات
            </li>
            <MdOutlineArrowLeft
              className="text-white w-[1.5rem] h-[1.5rem] transition-all duration-300"
              style={{ rotate: pRotate ? "-90deg" : "0deg" }}
            />
          </div>
          <div
            className="flex flex-col text-white gap-3 text-sm bg-[#313e4d] justify-center items-center rounded-sm w-[50%] cursor-default transition-all ease-in-out duration-400"
            style={{
              height: pRotate ? "fit-content" : "0px",
              padding: pRotate ? "10px" : "0px",
              overflow: pRotate ? "" : "hidden",
              visibility: pRotate ? "visible" : "hidden",
              marginTop: pRotate ? "1rem" : "0px",
            }}
          >
            <button
              className="font-normal cursor-default w-full hover:bg-[#ffffff0c] transition-all duration-300 p-1"
              onClick={() =>
                dispatch(setSwitch({ key: "products", value: "all", id: null }))
              }
              style={{
                backgroundColor:
                  pCriterion === "all" ||
                  pCriterion === "edit" ||
                  pCriterion === "gallery"
                    ? "#ffffff4d"
                    : "",
              }}
            >
              همه محصولات
            </button>
            <button
              className="font-normal cursor-default w-full hover:bg-[#ffffff0c] transition-all duration-300 p-1"
              onClick={() =>
                dispatch(setSwitch({ key: "products", value: "new", id: null }))
              }
              style={{
                backgroundColor: pCriterion === "new" ? "#ffffff4d" : "",
              }}
            >
              محصول جدید
            </button>
          </div>
        </div>
        <div className="w-full flex flex-col items-center">
          <div
            onClick={() => {
              listSwitch("news");
              setNRotate(!nRotate);
              dispatch(setSwitch({ key: "news", value: "all" }));
            }}
            style={{ backgroundColor: content === "news" ? "#232c38" : "" }}
            className="flex justify-between items-center rounded-sm w-[80%] py-2 px-2 cursor-default hover:bg-[#2a3441] hover:brightness-125 transition-all duration-300"
          >
            <GiNewspaper className="bg-[#356E65] p-1 rounded-md text-white w-[2rem] h-[2rem]" />
            <li className="text-white font-bold text-lg  text-center">اخبار</li>
            <MdOutlineArrowLeft
              className="text-white w-[1.5rem] h-[1.5rem] transition-all duration-300"
              style={{ rotate: pRotate ? "-90deg" : "0deg" }}
            />
          </div>
          <div
            className="flex flex-col text-white gap-3 text-sm bg-[#313e4d] justify-center items-center rounded-sm w-[50%] cursor-default transition-all ease-in-out duration-400"
            style={{
              height: nRotate ? "fit-content" : "0px",
              padding: nRotate ? "10px" : "0px",
              overflow: nRotate ? "" : "hidden",
              visibility: nRotate ? "visible" : "hidden",
              marginTop: nRotate ? "1rem" : "0px",
            }}
          >
            <button
              className="font-normal cursor-default w-full hover:bg-[#ffffff0c] transition-all duration-300 p-1"
              onClick={() => dispatch(setSwitch({ key: "news", value: "all" }))}
              style={{
                backgroundColor:
                  nCriterion === "all" || nCriterion === "gallery"
                    ? "#ffffff4d"
                    : "",
              }}
            >
              همه اخبار
            </button>
            <button
              className="font-normal cursor-default w-full hover:bg-[#ffffff0c] transition-all duration-300 p-1"
              onClick={() => dispatch(setSwitch({ key: "news", value: "new" }))}
              style={{
                backgroundColor: nCriterion === "new" ? "#ffffff4d" : "",
              }}
            >
              اخبار جدید
            </button>
          </div>
        </div>
        <div
          onClick={() => listSwitch("users")}
          style={{ backgroundColor: content === "users" ? "#232c38" : "" }}
          className="flex justify-between items-center rounded-sm w-[80%] py-2 px-2 cursor-default hover:bg-[#2a3441] hover:brightness-125 transition-all duration-300"
        >
          <ImUsers className="bg-[#356E65] p-1 rounded-md text-white w-[2rem] h-[2rem]" />
          <li className="text-white font-bold text-lg  text-center">کاربران</li>
          <div className="w-[1.5rem] h-[1.5rem]"></div>
        </div>
        <div
          onClick={() => listSwitch("orders")}
          style={{ backgroundColor: content === "orders" ? "#232c38" : "" }}
          className="flex justify-between items-center rounded-sm w-[80%] py-2 px-2 cursor-default hover:bg-[#2a3441] hover:brightness-125 transition-all duration-300"
        >
          <MdShoppingCart className="bg-[#356E65] p-1 rounded-md text-white w-[2rem] h-[2rem]" />
          <li className="text-white font-bold text-lg  text-center">
            سفارش ها
          </li>
          <div className="w-[1.5rem] h-[1.5rem]"></div>
        </div>
        <div className="w-full flex flex-col items-center">
          <div
            onClick={() => {
              listSwitch("projects");
              setPRRotate(!prRotate);
              dispatch(setSwitch({ key: "projects", value: "all" }));
            }}
            style={{ backgroundColor: content === "projects" ? "#232c38" : "" }}
            className="flex justify-between items-center rounded-sm w-[80%] py-2 px-2 cursor-default hover:bg-[#2a3441] hover:brightness-125 transition-all duration-300"
          >
            <GiClockwork className="bg-[#356E65] p-1 rounded-md text-white w-[2rem] h-[2rem]" />
            <li className="text-white font-bold text-lg  text-center">
              پروژه ها
            </li>
            <MdOutlineArrowLeft
              className="text-white w-[1.5rem] h-[1.5rem] transition-all duration-300"
              style={{ rotate: prRotate ? "-90deg" : "0deg" }}
            />
          </div>
          <div
            className="flex flex-col text-white gap-3 text-sm bg-[#313e4d] justify-center items-center rounded-sm w-[50%] cursor-default transition-all ease-in-out duration-400"
            style={{
              height: prRotate ? "fit-content" : "0px",
              padding: prRotate ? "10px" : "0px",
              overflow: prRotate ? "" : "hidden",
              visibility: prRotate ? "visible" : "hidden",
              marginTop: prRotate ? "1rem" : "0px",
            }}
          >
            <button
              className="font-normal cursor-default w-full hover:bg-[#ffffff0c] transition-all duration-300 p-1"
              onClick={() =>
                dispatch(setSwitch({ key: "projects", value: "all" }))
              }
              style={{
                backgroundColor:
                  prCriterion === "all" || prCriterion === "edit"
                    ? "#ffffff4d"
                    : "",
              }}
            >
              همه
            </button>
            <button
              className="font-normal cursor-default w-full hover:bg-[#ffffff0c] transition-all duration-300 p-1"
              onClick={() =>
                dispatch(setSwitch({ key: "projects", value: "new" }))
              }
              style={{
                backgroundColor: prCriterion === "new" ? "#ffffff4d" : "",
              }}
            >
              ایجاد
            </button>
          </div>
        </div>
        <div className="w-full flex flex-col items-center">
          <div
            onClick={() => {
              listSwitch("roles");
              setRRotate(!rRotate);
              dispatch(setSwitch({ key: "roles", value: "all" }));
            }}
            style={{ backgroundColor: content === "roles" ? "#232c38" : "" }}
            className="flex justify-between items-center rounded-sm w-[80%] py-2 px-2 cursor-default hover:bg-[#2a3441] hover:brightness-125 transition-all duration-300"
          >
            <BiSolidMask className="bg-[#356E65] p-1 rounded-md text-white w-[2rem] h-[2rem]" />
            <li className="text-white font-bold text-lg  text-center">
              نقش ها
            </li>
            <MdOutlineArrowLeft
              className="text-white w-[1.5rem] h-[1.5rem] transition-all duration-300"
              style={{ rotate: rRotate ? "-90deg" : "0deg" }}
            />
          </div>
          <div
            className="flex flex-col text-white gap-3 text-sm bg-[#313e4d] justify-center items-center rounded-sm w-[50%] cursor-default transition-all ease-in-out duration-400"
            style={{
              height: rRotate ? "fit-content" : "0px",
              padding: rRotate ? "10px" : "0px",
              overflow: rRotate ? "" : "hidden",
              visibility: rRotate ? "visible" : "hidden",
              marginTop: rRotate ? "1rem" : "0px",
            }}
          >
            <button
              className="font-normal cursor-default w-full hover:bg-[#ffffff0c] transition-all duration-300 p-1"
              onClick={() =>
                dispatch(setSwitch({ key: "roles", value: "all" }))
              }
              style={{
                backgroundColor:
                  rCriterion === "all" || gCriterion === "edit"
                    ? "#ffffff4d"
                    : "",
              }}
            >
              همه
            </button>
            <button
              className="font-normal cursor-default w-full hover:bg-[#ffffff0c] transition-all duration-300 p-1"
              onClick={() =>
                dispatch(setSwitch({ key: "roles", value: "new" }))
              }
              style={{
                backgroundColor: rCriterion === "new" ? "#ffffff4d" : "",
              }}
            >
              ایجاد
            </button>
          </div>
        </div>
        <div
          onClick={() => {
            listSwitch("supervisors");
          }}
          style={{
            backgroundColor: content === "supervisors" ? "#232c38" : "",
          }}
          className="flex justify-between items-center rounded-sm w-[80%] py-2 px-2 cursor-default hover:bg-[#2a3441] hover:brightness-125 transition-all duration-300"
        >
          <RiUserStarFill className="bg-[#356E65] p-1 rounded-md text-white w-[2rem] h-[2rem]" />
          <li className="text-white font-bold text-lg  text-center">
            سرپرست‌ها
          </li>
          <div className="w-[1.5rem] h-[1.5rem]"></div>
        </div>
        <div className="w-full flex flex-col items-center">
          <div
            onClick={() => {
              listSwitch("employee");
              setERotate(!eRotate);
              dispatch(setSwitch({ key: "employee", value: "unapproval" }));
            }}
            style={{ backgroundColor: content === "employee" ? "#232c38" : "" }}
            className="flex justify-between items-center rounded-sm w-[80%] py-2 px-2 cursor-default hover:bg-[#2a3441] hover:brightness-125 transition-all duration-300"
          >
            <TbDiscountCheckFilled className="bg-[#356E65] p-1 rounded-md text-white w-[2rem] h-[2rem]" />
            <li className="text-white font-bold text-lg  text-center">استخدامی ها</li>
            <MdOutlineArrowLeft
              className="text-white w-[1.5rem] h-[1.5rem] transition-all duration-300"
              style={{ rotate: eRotate ? "-90deg" : "0deg" }}
            />
          </div>
          <div
            className="flex flex-col text-white gap-3 text-sm bg-[#313e4d] justify-center items-center rounded-sm w-[50%] cursor-default transition-all ease-in-out duration-400"
            style={{
              height: eRotate ? "fit-content" : "0px",
              padding: eRotate ? "10px" : "0px",
              overflow: eRotate ? "" : "hidden",
              visibility: eRotate ? "visible" : "hidden",
              marginTop: eRotate ? "1rem" : "0px",
            }}
          >
            <button
              className="font-normal cursor-default w-full hover:bg-[#ffffff0c] transition-all duration-300 p-1"
              onClick={() =>
                dispatch(setSwitch({ key: "employee", value: "unapproval" }))
              }
              style={{
                backgroundColor: eCriterion === "unapproval" ? "#ffffff4d" : "",
              }}
            >
             در انتظار استخدام
            </button>
            <button
              className="font-normal cursor-default w-full hover:bg-[#ffffff0c] transition-all duration-300 p-1"
              onClick={() =>
                dispatch(setSwitch({ key: "employee", value: "approval" }))
              }
              style={{
                backgroundColor: eCriterion === "approval" ? "#ffffff4d" : "",
              }}
            >
              استخدام شده
            </button>
          </div>
        </div>

        <div className="w-full flex flex-col items-center">
          <div
            onClick={() => {
              listSwitch("discount");
              setDRotate(!dRotate);
              dispatch(setSwitch({ key: "discount", value: "all" }));
            }}
            style={{ backgroundColor: content === "discount" ? "#232c38" : "" }}
            className="flex justify-between items-center rounded-sm w-[80%] py-2 px-2 cursor-default hover:bg-[#2a3441] hover:brightness-125 transition-all duration-300"
          >
            <TbDiscountCheckFilled className="bg-[#356E65] p-1 rounded-md text-white w-[2rem] h-[2rem]" />
            <li className="text-white font-bold text-lg  text-center">تخفیف</li>
            <MdOutlineArrowLeft
              className="text-white w-[1.5rem] h-[1.5rem] transition-all duration-300"
              style={{ rotate: dRotate ? "-90deg" : "0deg" }}
            />
          </div>
          <div
            className="flex flex-col text-white gap-3 text-sm bg-[#313e4d] justify-center items-center rounded-sm w-[50%] cursor-default transition-all ease-in-out duration-400"
            style={{
              height: dRotate ? "fit-content" : "0px",
              padding: dRotate ? "10px" : "0px",
              overflow: dRotate ? "" : "hidden",
              visibility: dRotate ? "visible" : "hidden",
              marginTop: dRotate ? "1rem" : "0px",
            }}
          >
            <button
              className="font-normal cursor-default w-full hover:bg-[#ffffff0c] transition-all duration-300 p-1"
              onClick={() =>
                dispatch(setSwitch({ key: "discount", value: "all" }))
              }
              style={{
                backgroundColor: dCriterion === "all" ? "#ffffff4d" : "",
              }}
            >
              همه
            </button>
            <button
              className="font-normal cursor-default w-full hover:bg-[#ffffff0c] transition-all duration-300 p-1"
              onClick={() =>
                dispatch(setSwitch({ key: "discount", value: "new" }))
              }
              style={{
                backgroundColor: dCriterion === "new" ? "#ffffff4d" : "",
              }}
            >
              ایجاد
            </button>
          </div>
        </div>
        <div className="w-full flex flex-col items-center">
          <div
            onClick={() => {
              listSwitch("coupon");
              setCoRotate(!coRotate);
              dispatch(setSwitch({ key: "coupon", value: "all" }));
            }}
            style={{ backgroundColor: content === "coupon" ? "#232c38" : "" }}
            className="flex justify-between items-center rounded-sm w-[80%] py-2 px-2 cursor-default hover:bg-[#2a3441] hover:brightness-125 transition-all duration-300"
          >
            <RiCoupon3Fill className="bg-[#356E65] p-1 rounded-md text-white w-[2rem] h-[2rem]" />
            <li className="text-white font-bold text-lg  text-center">کوپن</li>
            <MdOutlineArrowLeft
              className="text-white w-[1.5rem] h-[1.5rem] transition-all duration-300"
              style={{ rotate: coRotate ? "-90deg" : "0deg" }}
            />
          </div>
          <div
            className="flex flex-col text-white gap-3 text-sm bg-[#313e4d] justify-center items-center rounded-sm w-[50%] cursor-default transition-all ease-in-out duration-400"
            style={{
              height: coRotate ? "fit-content" : "0px",
              padding: coRotate ? "10px" : "0px",
              overflow: coRotate ? "" : "hidden",
              visibility: coRotate ? "visible" : "hidden",
              marginTop: coRotate ? "1rem" : "0px",
            }}
          >
            <button
              className="font-normal cursor-default w-full hover:bg-[#ffffff0c] transition-all duration-300 p-1"
              onClick={() =>
                dispatch(setSwitch({ key: "coupon", value: "all" }))
              }
              style={{
                backgroundColor: coCriterion === "all" ? "#ffffff4d" : "",
              }}
            >
              همه
            </button>
            <button
              className="font-normal cursor-default w-full hover:bg-[#ffffff0c] transition-all duration-300 p-1"
              onClick={() =>
                dispatch(setSwitch({ key: "coupon", value: "new" }))
              }
              style={{
                backgroundColor: coCriterion === "new" ? "#ffffff4d" : "",
              }}
            >
              ایجاد
            </button>
          </div>
        </div>
        <div className="w-full flex flex-col items-center">
          <div
            onClick={() => {
              listSwitch("worksample");
              setWsRotate(!wsRotate);
              dispatch(setSwitch({ key: "worksample", value: "all" }));
            }}
            style={{ backgroundColor: content === "worksample" ? "#232c38" : "" }}
            className="flex justify-between items-center rounded-sm w-[80%] py-2 px-2 cursor-default hover:bg-[#2a3441] hover:brightness-125 transition-all duration-300"
          >
            <RiCoupon3Fill className="bg-[#356E65] p-1 rounded-md text-white w-[2rem] h-[2rem]" />
            <li className="text-white font-bold text-lg  text-center">نمونه کار</li>
            <MdOutlineArrowLeft
              className="text-white w-[1.5rem] h-[1.5rem] transition-all duration-300"
              style={{ rotate: wsRotate ? "-90deg" : "0deg" }}
            />
          </div>
          <div
            className="flex flex-col text-white gap-3 text-sm bg-[#313e4d] justify-center items-center rounded-sm w-[50%] cursor-default transition-all ease-in-out duration-400"
            style={{
              height: wsRotate ? "fit-content" : "0px",
              padding: wsRotate ? "10px" : "0px",
              overflow: wsRotate ? "" : "hidden",
              visibility: wsRotate ? "visible" : "hidden",
              marginTop: wsRotate ? "1rem" : "0px",
            }}
          >
            <button
              className="font-normal cursor-default w-full hover:bg-[#ffffff0c] transition-all duration-300 p-1"
              onClick={() =>
                dispatch(setSwitch({ key: "worksample", value: "all" }))
              }
              style={{
                backgroundColor: wsCriterion === "all" ? "#ffffff4d" : "",
              }}
            >
              همه
            </button>
            <button
              className="font-normal cursor-default w-full hover:bg-[#ffffff0c] transition-all duration-300 p-1"
              onClick={() =>
                dispatch(setSwitch({ key: "worksample", value: "new" }))
              }
              style={{
                backgroundColor: wsCriterion === "new" ? "#ffffff4d" : "",
              }}
            >
              ایجاد
            </button>
          </div>
        </div>
        <div className="w-full flex flex-col items-center">
          <div
            onClick={() => {
              listSwitch("tags");
              setTRotate(!tRotate);
              dispatch(setSwitch({ key: "tags", value: "all" }));
            }}
            style={{ backgroundColor: content === "tags" ? "#232c38" : "" }}
            className="flex justify-between items-center rounded-sm w-[80%] py-2 px-2 cursor-default hover:bg-[#2a3441] hover:brightness-125 transition-all duration-300"
          >
            <FaTags className="bg-[#356E65] p-1 rounded-md text-white w-[2rem] h-[2rem]" />
            <li className="text-white font-bold text-lg  text-center">تگ ها</li>
            <MdOutlineArrowLeft
              className="text-white w-[1.5rem] h-[1.5rem] transition-all duration-300"
              style={{ rotate: tRotate ? "-90deg" : "0deg" }}
            />
          </div>
          <div
            className="flex flex-col text-white gap-3 text-sm bg-[#313e4d] justify-center items-center rounded-sm w-[50%] cursor-default transition-all ease-in-out duration-400"
            style={{
              height: tRotate ? "fit-content" : "0px",
              padding: tRotate ? "10px" : "0px",
              overflow: tRotate ? "" : "hidden",
              visibility: tRotate ? "visible" : "hidden",
              marginTop: tRotate ? "1rem" : "0px",
            }}
          >
            <button
              className="font-normal cursor-default w-full hover:bg-[#ffffff0c] transition-all duration-300 p-1"
              onClick={() => dispatch(setSwitch({ key: "tags", value: "all" }))}
              style={{
                backgroundColor: tCriterion === "all" ? "#ffffff4d" : "",
              }}
            >
              همه
            </button>
            <button
              className="font-normal cursor-default w-full hover:bg-[#ffffff0c] transition-all duration-300 p-1"
              onClick={() => dispatch(setSwitch({ key: "tags", value: "new" }))}
              style={{
                backgroundColor: tCriterion === "new" ? "#ffffff4d" : "",
              }}
            >
              ایجاد
            </button>
          </div>
        </div>

        <div className="w-full flex flex-col items-center">
          <div
            onClick={() => {
              listSwitch("banner");
              setBRotate(!bRotate);
              dispatch(setSwitch({ key: "banner", value: "all" }));
            }}
            style={{ backgroundColor: content === "banner" ? "#232c38" : "" }}
            className="flex justify-between items-center rounded-sm w-[80%] py-2 px-2 cursor-default hover:bg-[#2a3441] hover:brightness-125 transition-all duration-300"
          >
            <RiCoupon3Fill className="bg-[#356E65] p-1 rounded-md text-white w-[2rem] h-[2rem]" />
            <li className="text-white font-bold text-lg  text-center">بنر ها</li>
            <MdOutlineArrowLeft
              className="text-white w-[1.5rem] h-[1.5rem] transition-all duration-300"
              style={{ rotate: bRotate ? "-90deg" : "0deg" }}
            />
          </div>
          <div
            className="flex flex-col text-white gap-3 text-sm bg-[#313e4d] justify-center items-center rounded-sm w-[50%] cursor-default transition-all ease-in-out duration-400"
            style={{
              height: bRotate ? "fit-content" : "0px",
              padding: bRotate ? "10px" : "0px",
              overflow: bRotate ? "" : "hidden",
              visibility: bRotate ? "visible" : "hidden",
              marginTop: bRotate ? "1rem" : "0px",
            }}
          >
            <button
              className="font-normal cursor-default w-full hover:bg-[#ffffff0c] transition-all duration-300 p-1"
              onClick={() =>
                dispatch(setSwitch({ key: "banner", value: "all" }))
              }
              style={{
                backgroundColor: bCriterion === "all" ? "#ffffff4d" : "",
              }}
            >
              همه
            </button>
            <button
              className="font-normal cursor-default w-full hover:bg-[#ffffff0c] transition-all duration-300 p-1"
              onClick={() =>
                dispatch(setSwitch({ key: "banner", value: "new" }))
              }
              style={{
                backgroundColor: bCriterion === "new" ? "#ffffff4d" : "",
              }}
            >
              ایجاد
            </button>
          </div>
        </div>
        <div className="w-full flex flex-col items-center">
          <div
            onClick={() => {
              listSwitch("links");
              setLRotate(!lRotate);
              dispatch(setSwitch({ key: "links", value: "all" }));
            }}
            style={{ backgroundColor: content === "links" ? "#232c38" : "" }}
            className="flex justify-between items-center rounded-sm w-[80%] py-2 px-2 cursor-default hover:bg-[#2a3441] hover:brightness-125 transition-all duration-300"
          >
            <FaLink className="bg-[#356E65] p-1 rounded-md text-white w-[2rem] h-[2rem]" />
            <li className="text-white font-bold text-lg  text-center">
              راه های ارتباطی
            </li>
            <MdOutlineArrowLeft
              className="text-white w-[1.5rem] h-[1.5rem] transition-all duration-300"
              style={{ rotate: lRotate ? "-90deg" : "0deg" }}
            />
          </div>
          <div
            className="flex flex-col text-white gap-3 text-sm bg-[#313e4d] justify-center items-center rounded-sm w-[50%] cursor-default transition-all ease-in-out duration-400"
            style={{
              height: lRotate ? "fit-content" : "0px",
              padding: lRotate ? "10px" : "0px",
              overflow: lRotate ? "" : "hidden",
              visibility: lRotate ? "visible" : "hidden",
              marginTop: lRotate ? "1rem" : "0px",
            }}
          >
            <button
              className="font-normal cursor-default w-full hover:bg-[#ffffff0c] transition-all duration-300 p-1"
              onClick={() =>
                dispatch(setSwitch({ key: "links", value: "all" }))
              }
              style={{
                backgroundColor: lCriterion === "all" ? "#ffffff4d" : "",
              }}
            >
              همه
            </button>
            <button
              className="font-normal cursor-default w-full hover:bg-[#ffffff0c] transition-all duration-300 p-1"
              onClick={() =>
                dispatch(setSwitch({ key: "links", value: "new" }))
              }
              style={{
                backgroundColor: lCriterion === "new" ? "#ffffff4d" : "",
              }}
            >
              ایجاد
            </button>
          </div>
        </div>
        <hr className="w-full h-[3rem] py-1 border-none" />
      </ul>
    </div>
  );
}

export default SideDash;


