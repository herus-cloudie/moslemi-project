import React from "react";
import Buttons from "./Buttons/Buttons";

function UpperDash({ dropMenu, setDropMenu }) {
  return (
    <div className="w-full h-[10%] bg-[#242e3b] border_b_g z-10">
      <div className="w-full flex items-center px-5 h-full justify-between">
        <Buttons dropMenu={dropMenu} setDropMenu={setDropMenu} />
        {/* <Search/> */}
      </div>
    </div>
  );
}

export default UpperDash;
