import { FaHome, FaNewspaper, FaShoppingBag, FaGraduationCap, FaGlobe } from 'react-icons/fa';
import { FaLocationDot } from "react-icons/fa6";

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between p-4">
      <div dir="ltr" data-orientation="horizontal">
        <div
          role="tablist"
          aria-orientation="horizontal"
          className="h-9 flex items-center justify-center rounded-lg p-1 text-gray-700 space-x-4"
          tabIndex={-1}
          style={{ outline: "none" }}
        >
          {[
            { name: 'My', icon: <FaHome /> },
            { name: 'News', icon: <FaNewspaper /> },
            { name: 'Shop', icon: <FaShoppingBag /> },
            { name: 'Academy', icon: <FaGraduationCap /> },
            { name: 'Forum', icon: <FaGlobe /> },
            { name: 'Support', icon: <FaLocationDot /> }
          ].map(tab => (
            <button
              key={tab.name}
              type="button"
              role="tab"
              aria-selected={tab.name === 'My'}
              className={`inline-flex items-center text-gray-700 justify-center whitespace-nowrap rounded font-medium px-4 py-2 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 focus-visible:ring-offset-2 ${
                tab.name === 'My' ? 'bg-sky-100 shadow-sm' : 'hover:bg-sky-100'
              }`}
            >
              {tab.icon}
              <span className="ml-2 font-medium">{tab.name}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
