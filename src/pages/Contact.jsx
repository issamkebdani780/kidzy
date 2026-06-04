import { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Phone, MapPin, Send } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    alert('تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.');
    setFormData({ name: '', phone: '', message: '' });
  };

  return (
    <div className="pt-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <AnimatedSection className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">تواصل معنا</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            نحن هنا للإجابة على جميع استفساراتك ومساعدتك في صنع أجمل هدية لطفلك.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto bg-white rounded-[2.5rem] shadow-xl overflow-hidden border border-slate-100">
          
          {/* Contact Info */}
          <div className="bg-primary-600 text-white p-10 md:p-14 flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold mb-8">معلومات التواصل</h2>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-primary-500 p-3 rounded-xl">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">واتساب</h3>
                    <p className="text-primary-100">تواصل معنا مباشرة عبر واتساب</p>
                    <p className="font-medium text-lg mt-1" dir="ltr">+213 555 12 34 56</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary-500 p-3 rounded-xl">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">التوصيل</h3>
                    <p className="text-primary-100">نوفر خدمة التوصيل لجميع ولايات الجزائر الـ 58.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary-500 p-3 rounded-xl">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">خدمة العملاء</h3>
                    <p className="text-primary-100">من الأحد إلى الخميس: 9:00 صباحاً - 5:00 مساءً</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative circles */}
            <div className="relative h-32 mt-12">
              <div className="absolute -bottom-20 -right-20 w-48 h-48 bg-white opacity-10 rounded-full"></div>
              <div className="absolute -bottom-10 right-10 w-24 h-24 bg-white opacity-10 rounded-full"></div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-10 md:p-14">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">أرسل لنا رسالة</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">الاسم الكامل</label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                  placeholder="أدخل اسمك الكامل"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">رقم الهاتف</label>
                <input
                  type="tel"
                  id="phone"
                  required
                  dir="ltr"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all text-right"
                  placeholder="0555 12 34 56"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">الرسالة</label>
                <textarea
                  id="message"
                  required
                  rows="4"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all resize-none"
                  placeholder="كيف يمكننا مساعدتك؟"
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-primary-600 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-primary-700 transition-colors shadow-lg shadow-primary-600/30"
              >
                <Send className="w-5 h-5" />
                إرسال الرسالة
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
