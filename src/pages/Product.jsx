import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Upload, Cpu, CheckSquare, BookOpen, Printer, Banknote, CheckCircle2, X, Image as ImageIcon, Loader2, PartyPopper } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import { submitOrder } from '../services/api';

const PROFESSIONS = [
  { id: 'doctor', label: 'طبيب', icon: '👨‍⚕️' },
  { id: 'engineer', label: 'مهندس', icon: '👷' },
  { id: 'astronaut', label: 'رائد فضاء', icon: '👨‍🚀' },
  { id: 'scientist', label: 'عالم', icon: '👨‍🔬' },
  { id: 'police', label: 'شرطي', icon: '👮' },
  { id: 'teacher', label: 'معلم', icon: '👨‍🏫' },
  { id: 'artist', label: 'فنان', icon: '🎨' },
  { id: 'other', label: 'أخرى', icon: '✨' },
];

const STEPS = [
  { icon: Upload, title: '1. رفع الصورة', desc: 'قم برفع صورة واضحة لطفلك من خلال موقعنا.' },
  { icon: Cpu, title: '2. اختيار المهنة', desc: 'اختر مهنة المستقبل (طبيب، مهندس، رائد فضاء...).' },
  { icon: Cpu, title: '3. الذكاء الاصطناعي', desc: 'نظامنا يصنع شخصية 3D تشبه طفلك تماماً.' },
  { icon: CheckSquare, title: '4. تأكيد الشخصية', desc: 'سنرسل لك الشخصية لتأكيدها قبل إكمال العمل.' },
  { icon: BookOpen, title: '5. تأليف القصة', desc: 'نكتب قصة ملهمة تتناسب مع المهنة المختارة.' },
  { icon: Printer, title: '6. الطباعة', desc: 'تتم طباعة الكتاب بجودة عالية وألوان زاهية.' },
  { icon: Banknote, title: '7. الاستلام والدفع', desc: 'يصلك الكتاب حتى باب المنزل، والدفع عند الاستلام.' },
];

// Compress image to max 1200px / JPEG 85% — prevents large phone photos from failing
const compressImage = (file, maxPx = 1200, quality = 0.85) =>
  new Promise((resolve) => {
    const img = new Image();
    const url = URL.createObjectURL(file);
    img.onload = () => {
      URL.revokeObjectURL(url);
      const scale = Math.min(1, maxPx / Math.max(img.width, img.height));
      const canvas = document.createElement('canvas');
      canvas.width = Math.round(img.width * scale);
      canvas.height = Math.round(img.height * scale);
      canvas.getContext('2d').drawImage(img, 0, 0, canvas.width, canvas.height);
      canvas.toBlob((blob) => resolve(new File([blob], file.name, { type: 'image/jpeg' })), 'image/jpeg', quality);
    };
    img.src = url;
  });

