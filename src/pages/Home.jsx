import { useReducer } from 'react';
import { Link } from 'react-router-dom';
import { appReducer, initialState } from '../reducer/appReducer';

const PROJECTS = [
  { id: 1, title: 'AI Attendance System', desc: 'Smart attendance using face recognition and ML models.' },
  { id: 2, title: 'Portfolio Website', desc: 'Modern portfolio built with React and Material UI.' },
  { id: 3, title: 'Chat Application', desc: 'Real-time messaging app with WebSocket and Node.js backend.' },
  { id: 4, title: 'E-Commerce Platform', desc: 'Full-stack shopping platform with cart and payment integration.' },
];

export default function Home() {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const isFav = (id) => state.favorites.some((f) => f.id === id);

  const toggle = (project) => {
    if (isFav(project.id)) {
      dispatch({ type: 'REMOVE_FAVORITE', payload: project.id });
    } else {
      dispatch({ type: 'ADD_FAVORITE', payload: project });
    }
  };

  return (
    <div className="container page-enter">
      {/* Hero */}
      <div className="hero-card">
        <h1>Hello, I'm Simar</h1>
        <p>Final year CSE student specializing in AI/ML, focused on clean UI systems and modern web development.</p>
        <Link to="/projects" className="btn-primary">View My Work</Link>
      </div>

      {/* Favorites banner */}
      {state.favorites.length > 0 && (
        <div className="fav-banner">
          <span>⭐ {state.favorites.length} project{state.favorites.length > 1 ? 's' : ''} bookmarked: {state.favorites.map(f => f.title).join(', ')}</span>
          <button className="btn-clear" onClick={() => dispatch({ type: 'CLEAR_FAVORITES' })}>Clear All</button>
        </div>
      )}

      {/* Projects */}
      <h2 className="section-title">Projects</h2>
      {PROJECTS.map((p) => (
        <div className="project-card" key={p.id}>
          <div>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
          </div>
          <button
            className={`fav-btn ${isFav(p.id) ? 'active' : ''}`}
            onClick={() => toggle(p)}
          >
            {isFav(p.id) ? '★ Saved' : '☆ Save'}
          </button>
        </div>
      ))}
    </div>
  );
}
