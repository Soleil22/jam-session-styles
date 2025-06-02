
import { Home, User, CircleX, BellDot, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SidebarProps {
  onCreateJam: () => void;
}

const Sidebar = ({ onCreateJam }: SidebarProps) => {
  const menuItems = [
    { icon: Home, label: 'Home', active: true },
    { icon: User, label: 'Profile', active: false },
    { icon: CircleX, label: 'My Jams', active: false },
    { icon: BellDot, label: 'Favorites', active: false },
  ];

  return (
    <div className="w-64 h-screen bg-gray-900 border-r border-gray-800 flex flex-col">
      {/* Logo */}
      <div className="p-6">
        <h1 className="text-2xl font-bold text-white">
          <span className="text-purple-500">K</span>ru
        </h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4">
        <ul className="space-y-2">
          {menuItems.map((item, index) => (
            <li key={index}>
              <button
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                  item.active
                    ? 'bg-purple-600 text-white'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800'
                }`}
              >
                <item.icon size={20} />
                <span>{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Divider */}
      <div className="mx-4 border-t border-gray-700 my-4"></div>

      {/* Create Jam Button */}
      <div className="p-4">
        <Button
          onClick={onCreateJam}
          className="w-full bg-purple-600 hover:bg-purple-700 text-white flex items-center gap-2 py-3 rounded-lg transition-colors duration-200"
        >
          <Plus size={20} />
          Create Jam
        </Button>
      </div>

      {/* Logout */}
      <div className="p-4">
        <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white transition-colors duration-200">
          <CircleX size={20} />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
