import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Upload, Wand2, BookOpen, Truck, CheckCircle2, Star } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const Home = () => {
  return (
    <div className="pt-20 bg-gradient-to-b from-primary-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary-50 to-white pt-16 pb-24 lg:pt-32 lg:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-black text-slate-900 leading-tight mb-6">
                حوّل صورة طفلك إلى <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">قصة ملهمة</span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 max-w-lg leading-relaxed">
                اصنع كتابًا مخصصًا لطفلك باستخدام الذكاء الاصطناعي، حيث يصبح هو بطل القصة. تجربة ساحرة تنمي خياله وتبني ثقته بنفسه.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/product">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full sm:w-auto bg-primary-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl shadow-primary-500/30 hover:bg-primary-600 transition-colors"
                  >
                    أطلب الآن                  </motion.button>
                </Link>
                <button className="w-full sm:w-auto bg-white text-primary-600 px-8 py-4 rounded-full font-bold text-lg border-2 border-primary-100 hover:border-primary-300 hover:bg-primary-50 transition-colors">
                  شاهد مثال
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-400 to-secondary-400 rounded-3xl transform rotate-3 scale-105 opacity-20 blur-xl"></div>
              <img
                src="/hero.png"
                alt="طفل يتحول إلى بطل قصة باستخدام الذكاء الاصطناعي"
                className="relative z-10 w-full h-auto rounded-3xl shadow-2xl border-4 border-white object-cover aspect-[4/3]"
              />
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 z-20"
              >
                <div className="bg-green-100 p-2 rounded-full">
                  <Star className="w-6 h-6 text-green-600 fill-current" />
                </div>
                <div>
                  <p className="font-bold text-slate-800 text-sm">تقييم 4.9/5</p>
                  <p className="text-slate-500 text-xs">من آلاف الآباء</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">كيف تعمل Kidzy؟</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">أربع خطوات بسيطة تفصلك عن هدية لا تُنسى لطفلك</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Upload, title: "ارفع صورة طفلك", desc: "اختر صورة واضحة ومبتسمة لطفلك", color: "bg-blue-100 text-blue-600" },
              { icon: Wand2, title: "نحوّلها إلى شخصية كرتونية", desc: "يقوم الذكاء الاصطناعي برسم شخصية تشبه طفلك تماماً", color: "bg-purple-100 text-purple-600" },
              { icon: BookOpen, title: "نصنع قصة تعليمية مخصصة", desc: "نؤلف قصة بطلها طفلك بمهنة المستقبل التي تختارها", color: "bg-pink-100 text-pink-600" },
              { icon: Truck, title: "نطبع الكتاب ونوصله", desc: "كتاب مطبوع بجودة عالية يصل حتى باب منزلك", color: "bg-green-100 text-green-600" }
            ].map((step, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.1} className="relative group">
                <div className="bg-slate-50 rounded-3xl p-8 text-center hover:bg-white hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:border-primary-100 h-full">
                  <div className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform ${step.color}`}>
                    <step.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                  <p className="text-slate-600">{step.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">لماذا تختار Kidzy لطفلك؟</h2>
              <div className="space-y-6">
                {[
                  "تحفيز الأطفال على التعلم عبر وضعهم في قلب القصة",
                  "بناء الثقة بالنفس واكتشاف الذات",
                  "تجربة قراءة ممتعة ومخصصة بالكامل",
                  "الهدية المثالية لأعياد الميلاد والمناسبات الخاصة"
                ].map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-primary-500 shrink-0 mt-1" />
                    <p className="text-lg text-slate-700 font-medium">{benefit}</p>
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <Link to="/product">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-primary-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl shadow-primary-500/30 hover:bg-primary-600 transition-colors"
                  >
                    أطلب الآن
                  </motion.button>
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2} className="grid grid-cols-2 gap-4">
              {/* Decorative blocks to replace images for now, can be actual images later */}
              <div className="bg-gradient-to-br from-blue-200 to-blue-400 rounded-3xl h-64 shadow-lg transform translate-y-8"></div>
              <div className="bg-gradient-to-bl from-purple-200 to-purple-400 rounded-3xl h-64 shadow-lg"></div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Story Example Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">مثال عن قصة "الطبيب الصغير"</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">هكذا سيبدو طفلك عندما يصبح بطل الحكاية</p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="bg-primary-50 rounded-[3rem] p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
              <div className="absolute top-0 left-0 w-64 h-64 bg-secondary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>

              <div className="w-full md:w-1/2 relative z-10">
                <div className="bg-white p-6 md:p-8 rounded-3xl shadow-xl border-2 border-white">
                  <p className="text-2xl md:text-3xl text-slate-800 leading-relaxed font-bold mb-6 text-center md:text-right">
                    أنا آدم، طفل أحب أن أكتشف العالم من حولي، وأتخيل نفسي في أدوار مختلفة كل يوم، واليوم قررت أن أكون طبيبًا.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2 relative z-10">
                <img
                  src="/hero.png"
                  alt="مثال القصة"
                  className="rounded-3xl shadow-2xl object-cover w-full h-80"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gradient-to-b from-primary-50 to-white relative overflow-hidden">
        {/* Soft decorative background shapes */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-primary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">ماذا يقول الآباء عن Kidzy؟</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">تجارب حقيقية لآباء رأوا السعادة في أطفالهم</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { text: "بنتي سارة لم تتوقف عن قراءة القصة منذ أن وصلتنا! رؤيتها لنفسها كمهندسة فضاء جعلها في قمة السعادة.", author: "أم سارة", role: "الجزائر العاصمة" },
              { text: "فكرة عبقرية وجودة الطباعة ممتازة. ابني يعاني من قلة الثقة بالنفس، وهذه القصة كانت دفعة معنوية كبيرة له.", author: "أبو يوسف", role: "وهران" },
              { text: "تجربة رائعة من الطلب حتى الاستلام. خدمة العملاء ودودة جداً والمنتج النهائي فاق توقعاتي بكثير.", author: "أمينة", role: "قسنطينة" }
            ].map((review, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.1}>
                <div className="bg-white p-8 rounded-[2.5rem] h-full shadow-xl shadow-secondary-100/50 border-2 border-white hover:border-secondary-200 transition-colors">
                  <div className="flex gap-1 mb-6">
                    {[1, 2, 3, 4, 5].map(star => <Star key={star} className="w-5 h-5 text-accent fill-current" />)}
                  </div>
                  <p className="text-lg text-slate-700 mb-8 font-medium leading-relaxed">"{review.text}"</p>
                  <div className="flex items-center gap-4 mt-auto">
                    <div className="w-12 h-12 rounded-full bg-secondary-100 flex items-center justify-center text-secondary-600 font-bold text-xl">
                      {review.author[0]}
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">{review.author}</p>
                      <p className="text-sm text-slate-500">{review.role}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-primary-500/20 border-4 border-white">
              {/* Decorative background shapes inside the banner */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white opacity-10 rounded-full blur-2xl transform -translate-x-1/2 translate-y-1/2"></div>

              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">اصنع قصة طفلك اليوم</h2>
                <p className="text-xl md:text-2xl text-primary-50 mb-10 font-medium max-w-2xl mx-auto">
                  لا تفوت فرصة إهداء طفلك تجربة لا تُنسى. اطلب الآن واجعل طفلك بطل الحكاية.
                </p>
                <Link to="/product">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-primary-600 px-10 py-5 rounded-full font-bold text-xl shadow-xl hover:bg-primary-50 transition-colors"
                  >
                    أطلب الآن
                  </motion.button>
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Home;
