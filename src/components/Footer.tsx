import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-gradient-to-r from-blue-600 to-teal-500 p-2 rounded-lg">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <span className="text-white">HealersHub</span>
            </div>
            <p className="text-sm text-gray-400">
              Smart health wearables that connect, protect, and empower seniors and their caregivers.
            </p>
          </div>

          <div>
            <h3 className="text-white mb-4">Quick Links</h3>
            <div className="space-y-2 text-sm">
              <Link to="/" className="block hover:text-teal-400 transition-colors">
                Home
              </Link>
              <Link to="/devices" className="block hover:text-teal-400 transition-colors">
                Devices
              </Link>
              <Link to="/dashboard" className="block hover:text-teal-400 transition-colors">
                Dashboard
              </Link>
              <Link to="/community" className="block hover:text-teal-400 transition-colors">
                Community
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-white mb-4">Support</h3>
            <div className="space-y-2 text-sm">
              <Link to="/support" className="block hover:text-teal-400 transition-colors">
                Help Center
              </Link>
              <a href="#" className="block hover:text-teal-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="block hover:text-teal-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="block hover:text-teal-400 transition-colors">
                Contact Us
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white mb-4">Company</h3>
            <div className="space-y-2 text-sm">
              <a href="#" className="block hover:text-teal-400 transition-colors">
                About Us
              </a>
              <a href="#" className="block hover:text-teal-400 transition-colors">
                Partners
              </a>
              <a href="#" className="block hover:text-teal-400 transition-colors">
                Careers
              </a>
              <a href="#" className="block hover:text-teal-400 transition-colors">
                Press
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-sm text-center text-gray-400">
          <p>&copy; 2025 HealersHub. Because every second counts.</p>
          <p className="mt-2">Made by Team Cessand</p>
        </div>
      </div>
    </footer>
  );
}
