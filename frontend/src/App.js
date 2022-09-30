// import "./App.css";
// import Footer from "./Components/Footer";
// import Navbar from "./Components/Navbar";
// import Home from "./pages/Home";
import "./App.css";
import SideBar from "./Components/Sidebar/SideBar";
import { Routes, Route } from "react-router-dom";
import { TimeTracker } from "./pages/TimeTracker/TimeTracker";
import Home from "./pages/Home";
import { Navbar } from "./Components/navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      {/* <Routes>
        <Route
          path="/protected"
          element={
            <SideBar>
              <Route path="/tracker" element={<TimeTracker />} />
            </SideBar>
          }
        />
      </Routes> */}
      {/* <Route path="/sidebar" element={<SideBar />} /> */}
      {/* <Route path="/" element={<Home />} /> */}

      {/* <Route path="/calendar" element={<Calendar />} />
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/reports" element={<Reports />} />
    <Route path="/team" element={<Team />} />          
    <Route path="/clients" element={<Clients />} />          
    <Route path="/projects" element={<Projects />} />          
    <Route path="/tags" element={<Tags />} />          
    <Route path="/timesheet" element={<TimeSheet />} />          
    <Route path="/settings" element={<Settings />} /> */}
    </div>
  );
}

export default App;
