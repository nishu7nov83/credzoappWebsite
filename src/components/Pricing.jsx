import useScrollAnimation from '../hooks/useScrollAnimation';
import { Leaf, Zap, Crown } from 'lucide-react';

const plans = [
  {
    name: 'Starter', Icon: Leaf, tagline: 'Get started for free',
    price: 'Free', period: 'forever',
    accent: '#34C759', accentBg: 'rgba(52,199,89,0.1)',
    features: [
      'Expense tracking & categories',
      'Credit card management',
      'SMS auto-import',
      'Fixed expenses & recurring',
      'Monthly budget limits',
      'Basic reports & notifications',
    ],
    cta: 'Get Started Free', btnClass: 'btn btn-outline',
  },
  {
    name: 'Pro', Icon: Zap, tagline: 'For serious budgeters',
    price: '₹250', period: '/quarter', isPro: true, badge: 'Popular',
    accent: '#fff', accentBg: 'rgba(255,255,255,0.2)',
    features: [
      'Everything in Starter',
      'Advanced analytics & trends',
      'Planned vs. Actual charts',
      'Per-card category limits',
      'Spending limit alerts',
      'Sync reminders',
    ],
    cta: 'Upgrade to Pro', btnClass: 'btn btn-white',
  },
  {
    name: 'Elite', Icon: Crown, tagline: 'The complete package',
    price: '₹500', period: '/quarter', isElite: true,
    accent: '#F9A825', accentBg: 'rgba(249,168,37,0.12)',
    features: [
      'Everything in Pro',
      'AI Rebalance & Goal Planner',
      'Spending forecasts',
      'Custom categories',
      '3 AI suggestions per period',
      'Priority support · 7-day trial',
    ],
    cta: 'Get Elite', btnClass: 'btn btn-gold',
  },
];

export default function Pricing() {
  const ref = useScrollAnimation('.price-card');

  return (
    <section className="pricing section" id="pricing" ref={ref}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Pricing</span>
          <h2 className="section-title">Choose the plan that fits your goals</h2>
          <p className="section-subtitle">Start free. Upgrade when you're ready to unlock deeper insights.</p>
        </div>

        <div className="price-grid">
          {plans.map((plan) => {
            const cls = [
              'price-card',
              'animate-in',
              plan.isPro && 'price-card--pro',
              plan.isElite && 'price-card--elite',
            ].filter(Boolean).join(' ');

            return (
              <div key={plan.name} className={cls}>
                {plan.badge && <span className="price-badge">{plan.badge}</span>}
                <div className="price-top">
                  <div className="price-icon" style={{ background: plan.accentBg, color: plan.accent }}>
                    <plan.Icon size={20} strokeWidth={2.2} />
                  </div>
                  <div>
                    <h3 className="price-name">{plan.name}</h3>
                    <p className="price-tagline">{plan.tagline}</p>
                  </div>
                </div>
                <div className="price-amount-row">
                  <span className="price-val">{plan.price}</span>
                  <span className="price-per">{plan.period}</span>
                </div>
                <ul className="price-features">
                  {plan.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <a href="#contact" className={`${plan.btnClass} price-cta`}>{plan.cta}</a>
              </div>
            );
          })}
        </div>
        <p className="pricing-note">Pricing in INR &middot; Quarterly billing &middot; Cancel anytime</p>
      </div>
    </section>
  );
}
