import React from "react";
import SideBar from "../../Components/Sidebar/SideBar";
import { Timer } from "../../Components/timeTracker/Timer";

export const TimeTracker = () => {
  return (
    <div>
      <SideBar />
      <Timer />
    </div>
  );
};
