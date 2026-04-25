const PROJECTS = [
  { id: 1, title: 'AI Attendance System', desc: 'Smart attendance using face recognition and ML models.', tags: ['Python', 'OpenCV', 'ML'] },
  { id: 2, title: 'Portfolio Website', desc: 'Modern portfolio built with React and Material UI.', tags: ['React', 'CSS', 'Vite'] },
  { id: 3, title: 'Chat Application', desc: 'Real-time messaging app with WebSocket and Node.js backend.', tags: ['Node.js', 'WebSocket', 'React'] },
  { id: 4, title: 'E-Commerce Platform', desc: 'Full-stack shopping platform with cart and payment integration.', tags: ['React', 'Express', 'PostgreSQL'] },
  { id: 5, title: 'Weather Dashboard', desc: 'Live weather app consuming OpenWeatherMap API with charts.', tags: ['React', 'API', 'Charts'] },
];

export default function Projects() {
  return (
    <div className="container page-enter">
      <h2 className="section-title">Projects</h2>
      {PROJECTS.map((p) => (
        <div className="project-card" key={p.id}>
          <div>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <div style={{ marginTop: '0.75rem' }}>
              {p.tags.map((t) => (
                <span className="tag" key={t}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
