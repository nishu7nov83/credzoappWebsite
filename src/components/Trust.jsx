import useScrollAnimation from '../hooks/useScrollAnimation';
import { ShieldCheck, BrainCircuit, Zap, Globe } from 'lucide-react';

const items = [
  { Icon: ShieldCheck, title: 'Your data stays yours', desc: 'Secured with JWT authentication, BCrypt encryption, and stateless sessions. Your financial data never leaves our servers.', accent: '#80CBC4' },
  { Icon: BrainCircuit, title: 'AI-Powered Intelligence', desc: 'Claude AI analyses your spending to suggest savings strategies, rebalance budgets, and plan goals month by month.', accent: '#CE93D8' },
  { Icon: Zap, title: 'Fast & lightweight', desc: 'Built with React Native and Spring Boot for a snappy, responsive experience even on older devices.', accent: '#FFD54F' },
  { Icon: Globe, title: '4 languages, 4 currencies', desc: 'English, Hindi, Spanish, German. INR, USD, EUR, JPY. Credzo fits your world.', accent: '#90CAF9' },
];

export default function Trust() {
  const ref = useScrollAnimation('.trust-item');

  return (
    <section className="trust section" ref={ref}>
      <div className="container">
        <div className="trust-grid">
          {items.map((item) => (
            <div key={item.title} className="trust-item animate-in">
              <div className="trust-icon" style={{ color: item.accent }}>
                <item.Icon size={26} strokeWidth={1.8} />
              </div>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
