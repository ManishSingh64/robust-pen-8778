import { Routes, Route } from "react-router-dom";

import { Protected } from "./Protected";
import { Simple } from "./Simple";

import Home from "../pages/Home";
import { TimeTracker } from "../pages/TimeTracker/TimeTracker";
import { Calender } from "../pages/Calender/Calender";
import Pricing from "../components/Premium/Pricing";
import { Project } from "../pages/projects/Project";

export const AllRoutes = () => {
  return (
    <div className="App">
      <Routes>
        <Route element={<Simple />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route element={<Protected />}>
          <Route path="/tracker" element={<TimeTracker />} />
          <Route path="/calendar" element={<Calender />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/projects" element={<Project />} />
        </Route>
      </Routes>
    </div>
  );
};
