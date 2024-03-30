import {NavLink} from "react-router-dom";

const SideBarLink = ({link, text}) => {
  return (
    <li>
      <NavLink
        to={link}
        className={({isActive}) =>
          isActive ? "p-2 flex rounded-lg bg-green-500 group text-white" :
            "p-2 flex text-gray-900 rounded-lg hover:bg-gray-100"
        }
      >
        <span className="ml-3 font font-[shabnamBold]">{text}</span>
      </NavLink>
    </li>
  );
}

export default SideBarLink;