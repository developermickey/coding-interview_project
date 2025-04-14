import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import RightPanel from "./components/RightPanel";
import Dashboard from "./pages/Dashboard";
import Tutorial from "./pages/Tutorial";
import Certificate from "./pages/Certificate";

const App = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 p-6 overflow-y-auto">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/tutorials" element={<Tutorial />} />
          <Route path="/certificates" element={<Certificate />} />
        </Routes>
      </main>
      <RightPanel />
    </div>
  );
};

export default App;
