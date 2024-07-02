import { FaBell, FaPlus } from 'react-icons/fa';
import { BiSearch } from 'react-icons/bi';
import { IoIosSettings } from "react-icons/io";
import Button from './ui/Button';

const TopHeader = () => {
  return (
    <header className="flex font-medium items-center justify-between px-4 py-4 bg-gray-50 w-full">
      <div className="flex items-cente rounded">
        <img
          src="https://placehold.co/100x40"
          alt="Starface Logo"
          className="h-10"
        />
      </div>
      <div className="relative ml-20 flex-1 mx-3">
        <BiSearch className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-400" />
        <input
          type="search"
          placeholder="Search"
          className="w-full pl-10 pr-2 py-2 rounded focus:outline-none focus:ring-1 focus:ring-orange-500"
        />
      </div>
      <div className="flex items-center space-x-4">
          <Button title='Neue Starface'>
            <FaPlus className="mr-2" />
            Neue Starface
          </Button>
        <div className="flex items-center justify-center h-10 w-10 bg-white rounded shadow-sm">
          <FaBell className="text-gray-500 text-xl" />
        </div>
        <div className="flex items-center justify-center h-10 w-10 bg-white rounded shadow-sm">
          <IoIosSettings className="text-gray-500 text-xl" />
        </div>
        <div className="relative flex h-10 w-10 rounded shrink-0 overflow-hidden bg-gray-200">
          <img
            src="/avatar.jpg"
            alt="User Avatar"
            className="h-full w-full object-cover"
          />
        </div>
        <span className="ml-2">Martin</span>
      </div>
    </header>
  );
};

export default TopHeader;
