import { Link } from 'react-router-dom';
import { Sparkles, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white text-slate-600 py-12 border-t border-primary-100 relative overflow-hidden">
      <div className="absolute top-0 left-10 w-64 h-64 bg-primary-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
      <div className="absolute top-0 right-10 w-64 h-64 bg-secondary-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Link to="/" className="flex items-center gap-2">
              <img src="/logo.png" alt="Kidzy Logo" className="w-10 h-10 object-cover rounded-xl inline-flex w-fit" />
              <span className="text-2xl font-black text-primary-600 tracking-tight">Kidzy</span>
            </Link>
            <p className="text-slate-500 mt-2 max-w-sm font-medium">
              نصنع قصصاً ملهمة تجعل طفلك بطل حكايته، لتنمية الخيال وبناء الثقة بالنفس.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-3">
            <h3 className="text-slate-800 font-bold text-lg mb-2">روابط سريعة</h3>
            <Link to="/" className="hover:text-primary-500 font-medium transition-colors w-fit">الرئيسية</Link>
            <Link to="/product" className="hover:text-primary-500 font-medium transition-colors w-fit">المنتج</Link>
            <Link to="/contact" className="hover:text-primary-500 font-medium transition-colors w-fit">تواصل معنا</Link>
          </div>

          {/* Contact & Delivery */}
          <div className="flex flex-col gap-3">
            <h3 className="text-slate-800 font-bold text-lg mb-2">معلومات</h3>
            <p className="flex items-center gap-2 font-medium">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              التوصيل متوفر في 69 ولاية 
            </p>
            <p className="flex items-center gap-2 font-medium">
              <span className="w-2 h-2 rounded-full bg-accent"></span>
              الدفع عند الاستلام
            </p>
          </div>
        </div>

        <div className="border-t border-primary-100 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm font-medium text-slate-500">
            © {new Date().getFullYear()} Kidzy. جميع الحقوق محفوظة.
          </p>
          <p className="text-sm font-medium text-slate-500 flex items-center gap-1">
            صُنع بحب <Heart className="w-4 h-4 text-red-500 fill-current" /> من أجل أطفالنا
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
