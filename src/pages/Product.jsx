import { motion } from 'framer-motion';
import { Upload, Cpu, CheckSquare, BookOpen, Printer, Banknote, CheckCircle2 } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const Product = () => {
  const steps = [
    { icon: Upload, title: "1. رفع الصورة", desc: "قم برفع صورة واضحة لطفلك من خلال موقعنا." },
    { icon: Cpu, title: "2. اختيار المهنة", desc: "اختر مهنة المستقبل (طبيب، مهندس، رائد فضاء...)." },
    { icon: Cpu, title: "3. سحر الذكاء الاصطناعي", desc: "نظامنا يصنع شخصية 3D تشبه طفلك تماماً." },
    { icon: CheckSquare, title: "4. تأكيد الشخصية", desc: "سنرسل لك الشخصية لتأكيدها قبل إكمال العمل." },
    { icon: BookOpen, title: "5. تأليف القصة", desc: "نكتب قصة ملهمة تتناسب مع المهنة المختارة." },
    { icon: Printer, title: "6. الطباعة", desc: "تتم طباعة الكتاب بجودة عالية وألوان زاهية." },
    { icon: Banknote, title: "7. الاستلام والدفع", desc: "يصلك الكتاب حتى باب المنزل، والدفع عند الاستلام." },
  ];

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-primary-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">كيف نصنع سحر Kidzy؟</h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
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

      {/* Pricing */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black mb-4">اختر الباقة المناسبة لك</h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">أسعار مدروسة تناسب الجميع مع توفير خدمة الدفع عند الاستلام في الجزائر</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Basic */}
            <AnimatedSection delay={0.1}>
              <div className="bg-slate-800 rounded-3xl p-8 border border-slate-700 hover:border-primary-500 transition-all flex flex-col h-full">
                <h3 className="text-2xl font-bold mb-2">النسخة الرقمية</h3>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-4xl font-black">1500</span>
                  <span className="text-slate-400">د.ج</span>
                </div>
                <ul className="space-y-4 mb-8 flex-grow">
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-primary-500" /> قصة بصيغة PDF</li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-primary-500" /> 10 صفحات ملونة</li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-primary-500" /> تسليم في 24 ساعة</li>
                </ul>
                <button className="w-full py-4 rounded-xl font-bold bg-slate-700 text-white hover:bg-slate-600 transition-colors">اطلب الآن</button>
              </div>
            </AnimatedSection>

            {/* Premium / Printed */}
            <AnimatedSection delay={0.2}>
              <div className="bg-gradient-to-b from-primary-600 to-primary-800 rounded-3xl p-8 border border-primary-400 shadow-2xl shadow-primary-900/50 transform md:-translate-y-4 flex flex-col h-full relative">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-accent text-slate-900 font-bold px-4 py-1 rounded-full text-sm">
                  الأكثر مبيعاً
                </div>
                <h3 className="text-2xl font-bold mb-2">النسخة المطبوعة</h3>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-4xl font-black">3500</span>
                  <span className="text-primary-200">د.ج</span>
                </div>
                <ul className="space-y-4 mb-8 flex-grow">
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-accent" /> كتاب مطبوع بجودة عالية (غلاف صلب)</li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-accent" /> نسخة رقمية مجانية</li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-accent" /> 15 صفحة ملونة</li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-accent" /> الدفع عند الاستلام</li>
                </ul>
                <button className="w-full py-4 rounded-xl font-bold bg-white text-primary-700 hover:bg-slate-100 transition-colors shadow-lg">اطلب الآن</button>
              </div>
            </AnimatedSection>

            {/* Deluxe */}
            <AnimatedSection delay={0.3}>
              <div className="bg-slate-800 rounded-3xl p-8 border border-slate-700 hover:border-secondary-500 transition-all flex flex-col h-full">
                <h3 className="text-2xl font-bold mb-2">الباقة الفاخرة</h3>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-4xl font-black">4900</span>
                  <span className="text-slate-400">د.ج</span>
                </div>
                <ul className="space-y-4 mb-8 flex-grow">
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-secondary-500" /> كتاب مطبوع فاخر</li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-secondary-500" /> بوستر كبير للشخصية</li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-secondary-500" /> صندوق هدايا مميز</li>
                  <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-secondary-500" /> توصيل مجاني</li>
                </ul>
                <button className="w-full py-4 rounded-xl font-bold bg-slate-700 text-white hover:bg-slate-600 transition-colors">اطلب الآن</button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Product;
