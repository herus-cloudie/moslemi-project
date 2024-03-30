import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  getRoles,
  getProjects,
  setSupervisorProjects,
} from "../../../../features/dashboard/action";
import { changeUserRole } from "../../../../features/userPanel/action";

import moment from "moment-jalaali";

import { MdCancel } from "react-icons/md";

function SupervisorDetails({ showDetails, setShowDetails }) {
  const [role, setRole] = React.useState("");
  const [project, setProject] = React.useState([]);

  const { roles } = useSelector((state) => state.dashboard);
  const user_role = roles.find((item) => item.id === showDetails.role_id);
  const { rolesLoading } = useSelector((state) => state.dashboard);
  const projects = useSelector((state) => state.dashboard.projects);
  const dispatch = useDispatch();

  // console.log(projects);

  React.useEffect(() => {
    setRole(user_role?.title);
    dispatch(getRoles());
    dispatch(getProjects());
  }, []);

  let loginDate = showDetails.created_at;
  let updateDate = showDetails.updated_at;

  loginDate = moment(loginDate, "YYYY/MM/DD HH:mm:ss").format(
    "jYYYY/jMM/jDD HH:mm:ss"
  );
  updateDate = moment(updateDate, "YYYY/MM/DD HH:mm:ss").format(
    "jYYYY/jMM/jDD HH:mm:ss"
  );

  const roleChangeHandler = (title) => {
    let role_id = roles.find((role) => role.title === title)?.id;

    let user = { ...showDetails };

    dispatch(changeUserRole({ user_id: user.id, role_id }));
  };

  const projectChangeHandler = (title) => {
    let project_id = projects.find((item) => item.title === title)?.id;

    let user = { ...showDetails };

    dispatch(setSupervisorProjects({ user_id: user.id, project_id }));
  };

  return (
    <div className="w-full p-5 sm:p-10">
      <div className="w-full bg-[#ffffffc9] py-5 px-3 rounded-md 2xl:w-[85%] xl:mx-auto">
        <div
          className="flex justify-between items-center mb-5 pb-5"
          style={{ borderBottom: "solid 1px black" }}
        >
          <h1 className="text-xl font-semibold text-stone-800">جزئیات</h1>
          <MdCancel
            className="text-3xl font-bold text-red-600 transition-all hover:text-red-500"
            onClick={() => setShowDetails("")}
          />
        </div>
        <div className="grid grid-cols-2 gap-5">
          <div className="flex items-center gap-2.5">
            <span className="font-semibold text-[#2e424a]">نام:</span>
            <span className="font-[shabnamBold]">{showDetails.first_name}</span>
          </div>
          <div className="flex items-center gap-2.5">
            <span className="font-semibold text-[#2e424a]">نام خانوادگی:</span>
            <span className="font-[shabnamBold]">{showDetails.last_name}</span>
          </div>
          <div className="flex items-center gap-2.5">
            <span className="font-semibold text-[#2e424a]">نام کاربری:</span>
            <span className="font-[shabnamBold]">{showDetails.username}</span>
          </div>
          <div className="flex items-center gap-2.5">
            <span className="font-semibold text-[#2e424a]">شماره موبایل:</span>
            <span className="font-[shabnamBold]">{showDetails.mobile}</span>
          </div>
          <div className="flex items-center gap-2.5">
            <span className="font-semibold text-[#2e424a]">ایمیل:</span>
            <span className="font-[shabnamBold]">{showDetails.email}</span>
          </div>
          <div className="flex items-center gap-2.5">
            <span className="font-semibold text-[#2e424a]">شماره کارت:</span>
            <span className="font-[shabnamBold]">
              {showDetails.card_number}
            </span>
          </div>
          <div className="flex items-center gap-2.5">
            <span className="font-semibold text-[#2e424a]">کد ملی:</span>
            <span className="font-[shabnamBold]">{showDetails.code_meli}</span>
          </div>
          <div className="flex items-center gap-2.5">
            <span className="font-semibold text-[#2e424a]">تاریخ ورود:</span>
            <span className="font-[shabnamBold]">{loginDate}</span>
          </div>
          <div className="flex items-center gap-2.5">
            <span className="font-semibold text-[#2e424a]">تاریخ ویرایش:</span>
            <span className="font-[shabnamBold]">{updateDate}</span>
          </div>
          <div className="flex items-center gap-2.5">
            <span className="font-semibold text-[#2e424a]">نقش:</span>
            {rolesLoading ? (
              <img
                src="img/Rolling-0.8s-200px.svg"
                alt="loading"
                className="w-[30px]"
              />
            ) : (
              <select
                name="roles"
                value={role}
                onChange={(e) => {
                  setRole(e.target.value);
                  roleChangeHandler(e.target.value);
                }}
              >
                {roles?.map((item) => (
                  <option value={item.title}>{item.title}</option>
                ))}
              </select>
            )}
          </div>
          <div className="flex items-center gap-2.5">
            <span className="font-semibold text-[#2e424a]">پروژه‌ها</span>
            <select
              name="projects"
              value={project}
              onChange={(e) => {
                setProject(e.target.value);
                projectChangeHandler(e.target.value);
              }}
            >
              {projects.map((item) => (
                <option value={item.title}>{item.title}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SupervisorDetails;
