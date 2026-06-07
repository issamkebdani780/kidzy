import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Phone, MapPin, Send, CheckCircle2, X, Loader2 } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import { submitContact } from '../services/api';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // null | 'success' | 'error'
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (field) => (e) =>
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorMsg('');

    try {
      await submitContact(formData);
      setSubmitStatus('success');
      setFormData({ name: '', phone: '', message: '' });
    } catch (err) {
      setSubmitStatus('error');
      setErrorMsg(err.message || 'تعذر الاتصال بالخادم. يرجى المحاولة لاحقاً.');
    } finally {
      setIsSubmitting(false);
    }
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

          {/* ── Contact Info Panel ── */}
          <div className="bg-primary-600 text-white p-10 md:p-14 flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold mb-8">معلومات التواصل</h2>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-primary-500 p-3 rounded-xl shrink-0">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">رقم الهاتف</h3>
                    <p className="text-primary-100">تواصل معنا مباشرة عبر رقم الهاتف أو الواتساب</p>
                    <p className="font-medium text-lg mt-1">0780392055</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary-500 p-3 rounded-xl shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">التوصيل</h3>
                    <p className="text-primary-100">نوفر خدمة التوصيل لجميع ولايات الجزائر الـ 69.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary-500 p-3 rounded-xl shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">خدمة العملاء</h3>
                    <p className="text-primary-100">كل أيام الأسبوع 24/24 ساعة</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative circles */}
            <div className="relative h-32 mt-12">
              <div className="absolute -bottom-20 -right-20 w-48 h-48 bg-white opacity-10 rounded-full" />
              <div className="absolute -bottom-10 right-10 w-24 h-24 bg-white opacity-10 rounded-full" />
            </div>
          </div>

          {/* ── Form / Success Panel ── */}
          <div className="p-10 md:p-14">
            <AnimatePresence mode="wait">

              {/* SUCCESS */}
              {submitStatus === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="h-full flex flex-col items-center justify-center text-center py-8"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
                    className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6"
                  >
                    <CheckCircle2 className="w-10 h-10 text-green-500" />
                  </motion.div>
                  <h2 className="text-2xl font-black text-slate-900 mb-3">تم إرسال رسالتك! ✅</h2>
                  <p className="text-slate-600 mb-8">
                    شكراً على تواصلك معنا. سنرد عليك خلال وقت قصير.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSubmitStatus(null)}
                    className="bg-primary-600 text-white px-8 py-3 rounded-full font-bold hover:bg-primary-700 transition-colors shadow-lg shadow-primary-600/20"
                  >
                    إرسال رسالة أخرى
                  </motion.button>
                </motion.div>
              ) : (

              /* FORM */
              <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">أرسل لنا رسالة</h2>

                {/* Error banner */}
                <AnimatePresence>
                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      className="mb-5 bg-red-50 border border-red-200 rounded-2xl p-4 flex items-start gap-3"
                    >
                      <X className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-bold text-red-700 text-sm">فشل الإرسال</p>
                        <p className="text-sm text-red-600 mt-0.5">{errorMsg}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                      الاسم الكامل
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={handleChange('name')}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                      placeholder="أدخل اسمك الكامل"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                      رقم الهاتف
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      dir="ltr"
                      value={formData.phone}
                      onChange={handleChange('phone')}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all text-right"
                      placeholder="0555 12 34 56"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                      الرسالة
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange('message')}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all resize-none"
                      placeholder="كيف يمكننا مساعدتك؟"
                    />
                  </div>

                  <motion.button
                    whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                    whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-lg ${
                      isSubmitting
                        ? 'bg-primary-400 text-white cursor-not-allowed'
                        : 'bg-primary-600 text-white hover:bg-primary-700 shadow-primary-600/30'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        جاري الإرسال...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        إرسال الرسالة
                      </>
                    )}
                  </motion.button>
                </form>
              </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
