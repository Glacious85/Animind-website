export default function HowItWorks() {
  return (
    <section className="section">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-2xl)' }}>
          <h1>How It Works</h1>
          <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.125rem', lineHeight: '1.8' }}>
            Animind employs advanced computer vision technology to analyze visual behavioral data. 
            Our proprietary AI models process body language, movement patterns, and postural indicators 
            through comprehensive video and image analysis—providing insights that audio-based systems cannot deliver.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 'var(--spacing-xl)',
          marginTop: 'var(--spacing-2xl)',
        }}>
          {/* Step 1 */}
          <div className="card" style={{ textAlign: 'center' }}>
            <div style={{
              width: '80px',
              height: '80px',
              borderRadius: 'var(--radius-full)',
              backgroundColor: 'var(--color-primary-light)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2rem',
              margin: '0 auto var(--spacing-md)',
              fontWeight: 'bold',
              color: '#0F172A',
            }}>
              1
            </div>
            <h3 style={{ fontSize: '1.3rem', marginBottom: 'var(--spacing-sm)' }}>Record or Upload Visual Data</h3>
            <p style={{ lineHeight: '1.7' }}>
              Capture video footage using your device's camera or upload existing videos and photographs. 
              Unlike audio-only applications, Animind processes visual behavioral data—analyzing body language, 
              movement patterns, and postural indicators that are essential for understanding rabbit communication.
            </p>
          </div>

          {/* Step 2 */}
          <div className="card" style={{ textAlign: 'center' }}>
            <div style={{
              width: '80px',
              height: '80px',
              borderRadius: 'var(--radius-full)',
              backgroundColor: 'var(--color-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2rem',
              margin: '0 auto var(--spacing-md)',
              fontWeight: 'bold',
              color: '#0F172A',
            }}>
              2
            </div>
            <h3 style={{ fontSize: '1.3rem', marginBottom: 'var(--spacing-sm)' }}>Computer Vision Processing</h3>
            <p style={{ lineHeight: '1.7' }}>
              Our proprietary computer vision algorithms perform frame-by-frame analysis, detecting subtle 
              body language cues, movement patterns, and behavioral indicators. <strong>All processing occurs 
              on-device</strong>, ensuring complete privacy and data security while delivering real-time insights.
            </p>
          </div>

          {/* Step 3 */}
          <div className="card" style={{ textAlign: 'center' }}>
            <div style={{
              width: '80px',
              height: '80px',
              borderRadius: 'var(--radius-full)',
              backgroundColor: 'var(--color-success)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2rem',
              margin: '0 auto var(--spacing-md)',
              fontWeight: 'bold',
              color: 'white',
            }}>
              3
            </div>
            <h3 style={{ fontSize: '1.3rem', marginBottom: 'var(--spacing-sm)' }}>Behavioral Insights & Recommendations</h3>
            <p style={{ lineHeight: '1.7' }}>
              Receive comprehensive behavioral analysis reports with evidence-based interpretations. 
              Our system provides actionable insights into your rabbit's emotional state, wellbeing indicators, 
              and behavioral patterns—enabling informed care decisions.
            </p>
          </div>
        </div>

        {/* Additional Info */}
        <div style={{
          marginTop: 'var(--spacing-3xl)',
          padding: 'var(--spacing-xl)',
          backgroundColor: 'var(--color-surface)',
          borderRadius: 'var(--radius-lg)',
          textAlign: 'center',
        }}>
          <h3 style={{ marginBottom: 'var(--spacing-md)', fontSize: '1.5rem' }}>Specialized for Rabbit Behavior Recognition</h3>
          <p style={{ maxWidth: '700px', margin: '0 auto', lineHeight: '1.8', fontSize: '1.05rem' }}>
            Unlike applications that rely exclusively on audio analysis, Animind employs <strong>computer vision 
            technology</strong> to interpret visual behavioral data. This approach is essential for rabbits, 
            who communicate almost entirely through subtle body language, ear positioning, and postural changes. 
            As the first AI-powered application designed specifically for rabbit behavior analysis, Animind 
            addresses a critical gap in understanding one of the most misunderstood companion animals.
          </p>
        </div>
      </div>
    </section>
  )
}

