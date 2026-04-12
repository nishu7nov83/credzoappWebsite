import useScrollAnimation from '../hooks/useScrollAnimation';
import {
  UtensilsCrossed,
  ShoppingCart,
  Car,
  ShoppingBag,
  Film,
  Zap,
  Stethoscope,
  GraduationCap,
  Plane,
  Heart,
  Package,
  Sparkles,
} from 'lucide-react';

const categories = [
  { Icon: UtensilsCrossed, label: 'Food & Dining',     color: '#E91E8C' },
  { Icon: ShoppingCart,    label: 'Grocery',           color: '#00B894' },
  { Icon: Car,             label: 'Transportation',    color: '#5C6BC0' },
  { Icon: ShoppingBag,     label: 'Shopping',          color: '#AB47BC' },
  { Icon: Film,            label: 'Entertainment',     color: '#FF7043' },
  { Icon: Zap,             label: 'Bills & Utilities', color: '#FFA726' },
  { Icon: Stethoscope,     label: 'Healthcare',        color: '#26A69A' },
  { Icon: GraduationCap,   label: 'Education',         color: '#66BB6A' },
  { Icon: Plane,           label: 'Travel',            color: '#EC407A' },
  { Icon: Heart,           label: 'Personal Care',     color: '#EF5350' },
  { Icon: Package,         label: 'Others',            color: '#78909C' },
];

export default function Categories() {
  const ref = useScrollAnimation('.category-pill');

  return (
    <section className="categories section" ref={ref}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Categories</span>
          <h2 className="section-title">Track every type of spend</h2>
        </div>
        <div className="categories-grid">
          {categories.map((cat) => (
            <div key={cat.label} className="category-pill animate-in">
              <cat.Icon size={16} strokeWidth={2} style={{ color: cat.color }} />
              <span>{cat.label}</span>
            </div>
          ))}
          <div className="category-pill category-pill--custom animate-in">
            <Sparkles size={16} strokeWidth={2} />
            <span>+ Custom (ELITE)</span>
          </div>
        </div>
      </div>
    </section>
  );
}
