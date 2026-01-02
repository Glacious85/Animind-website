export default function About() {
  return (
    <section className="section">
      <div className="container" style={{ maxWidth: '800px' }}>
        <h1 style={{ marginBottom: 'var(--spacing-md)' }}>About Animind</h1>
        
        <div style={{ marginBottom: 'var(--spacing-xl)' }}>
          <p style={{ fontSize: '1.125rem', color: 'var(--color-text-light)', lineHeight: '1.8' }}>
            Animind represents a breakthrough in companion animal behavior recognition. We are developing 
            the <strong>first AI-powered application specifically engineered for rabbit behavior analysis</strong>, 
            addressing a critical gap in understanding one of the most misunderstood companion animals.
          </p>
        </div>

        {/* Mission */}
        <div className="card" style={{ marginBottom: 'var(--spacing-lg)' }}>
          <h2 style={{ color: 'var(--color-primary)', marginBottom: 'var(--spacing-md)' }}>
            Our Mission
          </h2>
          <p>
            Every pet has a unique way of communicating. Animind exists to help you understand 
            those signals, recognize patterns, and respond to your pet's needs with greater 
            empathy and care.
          </p>
          <p>
            We believe that when pet owners truly understand their animals, both pets and humans 
            lead happier, healthier lives together.
          </p>
        </div>

        {/* Why We Started */}
        <div className="card" style={{ marginBottom: 'var(--spacing-lg)' }}>
          <h2 style={{ color: 'var(--color-primary)', marginBottom: 'var(--spacing-md)' }}>
            Why We Started
          </h2>
          <p style={{ lineHeight: '1.8' }}>
            The foundation of Animind emerged from a critical observation: rabbits are among the most 
            misunderstood companion animals. Unlike dogs and cats, rabbits communicate almost exclusively 
            through subtle visual cues—body language, postural changes, and movement patterns. 
            <strong> Their communication methods are silent and easily misinterpreted</strong>, leading to 
            misunderstandings that can impact their wellbeing.
          </p>
          <p style={{ lineHeight: '1.8' }}>
            Existing pet behavior applications focus on audio analysis, which is ineffective for rabbits. 
            We recognized the need for <strong>specialized computer vision technology</strong> capable of 
            interpreting visual behavioral data. Animind bridges this communication gap by analyzing what 
            rabbits <strong>look like</strong> and how they <strong>move</strong>, making evidence-based 
            behavior recognition accessible to all rabbit owners.
          </p>
        </div>

        {/* Our Values */}
        <div className="card" style={{ marginBottom: 'var(--spacing-lg)' }}>
          <h2 style={{ color: 'var(--color-primary)', marginBottom: 'var(--spacing-md)' }}>
            Our Values
          </h2>
          
          <div style={{ marginBottom: 'var(--spacing-md)' }}>
            <h3>💚 Animal Welfare First</h3>
            <p>
              Every decision we make prioritizes the wellbeing of animals. We're committed to 
              ethical practices and never supporting anything that could harm pets.
            </p>
          </div>

          <div style={{ marginBottom: 'var(--spacing-md)' }}>
            <h3>🔒 Privacy & Trust</h3>
            <p>
              Your data and your pet's privacy are sacred to us. We process data locally when 
              possible and are transparent about everything we do.
            </p>
          </div>

          <div style={{ marginBottom: 'var(--spacing-md)' }}>
            <h3>🧠 Science-Based</h3>
            <p>
              Our AI models are built on solid scientific research and continuously improved 
              with real-world data and feedback from pet owners and experts.
            </p>
          </div>

          <div>
            <h3>🤝 Community-Driven</h3>
            <p>
              Animind grows with input from pet owners, veterinarians, and animal behaviorists. 
              Your feedback shapes the future of the app.
            </p>
          </div>
        </div>

        {/* The Future */}
        <div className="card" style={{ marginBottom: 'var(--spacing-lg)' }}>
          <h2 style={{ color: 'var(--color-primary)', marginBottom: 'var(--spacing-md)' }}>
            Looking Forward
          </h2>
          <p>
            We're starting with <strong>rabbits because they're the first pets to get visual AI 
            behavior analysis</strong>—no other app does this. Rabbits communicate almost entirely 
            through body language, making them perfect for visual AI.
          </p>
          <p>
            Soon, Animind will support cats and dogs with the same visual analysis approach. 
            Our goal is to become the trusted visual AI companion for every pet owner who wants 
            to <strong>see</strong> what their pet is really doing, not just hear them.
          </p>
        </div>

        {/* Join Us */}
        <div style={{
          textAlign: 'center',
          padding: 'var(--spacing-xl)',
          backgroundColor: 'var(--color-primary)',
          borderRadius: 'var(--radius-lg)',
          color: '#0F172A',
        }}>
          <h2 style={{ color: '#0F172A', marginBottom: 'var(--spacing-md)' }}>
            Join Us on This Journey
          </h2>
          <p style={{
            marginBottom: 'var(--spacing-lg)',
            color: 'rgba(15, 23, 42, 0.9)',
          }}>
            Help us build the future of pet care. Join our beta testing program and be part 
            of a community that's making pet ownership more compassionate and informed.
          </p>
          <a href="/contact" className="btn btn-primary btn-large" style={{
            backgroundColor: '#0F172A',
            color: 'var(--color-primary)',
          }}>
            Become a Beta Tester
          </a>
        </div>
      </div>
    </section>
  )
}

