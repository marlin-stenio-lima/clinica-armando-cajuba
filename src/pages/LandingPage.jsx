import { useParams, Navigate } from 'react-router-dom';
import { exams, clinicWhatsApp } from '../data/exams';
import { trackClick, trackView } from '../utils/tracking';
import { 
  MessageCircle, Clock, MapPin, ShieldCheck, Activity, 
  CheckCircle2, AlertCircle, Info, HeartHandshake, Phone, Mail,
  Target, User, Timer
} from 'lucide-react';
import { useEffect, useState } from 'react';

export default function LandingPage() {
  const { examId } = useParams();
  const exam = exams.find(e => e.id === examId);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (exam) {
      trackView(exam.id);
    }
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [exam]);

  if (!exam) return <Navigate to="/dashboard" replace />;

  const handleWhatsAppClick = () => {
    trackClick(exam.id);
    const encodedMessage = encodeURIComponent(exam.message);
    const whatsappUrl = `https://wa.me/${clinicWhatsApp}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
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

        @media (max-width: 768px) {
          .lp-hero-grid { grid-template-columns: 1fr; gap: 2rem; padding-top: 100px; }
          .lp-content-grid { grid-template-columns: 1fr; }
          h1 { font-size: 2.5rem !important; }
          .mobile-cta {
            display: flex; position: fixed; bottom: 0; left: 0; width: 100%;
            background: white; padding: 16px 24px; z-index: 100;
            box-shadow: 0 -4px 20px rgba(0,0,0,0.08); justify-content: center;
          }
          .lp-main { padding-bottom: 100px !important; }
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
          paddingBottom: '120px', 
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
              
              <h1 style={{ fontSize: '4.5rem', fontWeight: 800, lineHeight: 1.1, color: '#0f172a', marginBottom: '24px', letterSpacing: '-2px' }}>
                Agende seu exame de <br/><span style={{ color: '#ef4444' }}>{exam.title}</span>
              </h1>
              
              <p style={{ fontSize: '1.3rem', color: '#475569', marginBottom: '48px', lineHeight: 1.6, maxWidth: '750px' }}>
                Cuidar da sua saúde é a nossa prioridade. Realize seu exame de {exam.title.toLowerCase()} com tecnologia de ponta e radiologistas altamente qualificados.
              </p>
              
              <button 
                onClick={handleWhatsAppClick} 
                style={{ 
                  background: '#22c55e', 
                  boxShadow: '0 10px 25px rgba(34, 197, 94, 0.4)', 
                  padding: '22px 64px', 
                  fontSize: '1.25rem',
                  borderRadius: '16px',
                  border: 'none',
                  color: 'white',
                  fontWeight: 700,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  cursor: 'pointer',
                  transition: 'transform 0.2s',
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                <MessageCircle size={26} />
                Agendar via WhatsApp
              </button>
              
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '24px', marginTop: '48px', flexWrap: 'wrap' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 600, color: '#334155', fontSize: '1.05rem' }}>
                  <CheckCircle2 size={20} color="#ef4444" /> Laudos Rápidos
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 600, color: '#334155', fontSize: '1.05rem' }}>
                  <CheckCircle2 size={20} color="#ef4444" /> Corpo Clínico Especializado
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 600, color: '#334155', fontSize: '1.05rem' }}>
                  <CheckCircle2 size={20} color="#ef4444" /> Instalações Modernas
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* DETALHES DO EXAME SECTION */}
        <section style={{ background: '#f8fafc', padding: '80px 0' }}>
          <div className="lp-container">
            <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center', marginBottom: '40px' }}>
              <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#0f172a', marginBottom: '16px', letterSpacing: '-0.5px' }}>Tudo o que você precisa saber sobre o exame</h2>
              <p style={{ color: '#475569', fontSize: '1.1rem', lineHeight: 1.6 }}>
                {exam.details.about}
              </p>
            </div>

            <div className="lp-content-grid">
              {/* Indicações */}
              <div className="lp-card">
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
                  <div style={{ background: `${exam.color}15`, padding: '8px', borderRadius: '8px' }}>
                    <CheckCircle2 size={24} color={exam.color} />
                  </div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#0f172a' }}>Principais Indicações</h3>
                </div>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {exam.details.indications.map((ind, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', color: '#475569', lineHeight: 1.5 }}>
                      <div style={{ marginTop: '4px', minWidth: '6px', height: '6px', borderRadius: '50%', background: exam.color }}></div>
                      {ind}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Preparo */}
              <div className="lp-card">
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
                  <div style={{ background: '#f59e0b15', padding: '8px', borderRadius: '8px' }}>
                    <AlertCircle size={24} color="#f59e0b" />
                  </div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#0f172a' }}>Preparo Necessário</h3>
                </div>
                <div style={{ background: '#fffbeb', border: '1px solid #fde68a', padding: '24px', borderRadius: '12px' }}>
                  <p style={{ color: '#92400e', lineHeight: 1.6, fontSize: '0.95rem' }}>
                    {exam.details.preparation}
                  </p>
                </div>

              </div>
            </div>
            
            <div style={{ textAlign: 'center', marginTop: '60px' }}>
              <button 
                onClick={handleWhatsAppClick} 
                style={{ 
                  background: '#22c55e', 
                  boxShadow: '0 10px 25px rgba(34, 197, 94, 0.4)', 
                  padding: '16px 40px', 
                  fontSize: '1.1rem',
                  borderRadius: '16px',
                  border: 'none',
                  color: 'white',
                  fontWeight: 700,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '12px',
                  cursor: 'pointer',
                  transition: 'transform 0.2s',
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                <MessageCircle size={24} />
                Agendar meu exame agora
              </button>
            </div>
          </div>
        </section>

        {/* POR QUE ESCOLHER SECTION */}
        <section style={{ padding: '80px 0', background: '#ffffff' }}>
          <div className="lp-container">
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <span style={{ color: exam.color, fontWeight: 700, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1.5px' }}>Por que somos a melhor escolha?</span>
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
            
            <div style={{ textAlign: 'center', marginTop: '60px' }}>
              <button 
                onClick={handleWhatsAppClick} 
                style={{ 
                  background: '#25d366', 
                  boxShadow: '0 10px 25px rgba(37, 211, 102, 0.3)', 
                  padding: '16px 40px', 
                  fontSize: '1.1rem',
                  borderRadius: '16px',
                  border: 'none',
                  color: 'white',
                  fontWeight: 700,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '12px',
                  cursor: 'pointer',
                  transition: 'transform 0.2s',
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                <MessageCircle size={24} />
                Tirar Dúvidas no WhatsApp
              </button>
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

      {/* FLOATING WHATSAPP BUTTON (GLOBAL) */}
      <a 
        href={`https://wa.me/${clinicWhatsApp}?text=${encodeURIComponent(exam.message)}`}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => { e.preventDefault(); handleWhatsAppClick(); }}
        style={{
          position: 'fixed',
          bottom: '30px',
          right: '30px',
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
        <MessageCircle size={32} />
      </a>

      {/* MOBILE STICKY CTA */}
      <div className="mobile-cta">
        <button 
          onClick={handleWhatsAppClick} 
          style={{ 
            background: `linear-gradient(135deg, ${exam.color}, ${exam.color}dd)`, 
            color: 'white', border: 'none', padding: '16px', width: '100%', 
            borderRadius: '12px', fontWeight: 700, fontSize: '1.1rem', 
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
            boxShadow: `0 8px 20px ${exam.color}40`
          }}
        >
          <MessageCircle size={22} />
          Agendar pelo WhatsApp
        </button>
      </div>
    </>
  );
}
