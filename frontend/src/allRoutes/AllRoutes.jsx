import { Routes, Route } from "react-router-dom";

import { Protected } from "./Protected";
import { Simple } from "./Simple";

import Home from "../pages/Home";
import { TimeTracker } from "../pages/TimeTracker/TimeTracker";
import { Calender } from "../pages/Calender/Calender";
import Pricing from "../components/Premium/Pricing";
import Login from "../components/Login/Login";
import CheckAuth from "../components/Login/CheckAuth";
import Signup from "../components/Signup/Signup";

export const AllRoutes = () => {
  return (
    <div className="App">
      <Routes>
        <Route element={<Simple />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route
          path="/login"
          element={
            <CheckAuth>
              <Login />
            </CheckAuth>
          }
        />
        <Route path="/signup" element={<Signup />} />
        <Route element={<Protected />}>
          <Route path="/tracker" element={<TimeTracker />} />
          <Route path="/calendar" element={<Calender />} />
          <Route path="/pricing" element={<Pricing />} />

          {/* <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/team" element={<Team />} />          
            <Route path="/clients" element={<Clients />} />          
            <Route path="/projects" element={<Projects />} />          
            <Route path="/tags" element={<Tags />} />          
            <Route path="/timesheet" element={<TimeSheet />} />          
            <Route path="/settings" element={<Settings />} /> */}
        </Route>
      </Routes>
    </div>
  );
};
