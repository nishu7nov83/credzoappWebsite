import useScrollAnimation from '../hooks/useScrollAnimation';
import {
  BarChart3,
  CreditCard,
  Target,
  MessageSquare,
  TrendingUp,
  CalendarClock,
  PiggyBank,
  UserCircle,
  BrainCircuit,
  Bell,
  FileSpreadsheet,
  Globe,
} from 'lucide-react';

const features = [
  { Icon: BarChart3,      title: 'Smart Expense Tracking',    desc: 'Log and categorise expenses instantly with real-time summaries per card or month.', color: '#007AFF', bg: 'rgba(0,122,255,0.08)' },
  { Icon: CreditCard,     title: 'Credit Card Management',    desc: 'Track spending per billing cycle across VISA, Mastercard, AMEX, and RuPay cards.', color: '#5856D6', bg: 'rgba(88,86,214,0.08)' },
  { Icon: Target,         title: 'Monthly Budget Limits',     desc: 'Set category-wise limits globally or per card — auto-replicated across 12 months.', color: '#FF9500', bg: 'rgba(255,149,0,0.08)' },
  { Icon: MessageSquare,  title: 'SMS Auto-Import',           desc: 'Automatically detect and import bank transactions from SMS — Android only.', color: '#E91E8C', bg: 'rgba(233,30,140,0.08)' },
  { Icon: TrendingUp,     title: 'Reports & Analytics',       desc: '12-month trends, category breakdowns, and planned vs. actual budget charts.', color: '#007AFF', bg: 'rgba(0,122,255,0.08)' },
  { Icon: CalendarClock,  title: 'Fixed & Recurring',         desc: 'Track monthly, quarterly, and yearly commitments linked to your cards.', color: '#34C759', bg: 'rgba(52,199,89,0.08)' },
  { Icon: PiggyBank,      title: 'Investments & Insurance',   desc: 'Manage your portfolio, premiums, and cover amounts alongside expenses.', color: '#5856D6', bg: 'rgba(88,86,214,0.08)' },
  { Icon: UserCircle,     title: 'Financial Profile',         desc: 'Input your salary to unlock personalised AI budget recommendations.', color: '#007AFF', bg: 'rgba(0,122,255,0.08)' },
  { Icon: BrainCircuit,   title: 'AI-Powered Planner',        desc: 'AI Rebalance and Goal Planner to optimise savings month by month.', color: '#E91E8C', bg: 'rgba(233,30,140,0.08)' },
  { Icon: Bell,           title: 'Smart Notifications',       desc: 'Customise alert frequency — 12-hourly, daily, weekly, or monthly.', color: '#FF9500', bg: 'rgba(255,149,0,0.08)' },
  { Icon: FileSpreadsheet,title: 'CSV Import',                desc: 'Bulk-import expenses from CSV files for quick migration.', color: '#34C759', bg: 'rgba(52,199,89,0.08)' },
  { Icon: Globe,          title: 'Multi-Currency & Language',  desc: '4 currencies (INR, USD, EUR, JPY) and 4 languages supported.', color: '#5856D6', bg: 'rgba(88,86,214,0.08)' },
];

export default function Features() {
  const ref = useScrollAnimation('.feat-item');

  return (
    <section className="features section" id="features" ref={ref}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Features</span>
          <h2 className="section-title">Everything you need to manage money smarter</h2>
          <p className="section-subtitle">
            From automatic SMS import to detailed analytics, Credzo packs powerful
            financial tools into a clean, intuitive interface.
          </p>
        </div>

        <div className="feat-grid">
          {features.map((f) => (
            <div key={f.title} className="feat-item animate-in">
              <div className="feat-icon" style={{ background: f.bg, color: f.color }}>
                <f.Icon size={20} strokeWidth={2} />
              </div>
              <div className="feat-text">
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
