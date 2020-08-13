import React from "react";
import "./Sidebar.css";

{
  /* Components start with capital - Icon is a component */
}
function SidebarOption({ text, Icon }) {
  return (
    <div className="sidebarOption">
      <Icon />
      <h2>{text}</h2>
    </div>
  );
}

export default SidebarOption;
