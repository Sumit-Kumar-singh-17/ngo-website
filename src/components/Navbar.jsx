
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600">HelpingHands</h1>
        <div className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </div>
        <ul className={`md:flex space-x-6 text-gray-700 font-medium ${open ? 'block' : 'hidden'} md:block absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none pl-4`}>
          <li><Link to="/" className="hover:text-blue-500 block py-2">Home</Link></li>
          <li><Link to="/about" className="hover:text-blue-500 block py-2">About Us</Link></li>
          <li><Link to="/volunteer" className="hover:text-blue-500 block py-2">Volunteer</Link></li>
        </ul>

      </div>
    </nav>
  );
}