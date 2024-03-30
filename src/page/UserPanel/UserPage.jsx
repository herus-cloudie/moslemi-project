import Cookies from 'js-cookie';
import React, { useState } from 'react';
import { Outlet, useNavigate } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";
import UserPanelHeader from "../../Components/UserPanelHeader/UserPanelHeader";
import UserSideBar from "./UserSideBar";
import { useDispatch } from 'react-redux';
import { changeLoginStatus } from '../../features/authentication/AuthenticationSlice';

const UserPage = () => {
  const [dropMenu,setDropMenu] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const logOutHandle = () => {
    navigate("/login")
    Cookies.remove("user");
    dispatch(changeLoginStatus())
    localStorage.removeItem("access_token")
  }

  return (
    <div>
      <UserPanelHeader setDropMenu={setDropMenu} dropMenu={dropMenu}/>
      <section className="w-full py-5 px-3">
        <div className="flex flex-col items-center md:items-start md:flex-row gap-4 w-full h-full">
          <UserSideBar dropMenu={dropMenu} logOutHandle={logOutHandle}/>
          <div className="flex-grow w-[90%] sm:w-[80%] md:w-full flex">
            <div className="p-4 w-full border-2 border-gray-200 border-dashed rounded-lg">
              <Outlet/>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
};

export default UserPage;
