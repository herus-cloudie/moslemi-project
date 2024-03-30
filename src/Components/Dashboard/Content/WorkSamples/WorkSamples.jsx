import { React, useEffect, useState } from "react";
import { useSelector } from "react-redux";

import NewWorkSample from "./New/NewWorkSample";
import WorkSamplePagination from "./All/WorkSamplePagination";

function WorkSamples() {
  const [innerComponent, setInnerComponent] = useState(<></>);
  const Criterion = useSelector((state) => state.dashboard.worksampleSwitch);

  useEffect(() => {
    if (Criterion === "all") {
      setInnerComponent(<WorkSamplePagination />);
    } else if (Criterion === "new") {
      setInnerComponent(<NewWorkSample />);
    }
  }, [Criterion]);
  return (
    <div className="w-full p-3 md:p-10 flex flex-col items-center">
      {innerComponent}
    </div>
  );
}

export default WorkSamples;
