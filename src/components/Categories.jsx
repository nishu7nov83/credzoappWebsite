import useScrollAnimation from '../hooks/useScrollAnimation';

const categories = [
  '🍽️ Food & Dining', '🛒 Grocery', '🚗 Transportation', '🛍️ Shopping',
  '🎬 Entertainment', '💡 Bills & Utilities', '🏥 Healthcare', '📚 Education',
  '✈️ Travel', '💄 Personal Care', '📦 Others',
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
            <div key={cat} className="category-pill animate-in">{cat}</div>
          ))}
          <div className="category-pill category-pill--custom animate-in">✨ + Custom (ELITE)</div>
        </div>
      </div>
    </section>
  );
}
