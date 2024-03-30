import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import FirstChildrenCate from "./FirstChildrenCate/FirstChildrenCate";
import ParentsCate from "./ParentsCate/ParentsCate";
import SecondChildrenCate from "./SecondChildrenCate/SecondChildrenCate";

function Categories() {
  const [innerComponent, setInnerComponent] = useState(<></>);
  const Criterion = useSelector(
    (state) => state.dashboard.categoriesSwitch.key
  );

  useEffect(() => {
    if (Criterion === "PARENT") {
      setInnerComponent(<ParentsCate />);
    } else if (Criterion === "FIRSTCHILDREN") {
      setInnerComponent(<FirstChildrenCate />);
    } else if (Criterion === "SECONDCHILDREN") {
      setInnerComponent(<SecondChildrenCate />);
    }
  }, [Criterion]);

  return (
    <div className="w-full p-10 flex justify-center lg:block">
      {innerComponent}
    </div>
  );
}

export default Categories;
