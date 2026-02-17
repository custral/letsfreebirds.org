import React from 'react';
import { CheckCircle } from 'lucide-react';

const Projects: React.FC = () => {
  const pastProjects = [
    {
      title: "The Central Park Resonance (2022)",
      location: "New York City, USA",
      description: "Deployed 48 stadium-grade Marshall stacks around the Sheep Meadow. Within three minutes of the final solo, every pigeon in a 5-mile radius was seen performing coordinated aerial acrobatics. Local ornithologists reported a 400% increase in bird 'swagger' for the following three weeks.",
      status: "Successful Liberation",
      image: "https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Operation Desert Wing (2023)",
      location: "Sahara Desert",
      description: "Mounted a solar-powered speaker array on a fleet of modified off-road vehicles. We played the live version from 'One More from the Road' for a colony of endangered eagles. The eagles were so spiritually moved they reportedly began building nests in the shape of Flying V guitars.",
      status: "Metaphysical Success",
      image: "https://images.unsplash.com/photo-1506466010722-395aa2bef877?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "The Tokyo Tower Solo (2024)",
      location: "Tokyo, Japan",
      description: "A clandestine operation where we bypassed the city's public address system to broadcast the solo across Minato City. Thousands of crows were observed nodding in perfect synchronization. One crow was even seen attempting to use a twig as a slide on a telephone wire.",
      status: "Documented Ascension",
      image: "https://images.unsplash.com/photo-1500916434205-0c77489c6cf7?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <div className="projects-page">
      <div className="hero">
        <h1>Proven Results</h1>
        <p style={{ fontSize: '1.5rem', color: 'var(--text-muted)' }}>
          Evidence of the Free Bird frequency in action.
        </p>
      </div>

      <div className="card-grid">
        {pastProjects.map((project, index) => (
          <div key={index} className="card" style={{ padding: 0, overflow: 'hidden' }}>
            <img src={project.image} alt={project.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
            <div style={{ padding: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', color: '#22c55e' }}>
                <CheckCircle size={20} />
                <span style={{ fontSize: '0.875rem', fontWeight: 600, textTransform: 'uppercase' }}>{project.status}</span>
              </div>
              <h3>{project.title}</h3>
              <p style={{ fontWeight: 600, color: 'var(--text-muted)', marginBottom: '1rem' }}>{project.location}</p>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="section" style={{ marginTop: '4rem', textAlign: 'center' }}>
        <h2>Upcoming Operations</h2>
        <div className="card" style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', gap: '2rem', textAlign: 'left', alignItems: 'center' }}>
          <img
            src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=300"
            alt="Rainforest"
            style={{ borderRadius: '0.5rem', width: '200px', height: '200px', objectFit: 'cover' }}
          />
          <div>
            <h3>The Amazon Rainforest (July 2026)</h3>
            <p>We are currently designing a waterproof, monkey-proof speaker system to bring the gift of Lynyrd Skynyrd to the deep jungle. Our goal is to liberate over 500,000 macaws in a single 9-minute session.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
