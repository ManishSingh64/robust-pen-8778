import './App.css';
import SideBar from './components/Sidebar/SideBar';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <SideBar>
        <Routes>
          {/* <Route path="/tracker" element={<TimeTracker />} /> */}
          {/* <Route path="/calendar" element={<Calendar />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/team" element={<Team />} />          
          <Route path="/clients" element={<Clients />} />          
          <Route path="/projects" element={<Projects />} />          
          <Route path="/tags" element={<Tags />} />          
          <Route path="/timesheet" element={<TimeSheet />} />          
          <Route path="/settings" element={<Settings />} /> */}

          <Route path="*" element={<> not found</>} />
        </Routes>
      </SideBar>
    </div>
  );
}

export default App;
