import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { Button } from "antd";

const MenuBar = (props) => {
  //   const [typeStep1, setTypeStep1] = useState("");
  //   const [typeStep2, setTypeStep2] = useState("");
  //   const [typeStep3, setTypeStep3] = useState("");
  //   const [typeStep4, setTypeStep4] = useState("");
  let typeStep1 = "";
  let typeStep2 = "";
  let typeStep3 = "";
  let typeStep4 = "";
  let location = useLocation();

  useEffect(() => { }, [location]);
  const { pathname = "" } = location || {};
  console.log(pathname, "pathnameeeee");
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
    <div style={{ marginBottom: "30px" }}>
      <Button type={typeStep1}> Step 1 </Button>
      <Button type={typeStep2}> Step 2 </Button>
      <Button type={typeStep3}> Step 3 </Button>
      <Button type={typeStep4}> Review </Button>
    </div>
  );
};

export default MenuBar;
