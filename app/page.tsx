import Link from 'next/link'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section style={{
        padding: 'var(--spacing-3xl) 0',
        background: 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%)',
        textAlign: 'center',
      }}>
        <div className="container">
          <h1 style={{
            color: '#0F172A',
            marginBottom: 'var(--spacing-md)',
            textShadow: '0 2px 10px rgba(79, 209, 199, 0.3)',
            fontSize: 'clamp(2.5rem, 6vw, 4rem)',
          }}>
            Pioneering AI for Rabbit Behavior Recognition
          </h1>
          <p style={{
            fontSize: '1.5rem',
            color: 'rgba(15, 23, 42, 0.95)',
            maxWidth: '800px',
            margin: '0 auto var(--spacing-md)',
            lineHeight: '1.8',
            fontWeight: 700,
          }}>
            The First AI Application Designed Specifically for Rabbit Behavior Analysis
          </p>
          <p style={{
            fontSize: '1.125rem',
            color: 'rgba(15, 23, 42, 0.9)',
            maxWidth: '800px',
            margin: '0 auto var(--spacing-md)',
            lineHeight: '1.8',
          }}>
            Rabbits are among the most misunderstood companion animals. Their subtle body language 
            and silent communication methods make them particularly challenging to understand. 
            <strong> Animind addresses this gap through advanced computer vision technology</strong>, 
            offering the first AI-powered solution for comprehensive rabbit behavior recognition.
          </p>
          <p style={{
            fontSize: '1.125rem',
            color: 'rgba(15, 23, 42, 0.85)',
            maxWidth: '800px',
            margin: '0 auto var(--spacing-xl)',
            lineHeight: '1.8',
          }}>
            Our visual AI analyzes body language, movement patterns, and behavioral indicators through 
            video and photographic analysis—providing insights that audio-based applications cannot deliver.
          </p>
          <div style={{
            display: 'flex',
            gap: 'var(--spacing-md)',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}>
            <Link href="/contact" className="btn btn-primary btn-large">
              Join Testing
            </Link>
            <Link href="/how-it-works" className="btn btn-secondary btn-large" style={{
              backgroundColor: 'transparent',
              color: '#0F172A',
              borderColor: '#0F172A',
            }}>
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Why Rabbits Section */}
      <section className="section" style={{ backgroundColor: 'var(--color-surface)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-2xl)' }}>
            <h2>Why Rabbits Need Specialized AI</h2>
            <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.125rem', lineHeight: '1.8', marginTop: 'var(--spacing-md)' }}>
              Rabbits are among the most misunderstood companion animals. Unlike dogs and cats, they communicate 
              almost exclusively through subtle visual cues that are easily missed or misinterpreted.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'var(--spacing-lg)',
            marginTop: 'var(--spacing-xl)',
          }}>
            <div className="card">
              <h3 style={{ color: 'var(--color-primary)', fontSize: '1.3rem' }}>Silent Communication</h3>
              <p style={{ lineHeight: '1.7' }}>
                Rabbits rarely vocalize. Their communication relies on body language, ear positioning, 
                and subtle postural changes—signals that require visual analysis, not audio recognition.
              </p>
            </div>

            <div className="card">
              <h3 style={{ color: 'var(--color-primary)', fontSize: '1.3rem' }}>Subtle Behavioral Indicators</h3>
              <p style={{ lineHeight: '1.7' }}>
                Stress, pain, and emotional states in rabbits manifest through minute visual changes 
                that are often imperceptible to untrained observers. Our AI detects these patterns.
              </p>
            </div>

            <div className="card">
              <h3 style={{ color: 'var(--color-primary)', fontSize: '1.3rem' }}>First-of-Its-Kind Technology</h3>
              <p style={{ lineHeight: '1.7' }}>
                <strong>No existing application offers comprehensive AI-powered rabbit behavior recognition.</strong> 
                Animind fills this critical gap with specialized computer vision models trained specifically 
                for rabbit behavioral analysis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What It Does Section */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-2xl)' }}>
            <h2>Advanced Computer Vision Technology</h2>
            <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.125rem', lineHeight: '1.8' }}>
              While other applications rely exclusively on audio analysis, Animind employs <strong>state-of-the-art 
              computer vision algorithms</strong> to process visual behavioral data. Our AI interprets body language, 
              movement patterns, and postural indicators through comprehensive video and image analysis—enabling 
              recognition of behaviors that audio-based systems cannot detect.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 'var(--spacing-lg)',
            marginTop: 'var(--spacing-xl)',
          }}>
            <div className="card" style={{
              border: '2px solid var(--color-primary)',
              boxShadow: '0 8px 24px rgba(79, 209, 199, 0.3)',
              background: 'linear-gradient(135deg, var(--color-surface) 0%, var(--color-surface-variant) 100%)',
            }}>
              <div style={{
                fontSize: '3rem',
                marginBottom: 'var(--spacing-md)',
              }}>🐰</div>
              <h3 style={{ color: 'var(--color-primary)', fontSize: '1.5rem' }}>Revolutionary Rabbit Behavior Recognition</h3>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.7' }}>
                <strong>Animind represents the first AI-powered application</strong> specifically engineered for 
                rabbit behavior analysis. Rabbits are among the most misunderstood companion animals, with 
                communication methods that are primarily visual and silent. Our proprietary computer vision 
                models decode their subtle body language, postural indicators, and movement patterns—offering 
                pet owners unprecedented insight into their rabbit's wellbeing and emotional state.
              </p>
            </div>

            <div className="card">
              <div style={{
                fontSize: '3rem',
                marginBottom: 'var(--spacing-md)',
              }}>🐱</div>
              <h3>Cats Coming Soon</h3>
              <p>
                We're expanding to cats! Join our testing program to be among the first 
                to experience cat behavior analysis.
              </p>
            </div>

            <div className="card">
              <div style={{
                fontSize: '3rem',
                marginBottom: 'var(--spacing-md)',
              }}>🐶</div>
              <h3>Dogs Coming Soon</h3>
              <p>
                Dog behavior analysis is in development. Stay tuned for updates and 
                join our beta program to get early access.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="section" style={{ backgroundColor: 'var(--color-surface)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-2xl)' }}>
            <h2>What Makes Animind Different?</h2>
            <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.125rem', marginTop: 'var(--spacing-md)' }}>
              While other applications rely solely on audio analysis, Animind employs <strong>advanced computer vision technology</strong> 
              to interpret your pet's body language, movement patterns, and behavioral indicators through visual data processing.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 'var(--spacing-lg)',
            marginTop: 'var(--spacing-xl)',
          }}>
            <div className="card">
              <h3 style={{ color: 'var(--color-primary)', fontSize: '1.35rem', marginBottom: 'var(--spacing-sm)' }}>Computer Vision Technology</h3>
              <p style={{ lineHeight: '1.7' }}>
                Animind utilizes state-of-the-art computer vision algorithms to analyze visual behavioral data. 
                Our AI processes body language, movement patterns, and postural indicators—providing insights that 
                audio-based analysis cannot capture. This approach is particularly effective for species that 
                communicate primarily through visual signals, such as rabbits.
              </p>
            </div>

            <div className="card" style={{
              border: '2px solid var(--color-primary)',
              boxShadow: '0 8px 24px rgba(79, 209, 199, 0.2)',
            }}>
              <h3 style={{ color: 'var(--color-primary)', fontSize: '1.35rem', marginBottom: 'var(--spacing-sm)' }}>Pioneering Rabbit Behavior Recognition</h3>
              <p style={{ lineHeight: '1.7', fontWeight: 500 }}>
                <strong>Animind is the first AI-powered application</strong> specifically engineered for rabbit behavior analysis. 
                Rabbits are among the most misunderstood companion animals, with communication methods that are almost entirely 
                visual and silent. Our proprietary models have been trained to recognize the subtle visual cues, body language 
                patterns, and behavioral indicators unique to rabbits—offering pet owners unprecedented insight into their 
                companion's wellbeing, emotional state, and needs.
              </p>
            </div>

            <div className="card">
              <h3 style={{ color: 'var(--color-primary)', fontSize: '1.35rem', marginBottom: 'var(--spacing-sm)' }}>Comprehensive Video & Image Processing</h3>
              <p style={{ lineHeight: '1.7' }}>
                Our platform supports both real-time video recording and image uploads. The AI performs frame-by-frame 
                analysis to identify behavioral patterns and trends over time, rather than analyzing isolated moments. 
                This comprehensive approach enables more accurate behavior recognition and health monitoring.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-2xl)' }}>
            <h2>Why Choose Animind?</h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: 'var(--spacing-lg)',
          }}>
            <div>
              <h3 style={{ color: 'var(--color-primary)', fontSize: '1.25rem' }}>Visual Behavioral Analysis</h3>
              <p style={{ lineHeight: '1.7' }}>
                Our computer vision technology analyzes body language, movement patterns, and visual behavioral 
                indicators—not audio signals. This approach is essential for rabbits, who communicate almost 
                exclusively through visual cues and subtle postural changes.
              </p>
            </div>

            <div>
              <h3 style={{ color: 'var(--color-primary)', fontSize: '1.25rem' }}>Advanced Video & Image Processing</h3>
              <p style={{ lineHeight: '1.7' }}>
                Our platform supports real-time video recording and image uploads. The AI performs comprehensive 
                frame-by-frame analysis to identify behavioral patterns, trends, and anomalies over time—enabling 
                accurate recognition of your pet's emotional state and needs.
              </p>
            </div>

            <div>
              <h3 style={{ color: 'var(--color-primary)', fontSize: '1.25rem' }}>Multi-Species Platform</h3>
              <p style={{ lineHeight: '1.7' }}>
                Beginning with rabbits—the first AI application to offer comprehensive behavior recognition for this 
                species—Animind will expand to support cats and dogs. Our platform provides species-specific 
                behavioral analysis tailored to each animal's unique communication methods.
              </p>
            </div>

            <div>
              <h3 style={{ color: 'var(--color-primary)', fontSize: '1.25rem' }}>Comprehensive Health Monitoring</h3>
              <p style={{ lineHeight: '1.7' }}>
                Track behavioral patterns over time, receive health insights, and generate detailed reports for 
                veterinary consultation. Animind goes beyond behavior recognition to support proactive pet care 
                and wellbeing management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Medical Disclaimer Section */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div style={{
            padding: 'var(--spacing-lg)',
            backgroundColor: 'rgba(245, 158, 11, 0.1)',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--color-warning)',
            textAlign: 'center',
          }}>
            <p style={{ 
              fontSize: '0.95rem', 
              color: 'var(--color-text-light)',
              lineHeight: '1.7',
              margin: 0,
            }}>
              <strong>⚠️ Medical Disclaimer:</strong> Animind is for informational purposes only and does not 
              replace professional veterinary care. Always consult a qualified veterinarian for medical advice.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container">
          <div style={{
            textAlign: 'center',
            padding: 'var(--spacing-2xl)',
            backgroundColor: 'var(--color-primary)',
            borderRadius: 'var(--radius-lg)',
            color: 'white',
          }}>
            <h2 style={{ color: '#0F172A', marginBottom: 'var(--spacing-md)', fontSize: '2rem' }}>
              Join the Revolution in Rabbit Behavior Understanding
            </h2>
            <p style={{
              fontSize: '1.125rem',
              marginBottom: 'var(--spacing-lg)',
              color: 'rgba(15, 23, 42, 0.9)',
              lineHeight: '1.8',
            }}>
              Participate in our beta testing program and contribute to the first AI-powered application for 
              rabbit behavior recognition. Help us advance the understanding of one of the most misunderstood 
              companion animals and shape the future of evidence-based pet care.
            </p>
            <Link href="/contact" className="btn btn-primary btn-large" style={{
              backgroundColor: '#0F172A',
              color: 'var(--color-primary)',
            }}>
              Get Early Access
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

