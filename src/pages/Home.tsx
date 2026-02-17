import React from 'react';
import { Music, Zap, Globe, Quote } from 'lucide-react';

const Home: React.FC = () => {
  const testimonials = [
    {
      name: "Gary 'The Grackle' Stevens",
      role: "Reformed Bird Enthusiast",
      text: "I used to think birds needed seed and water. Now I know they just need 9 minutes of pure, unadulterated southern rock. My local crows haven't touched the ground in three weeks. They just hover and shred.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100"
    },
    {
      name: "Dr. Linda Wingate",
      role: "Professor of Avian Metaphysics",
      text: "The 'Free Bird' solo operates on a frequency that bypasses the cerebellum and goes straight to the soul. It's not just music; it's a structural realignment of the avian spirit.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100"
    },
    {
      name: "Silas 'Feather-Touch' Montgomery",
      role: "Founder",
      text: "If you don't feel the spirit when the third guitar enters the mix, you might be a cat. And we don't free cats.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100&h=100"
    }
  ];

  return (
    <div className="home-page">
      <div className="hero">
        <img
          src="https://images.unsplash.com/photo-1444464666168-49d633b867ad?auto=format&fit=crop&q=80&w=1200&h=400"
          alt="A bird in flight"
          style={{ width: '100%', borderRadius: '1rem', marginBottom: '2rem', objectFit: 'cover', height: '300px' }}
        />
        <h1>Spiritually Freeing Birds Since 1973</h1>
        <p style={{ fontSize: '1.5rem', color: 'var(--text-muted)' }}>
          Because every wing deserves a guitar solo.
        </p>
      </div>

      <div className="section origin-story">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
          <div>
            <h2>Our Origin Story</h2>
            <p>
              It began in the summer of '73, in a small swampy clearing outside of Jacksonville, Florida. Our founder, Silas "Feather-Touch" Montgomery, was sitting on a porch swing, nursing a lukewarm sarsaparilla and listening to a fresh vinyl copy of Lynyrd Skynyrd's debut album.
            </p>
            <p>
              As the legendary 9-minute epic "Free Bird" reached its crescendo, Silas noticed something miraculous. A group of caged canaries on his neighbor's porch began to vibrate. Not just a tremor, but a spiritual resonance that matched the frequency of Allen Collins' guitar solo.
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1452570053594-1b985d6ea890?auto=format&fit=crop&q=80&w=600"
            alt="Silas's inspiration"
            style={{ borderRadius: '1rem', width: '100%' }}
          />
        </div>
        <p style={{ marginTop: '1.5rem' }}>
          In that moment, Silas saw the bars of the cages turn into liquid light. The birds didn't just fly away; they transcended. They became pure sound, pure freedom. Silas realized then that the song "Free Bird" wasn't just southern rock—it was a biological and spiritual key designed to unlock the avian soul.
        </p>
        <p>
          Since that fateful day, Silas dedicated his life to a single mission: to ensure that no bird, whether in a cage or in the wild, is ever deprived of the liberation that only a high-decibel rendition of the greatest guitar solo in history can provide.
        </p>
      </div>

      <div className="section">
        <h2 style={{ textAlign: 'center' }}>What People Are Saying</h2>
        <div className="card-grid">
          {testimonials.map((t, i) => (
            <div key={i} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
              <Quote className="bird-icon" size={32} style={{ marginBottom: '1rem', opacity: 0.5 }} />
              <p style={{ fontStyle: 'italic', marginBottom: '1.5rem', flex: 1 }}>"{t.text}"</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <img src={t.avatar} alt={t.name} style={{ width: '48px', height: '48px', borderRadius: '50%' }} />
                <div>
                  <div style={{ fontWeight: 700 }}>{t.name}</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="section">
        <h2 style={{ textAlign: 'center' }}>Our Core Pillars</h2>
        <div className="card-grid">
          <div className="card">
            <Music size={40} className="bird-icon" style={{ marginBottom: '1rem' }} />
            <h3>Acoustic Resonance</h3>
            <p>We believe the 120dB frequency of a Gibson Explorer is the only way to truly communicate with the spirit of a hawk.</p>
          </div>
          <div className="card">
            <Zap size={40} className="bird-icon" style={{ marginBottom: '1rem' }} />
            <h3>Rapid Deployment</h3>
            <p>Our mobile speaker units can be deployed to any forest or urban center in under 4 hours to handle spiritual blockages.</p>
          </div>
          <div className="card">
            <Globe size={40} className="bird-icon" style={{ marginBottom: '1rem' }} />
            <h3>Global Impact</h3>
            <p>From the pigeons of London to the parrots of the Amazon, no wing is left behind in our global liberation tour.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
