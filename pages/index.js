import { useState } from "react";
import Head from "next/head";

const translations = {
  ar: {
    dir: "rtl",
    nav: { home: "الرئيسية", services: "خدماتنا", articles: "المقالات", booking: "احجز موعد", contact: "اتصل بنا" },
    hero: {
      badge: "خبراء إصلاح الأجهزة المنزلية",
      title: "نُصلح ما تُحبّ",
      subtitle: "إصلاح احترافي للأجهزة المنزلية والمكيفات",
      cta1: "احجز موعداً الآن",
      cta2: "توليد مقال تقني",
    },
    stats: [
      { value: "5000+", label: "جهاز تم إصلاحه" },
      { value: "98%", label: "نسبة رضا العملاء" },
      { value: "24h", label: "وقت الاستجابة" },
      { value: "10+", label: "سنوات خبرة" },
    ],
    services: {
      title: "خدماتنا",
      subtitle: "نغطي جميع أنواع الأجهزة المنزلية",
      items: [
        { icon: "❄️", name: "المكيفات", desc: "تنظيف، شحن فريون، إصلاح أعطال" },
        { icon: "🧺", name: "الغسالات", desc: "جميع الأنواع والماركات" },
        { icon: "🍳", name: "الطباخات والأفران", desc: "غاز وكهرباء" },
        { icon: "🌡️", name: "الثلاجات", desc: "إصلاح وصيانة شاملة" },
        { icon: "📺", name: "التلفزيونات", desc: "شاشات LED, OLED, QLED" },
        { icon: "🍽️", name: "غسالات الصحون", desc: "تشخيص وإصلاح" },
      ],
    },
    ai: {
      title: "مولّد المقالات بالذكاء الاصطناعي",
      subtitle: "أدخل موضوعاً وسيكتب الذكاء الاصطناعي مقالاً تقنياً احترافياً",
      placeholder: "مثال: كيف تنظف مكيف الهواء في المنزل؟",
      btn: "توليد المقال",
      generating: "جارٍ التوليد...",
      imageLabel: "صورة توضيحية",
    },
    booking: {
      title: "احجز موعد صيانة",
      name: "الاسم الكامل",
      phone: "رقم الهاتف",
      device: "نوع الجهاز",
      problem: "وصف المشكلة",
      date: "التاريخ المفضل",
      btn: "تأكيد الحجز",
      success: "✅ تم استلام طلبك! سنتصل بك قريباً.",
    },
    footer: "جميع الحقوق محفوظة © 2025 electromenager.repair",
  },
  fr: {
    dir: "ltr",
    nav: { home: "Accueil", services: "Services", articles: "Articles", booking: "Réserver", contact: "Contact" },
    hero: {
      badge: "Experts en réparation électroménager",
      title: "Nous réparons ce que vous aimez",
      subtitle: "Réparation professionnelle d'électroménager et climatiseurs",
      cta1: "Prendre rendez-vous",
      cta2: "Générer un article",
    },
    stats: [
      { value: "5000+", label: "Appareils réparés" },
      { value: "98%", label: "Satisfaction client" },
      { value: "24h", label: "Temps de réponse" },
      { value: "10+", label: "Ans d'expérience" },
    ],
    services: {
      title: "Nos Services",
      subtitle: "Nous couvrons tous types d'appareils",
      items: [
        { icon: "❄️", name: "Climatiseurs", desc: "Nettoyage, recharge gaz, réparation" },
        { icon: "🧺", name: "Machines à laver", desc: "Toutes marques et modèles" },
        { icon: "🍳", name: "Cuisinières & Fours", desc: "Gaz et électrique" },
        { icon: "🌡️", name: "Réfrigérateurs", desc: "Maintenance complète" },
        { icon: "📺", name: "Téléviseurs", desc: "LED, OLED, QLED" },
        { icon: "🍽️", name: "Lave-vaisselle", desc: "Diagnostic et réparation" },
      ],
    },
    ai: {
      title: "Générateur d'articles IA",
      subtitle: "Entrez un sujet et l'IA rédigera un article technique professionnel",
      placeholder: "Ex: Comment nettoyer un climatiseur à la maison?",
      btn: "Générer l'article",
      generating: "Génération en cours...",
      imageLabel: "Image illustrative",
    },
    booking: {
      title: "Réserver un rendez-vous",
      name: "Nom complet",
      phone: "Numéro de téléphone",
      device: "Type d'appareil",
      problem: "Description du problème",
      date: "Date préférée",
      btn: "Confirmer la réservation",
      success: "✅ Demande reçue! Nous vous appellerons bientôt.",
    },
    footer: "Tous droits réservés © 2025 electromenager.repair",
  },
  en: {
    dir: "ltr",
    nav: { home: "Home", services: "Services", articles: "Articles", booking: "Book Now", contact: "Contact" },
    hero: {
      badge: "Home Appliance Repair Experts",
      title: "We Fix What You Love",
      subtitle: "Professional repair for home appliances & air conditioners",
      cta1: "Book Appointment",
      cta2: "Generate Article",
    },
    stats: [
      { value: "5000+", label: "Devices Repaired" },
      { value: "98%", label: "Customer Satisfaction" },
      { value: "24h", label: "Response Time" },
      { value: "10+", label: "Years Experience" },
    ],
    services: {
      title: "Our Services",
      subtitle: "We cover all types of home appliances",
      items: [
        { icon: "❄️", name: "Air Conditioners", desc: "Cleaning, gas refill, repair" },
        { icon: "🧺", name: "Washing Machines", desc: "All brands and models" },
        { icon: "🍳", name: "Cookers & Ovens", desc: "Gas and electric" },
        { icon: "🌡️", name: "Refrigerators", desc: "Full maintenance & repair" },
        { icon: "📺", name: "Televisions", desc: "LED, OLED, QLED screens" },
        { icon: "🍽️", name: "Dishwashers", desc: "Diagnosis and repair" },
      ],
    },
    ai: {
      title: "AI Article Generator",
      subtitle: "Enter a topic and AI will write a professional technical article",
      placeholder: "E.g: How to clean an air conditioner at home?",
      btn: "Generate Article",
      generating: "Generating...",
      imageLabel: "Illustrative image",
    },
    booking: {
      title: "Book a Maintenance Appointment",
      name: "Full Name",
      phone: "Phone Number",
      device: "Device Type",
      problem: "Problem Description",
      date: "Preferred Date",
      btn: "Confirm Booking",
      success: "✅ Request received! We'll call you soon.",
    },
    footer: "All rights reserved © 2025 electromenager.repair",
  },
};

