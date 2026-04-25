import { useReducer, useMemo, useState } from 'react';
import { useAppContext } from '../context/AppContext';

const ALL_SKILLS = [
  { id: 1, name: 'React', icon: '⚛️', level: 'Advanced', percent: 85, category: 'Frontend' },
  { id: 2, name: 'Python', icon: '🐍', level: 'Advanced', percent: 88, category: 'Languages' },
  { id: 3, name: 'Node.js', icon: '🟢', level: 'Intermediate', percent: 72, category: 'Backend' },
  { id: 4, name: 'Machine Learning', icon: '🤖', level: 'Intermediate', percent: 75, category: 'AI/ML' },
  { id: 5, name: 'TailwindCSS', icon: '🎨', level: 'Advanced', percent: 82, category: 'Frontend' },
  { id: 6, name: 'PostgreSQL', icon: '🐘', level: 'Intermediate', percent: 68, category: 'Backend' },
  { id: 7, name: 'OpenCV', icon: '👁️', level: 'Intermediate', percent: 65, category: 'AI/ML' },
  { id: 8, name: 'TypeScript', icon: '🔷', level: 'Beginner', percent: 50, category: 'Languages' },
  { id: 9, name: 'Git', icon: '🗂️', level: 'Advanced', percent: 80, category: 'Tools' },
  { id: 10, name: 'Docker', icon: '🐳', level: 'Beginner', percent: 45, category: 'Tools' },
];

const EXPERIENCE = [
  {
    id: 1,
    role: 'Frontend Intern',
    company: 'TechStartup Chandigarh',
    period: 'May 2024 – Aug 2024',
    desc: 'Built responsive UI components in React, improved page load time by 30% through code splitting and lazy loading.',
  },
  {
    id: 2,
    role: 'ML Research Intern',
    company: 'AI Lab, Chandigarh University',
    period: 'Jan 2024 – Apr 2024',
    desc: 'Worked on face recognition attendance system using OpenCV and scikit-learn; achieved 94% accuracy.',
  },
  {
    id: 3,
    role: 'Open Source Contributor',
    company: 'GitHub Projects',
    period: '2023 – Present',
    desc: 'Contributed to React UI libraries and Python ML utilities; 200+ GitHub contributions.',
  },
];

// Mini reducer just for this page
const skillsReducer = (state, action) => {
  switch (action.type) {
    case 'SET_FILTER': return { ...state, filter: action.payload };
    case 'TOGGLE_PINNED':
      return {
        ...state,
        pinned: state.pinned.includes(action.payload)
          ? state.pinned.filter((id) => id !== action.payload)
          : [...state.pinned, action.payload],
      };
    case 'CLEAR_PINNED': return { ...state, pinned: [] };
    default: return state;
  }
};

const CATEGORIES = ['All', 'Frontend', 'Backend', 'Languages', 'AI/ML', 'Tools'];

export default function Skills() {
  const { theme } = useAppContext(); // using context
  const [state, dispatch] = useReducer(skillsReducer, { filter: 'All', pinned: [] });
  const [search, setSearch] = useState('');

  // useMemo: filtered + searched skills + summary stats
  const filteredSkills = useMemo(() => {
    return ALL_SKILLS.filter((s) => {
      const matchCat = state.filter === 'All' || s.category === state.filter;
      const matchSearch = s.name.toLowerCase().includes(search.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [state.filter, search]);

  const stats = useMemo(() => ({
    total: ALL_SKILLS.length,
    advanced: ALL_SKILLS.filter((s) => s.level === 'Advanced').length,
    intermediate: ALL_SKILLS.filter((s) => s.level === 'Intermediate').length,
    avgPercent: Math.round(ALL_SKILLS.reduce((a, s) => a + s.percent, 0) / ALL_SKILLS.length),
  }), []);

  const isPinned = (id) => state.pinned.includes(id);

  return (
    <div className="container page-enter">
      <h2 className="section-title">Skills & Experience</h2>
      <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', fontSize: '0.93rem' }}>
        {theme === 'dark' ? '🌙 Dark mode on — ' : '☀️ Light mode — '}
        Showing {filteredSkills.length} of {ALL_SKILLS.length} skills
      </p>

      {/* Stats bar — useMemo */}
      <div className="stats-bar">
        <div className="stat-item"><div className="stat-num">{stats.total}</div><div className="stat-label">Total Skills</div></div>
        <div className="stat-item"><div className="stat-num">{stats.advanced}</div><div className="stat-label">Advanced</div></div>
        <div className="stat-item"><div className="stat-num">{stats.intermediate}</div><div className="stat-label">Intermediate</div></div>
        <div className="stat-item"><div className="stat-num">{stats.avgPercent}%</div><div className="stat-label">Avg. Proficiency</div></div>
        <div className="stat-item"><div className="stat-num">{state.pinned.length}</div><div className="stat-label">Pinned</div></div>
      </div>

      {/* Filter + Search */}
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '1rem', alignItems: 'center' }}>
        <input
          type="text"
          placeholder="Search skills..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            background: 'var(--bg-card)',
            border: '1.5px solid var(--border)',
            borderRadius: '999px',
            padding: '0.4rem 1rem',
            fontSize: '0.88rem',
            color: 'var(--text-primary)',
            outline: 'none',
            fontFamily: 'DM Sans, sans-serif',
            width: '180px',
          }}
        />
        {state.pinned.length > 0 && (
          <button className="btn-clear" style={{ background: 'var(--card-bg)', color: 'var(--card-text)', border: 'none' }}
            onClick={() => dispatch({ type: 'CLEAR_PINNED' })}>
            Clear Pins ({state.pinned.length})
          </button>
        )}
      </div>

      <div className="filter-bar">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${state.filter === cat ? 'active' : ''}`}
            onClick={() => dispatch({ type: 'SET_FILTER', payload: cat })}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="skills-grid" style={{ marginBottom: '2.5rem' }}>
        {filteredSkills.length === 0 && (
          <p style={{ color: 'var(--text-muted)', gridColumn: '1/-1' }}>No skills found.</p>
        )}
        {filteredSkills.map((skill) => (
          <div
            className="skill-card"
            key={skill.id}
            style={isPinned(skill.id) ? { borderColor: 'var(--accent-light)', borderWidth: '2px' } : {}}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div className="skill-icon">{skill.icon}</div>
              <button
                onClick={() => dispatch({ type: 'TOGGLE_PINNED', payload: skill.id })}
                style={{
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  opacity: isPinned(skill.id) ? 1 : 0.4,
                  transition: 'opacity 0.2s',
                }}
                title="Pin skill"
              >
                📌
              </button>
            </div>
            <h3>{skill.name}</h3>
            <div className="skill-level">{skill.level} · {skill.category}</div>
            <div className="skill-bar-bg">
              <div className="skill-bar-fill" style={{ width: `${skill.percent}%` }} />
            </div>
            <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '0.4rem', textAlign: 'right' }}>{skill.percent}%</div>
          </div>
        ))}
      </div>

      {/* Experience */}
      <h2 className="section-title">Experience</h2>
      {EXPERIENCE.map((exp) => (
        <div className="exp-card" key={exp.id}>
          <h3>{exp.role}</h3>
          <div className="exp-meta">{exp.company} · {exp.period}</div>
          <p>{exp.desc}</p>
        </div>
      ))}
    </div>
  );
}
