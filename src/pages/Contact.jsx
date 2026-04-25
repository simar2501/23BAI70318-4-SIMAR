import { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) return;
    setSubmitted(true);
  };

  return (
    <div className="container page-enter">
      <div className="contact-card">
        <h2>Get In Touch</h2>
        <p>Have a project in mind or want to collaborate? Send me a message.</p>

        {submitted ? (
          <div style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-secondary)' }}>
            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>✅</div>
            <p style={{ fontWeight: 600 }}>Message sent! I'll get back to you soon.</p>
          </div>
        ) : (
          <>
            <div className="input-group">
              <label>Name</label>
              <input name="name" placeholder="Your name" value={form.name} onChange={handleChange} />
            </div>
            <div className="input-group">
              <label>Email</label>
              <input name="email" type="email" placeholder="your@email.com" value={form.email} onChange={handleChange} />
            </div>
            <div className="input-group">
              <label>Message</label>
              <textarea name="message" placeholder="What's on your mind?" value={form.message} onChange={handleChange} />
            </div>
            <button className="btn-primary" onClick={handleSubmit}>Send Message</button>
          </>
        )}
      </div>
    </div>
  );
}
