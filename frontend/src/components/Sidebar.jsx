import { NavLink } from "react-router-dom";
import { BookOpen, Bookmark, Compass, GraduationCap } from "lucide-react";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white border-r p-4 flex flex-col">
      <h2 className="text-lg font-bold mb-6">Overview</h2>
      <nav className="flex flex-col gap-2">
        <NavLink to="/" className="hover:bg-gray-100 px-3 py-2 rounded">
          📊 Dashboard
        </NavLink>
        <NavLink
          to="/tutorials"
          className="hover:bg-gray-100 px-3 py-2 rounded"
        >
          📘 Tutorials
        </NavLink>
        <NavLink
          to="/certificates"
          className="hover:bg-gray-100 px-3 py-2 rounded"
        >
          📜 Certificates
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