const Product = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // null | 'success' | 'error'
  const [errorMsg, setErrorMsg] = useState('');
  const [imagePreview, setImagePreview] = useState(null);
  const [selectedProf, setSelectedProf] = useState('');
  const fileInputRef = useRef(null);
  const formRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setImagePreview(URL.createObjectURL(file));
  };

  const clearImage = () => {
    setImagePreview(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorMsg('');

    const formData = new FormData(e.target);
    const kidName = formData.get('kidName');
    const phone = formData.get('phone');
    const storyType = formData.get('storyType');
    // Always read file directly from ref — the input may be visually hidden but is always in the DOM
    const rawFile = fileInputRef.current?.files[0];

    if (!rawFile) {
      setSubmitStatus('error');
      setErrorMsg('يرجى اختيار صورة للطفل.');
      setIsSubmitting(false);
      return;
    }

    try {
      // Compress before upload so large phone photos don't get rejected
      const imageFile = await compressImage(rawFile);
      await submitOrder({ kidName, phone, storyType, imageFile });
      setSubmitStatus('success');
      formRef.current?.reset();
      setImagePreview(null);
      setSelectedProf('');
    } catch (err) {
      setSubmitStatus('error');
      setErrorMsg(err.message || 'تعذر الاتصال بالخادم.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setSubmitStatus(null);
    setErrorMsg('');
    setImagePreview(null);
    setSelectedProf('');
  };

  return (
    <div className="pt-20 bg-primary-50">
      {/* Header */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-50 to-white -z-10" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-200/50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-200/50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse" style={{ animationDelay: '2s' }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimatedSection>
            <span className="inline-block py-1.5 px-4 rounded-full bg-primary-100 text-primary-700 text-sm font-bold mb-6 border border-primary-200 shadow-sm">
              ✨ رحلة الإبداع
            </span>
            <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight text-slate-900">
              كيف نصنع <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-purple-600">سحر Kidzy؟</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              رحلة ممتعة تبدأ بصورة بسيطة وتنتهي بكتاب سحري يغير حياة طفلك.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-primary-100 transform -translate-x-1/2" />
            <div className="space-y-12">
              {STEPS.map((step, idx) => (
                <AnimatedSection key={idx} delay={idx * 0.1}>
                  <div className={`flex flex-col md:flex-row items-center gap-8 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                    <div className={`w-full md:w-1/2 flex ${idx % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                      <div className="bg-white p-6 rounded-3xl shadow-xl border border-slate-100 w-full max-w-sm hover:border-primary-300 transition-colors">
                        <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                        <p className="text-slate-600">{step.desc}</p>
                      </div>
                    </div>
                    <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-primary-500 rounded-full items-center justify-center border-4 border-white shadow-lg z-10">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="w-full md:w-1/2" />
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Order Form Section */}
      <section className="py-20 bg-primary-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-slate-100">

              {/* ── SUCCESS STATE ── */}
              <AnimatePresence mode="wait">
                {submitStatus === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.85 }}
                    transition={{ type: 'spring', duration: 0.5 }}
                    className="text-center py-10"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', delay: 0.2, stiffness: 200 }}
                      className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
                    >
                      <PartyPopper className="w-12 h-12 text-green-500" />
                    </motion.div>
                    <h2 className="text-3xl font-black text-slate-900 mb-3">تم تقديم طلبك! 🎉</h2>
                    <p className="text-lg text-slate-600 mb-2">
                      شكراً لك! سنتواصل معك قريباً على رقم هاتفك.
                    </p>
                    <p className="text-slate-500 mb-10">
                      يستغرق إنجاز الكتاب من 1 إلى 2 أيام .
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={resetForm}
                      className="bg-primary-600 text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl shadow-primary-500/30 hover:bg-primary-700 transition-colors"
                    >
                      تقديم طلب آخر
                    </motion.button>
                  </motion.div>
                ) : (
                  <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                    <div className="text-center mb-10">
                      <h2 className="text-3xl font-black text-slate-900 mb-4">اطلب قصتك الآن</h2>
                      <p className="text-slate-600">املأ البيانات التالية لنبدأ في صنع سحر طفلك</p>
                    </div>

                    {/* Error Banner */}
                    <AnimatePresence>
                      {submitStatus === 'error' && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="mb-6 bg-red-50 border border-red-200 rounded-2xl p-4 flex items-start gap-3"
                        >
                          <X className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                          <div>
                            <p className="font-bold text-red-700">حدث خطأ</p>
                            <p className="text-sm text-red-600 mt-0.5">{errorMsg}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <form ref={formRef} className="space-y-6" dir="rtl" onSubmit={handleSubmit}>
                      {/* Kid Name + Phone */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-bold text-slate-700 mb-2" htmlFor="kidName">
                            اسم الطفل
                          </label>
                          <input
                            type="text"
                            id="kidName"
                            name="kidName"
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                            placeholder="أدخل اسم الطفل"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-bold text-slate-700 mb-2" htmlFor="phone">
                            رقم الهاتف
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all text-right"
                            placeholder="أدخل رقم الهاتف"
                            required
                            dir="ltr"
                          />
                        </div>
                      </div>

                      {/* Story Type */}
                      <div>
                        <fieldset>
                          <legend className="block text-sm font-bold text-slate-700 mb-4">
                            نوع القصة (المهنة المستقبلية)
                          </legend>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {PROFESSIONS.map((prof) => (
                              <label
                                key={prof.id}
                                className={`relative flex flex-col items-center justify-center p-4 bg-white border-2 rounded-2xl cursor-pointer transition-all group shadow-sm ${selectedProf === prof.id
                                    ? 'border-primary-600 bg-primary-50/30'
                                    : 'border-slate-100 hover:border-primary-300 hover:bg-primary-50/50'
                                  }`}
                              >
                                <input
                                  type="radio"
                                  name="storyType"
                                  value={prof.id}
                                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                  required
                                  onChange={() => setSelectedProf(prof.id)}
                                />
                                <span className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                                  {prof.icon}
                                </span>
                                <span className={`text-sm font-bold ${selectedProf === prof.id ? 'text-primary-700' : 'text-slate-600'}`}>
                                  {prof.label}
                                </span>
                                {selectedProf === prof.id && (
                                  <motion.div
                                    layoutId="prof-check"
                                    className="absolute top-2 left-2 w-5 h-5 bg-primary-600 rounded-full flex items-center justify-center"
                                  >
                                    <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                                  </motion.div>
                                )}
                              </label>
                            ))}
                          </div>
                        </fieldset>
                      </div>

                      {/* Image Upload with Preview */}
                      <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">
                          صورة الطفل
                        </label>

                        {/* File input — always in DOM so ref always has the file */}
                        <input
                          ref={fileInputRef}
                          id="file-upload"
                          name="image"
                          type="file"
                          className="hidden"
                          accept="image/*"
                          onChange={handleImageChange}
                        />

                        {imagePreview ? (
                          /* Preview */
                          <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="relative rounded-2xl overflow-hidden border-2 border-primary-300 shadow-md"
                          >
                            <img
                              src={imagePreview}
                              alt="معاينة صورة الطفل"
                              className="w-full h-56 object-cover"
                            />
                            <button
                              type="button"
                              onClick={clearImage}
                              className="absolute top-3 left-3 bg-white/90 hover:bg-white text-slate-700 p-2 rounded-full shadow-md transition-all hover:scale-110"
                              title="حذف الصورة"
                            >
                              <X className="w-4 h-4" />
                            </button>
                            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                              <p className="text-white text-sm font-medium flex items-center gap-2">
                                <ImageIcon className="w-4 h-4" /> تم اختيار الصورة ✓
                              </p>
                            </div>
                          </motion.div>
                        ) : (
                          /* Drop zone — clicking it triggers the hidden input */
                          <div
                            className="mt-1 flex justify-center px-6 pt-8 pb-8 border-2 border-slate-300 border-dashed rounded-2xl hover:border-primary-500 hover:bg-primary-50/30 transition-all bg-slate-50 cursor-pointer relative group"
                            onClick={() => fileInputRef.current?.click()}
                          >
                            <div className="text-center">
                              <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                <Upload className="w-8 h-8 text-primary-500" />
                              </div>
                              <p className="text-base font-bold text-slate-700 mb-1">
                                اختر صورة أو اسحب وأفلت
                              </p>
                              <p className="text-sm text-slate-500">PNG, JPG, WEBP — حجم أقصى 5 ميغابايت</p>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Submit */}
                      <div className="pt-2">
                        <motion.button
                          type="submit"
                          disabled={isSubmitting}
                          whileHover={!isSubmitting ? { scale: 1.02, y: -2 } : {}}
                          whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                          className={`w-full flex justify-center items-center gap-3 py-4 px-8 rounded-2xl text-lg font-bold text-white shadow-xl transition-all ${isSubmitting
                              ? 'bg-primary-400 cursor-not-allowed'
                              : 'bg-primary-600 hover:bg-primary-700 shadow-primary-500/30'
                            }`}
                        >
                          {isSubmitting ? (
                            <>
                              <Loader2 className="w-5 h-5 animate-spin" />
                              جاري إرسال الطلب...
                            </>
                          ) : (
                            <>
                              <CheckCircle2 className="w-5 h-5" />
                              اطلب الآن — 2500 د.ج
                            </>
                          )}
                        </motion.button>
                      </div>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Product;
