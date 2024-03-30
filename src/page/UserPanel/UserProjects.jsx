import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";

import {
  getCategories,
  getProjects,
  getUsers,
} from "../../features/dashboard/action";

export default function UserProjects() {
  const [showDetails, setShowDetails] = useState({ status: false, value: "" });
  const [itemOffset, setItemOffset] = useState(0);
  const isLoading = useSelector((state) => state.dashboard.projectsLoading);
  const users = useSelector((state) => state.dashboard.users);
  const categories = useSelector((state) => state.dashboard.categories);
  const projects = useSelector((state) => state.dashboard.projects) || [];

  const dispatch = useDispatch();
  const mobile = window.innerWidth <= 425 ? true : false;
  const itemsPerPage = 20;
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = projects.toReversed().slice(itemOffset, endOffset);
  useEffect(() => {
    dispatch(getProjects());
    dispatch(getUsers());
    dispatch(getCategories());
  }, [showDetails.status]);

  return (
    <>
      تعداد پروژه ها
      <div className="w-full flex 2xl:w-[70%] flex-col gap-5 mb-5">
        <span className="w-full text-white font-bold">
          تعداد پروژه ها ( {currentItems !== null ? currentItems.length : "NaN"}{" "}
          )
        </span>
        <div className="w-full flex flex-row flex-wrap justify-center md:justify-start md:flex-col items-center gap-10 md:gap-3">
          {currentItems.map((project, index) => (
            <div
              key={index}
              onClick={() => setShowDetails({ status: true, value: project })}
              className="w-[15rem] md:w-full flex gap-y-3 md:flex-row flex-col font-[shabnambold] text-sm transition-all hover:scale-[1.02] hover:opacity-90 cursor-default duration-300 items-center bg-[#ffffffc4] p-3 rounded-sm justify-between"
              style={{
                borderRight: mobile ? "0px" : `5px solid #${project.colorCode}`,
                borderTop: mobile ? `5px solid #${project.colorCode}` : "0px",
                boxShadow:
                  "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
              }}
            >
              <span className="font-[vasir] w-[10%] line-clamp-1 text-[1rem]">
                {project.title}
              </span>
              <div className="flex items-center gap-1">
                <span className="font-[vasir]">
                  {
                    users.find((user) => user.id === project.supervisor_id)
                      ?.first_name
                  }
                </span>
                <span className="font-[vasir]">
                  {
                    users.find((user) => user.id === project.supervisor_id)
                      ?.last_name
                  }
                </span>
              </div>
              <span className="font-[vasir]">
                {project.status == 3
                  ? "در حال انجام"
                  : project.status == 2
                  ? "لغو شده"
                  : "تمام شده"}
              </span>
              <Circle
                percent={project.progress}
                strokeWidth={10}
                trailWidth={10}
                strokeColor="#00FFCA"
                trailColor="#6F7883"
                className="h-[3rem]"
              />
              <span className="font-[vasir]">
                {
                  categories.find((cate) => cate.id === project.category_id)
                    ?.title
                }
              </span>
              <span
                className={
                  project.confirm === 0
                    ? "font-[vasir] text-yellow-800"
                    : "font-[vasir] text-green-800"
                }
              >
                {project.confirm === 0 ? "تایید نشده" : "تایید شده"}
              </span>
              <span className="font-[shabnamBold]">
                {moment(project.created_at).format("jYYYY/jMM/jDD")}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
