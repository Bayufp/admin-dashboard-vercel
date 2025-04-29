import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-blue-800 text-white p-6">
      <h1 className="text-2xl font-bold mb-8">Admin Panel</h1>
      <nav className="space-y-4">
        <Link to="/dashboard" className="block hover:bg-blue-700 p-2 rounded">
          Dashboard
        </Link>
        <Link to="/sales" className="block hover:bg-blue-700 p-2 rounded">
          Sales
        </Link>
        <Link to="/products" className="block hover:bg-blue-700 p-2 rounded">
          Products
        </Link>
        <Link to="/users" className="block hover:bg-blue-700 p-2 rounded">
          Users
        </Link>
      </nav>
    </aside>
  );
}