const UNSPLASH_TOPICS = {
  مكيف: "air conditioner repair",
  climatiseur: "air conditioner",
  "air conditioner": "air conditioner repair",
  غسالة: "washing machine repair",
  "machine a laver": "washing machine",
  "washing machine": "washing machine repair",
  ثلاجة: "refrigerator repair",
  refrigerateur: "refrigerator repair",
  refrigerator: "refrigerator repair",
  تلفزيون: "television repair",
  television: "television repair",
};

function getUnsplashImage(topic) {
  const lower = topic.toLowerCase();
  let keyword = "appliance repair technician";
  for (const [key, val] of Object.entries(UNSPLASH_TOPICS)) {
    if (lower.includes(key)) { keyword = val; break; }
  }
  const seed = Math.floor(Math.random() * 100);
  return `https://source.unsplash.com/800x450/?${encodeURIComponent(keyword)}&sig=${seed}`;
}

export default function Home() {
  const [lang, setLang] = useState("ar");
  const [activeSection, setActiveSection] = useState("home");
  const [aiTopic, setAiTopic] = useState("");
  const [aiArticle, setAiArticle] = useState(null);
  const [aiLoading, setAiLoading] = useState(false);
  const [bookingForm, setBookingForm] = useState({ name: "", phone: "", device: "", problem: "", date: "" });
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const t = translations[lang];

  const generateArticle = async () => {
    if (!aiTopic.trim()) return;
    setAiLoading(true);
    setAiArticle(null);
    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ topic: aiTopic, lang }),
      });
      const data = await res.json();
      if (data.article) {
        data.article.image = getUnsplashImage(aiTopic);
        setAiArticle(data.article);
      } else {
        setAiArticle({ error: true });
      }
    } catch (e) {
      setAiArticle({ error: true });
    }
    setAiLoading(false);
  };

  const handleBooking = (e) => {
    e.preventDefault();
    setBookingSuccess(true);
    setBookingForm({ name: "", phone: "", device: "", problem: "", date: "" });
    setTimeout(() => setBookingSuccess(false), 5000);
  };

  const scrollTo = (id) => {
    setActiveSection(id);
    setMobileMenu(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Head>
        <title>electromenager.repair — إصلاح الأجهزة المنزلية</title>
        <meta name="description" content="Réparation professionnelle d'électroménager et climatiseurs" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400;500;700;800&family=Syne:wght@400;600;700;800&display=swap" rel="stylesheet" />
      </Head>

      <div dir={t.dir} style={{ fontFamily: lang === "ar" ? "'Tajawal', sans-serif" : "'Syne', sans-serif", background: "#0a0f1e", color: "#e8eaf0", minHeight: "100vh" }}>
        <style>{`
          * { margin: 0; padding: 0; box-sizing: border-box; }
          :root { --orange: #ff6b35; --blue: #00d4ff; --dark: #0a0f1e; --card: #111827; --border: rgba(255,107,53,0.2); }
          html { scroll-behavior: smooth; }
          ::-webkit-scrollbar { width: 6px; }
          ::-webkit-scrollbar-thumb { background: var(--orange); border-radius: 3px; }
          .nav { position: fixed; top: 0; width: 100%; z-index: 100; background: rgba(10,15,30,0.95); backdrop-filter: blur(20px); border-bottom: 1px solid var(--border); padding: 0 2rem; height: 70px; display: flex; align-items: center; justify-content: space-between; }
          .logo { font-size: 1.3rem; font-weight: 800; color: var(--orange); cursor: pointer; }
          .logo span { color: var(--blue); }
          .nav-links { display: flex; gap: 2rem; list-style: none; }
          .nav-links a { color: #9ca3af; text-decoration: none; font-size: 0.9rem; font-weight: 500; transition: color 0.2s; cursor: pointer; }
          .nav-links a:hover, .nav-links a.active { color: var(--orange); }
          .lang-switcher { display: flex; gap: 0.4rem; }
          .lang-btn { padding: 0.3rem 0.7rem; border-radius: 6px; border: 1px solid var(--border); background: transparent; color: #9ca3af; cursor: pointer; font-size: 0.8rem; transition: all 0.2s; }
          .lang-btn.active, .lang-btn:hover { background: var(--orange); color: white; border-color: var(--orange); }
          .nav-right { display: flex; align-items: center; gap: 1.5rem; }
          .hero { min-height: 100vh; display: flex; align-items: center; justify-content: center; text-align: center; padding: 6rem 2rem 4rem; position: relative; overflow: hidden; }
          .hero-bg { position: absolute; inset: 0; background: radial-gradient(ellipse 80% 60% at 50% 40%, rgba(255,107,53,0.12) 0%, rgba(0,212,255,0.06) 50%, transparent 70%); }
          .hero-grid { position: absolute; inset: 0; background-image: linear-gradient(rgba(255,107,53,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,107,53,0.05) 1px, transparent 1px); background-size: 50px 50px; }
          .hero-content { position: relative; z-index: 1; max-width: 800px; }
          .hero-badge { display: inline-flex; align-items: center; gap: 0.5rem; background: rgba(255,107,53,0.1); border: 1px solid rgba(255,107,53,0.3); color: var(--orange); padding: 0.5rem 1.2rem; border-radius: 50px; font-size: 0.85rem; font-weight: 600; margin-bottom: 2rem; }
          .hero-title { font-size: clamp(2.5rem, 6vw, 4.5rem); font-weight: 800; line-height: 1.1; margin-bottom: 1.2rem; }
          .highlight { color: var(--orange); }
          .hero-sub { font-size: 1.15rem; color: #9ca3af; margin-bottom: 2.5rem; }
          .hero-btns { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; }
          .btn-primary { background: var(--orange); color: white; padding: 0.85rem 2rem; border-radius: 10px; border: none; font-size: 1rem; font-weight: 700; cursor: pointer; transition: all 0.2s; }
          .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 25px rgba(255,107,53,0.4); }
          .btn-secondary { background: transparent; color: var(--blue); padding: 0.85rem 2rem; border-radius: 10px; border: 2px solid var(--blue); font-size: 1rem; font-weight: 700; cursor: pointer; transition: all 0.2s; }
          .btn-secondary:hover { background: rgba(0,212,255,0.1); }
          .stats { display: flex; justify-content: center; gap: 3rem; flex-wrap: wrap; padding: 3rem 2rem; background: var(--card); border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); }
          .stat { text-align: center; }
          .stat-value { font-size: 2.2rem; font-weight: 800; color: var(--orange); }
          .stat-label { font-size: 0.85rem; color: #6b7280; margin-top: 0.3rem; }
          section { padding: 5rem 2rem; max-width: 1100px; margin: 0 auto; }
          .section-title { font-size: 2rem; font-weight: 800; text-align: center; margin-bottom: 0.7rem; }
          .section-sub { color: #6b7280; text-align: center; margin-bottom: 3rem; }
          .orange { color: var(--orange); }
          .services-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1.5rem; }
          .service-card { background: var(--card); border: 1px solid var(--border); border-radius: 14px; padding: 1.8rem; transition: all 0.3s; }
          .service-card:hover { border-color: var(--orange); transform: translateY(-4px); box-shadow: 0 12px 30px rgba(255,107,53,0.15); }
          .service-icon { font-size: 2.5rem; margin-bottom: 1rem; }
          .service-name { font-size: 1.1rem; font-weight: 700; margin-bottom: 0.5rem; }
          .service-desc { font-size: 0.875rem; color: #6b7280; }
          .ai-section { background: var(--card); border: 1px solid var(--border); border-radius: 20px; padding: 2.5rem; margin: 0 auto; max-width: 800px; }
          .ai-input-row { display: flex; gap: 1rem; margin-top: 1.5rem; flex-wrap: wrap; }
          .ai-input { flex: 1; min-width: 200px; background: rgba(255,255,255,0.05); border: 1px solid var(--border); color: #e8eaf0; padding: 0.85rem 1.2rem; border-radius: 10px; font-size: 1rem; outline: none; transition: border 0.2s; }
          .ai-input:focus { border-color: var(--orange); }
          .ai-input::placeholder { color: #4b5563; }
          .article-card { margin-top: 2rem; background: rgba(255,255,255,0.03); border: 1px solid var(--border); border-radius: 16px; overflow: hidden; }
          .article-img { width: 100%; height: 220px; object-fit: cover; background: #1f2937; }
          .article-body { padding: 1.8rem; }
          .article-title { font-size: 1.5rem; font-weight: 800; color: var(--orange); margin-bottom: 1rem; }
          .article-intro { color: #d1d5db; line-height: 1.7; margin-bottom: 1.5rem; }
          .article-heading { font-size: 1.05rem; font-weight: 700; color: var(--blue); margin-bottom: 0.5rem; }
          .article-content { color: #9ca3af; line-height: 1.7; font-size: 0.95rem; margin-bottom: 1rem; }
          .tips-box { background: rgba(255,107,53,0.08); border: 1px solid rgba(255,107,53,0.2); border-radius: 10px; padding: 1.2rem 1.5rem; margin-top: 1.5rem; }
          .tips-title { color: var(--orange); font-weight: 700; margin-bottom: 0.8rem; }
          .tip-item { display: flex; align-items: flex-start; gap: 0.5rem; color: #d1d5db; font-size: 0.9rem; margin-bottom: 0.4rem; line-height: 1.5; }
          .tip-dot { color: var(--orange); flex-shrink: 0; }
          .loading-pulse { display: flex; align-items: center; justify-content: center; gap: 0.5rem; padding: 2rem; color: #6b7280; }
          .pulse-dot { width: 8px; height: 8px; background: var(--orange); border-radius: 50%; animation: pulse 1.2s infinite; }
          .pulse-dot:nth-child(2) { animation-delay: 0.2s; }
          .pulse-dot:nth-child(3) { animation-delay: 0.4s; }
          .booking-form { background: var(--card); border: 1px solid var(--border); border-radius: 20px; padding: 2.5rem; max-width: 600px; margin: 0 auto; }
          .form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
          .form-group { display: flex; flex-direction: column; gap: 0.4rem; }
          .form-group.full { grid-column: 1 / -1; }
          .form-label { font-size: 0.85rem; color: #9ca3af; font-weight: 600; }
          .form-input, .form-textarea { background: rgba(255,255,255,0.05); border: 1px solid var(--border); color: #e8eaf0; padding: 0.75rem 1rem; border-radius: 10px; font-size: 0.95rem; outline: none; transition: border 0.2s; font-family: inherit; }
          .form-input:focus, .form-textarea:focus { border-color: var(--orange); }
          .form-textarea { resize: vertical; min-height: 100px; }
          .success-msg { background: rgba(34,197,94,0.1); border: 1px solid rgba(34,197,94,0.3); color: #86efac; padding: 1rem 1.5rem; border-radius: 10px; text-align: center; margin-top: 1rem; font-weight: 600; }
          footer { background: var(--card); border-top: 1px solid var(--border); padding: 2rem; text-align: center; color: #4b5563; font-size: 0.85rem; }
          .footer-logo { font-size: 1.2rem; font-weight: 800; color: var(--orange); margin-bottom: 0.5rem; }
          .mobile-menu-btn { display: none; background: none; border: none; color: #e8eaf0; font-size: 1.5rem; cursor: pointer; }
          @media (max-width: 768px) {
            .nav-links { display: none; }
            .mobile-menu-btn { display: block; }
            .nav-links.open { display: flex; flex-direction: column; position: absolute; top: 70px; left: 0; right: 0; background: rgba(10,15,30,0.98); padding: 1.5rem 2rem; gap: 1.2rem; border-bottom: 1px solid var(--border); }
            .form-grid { grid-template-columns: 1fr; }
            .stats { gap: 1.5rem; }
            section { padding: 4rem 1.2rem; }
          }
          @keyframes pulse { 0%, 100% { transform: scale(1); opacity: 1; } 50% { transform: scale(1.4); opacity: 0.5; } }
        `}</style>

        {/* NAV */}
        <nav className="nav">
          <div className="logo" onClick={() => scrollTo("home")}>
            electro<span>menager</span>.repair
          </div>
          <ul className={`nav-links ${mobileMenu ? "open" : ""}`}>
            {Object.entries(t.nav).map(([key, val]) => (
              <li key={key}><a className={activeSection === key ? "active" : ""} onClick={() => scrollTo(key)}>{val}</a></li>
            ))}
          </ul>
          <div className="nav-right">
            <div className="lang-switcher">
              {["ar", "fr", "en"].map(l => (
                <button key={l} className={`lang-btn ${lang === l ? "active" : ""}`} onClick={() => setLang(l)}>
                  {l === "ar" ? "ع" : l === "fr" ? "FR" : "EN"}
                </button>
              ))}
            </div>
            <button className="mobile-menu-btn" onClick={() => setMobileMenu(!mobileMenu)}>☰</button>
          </div>
        </nav>

        {/* HERO */}
        <div id="home">
          <div className="hero">
            <div className="hero-bg" />
            <div className="hero-grid" />
            <div className="hero-content">
              <div className="hero-badge">🔧 {t.hero.badge}</div>
              <h1 className="hero-title">
                {t.hero.title.split(" ").map((w, i) =>
                  i === 1 ? <span key={i} className="highlight"> {w} </span> : w + " "
                )}
              </h1>
              <p className="hero-sub">{t.hero.subtitle}</p>
              <div className="hero-btns">
                <button className="btn-primary" onClick={() => scrollTo("booking")}>{t.hero.cta1}</button>
                <button className="btn-secondary" onClick={() => scrollTo("articles")}>{t.hero.cta2}</button>
              </div>
            </div>
          </div>
        </div>

        {/* STATS */}
        <div className="stats">
          {t.stats.map((s, i) => (
            <div className="stat" key={i}>
              <div className="stat-value">{s.value}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>

        {/* SERVICES */}
        <section id="services">
          <h2 className="section-title">{t.services.title}</h2>
          <p className="section-sub">{t.services.subtitle}</p>
          <div className="services-grid">
            {t.services.items.map((s, i) => (
              <div className="service-card" key={i}>
                <div className="service-icon">{s.icon}</div>
                <div className="service-name">{s.name}</div>
                <div className="service-desc">{s.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* AI ARTICLE GENERATOR */}
        <section id="articles" style={{ maxWidth: 900 }}>
          <h2 className="section-title">🤖 <span className="orange">{t.ai.title}</span></h2>
          <p className="section-sub">{t.ai.subtitle}</p>
          <div className="ai-section">
            <div className="ai-input-row">
              <input
                className="ai-input"
                placeholder={t.ai.placeholder}
                value={aiTopic}
                onChange={e => setAiTopic(e.target.value)}
                onKeyDown={e => e.key === "Enter" && generateArticle()}
                dir={lang === "ar" ? "rtl" : "ltr"}
              />
              <button className="btn-primary" onClick={generateArticle} disabled={aiLoading} style={{ minWidth: 150 }}>
                {aiLoading ? t.ai.generating : t.ai.btn}
              </button>
            </div>
            {aiLoading && (
              <div className="loading-pulse">
                <div className="pulse-dot" /><div className="pulse-dot" /><div className="pulse-dot" />
                <span style={{ margin: "0 0.5rem" }}>{t.ai.generating}</span>
              </div>
            )}
            {aiArticle && !aiArticle.error && (
              <div className="article-card">
                <img className="article-img" src={aiArticle.image} alt={t.ai.imageLabel}
                  onError={e => { e.target.src = "https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=800&h=450&fit=crop"; }} />
                <div className="article-body" dir={lang === "ar" ? "rtl" : "ltr"}>
                  <div className="article-title">{aiArticle.title}</div>
                  <div className="article-intro">{aiArticle.intro}</div>
                  {aiArticle.sections?.map((sec, i) => (
                    <div key={i}>
                      <div className="article-heading">▸ {sec.heading}</div>
                      <div className="article-content">{sec.content}</div>
                    </div>
                  ))}
                  {aiArticle.tips?.length > 0 && (
                    <div className="tips-box">
                      <div className="tips-title">💡 {lang === "ar" ? "نصائح مهمة" : lang === "fr" ? "Conseils importants" : "Important Tips"}</div>
                      {aiArticle.tips.map((tip, i) => (
                        <div className="tip-item" key={i}><span className="tip-dot">●</span><span>{tip}</span></div>
                      ))}
                    </div>
                  )}
                  {aiArticle.conclusion && (
                    <div style={{ marginTop: "1.2rem", color: "#d1d5db", fontStyle: "italic", borderTop: "1px solid var(--border)", paddingTop: "1rem" }}>
                      {aiArticle.conclusion}
                    </div>
                  )}
                </div>
              </div>
            )}
            {aiArticle?.error && (
              <div style={{ color: "#f87171", textAlign: "center", padding: "1.5rem" }}>
                {lang === "ar" ? "حدث خطأ، تحقق من مفتاح API" : lang === "fr" ? "Erreur, vérifiez la clé API" : "Error, check your API key"}
              </div>
            )}
          </div>
        </section>

        {/* BOOKING */}
        <section id="booking">
          <h2 className="section-title">📅 <span className="orange">{t.booking.title}</span></h2>
          <div className="booking-form">
            <form onSubmit={handleBooking}>
              <div className="form-grid">
                <div className="form-group">
                  <label className="form-label">{t.booking.name}</label>
                  <input className="form-input" required value={bookingForm.name} onChange={e => setBookingForm({...bookingForm, name: e.target.value})} dir={lang === "ar" ? "rtl" : "ltr"} />
                </div>
                <div className="form-group">
                  <label className="form-label">{t.booking.phone}</label>
                  <input className="form-input" type="tel" required value={bookingForm.phone} onChange={e => setBookingForm({...bookingForm, phone: e.target.value})} />
                </div>
                <div className="form-group">
                  <label className="form-label">{t.booking.device}</label>
                  <input className="form-input" required value={bookingForm.device} onChange={e => setBookingForm({...bookingForm, device: e.target.value})} dir={lang === "ar" ? "rtl" : "ltr"} />
                </div>
                <div className="form-group">
                  <label className="form-label">{t.booking.date}</label>
                  <input className="form-input" type="date" required value={bookingForm.date} onChange={e => setBookingForm({...bookingForm, date: e.target.value})} />
                </div>
                <div className="form-group full">
                  <label className="form-label">{t.booking.problem}</label>
                  <textarea className="form-textarea" required value={bookingForm.problem} onChange={e => setBookingForm({...bookingForm, problem: e.target.value})} dir={lang === "ar" ? "rtl" : "ltr"} />
                </div>
              </div>
              <button className="btn-primary" type="submit" style={{ width: "100%", marginTop: "1.2rem", fontSize: "1.05rem" }}>
                {t.booking.btn}
              </button>
            </form>
            {bookingSuccess && <div className="success-msg">{t.booking.success}</div>}
          </div>
        </section>

        {/* FOOTER */}
        <footer id="contact">
          <div className="footer-logo">electromenager.repair</div>
          <p>{t.footer}</p>
        </footer>
      </div>
    </>
  );
}
