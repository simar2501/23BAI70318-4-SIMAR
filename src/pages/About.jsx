import { useAppContext } from '../context/AppContext';

export default function About() {
  const { theme } = useAppContext();

  return (
    <div className="container page-enter">
      <div className="hero-card">
        <h1>About Me</h1>
        <p>
          I'm Simar Saini, a final-year B.E. CSE (AI/ML) student at Chandigarh University (Batch 2023–2027).
          I'm passionate about building intelligent systems and clean web interfaces.
        </p>
        <p style={{ marginTop: '1rem' }}>
          Currently exploring full-stack development with React, Node.js, and PostgreSQL — while deepening my expertise
          in machine learning, computer vision, and AI-driven products.
        </p>
        <p style={{ marginTop: '1rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
          Theme: {theme === 'light' ? '☀️ Light' : '🌙 Dark'}
        </p>
      </div>

      <h2 className="section-title">Highlights</h2>
      {['Azure AI-900 Certified', 'React & Node.js Fullstack', 'ML & Computer Vision', 'Open Source Contributor'].map((item) => (
        <div className="project-card" key={item} style={{ padding: '1rem 1.5rem' }}>
          <h3 style={{ fontSize: '0.97rem' }}>✦ {item}</h3>
        </div>
      ))}
    </div>
  );
}
