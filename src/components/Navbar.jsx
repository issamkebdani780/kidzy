import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Sparkles } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'الرئيسية', path: '/' },
    { name: 'المنتج', path: '/product' },
    { name: 'تواصل معنا', path: '/contact' },
  ];

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4">
      <div className="max-w-5xl mx-auto bg-white/90 backdrop-blur-md border border-primary-100 shadow-sm rounded-full px-6 md:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src="/logo.png" alt="Kidzy Logo" className="w-10 h-10 md:w-12 md:h-12 object-cover rounded-xl" />
            <span className="text-xl md:text-2xl font-black text-primary-600 tracking-tight">Kidzy</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-base font-bold transition-colors ${
                  location.pathname === link.path
                    ? 'text-primary-600'
                    : 'text-slate-500 hover:text-primary-500'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right Section (Buttons & Mobile Menu) */}
          <div className="flex items-center gap-4">
            <div className="hidden md:block">
              <Link to="/product">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-primary-500 text-white px-6 py-2 rounded-full font-bold shadow-md shadow-primary-500/20 hover:bg-primary-600 transition-colors"
                >
                  أطلب الآن
                </motion.button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-slate-600 p-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.95 }}
          className="md:hidden absolute top-20 left-4 right-4 bg-white border border-primary-100 rounded-3xl shadow-xl overflow-hidden"
        >
          <div className="p-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-lg font-bold block p-2 rounded-xl transition-colors ${
                  location.pathname === link.path
                    ? 'bg-primary-50 text-primary-600'
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/product" onClick={() => setIsOpen(false)}>
              <button className="w-full bg-primary-500 text-white px-6 py-3 rounded-xl font-bold shadow-md shadow-primary-500/20 mt-2">
                ابدأ الآن
              </button>
            </Link>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;
