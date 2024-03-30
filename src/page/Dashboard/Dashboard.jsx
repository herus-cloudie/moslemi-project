import React, { useState } from "react";
import SideDash from "../../Components/Dashboard/MainDash/SideDash/SideDash";
import ContentDash from "../../Components/Dashboard/MainDash/ContentDash/ContentDash";
import UpperDash from "../../Components/Dashboard/MainDash/UpperDash/UpperDash";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
import Cookies from "js-cookie";

function Dashboard() {
  const [dropMenu, setDropMenu] = useState(false);
  const loginStatus = useSelector((state) => state.authentication.loginStatus);
  const userId = loginStatus ? JSON.parse(Cookies.get("user"))?.role_id : "";
  return (
    <div className="flex flex-wrap relative overflow-hidden h-screen w-screen">
      <Helmet>
        <title>نهال آی تی | داشبورد</title>
      </Helmet>
      <UpperDash dropMenu={dropMenu} setDropMenu={setDropMenu} />
      {userId === 1 || userId === 5  ? (
        <>
          <SideDash dropMenu={dropMenu} setDropMenu={setDropMenu} />
          <ContentDash />
        </>
      ) : (
        <div className="bg-[#2c4362] flex h-[90%] w-full text-white justify-center items-center">
          <h1 className="font-[shabnamBold] text-xl">
            شما به این بخش دسترسی ندارید!
          </h1>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
