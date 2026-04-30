import { useEffect, useState } from 'react';
import { getTrackingData } from '../utils/tracking';
import { exams } from '../data/exams';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell,
  PieChart, Pie, Legend
} from 'recharts';
import { 
  LayoutDashboard, Activity, BarChart3, 
  Search, Bell, Download, MousePointerClick, TrendingUp, CheckCircle, ExternalLink, Link as LinkIcon, Eye, Percent, List
} from 'lucide-react';
import { Link } from 'react-router-dom';

import { Lock, User } from 'lucide-react';

export default function Dashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false);

  const [data, setData] = useState([]);
  const [totalClicks, setTotalClicks] = useState(0);
  const [totalViews, setTotalViews] = useState(0);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [period, setPeriod] = useState('Hoje');
  const [channel, setChannel] = useState('Todas as LPs');

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'clinica' && password === 'Clinica@2026') {
      setIsAuthenticated(true);
      setLoginError(false);
    } else {
      setLoginError(true);
    }
  };

  useEffect(() => {
    if (!isAuthenticated) return;
    
    async function fetchData() {
      const aggregatedData = await getTrackingData(period);
      
      let tClicks = 0;
      let tViews = 0;
      
      const formattedData = exams.map(exam => {
        const stats = aggregatedData[exam.id] || { clicks: 0, views: 0 };
        const clicks = stats.clicks || 0;
        const views = stats.views || 0;
        
        return {
          name: exam.title,
          clicks: clicks,
          views: views,
          conversion: views > 0 ? ((clicks / views) * 100).toFixed(1) : 0,
          color: exam.color,
          id: exam.id
        };
      })
      .filter(exam => {
        if (channel === 'Todas as LPs') return true;
        return exam.name === channel;
      })
      .sort((a, b) => b.clicks - a.clicks);

      formattedData.forEach(exam => {
        tClicks += exam.clicks;
        tViews += exam.views;
      });

      setData(formattedData);
      setTotalClicks(tClicks);
      setTotalViews(tViews);
    }
    
    fetchData();
  }, [period, channel, isAuthenticated]);

  const globalConversion = totalViews > 0 ? ((totalClicks / totalViews) * 100).toFixed(1) : 0;

  if (!isAuthenticated) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f8fafc', padding: '20px' }}>
        <div style={{ width: '100%', maxWidth: '400px', backgroundColor: '#ffffff', borderRadius: '16px', boxShadow: '0 10px 25px rgba(0,0,0,0.05)', padding: '40px', textAlign: 'center' }}>
          <img src="/logo.png" alt="Clínica Armando Cajubá" style={{ height: '60px', objectFit: 'contain', marginBottom: '24px' }} />
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#1e293b', marginBottom: '8px' }}>Acesso Restrito</h2>
          <p style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: '32px' }}>Painel Administrativo e Marketing</p>
          
          <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ position: 'relative' }}>
              <User size={18} color="#94a3b8" style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)' }} />
              <input 
                type="text" 
                placeholder="Usuário" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                style={{ width: '100%', padding: '12px 16px 12px 42px', borderRadius: '8px', border: '1px solid #e2e8f0', outline: 'none', fontSize: '0.95rem', boxSizing: 'border-box' }}
                required
              />
            </div>
            
            <div style={{ position: 'relative' }}>
              <Lock size={18} color="#94a3b8" style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)' }} />
              <input 
                type="password" 
                placeholder="Senha" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ width: '100%', padding: '12px 16px 12px 42px', borderRadius: '8px', border: '1px solid #e2e8f0', outline: 'none', fontSize: '0.95rem', boxSizing: 'border-box' }}
                required
              />
            </div>

            {loginError && (
              <div style={{ color: '#ef4444', fontSize: '0.85rem', textAlign: 'left', fontWeight: 500, marginTop: '-4px' }}>
                Usuário ou senha incorretos.
              </div>
            )}

            <button 
              type="submit" 
              style={{ width: '100%', padding: '14px', backgroundColor: '#22c55e', color: 'white', border: 'none', borderRadius: '8px', fontWeight: 600, fontSize: '1rem', cursor: 'pointer', marginTop: '8px', transition: 'background-color 0.2s' }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#16a34a'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#22c55e'}
            >
              Entrar no Painel
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-layout">
      
      {/* Sidebar */}
      <aside className="admin-sidebar">
        <div className="admin-sidebar-header" style={{ padding: '24px 16px 16px', display: 'flex', justifyContent: 'center', borderBottom: '1px solid #f1f5f9', marginBottom: '8px' }}>
          <img src="/logo.png" alt="Clínica Armando Cajubá" style={{ height: '50px', objectFit: 'contain' }} />
        </div>
        
        <div style={{ padding: '12px 16px', fontSize: '0.75rem', fontWeight: 600, color: '#94a3b8', marginTop: '10px' }}>
          MENU PRINCIPAL
        </div>
        
        <nav className="admin-sidebar-nav">
          <a href="#" className={`admin-nav-item ${activeTab === 'dashboard' ? 'active' : ''}`} onClick={(e) => {e.preventDefault(); setActiveTab('dashboard')}}>
            <LayoutDashboard size={18} /> Dashboard
          </a>
          <a href="#" className={`admin-nav-item ${activeTab === 'lps' ? 'active' : ''}`} onClick={(e) => {e.preventDefault(); setActiveTab('lps')}}>
            <LinkIcon size={18} /> Landing Pages
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="admin-main">
        
        {/* Header */}
        <header className="admin-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#64748b', fontSize: '0.9rem' }}>
            <span>Home</span>
            <span style={{ fontSize: '0.8rem' }}>›</span>
            <span style={{ color: '#1e293b', fontWeight: 500 }}>{activeTab === 'dashboard' ? 'Dashboard' : 'Landing Pages'}</span>
          </div>
          
          <div className="admin-header-controls" style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            <div className="admin-header-search" style={{ position: 'relative' }}>
              <Search size={16} color="#94a3b8" style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)' }} />
              <input 
                type="text" 
                placeholder="Buscar exames..." 
                style={{ 
                  padding: '8px 12px 8px 36px', 
                  borderRadius: '20px', 
                  border: '1px solid #e2e8f0', 
                  backgroundColor: '#f8fafc',
                  outline: 'none',
                  fontSize: '0.85rem',
                  width: '100%'
                }} 
              />
            </div>
            
            <div style={{ position: 'relative', cursor: 'pointer' }}>
              <Bell size={20} color="#64748b" />
              <div style={{ position: 'absolute', top: '-2px', right: '-2px', width: '8px', height: '8px', backgroundColor: '#ef4444', borderRadius: '50%' }}></div>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', borderLeft: '1px solid #e2e8f0', paddingLeft: '24px' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#2563eb', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600, fontSize: '0.9rem' }}>
                Dr
              </div>
              <span style={{ fontSize: '0.9rem', fontWeight: 500 }}>Dr. Armando</span>
            </div>
          </div>
        </header>

        {/* Dashboard Body */}
        <main className="admin-content">
          
          {/* Page Title & Filters */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '32px' }}>
            <div>
              <h1 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#1e293b', marginBottom: '4px' }}>
                {activeTab === 'dashboard' ? 'Marketing Insights' : 'Gerenciamento de LPs'}
              </h1>
              <p style={{ color: '#64748b', fontSize: '0.85rem' }}>
                {activeTab === 'dashboard' ? 'Resultados reais de tráfego' : 'Gerencie as landing pages'}
              </p>
            </div>
            
            {activeTab === 'dashboard' && (
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', color: '#64748b', marginBottom: '4px' }}>Período</label>
                  <select className="admin-select" value={period} onChange={e => setPeriod(e.target.value)}>
                    <option>Hoje</option>
                    <option>Ontem</option>
                    <option>Últimos 7 dias</option>
                    <option>Este Mês</option>
                    <option>Mês Passado</option>
                    <option>Este Ano</option>
                    <option>Personalizado</option>
                  </select>
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', color: '#64748b', marginBottom: '4px' }}>Canal (Landing Page)</label>
                  <select className="admin-select" value={channel} onChange={e => setChannel(e.target.value)}>
                    <option>Todas as LPs</option>
                    {exams.map(e => <option key={e.id} value={e.title}>{e.title}</option>)}
                  </select>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-end' }}>
                  <button className="btn-outline" onClick={() => window.print()}>
                    <Download size={14} /> Exportar
                  </button>
                </div>
              </div>
            )}
          </div>

          {activeTab === 'dashboard' ? (
            <>
              {/* KPIs */}
              <div className="kpi-grid" style={{ marginBottom: '24px' }}>
                
                {/* Visualizações KPI */}
                <div className="admin-card kpi-card">
                  <span style={{ color: '#64748b', fontSize: '0.85rem', fontWeight: 500 }}>Pessoas no Site (Visitas)</span>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginTop: '8px' }}>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: 700, margin: 0, color: '#1e293b' }}>{totalViews}</h2>
                  </div>
                  <span style={{ color: '#94a3b8', fontSize: '0.75rem', marginTop: '8px' }}>Visitas únicas neste mês</span>
                  <div className="kpi-icon-wrapper">
                    <Eye size={24} color="#8b5cf6" />
                  </div>
                </div>

                {/* Clicks KPI */}
                <div className="admin-card kpi-card">
                  <span style={{ color: '#64748b', fontSize: '0.85rem', fontWeight: 500 }}>Cliques no WhatsApp</span>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginTop: '8px' }}>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: 700, margin: 0, color: '#3b82f6' }}>{totalClicks}</h2>
                  </div>
                  <span style={{ color: '#94a3b8', fontSize: '0.75rem', marginTop: '8px' }}>Leads interessados</span>
                  <div className="kpi-icon-wrapper">
                    <MousePointerClick size={24} color="#3b82f6" />
                  </div>
                </div>

                {/* Conversion KPI */}
                <div className="admin-card kpi-card">
                  <span style={{ color: '#64748b', fontSize: '0.85rem', fontWeight: 500 }}>Taxa de Conversão</span>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginTop: '8px' }}>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: 700, margin: 0, color: '#10b981' }}>{globalConversion}%</h2>
                  </div>
                  <span style={{ color: '#94a3b8', fontSize: '0.75rem', marginTop: '8px' }}>Visitas que clicaram</span>
                  <div className="kpi-icon-wrapper">
                    <Percent size={24} color="#10b981" />
                  </div>
                </div>

                <div className="admin-card kpi-card">
                  <span style={{ color: '#64748b', fontSize: '0.85rem', fontWeight: 500 }}>Exame Mais Buscado</span>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginTop: '8px' }}>
                    <h2 style={{ fontSize: '1.25rem', fontWeight: 700, margin: 0, color: '#ef4444', height: '48px', display: 'flex', alignItems: 'center' }}>
                      {data.length > 0 && data[0].clicks > 0 ? data[0].name : 'N/A'}
                    </h2>
                  </div>
                  <span style={{ color: '#94a3b8', fontSize: '0.75rem', marginTop: '8px' }}>Líder de acessos</span>
                  <div className="kpi-icon-wrapper">
                    <TrendingUp size={24} color="#ef4444" />
                  </div>
                </div>

              </div>

              {/* Charts Row */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '24px' }}>

                {/* Detailed Performance Table */}
                <div className="admin-card" style={{ overflow: 'hidden' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                    <List size={18} color="#64748b" />
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#1e293b' }}>Detalhamento por Exame</h3>
                  </div>
                  <p style={{ color: '#64748b', fontSize: '0.85rem', marginBottom: '24px' }}>
                    Tabela completa com métricas isoladas de performance.
                  </p>
                  
                  <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
                      <thead>
                        <tr style={{ borderBottom: '1px solid #e2e8f0', color: '#64748b', textAlign: 'left' }}>
                          <th style={{ padding: '12px 8px', fontWeight: 500 }}>Exame (LP)</th>
                          <th style={{ padding: '12px 8px', fontWeight: 500, textAlign: 'right' }}>Visitas</th>
                          <th style={{ padding: '12px 8px', fontWeight: 500, textAlign: 'right' }}>Cliques (Whats)</th>
                          <th style={{ padding: '12px 8px', fontWeight: 500, textAlign: 'right' }}>Taxa de Conversão</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.map((item, idx) => {
                          const convRate = item.views > 0 ? Math.round((item.clicks / item.views) * 100) : 0;
                          return (
                            <tr key={idx} style={{ borderBottom: '1px solid #f1f5f9' }}>
                              <td style={{ padding: '14px 8px', color: '#1e293b', fontWeight: 500, whiteSpace: 'nowrap' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: item.color || '#3b82f6' }}></div>
                                  {item.name}
                                </div>
                              </td>
                              <td style={{ padding: '14px 8px', textAlign: 'right', color: '#475569' }}>{item.views}</td>
                              <td style={{ padding: '14px 8px', textAlign: 'right', color: '#3b82f6', fontWeight: 600 }}>{item.clicks}</td>
                              <td style={{ padding: '14px 8px', textAlign: 'right', color: '#10b981', fontWeight: 600 }}>
                                {convRate}%
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>

              </div>
            </>
          ) : (
            /* LPs View as Square Cards */
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '24px' }}>
              {exams.map(exam => (
                <Link 
                  key={exam.id}
                  to={`/lp/${exam.id}`}
                  target="_blank"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '32px 24px',
                    background: '#ffffff',
                    border: '1px solid #e2e8f0',
                    borderRadius: '16px',
                    textDecoration: 'none',
                    color: '#1e293b',
                    transition: 'all 0.2s',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.02)',
                    aspectRatio: '1 / 1'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = exam.color;
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0,0,0,0.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#e2e8f0';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.02)';
                  }}
                >
                  <div style={{ 
                    width: '64px', height: '64px', borderRadius: '16px', 
                    background: `${exam.color}15`, display: 'flex', 
                    alignItems: 'center', justifyContent: 'center', marginBottom: '20px' 
                  }}>
                    <ExternalLink size={28} color={exam.color} />
                  </div>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 600, textAlign: 'center', marginBottom: '8px', lineHeight: 1.2 }}>
                    {exam.title}
                  </h4>
                  <span style={{ fontSize: '0.85rem', color: '#64748b', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    Visualizar Página <ExternalLink size={12} />
                  </span>
                </Link>
              ))}
            </div>
          )}

        </main>
      </div>
    </div>
  );
}
