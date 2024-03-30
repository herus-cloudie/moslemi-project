import { React, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProjectPagination from "./All/ProjectPagination/ProjectPagination";
import New from "./New/New";

function Projects() {
  const [innerComponent, setInnerComponent] = useState(<></>);
  const Criterion = useSelector((state) => state.dashboard.projectSwitch);
  useEffect(() => {
    if (Criterion === "all") {
      setInnerComponent(<ProjectPagination />);
    } else if (Criterion === "new") {
      setInnerComponent(<New />);
    }
  }, [Criterion]);
  return (
    <div className="w-full p-3 md:p-10 flex flex-col items-center">
      {innerComponent}
    </div>
  );
}

export default Projects;
