import { useEffect } from 'react';
import { exams, clinicWhatsApp } from '../data/exams';
import { trackClick, trackView } from '../utils/tracking';

export default function CentralLandingPage() {
  useEffect(() => {
    // We can track the central LP view using a generic ID
    trackView('central_lp');
  }, []);

  const handleWhatsAppClick = (exam) => {
    trackClick(exam.id);
    const encodedMessage = encodeURIComponent(exam.message);
    const whatsappUrl = `https://wa.me/${clinicWhatsApp}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      <style>{`
        .central-container { max-width: 1100px; margin: 0 auto; padding: 0 24px; }
        .central-grid { 
          display: grid; 
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); 
          gap: 24px; 
          margin-top: 40px;
          padding-bottom: 80px;
        }
        .exam-card {
          background: #ffffff;
          border-radius: 16px;
          padding: 24px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.04);
          border: 1px solid #f1f5f9;
          display: flex;
          flex-direction: column;
          transition: transform 0.2s;
        }
        .exam-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.08);
        }
        .exam-btn {
          margin-top: auto;
          background: #25d366;
          box-shadow: 0 4px 15px rgba(37, 211, 102, 0.3);
          padding: 14px 20px;
          fontSize: 1rem;
          border-radius: 12px;
          border: none;
          color: white;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          cursor: pointer;
          transition: background 0.2s;
        }
        .exam-btn:hover {
          background: #20b858;
        }
      `}</style>

      <header style={{ width: '100%', padding: '24px 0', background: '#ffffff', borderBottom: '1px solid #f1f5f9' }}>
        <div className="central-container" style={{ display: 'flex', justifyContent: 'center' }}>
          <img src="/logo.png" alt="Clínica Armando Cajubá" style={{ height: '50px', objectFit: 'contain' }} />
        </div>
      </header>

      <main style={{ background: '#f8fafc', minHeight: '100vh', paddingTop: '60px' }}>
        <div className="central-container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 40px' }}>
            <h1 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#0f172a', marginBottom: '16px', letterSpacing: '-1px' }}>
              Central de Agendamento
            </h1>
            <p style={{ color: '#475569', fontSize: '1.1rem', lineHeight: 1.6 }}>
              Escolha o tipo de exame que deseja realizar. Nossa equipe está pronta para lhe atender de forma rápida e humanizada pelo WhatsApp.
            </p>
          </div>

          <div className="central-grid">
            {exams.map((exam) => (
              <div key={exam.id} className="exam-card">
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#1e293b', marginBottom: '12px' }}>
                  {exam.title}
                </h3>
                <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: 1.5, marginBottom: '24px' }}>
                  {exam.description}
                </p>
                <button 
                  className="exam-btn"
                  onClick={() => handleWhatsAppClick(exam)}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                  </svg>
                  Agendar via WhatsApp
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
