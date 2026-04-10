import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import { UserPlus, MessageSquareText, CreditCard, Rocket } from 'lucide-react';

const steps = [
  {
    num: '01',
    Icon: UserPlus,
    title: 'Sign Up & Verify',
    desc: 'Create your account with email, pick your currency and language, then verify your email to get started.',
    accent: 'var(--blue)',
    accentBg: 'var(--blue-light)',
  },
  {
    num: '02',
    Icon: MessageSquareText,
    title: 'Auto-Detect Cards via SMS',
    desc: 'Grant SMS access and Credzo scans your last 3 months of messages to detect credit cards and import transactions automatically.',
    accent: 'var(--magenta)',
    accentBg: 'var(--magenta-light)',
  },
  {
    num: '03',
    Icon: CreditCard,
    title: 'Add Cards & Set Budgets',
    desc: 'Review detected cards or add manually, then set monthly category-wise spending limits for each card.',
    accent: 'var(--indigo)',
    accentBg: 'var(--indigo-light)',
  },
  {
    num: '04',
    Icon: Rocket,
    title: 'Track & Grow',
    desc: 'Log expenses, categorise SMS imports, view reports, and unlock AI insights to optimise your spending over time.',
    accent: 'var(--green)',
    accentBg: '#E8F5E9',
  },
];

export default function HowItWorks() {
  const ref = useScrollAnimation('.steps-card');

  return (
    <section className="how-it-works section" id="about" ref={ref}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">How It Works</span>
          <h2 className="section-title">Up and running in under 2 minutes</h2>
          <p className="section-subtitle">Simple, intuitive, and powerful from day one.</p>
        </div>

        {/* Horizontal track: dots + line */}
        <div className="steps-track">
          {steps.map((step, i) => (
            <React.Fragment key={step.num}>
              {i > 0 && <div className="steps-line"></div>}
              <div className="steps-dot" style={{ background: step.accent, boxShadow: `0 0 0 5px ${step.accentBg}` }}></div>
            </React.Fragment>
          ))}
        </div>

        {/* Cards row */}
        <div className="steps-grid">
          {steps.map((step) => (
            <div key={step.num} className="steps-card animate-in">
              <div className="steps-icon" style={{ background: step.accentBg, color: step.accent }}>
                <step.Icon size={24} strokeWidth={2} />
              </div>
              <span className="steps-num" style={{ color: step.accent }}>{step.num}</span>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
