import { motion } from 'framer-motion';
import { Upload, Cpu, CheckSquare, BookOpen, Printer, Banknote, CheckCircle2 } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const Product = () => {
  const steps = [
    { icon: Upload, title: "1. رفع الصورة", desc: "قم برفع صورة واضحة لطفلك من خلال موقعنا." },
    { icon: Cpu, title: "2. اختيار المهنة", desc: "اختر مهنة المستقبل (طبيب، مهندس، رائد فضاء...)." },
    { icon: Cpu, title: "3.  الذكاء الاصطناعي", desc: "نظامنا يصنع شخصية 3D تشبه طفلك تماماً." },
    { icon: CheckSquare, title: "4. تأكيد الشخصية", desc: "سنرسل لك الشخصية لتأكيدها قبل إكمال العمل." },
    { icon: BookOpen, title: "5. تأليف القصة", desc: "نكتب قصة ملهمة تتناسب مع المهنة المختارة." },
    { icon: Printer, title: "6. الطباعة", desc: "تتم طباعة الكتاب بجودة عالية وألوان زاهية." },
    { icon: Banknote, title: "7. الاستلام والدفع", desc: "يصلك الكتاب حتى باب المنزل، والدفع عند الاستلام." },
  ];

  return (
    <div className="pt-20 bg-primary-50">
      {/* Header */}
      <section className="relative py-24 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary-50 to-white -z-10"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-200/50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse"></div>
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-200/50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse" style={{ animationDelay: '2s' }}></div>
        
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
            {/* Vertical Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-primary-100 transform -translate-x-1/2"></div>
            
            <div className="space-y-12">
              {steps.map((step, idx) => (
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

                    <div className="w-full md:w-1/2"></div>
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
              <div className="text-center mb-10">
                <h2 className="text-3xl font-black text-slate-900 mb-4">اطلب قصتك الآن</h2>
                <p className="text-slate-600">املأ البيانات التالية لنبدأ في صنع سحر طفلك</p>
              </div>

              <form className="space-y-6" dir="rtl" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Kid's Name */}
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2" htmlFor="kidName">
                      اسم الطفل
                    </label>
                    <input
                      type="text"
                      id="kidName"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                      placeholder="أدخل اسم الطفل"
                      required
                    />
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2" htmlFor="phone">
                      رقم الهاتف
                    </label>
                    <input
                      type="tel"
                      id="phone"
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
                    <legend className="block text-sm font-bold text-slate-700 mb-4">نوع القصة (المهنة المستقبلية)</legend>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {[
                        { id: 'doctor', label: 'طبيب', icon: '👨‍⚕️' },
                        { id: 'engineer', label: 'مهندس', icon: '👷' },
                        { id: 'astronaut', label: 'رائد فضاء', icon: '👨‍🚀' },
                        { id: 'scientist', label: 'عالم', icon: '👨‍🔬' },
                        { id: 'police', label: 'شرطي', icon: '👮' },
                        { id: 'teacher', label: 'معلم', icon: '👨‍🏫' },
                        { id: 'artist', label: 'فنان', icon: '🎨' },
                        { id: 'other', label: 'أخرى', icon: '✨' },
                      ].map(prof => (
                        <label key={prof.id} className="relative flex flex-col items-center justify-center p-4 bg-white border-2 border-slate-100 rounded-2xl cursor-pointer hover:border-primary-300 hover:bg-primary-50/50 transition-all group shadow-sm">
                          <input type="radio" name="storyType" value={prof.id} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer peer" required />
                          <span className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">{prof.icon}</span>
                          <span className="text-sm font-bold text-slate-600 peer-checked:text-primary-700">{prof.label}</span>
                          <div className="absolute inset-0 border-2 border-transparent rounded-2xl peer-checked:border-primary-600 peer-checked:bg-primary-50/30 pointer-events-none transition-all"></div>
                        </label>
                      ))}
                    </div>
                  </fieldset>
                </div>

                {/* Picture Upload */}
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">
                    صورة الطفل
                  </label>
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-slate-300 border-dashed rounded-xl hover:border-primary-500 transition-colors bg-slate-50 cursor-pointer relative">
                    <input id="file-upload" name="file-upload" type="file" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" accept="image/*" required />
                    <div className="space-y-1 text-center">
                      <Upload className="mx-auto h-12 w-12 text-slate-400" />
                      <div className="flex text-sm text-slate-600 justify-center">
                        <span className="relative font-medium text-primary-600 hover:text-primary-500 px-2">
                          اختر صورة
                        </span>
                        <p className="pl-1">أو اسحب وأفلت هنا</p>
                      </div>
                      
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full flex justify-center items-center gap-2 py-4 px-8 border border-transparent rounded-xl shadow-sm text-lg font-bold text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-all transform hover:-translate-y-1"
                  >
                    اطلب الآن - 2500 د.ج
                    <CheckCircle2 className="w-5 h-5" />
                  </button>
                </div>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </section>

    </div>
  );
};

export default Product;
