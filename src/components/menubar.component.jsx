import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { Button } from "antd";

const MenuBar = (props) => {
  let typeStep1 = "";
  let typeStep2 = "";
  let typeStep3 = "";
  let typeStep4 = "";
  let location = useLocation();

  useEffect(() => { }, [location]);
  const { pathname = "" } = location || {};
  const pathStep = pathname.split("/")[1];
  switch (pathStep) {
    case "step2":
      typeStep2 = "primary";
      break;
    case "step3":
      typeStep3 = "primary";
      break;
    case "step4":
      typeStep4 = "primary";
      break;
    default:
      typeStep1 = "primary";
  }
  return (
    <div className="tab-bar" >
      <Button type={typeStep1}> Step 1 </Button>
      <Button type={typeStep2}> Step 2 </Button>
      <Button type={typeStep3}> Step 3 </Button>
      <Button type={typeStep4}> Review </Button>
    </div>
  );
};

export default MenuBar;
