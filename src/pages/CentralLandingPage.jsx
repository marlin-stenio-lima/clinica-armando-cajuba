import { exams, clinicWhatsApp } from '../data/exams';
import { trackClick, trackView } from '../utils/tracking';
import { 
  MessageCircle, Clock, MapPin, ShieldCheck, Activity, 
  CheckCircle2, AlertCircle, Info, HeartHandshake, Phone, Mail,
  Target, User, Timer
} from 'lucide-react';
import { useEffect, useState } from 'react';

export default function CentralLandingPage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    trackView('central_lp');
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsAppClick = (exam) => {
    if (exam) {
      trackClick(exam.id);
      const encodedMessage = encodeURIComponent(exam.message);
      const whatsappUrl = `https://wa.me/${clinicWhatsApp}?text=${encodedMessage}`;
      window.open(whatsappUrl, '_blank');
    } else {
      // Default generic message
      trackClick('central_lp_generic');
      const encodedMessage = encodeURIComponent("Olá, tenho interesse em agendar um exame.");
      const whatsappUrl = `https://wa.me/${clinicWhatsApp}?text=${encodedMessage}`;
      window.open(whatsappUrl, '_blank');
    }
  };

  return (
    <>
      <style>{`
        .lp-container { max-width: 1100px; margin: 0 auto; padding: 0 24px; }
        .lp-hero-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center; padding-top: 120px; }
        .lp-content-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin-top: 4rem; }
        .mobile-cta { display: none; }
        
        .lp-card {
          background: #ffffff;
          border-radius: 16px;
          padding: 32px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.03);
          border: 1px solid #f1f5f9;
        }

        .exam-option-card {
          background: #ffffff;
          border-radius: 12px;
          padding: 24px;
          border: 1px solid #e2e8f0;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          transition: all 0.2s;
          box-shadow: 0 2px 4px rgba(0,0,0,0.02);
          text-align: left;
          height: 100%;
        }

        .exam-option-card:hover {
          border-color: #22c55e;
          transform: translateY(-4px);
          box-shadow: 0 10px 20px -5px rgba(34, 197, 94, 0.15);
        }

        @media (max-width: 768px) {
          .lp-hero-grid { grid-template-columns: 1fr; gap: 2rem; padding-top: 100px; }
          .lp-content-grid { grid-template-columns: 1fr; }
          .lp-main { padding-bottom: 40px !important; }
          .desktop-cta { width: 100%; justify-content: center; }
        }
      `}</style>

      <header style={{ width: '100%', padding: '32px 0', position: 'absolute', top: 0, left: 0, zIndex: 10 }}>
        <div className="lp-container" style={{ display: 'flex', justifyContent: 'center' }}>
          <img src="/logo.png" alt="Clínica Armando Cajubá" style={{ height: '60px', objectFit: 'contain' }} />
        </div>
      </header>

      <main className="lp-main" style={{ display: 'flex', flexDirection: 'column', paddingBottom: '0' }}>
        
        {/* HERO SECTION */}
        <section style={{ 
          paddingTop: '160px', 
          paddingBottom: '60px', 
          background: '#ffffff',
          position: 'relative',
          overflow: 'hidden',
          borderBottom: '1px solid #f1f5f9'
        }}>
          <div className="lp-container" style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <div className="animate-fade-in" style={{ maxWidth: '850px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              
              <span style={{ color: '#ef4444', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '24px', display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#ef444415', padding: '8px 20px', borderRadius: '30px' }}>
                <Clock size={16} strokeWidth={2.5} /> RESULTADOS EM ATÉ 2 HORAS
              </span>
              
              <h1 style={{ fontSize: 'clamp(2.2rem, 6vw, 4.5rem)', fontWeight: 800, lineHeight: 1.15, color: '#0f172a', marginBottom: '24px', letterSpacing: '-1.5px', wordBreak: 'break-word' }}>
                Agende seus exames na <span style={{ color: '#ef4444' }}>Clínica Armando Cajubá</span>
              </h1>
              
              <p style={{ fontSize: '1.15rem', color: '#475569', marginBottom: '40px', lineHeight: 1.6, maxWidth: '750px' }}>
                Cuidar da sua saúde é a nossa prioridade. Realize seus exames com tecnologia de ponta e radiologistas altamente qualificados em Parnaíba/PI.
              </p>
              
              <button 
                onClick={() => handleWhatsAppClick(null)} 
                style={{ 
                  background: '#22c55e', 
                  boxShadow: '0 10px 25px rgba(34, 197, 94, 0.4)', 
                  padding: '20px 40px', 
                  fontSize: '1.15rem',
                  borderRadius: '16px',
                  border: 'none',
                  color: 'white',
                  fontWeight: 700,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  whiteSpace: 'nowrap',
                  gap: '12px',
                  cursor: 'pointer',
                  transition: 'transform 0.2s',
                  width: '100%',
                  maxWidth: '360px'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                <svg width="26" height="26" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                </svg>
                Agendar via WhatsApp
              </button>
              
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '16px', marginTop: '40px', background: '#f8fafc', padding: '24px 32px', borderRadius: '16px', border: '1px solid #f1f5f9' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '12px', fontWeight: 600, color: '#334155', fontSize: '1.05rem', textAlign: 'left' }}>
                  <CheckCircle2 size={20} color="#ef4444" style={{ flexShrink: 0 }} /> Laudos Rápidos
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '12px', fontWeight: 600, color: '#334155', fontSize: '1.05rem', textAlign: 'left' }}>
                  <CheckCircle2 size={20} color="#ef4444" style={{ flexShrink: 0 }} /> Corpo Clínico Especializado
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '12px', fontWeight: 600, color: '#334155', fontSize: '1.05rem', textAlign: 'left' }}>
                  <CheckCircle2 size={20} color="#ef4444" style={{ flexShrink: 0 }} /> Instalações Modernas
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* LISTA DE EXAMES SECTION */}
        <section style={{ background: '#f8fafc', padding: '40px 0 80px 0' }}>
          <div className="lp-container">
            <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center', marginBottom: '40px' }}>
              <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#0f172a', marginBottom: '16px', letterSpacing: '-0.5px' }}>Qual exame você deseja agendar?</h2>
              <p style={{ color: '#475569', fontSize: '1.1rem', lineHeight: 1.6 }}>
                Selecione abaixo o tipo de exame desejado para falar com a nossa equipe de atendimento via WhatsApp.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px', maxWidth: '1100px', margin: '0 auto' }}>
              {exams.map(exam => (
                <button 
                  key={exam.id}
                  onClick={() => handleWhatsAppClick(exam)}
                  className="exam-option-card"
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                     <div style={{ background: '#25d36615', padding: '10px', borderRadius: '10px' }}>
                       <svg width="22" height="22" viewBox="0 0 24 24" fill="#25d366" xmlns="http://www.w3.org/2000/svg">
                         <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                       </svg>
                     </div>
                     <h3 style={{ fontWeight: 700, color: '#0f172a', fontSize: '1.1rem', margin: 0 }}>{exam.title}</h3>
                  </div>
                  <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: 1.5, margin: 0, marginBottom: '20px', flexGrow: 1 }}>
                    {exam.description}
                  </p>
                  
                  <div style={{ width: '100%', borderTop: '1px solid #f1f5f9', paddingTop: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#25d366', fontWeight: 600, fontSize: '0.95rem' }}>
                    <span>Agendar exame</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* POR QUE ESCOLHER SECTION */}
        <section style={{ padding: '80px 0', background: '#ffffff' }}>
          <div className="lp-container">
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <span style={{ color: '#ef4444', fontWeight: 700, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1.5px' }}>Por que somos a melhor escolha?</span>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0f172a', marginTop: '12px', letterSpacing: '-0.5px' }}>
                Excelência em Diagnóstico por Imagem
              </h2>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
              {/* Card 1 */}
              <div style={{ padding: '40px 20px', background: '#ffffff', border: '1px solid #ef4444', transition: 'transform 0.3s', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                <div style={{ marginBottom: '20px' }}>
                  <Target size={40} color="#ef4444" strokeWidth={1.5} />
                </div>
                <h4 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#333333', marginBottom: '16px' }}>Precisão nos Diagnósticos</h4>
                <p style={{ color: '#666666', fontSize: '0.95rem', lineHeight: 1.6 }}>Diagnósticos mais precisos, permitindo que os médicos identifiquem com mais acurácia anomalias, doenças e lesões.</p>
              </div>
              
              {/* Card 2 */}
              <div style={{ padding: '40px 20px', background: '#ffffff', border: '1px solid #ef4444', transition: 'transform 0.3s', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                <div style={{ marginBottom: '20px' }}>
                  <User size={40} color="#ef4444" strokeWidth={1.5} />
                </div>
                <h4 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#333333', marginBottom: '16px' }}>Atendimento Especializado</h4>
                <p style={{ color: '#666666', fontSize: '0.95rem', lineHeight: 1.6 }}>Nossos especialistas estão comprometidos em oferecer um atendimento atencioso e humanizado, garantindo a satisfação e confiança dos pacientes.</p>
              </div>

              {/* Card 3 */}
              <div style={{ padding: '40px 20px', background: '#ffffff', border: '1px solid #ef4444', transition: 'transform 0.3s', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                <div style={{ marginBottom: '20px' }}>
                  <Timer size={40} color="#ef4444" strokeWidth={1.5} />
                </div>
                <h4 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#333333', marginBottom: '16px' }}>Acesso Rápido aos Resultados</h4>
                <p style={{ color: '#666666', fontSize: '0.95rem', lineHeight: 1.6 }}>Nossos exames são conduzidos com tecnologia de ponta, permitindo uma entrega rápida dos resultados em tempo recorde após o procedimento.</p>
              </div>

              {/* Card 4 */}
              <div style={{ padding: '40px 20px', background: '#ffffff', border: '1px solid #ef4444', transition: 'transform 0.3s', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                <div style={{ marginBottom: '20px' }}>
                  <Activity size={40} color="#ef4444" strokeWidth={1.5} />
                </div>
                <h4 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#333333', marginBottom: '16px' }}>Conforto e Rapidez</h4>
                <p style={{ color: '#666666', fontSize: '0.95rem', lineHeight: 1.6 }}>Os exames são geralmente rápidos e indolores. Nossos pacientes experimentam um processo confortável e uma experiência tranquila.</p>
              </div>
            </div>
            
          </div>
        </section>

        {/* EQUIPE DE RADIOLOGISTAS SECTION */}
        <section style={{ padding: '80px 0', background: '#f8fafc' }}>
          <div className="lp-container">
            <div style={{ textAlign: 'center', marginBottom: '80px', maxWidth: '800px', margin: '0 auto' }}>
              <span style={{ color: '#e11d48', fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px' }}>NOSSOS PROFISSIONAIS</span>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 400, color: '#1e293b', marginTop: '8px', marginBottom: '24px' }}>
                EQUIPE DE RADIOLOGISTAS
              </h2>
              <div style={{ width: '40px', height: '3px', background: '#e11d48', margin: '0 auto 24px' }}></div>
              <p style={{ color: '#64748b', fontSize: '1.1rem', lineHeight: 1.6, maxWidth: '650px', margin: '0 auto 60px' }}>
                Nossos profissionais são altamente capacitados, trazendo consigo conhecimento atualizado e a experiência adquirida ao longo dos anos, o que nos permite oferecer um serviço de qualidade e confiabilidade comprovada.
              </p>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '30px', maxWidth: '900px', margin: '0 auto' }}>
              
              {/* Doctor 1 */}
              <div style={{ background: '#ffffff', display: 'flex', overflow: 'hidden' }}>
                <div style={{ width: '45%', position: 'relative' }}>
                  <img src="/medicos/dr-armando.png" alt="Dr. Armando Cajubá de Britto Filho" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0 }} />
                  <div style={{ paddingBottom: '100%' }}></div>
                </div>
                <div style={{ width: '55%', padding: '30px 24px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <h4 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#1e293b', marginBottom: '8px', lineHeight: 1.2 }}>Dr. Armando<br/>Cajubá de Britto<br/>Filho</h4>
                  <span style={{ fontSize: '0.75rem', color: '#94a3b8', fontWeight: 500, marginTop: '8px' }}>CRM PI 1220 (RQE 2103)</span>
                </div>
              </div>

              {/* Doctor 2 */}
              <div style={{ background: '#ffffff', display: 'flex', overflow: 'hidden' }}>
                <div style={{ width: '45%', position: 'relative' }}>
                  <img src="/medicos/dr-brito.png" alt="Dr. Armando Cajubá de Britto Neto" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0 }} />
                  <div style={{ paddingBottom: '100%' }}></div>
                </div>
                <div style={{ width: '55%', padding: '30px 24px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <h4 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#1e293b', marginBottom: '8px', lineHeight: 1.2 }}>Dr. Armando<br/>Cajubá de Britto<br/>Neto</h4>
                  <span style={{ fontSize: '0.75rem', color: '#94a3b8', fontWeight: 500, marginTop: '8px' }}>CRM/PI 3929 (RQE 1647)</span>
                </div>
              </div>

              {/* Doctor 3 */}
              <div style={{ background: '#ffffff', display: 'flex', overflow: 'hidden' }}>
                <div style={{ width: '45%', position: 'relative' }}>
                  <img src="/medicos/dr-gomides.png" alt="Dr. Brenno Marco Pereira Gomide" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0 }} />
                  <div style={{ paddingBottom: '100%' }}></div>
                </div>
                <div style={{ width: '55%', padding: '30px 24px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <h4 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#1e293b', marginBottom: '8px', lineHeight: 1.2 }}>Dr. Brenno<br/>Marco Pereira<br/>Gomide</h4>
                  <span style={{ fontSize: '0.75rem', color: '#94a3b8', fontWeight: 500, marginTop: '8px' }}>CRM/PI 5507 (RQE 2101)</span>
                </div>
              </div>

              {/* Doctor 4 */}
              <div style={{ background: '#ffffff', display: 'flex', overflow: 'hidden' }}>
                <div style={{ width: '45%', position: 'relative' }}>
                  <img src="/medicos/dr-merval.png" alt="Dr. Merval Franklin Véras Britto" style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0 }} />
                  <div style={{ paddingBottom: '100%' }}></div>
                </div>
                <div style={{ width: '55%', padding: '30px 24px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <h4 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#1e293b', marginBottom: '8px', lineHeight: 1.2 }}>Dr. Merval<br/>Franklin Véras<br/>Britto</h4>
                  <span style={{ fontSize: '0.75rem', color: '#94a3b8', fontWeight: 500, marginTop: '8px' }}>CRM 6960 (RQE 4476)</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONVÊNIOS SECTION */}
        <section style={{ padding: '80px 0', background: '#ffffff', textAlign: 'center', borderTop: '1px solid #f1f5f9' }}>
          <div className="lp-container">
            <h2 style={{ fontSize: '2.4rem', fontWeight: 800, color: '#0f172a', marginBottom: '16px', letterSpacing: '-0.5px' }}>
              CONVÊNIOS <span style={{ color: '#ef4444' }}>ATENDIDOS</span>
            </h2>
            <p style={{ color: '#64748b', fontSize: '1.1rem', marginBottom: '40px', maxWidth: '600px', margin: '0 auto 40px auto' }}>
              Trabalhamos com os principais planos de saúde para garantir seu acesso ao melhor diagnóstico.
            </p>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px', maxWidth: '1000px', margin: '0 auto' }}>
              {['Unimed', 'Bradesco Saúde', 'SulAmérica', 'Humana Saúde', 'SUS', 'CASSI', 'Camed', 'Correios Saúde', 'CAPESESP', 'GEAP', 'Casembrapa', 'BR Petrobras', 'FUSMA', 'ASSEFAZ'].map((convenio, idx) => (
                <div key={idx} style={{ 
                  background: '#ffffff', 
                  padding: '14px 28px', 
                  borderRadius: '50px', 
                  border: '1px solid #e2e8f0', 
                  color: '#475569', 
                  fontWeight: 600, 
                  fontSize: '1rem', 
                  boxShadow: '0 4px 6px rgba(0,0,0,0.02)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  transition: 'all 0.3s ease', 
                  cursor: 'default' 
                }} 
                onMouseEnter={(e) => { 
                  e.currentTarget.style.transform = 'translateY(-3px)'; 
                  e.currentTarget.style.borderColor = '#22c55e'; 
                  e.currentTarget.style.color = '#22c55e'; 
                  e.currentTarget.style.boxShadow = '0 10px 20px rgba(34, 197, 94, 0.1)';
                }} 
                onMouseLeave={(e) => { 
                  e.currentTarget.style.transform = 'translateY(0)'; 
                  e.currentTarget.style.borderColor = '#e2e8f0'; 
                  e.currentTarget.style.color = '#475569'; 
                  e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.02)';
                }}>
                  {convenio}
                </div>
              ))}
            </div>
            
            <div style={{ textAlign: 'center', marginTop: '50px' }}>
              <button 
                onClick={() => handleWhatsAppClick(null)} 
                style={{ 
                  background: '#22c55e', 
                  boxShadow: '0 10px 25px rgba(34, 197, 94, 0.4)', 
                  padding: '20px 40px', 
                  fontSize: '1.15rem',
                  borderRadius: '16px',
                  border: 'none',
                  color: 'white',
                  fontWeight: 700,
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  whiteSpace: 'nowrap',
                  gap: '12px',
                  cursor: 'pointer',
                  transition: 'transform 0.2s',
                  width: '100%',
                  maxWidth: '360px'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                <svg width="26" height="26" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                </svg>
                Agendar via WhatsApp
              </button>
            </div>
          </div>
        </section>

        {/* MAIN FOOTER */}
        <footer style={{ background: '#333333', color: '#ffffff', padding: '0', position: 'relative' }}>
          
          {/* Contact Bar (Darker Strip) */}
          <div style={{ background: '#262626', padding: '20px 0' }}>
            <div className="lp-container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <MapPin size={24} color="#ffffff" />
                <div>
                  <strong style={{ display: 'block', fontSize: '0.85rem', color: '#ffffff' }}>Endereço</strong>
                  <span style={{ fontSize: '0.8rem', color: '#cccccc' }}>Av. Pres. Getúlio Vargas, 866 - Parnaíba/PI</span>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Phone size={24} color="#ffffff" />
                <div>
                  <strong style={{ display: 'block', fontSize: '0.85rem', color: '#ffffff' }}>Telefone</strong>
                  <span style={{ fontSize: '0.8rem', color: '#cccccc' }}>(86) 3321-2971</span>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <MessageCircle size={24} color="#ffffff" />
                <div>
                  <strong style={{ display: 'block', fontSize: '0.85rem', color: '#ffffff' }}>Whatsapp</strong>
                  <span style={{ fontSize: '0.8rem', color: '#cccccc' }}>(86) 99482-2971</span>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Mail size={24} color="#ffffff" />
                <div>
                  <strong style={{ display: 'block', fontSize: '0.85rem', color: '#ffffff' }}>E-mail</strong>
                  <span style={{ fontSize: '0.8rem', color: '#cccccc' }}>clinicaarmandocajuba@hotmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </footer>

      </main>

      <a 
        href={`https://wa.me/${clinicWhatsApp}?text=${encodeURIComponent("Olá, tenho interesse em agendar um exame.")}`}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => { e.preventDefault(); handleWhatsAppClick(null); }}
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          background: '#25d366',
          color: 'white',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 10px 25px rgba(37, 211, 102, 0.4)',
          zIndex: 999,
          cursor: 'pointer',
          transition: 'transform 0.3s',
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        <svg width="34" height="34" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
        </svg>
      </a>
    </>
  );
}
