import React from 'react';
import { Target, Shield, Wind } from 'lucide-react';

const Approach: React.FC = () => {
  return (
    <div className="approach-page">
      <div className="hero">
        <h1>The Methodology of Freedom</h1>
        <p style={{ fontSize: '1.5rem', color: 'var(--text-muted)' }}>
          Science, spirituality, and southern rock in perfect harmony.
        </p>
      </div>

      <div className="section">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          <div>
            <h2>Sonic Saturation</h2>
            <p style={{ marginBottom: '1.5rem' }}>
              Our primary method involves the concept of "Sonic Saturation." By bathing a specific geographic area in the frequencies found within the "Free Bird" guitar solo, we create a temporary rift in the mundane world.
            </p>
            <p>
              This rift allows birds to shed their earthly anxieties—cats, windows, and the search for crumbs—and embrace their true identity as masters of the sky.
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=800"
            alt="Concert speakers"
            style={{ borderRadius: '1rem', width: '100%', boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.3)' }}
          />
        </div>
      </div>

      <div className="section card-grid">
        <div className="card">
          <Target className="bird-icon" size={32} />
          <h3>Precision Targeting</h3>
          <p>We use advanced bird-dar (Bird Radar) to identify areas with high concentrations of birds suffering from "Spiritual Stagnation."</p>
        </div>
        <div className="card">
          <Shield className="bird-icon" size={32} />
          <h3>Ethical Volume</h3>
          <p>All our speakers are calibrated to a minimum of 115 decibels—the scientifically proven threshold for avian enlightenment.</p>
        </div>
        <div className="card">
          <Wind className="bird-icon" size={32} />
          <h3>Atmospheric Conditioning</h3>
          <p>We release a fine mist of patchouli and diesel exhaust to recreate the exact atmosphere of a 1976 Skynyrd concert.</p>
        </div>
      </div>

      <div className="section" style={{ background: 'var(--card-bg)', padding: '3rem', borderRadius: '1rem' }}>
        <h2 style={{ textAlign: 'center' }}>The Three Stages of Liberation</h2>
        <div style={{ display: 'flex', gap: '2rem', marginTop: '2rem' }}>
          <div style={{ flex: 1, textAlign: 'center' }}>
            <div style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '1rem' }}>01</div>
            <h4>The Call</h4>
            <p>The initial slide guitar intro signals to the birds that something significant is happening. They gather.</p>
          </div>
          <div style={{ flex: 1, textAlign: 'center' }}>
            <div style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '1rem' }}>02</div>
            <h4>The Awakening</h4>
            <p>As the lyrics begin, the birds start to recall their ancient, rock 'n' roll ancestors. Their wings twitch.</p>
          </div>
          <div style={{ flex: 1, textAlign: 'center' }}>
            <div style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '1rem' }}>03</div>
            <h4>The Solo</h4>
            <p>The final solo triggers the "Ascension Event." Physical boundaries vanish. The bird is finally, truly free.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Approach;
