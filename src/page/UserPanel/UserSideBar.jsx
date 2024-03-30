import Cookies from "js-cookie";
import SideBarLink from "./SideBarLink";
import { BiLogOutCircle } from 'react-icons/bi';

const UserSideBar = ({ dropMenu , logOutHandle}) => {
  const userInfo = JSON.parse(Cookies.get("user"));
  return (
    <aside className={dropMenu ? "md:basis-1/3 lg:basis-1/4 shadow-md rounded-lg min-h-[100%] h-[100%] w-[90%] md:w-[10%] transition-all duration-300" : "md:basis-1/3 lg:basis-1/4 shadow-md rounded-lg min-h-[0px] h-[0px] md:min-h-[90vh] md:h-[100%] transition-all duration-300 overflow-hidden w-[90%] md:w-[10%]"}>
      <ul className="space-y-1 font-medium p-2 h-full">
        <SideBarLink link={"userProfile"} text={"پروفایل کاربری"}/>
        <SideBarLink link={"editProfile"} text={"ویرایش پروفایل"}/>
        <SideBarLink link={"cart"} text={"سبد خرید"}/>
        <SideBarLink link={"favorites"} text={"علاقه مندی ها"}/>
        <SideBarLink link={"orders"} text={"سفارش ها"}/>
        {userInfo.role_id === 5 && <SideBarLink link={'supervisorProjects'} text={"پروژه ها"} />}
        <SideBarLink link={"/"} text={"صفحه اصلی"}/>
    
        <li>
          <button onClick={logOutHandle} className="p-2 gap-1 flex items-center text-rose-700 w-full rounded-lg hover:bg-gray-100">
            <span className="font-[shabnamBold]">خروج از حساب کاربری</span>
            <BiLogOutCircle className="text-xl"/>
          </button>
        </li>
      </ul>
    </aside>
  );
}

export default UserSideBar;