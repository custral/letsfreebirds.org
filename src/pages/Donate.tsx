import React from 'react';
import { AlertTriangle, Heart, DollarSign } from 'lucide-react';

const Donate: React.FC = () => {
  return (
    <div className="donate-page">
      <div className="hero">
        <h1>Fuel the Liberation</h1>
        <p style={{ fontSize: '1.5rem', color: 'var(--text-muted)' }}>
          Your contribution provides the watts needed for avian enlightenment.
        </p>
      </div>

      <div className="section origin-story">
        <h2>Why Your Support Matters</h2>
        <p>
          Each 'Free Bird' broadcast requires immense resources. We aren't just talking about the electricity to power the 50,000-watt amplifiers; we're talking about the logistical challenge of transporting vintage 1970s audio equipment into the heart of the wilderness.
        </p>
        <p>
          Your donations go directly toward:
        </p>
        <ul style={{ marginBottom: '2rem', paddingLeft: '2rem' }}>
          <li>Purchasing high-fidelity speakers that can withstand extreme weather.</li>
          <li>Licensing fees (we believe in paying the artists who provided the key to liberation).</li>
          <li>Bird-friendly earplugs for our ground crew.</li>
          <li>Research into other southern rock tracks that might have similar effects (preliminary tests on 'Sweet Home Alabama' show promise for squirrels).</li>
        </ul>

        <div className="card" style={{ border: '1px solid #ef4444', background: 'rgba(239, 68, 68, 0.1)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: '#ef4444', marginBottom: '1rem' }}>
            <AlertTriangle size={32} />
            <h3 style={{ margin: 0, color: '#ef4444' }}>Donations Currently Disabled</h3>
          </div>
          <p style={{ fontWeight: 600 }}>
            We are humbled by the overwhelming generosity of our supporters.
          </p>
          <p>
            However, we have reached a temporary administrative crossroads. Due to the sheer volume of contributions received in the last quarter, our bank accounts have exceeded their maximum capacity for "Good Vibes and Spiritual Currency." 
          </p>
          <p>
            Frankly, we were making too much money. It started to feel less like a spiritual mission and more like we were accidentally becoming the wealthiest organization in the history of southern-rock-based avian liberation.
          </p>
          <p>
            Until we can properly invest our current $4.2 billion surplus into a fleet of gold-plated speaker-carrying zeppelins, we are not accepting new donations. Please keep your money and instead, play the solo at maximum volume near a local bird bath.
          </p>
          <button className="btn btn-disabled" style={{ marginTop: '1.5rem' }}>
            Donation Link (Unavailable)
          </button>
        </div>
      </div>

      <div className="section card-grid" style={{ marginTop: '4rem' }}>
        <div className="card">
          <Heart className="bird-icon" size={32} />
          <h3>Other Ways to Help</h3>
          <p>Spread the word. Share the song. Wear a flannel shirt in solidarity with the birds.</p>
        </div>
        <div className="card">
          <DollarSign className="bird-icon" size={32} />
          <h3>Transparency</h3>
          <p>Once we reopen, 100% of proceeds go to speakers. We live on a diet of birdseed and rock 'n' roll.</p>
        </div>
      </div>
    </div>
  );
};

export default Donate;
