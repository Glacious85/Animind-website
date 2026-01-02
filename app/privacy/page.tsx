export default function Privacy() {
  return (
    <section className="section">
      <div className="container" style={{ maxWidth: '800px' }}>
        <h1 style={{ marginBottom: 'var(--spacing-md)' }}>Privacy & Ethics</h1>
        
        <div style={{ marginBottom: 'var(--spacing-xl)' }}>
          <p style={{ fontSize: '1.125rem', color: 'var(--color-text-light)' }}>
            Your privacy and your pet's wellbeing are our top priorities. Here's how we handle 
            your data and our commitment to ethical practices.
          </p>
        </div>

        {/* Privacy Section */}
        <div className="card" style={{ marginBottom: 'var(--spacing-lg)' }}>
          <h2 style={{ color: 'var(--color-primary)', marginBottom: 'var(--spacing-md)' }}>
            🔒 Your Privacy Matters
          </h2>
          
          <h3>Data Stays on Your Device</h3>
          <p>
            Whenever possible, all video analysis happens directly on your device. This means 
            your pet's videos never leave your phone unless you explicitly choose to share them 
            for research purposes.
          </p>

          <h3>What We Collect</h3>
          <p>
            We only collect the minimum data necessary to provide you with behavior analysis:
          </p>
          <ul style={{
            marginLeft: 'var(--spacing-lg)',
            marginBottom: 'var(--spacing-md)',
            color: 'var(--color-text-light)',
          }}>
            <li>Video recordings you choose to analyze (processed locally when possible)</li>
            <li>Behavior analysis results (stored securely on your device)</li>
            <li>Account information (if you choose to create an account)</li>
            <li>App usage statistics (to improve the app experience)</li>
          </ul>

          <h3>GDPR Compliance</h3>
          <p>
            If you're in the European Union, you have the right to:
          </p>
          <ul style={{
            marginLeft: 'var(--spacing-lg)',
            marginBottom: 'var(--spacing-md)',
            color: 'var(--color-text-light)',
          }}>
            <li>Access your personal data</li>
            <li>Request deletion of your data</li>
            <li>Export your data</li>
            <li>Opt-out of data collection</li>
          </ul>
          <p>
            To exercise these rights, please contact us through our contact page.
          </p>
        </div>

        {/* Ethics Section */}
        <div className="card" style={{ marginBottom: 'var(--spacing-lg)' }}>
          <h2 style={{ color: 'var(--color-primary)', marginBottom: 'var(--spacing-md)' }}>
            💚 Our Ethical Commitment
          </h2>
          
          <h3>Animal Welfare First</h3>
          <p>
            Animind is built with a deep respect for animal welfare. We believe technology should 
            enhance the bond between pets and their owners, never replace genuine care and attention.
          </p>

          <h3>No Harmful Practices</h3>
          <p>
            We do not support or enable any practices that could harm animals. Our app is designed 
            to help you understand your pet better, not to control or manipulate them.
          </p>

          <h3>Research & Improvement</h3>
          <p>
            With your explicit consent, anonymized data may be used to improve our AI models and 
            contribute to scientific research on animal behavior. This always happens with your 
            full knowledge and consent.
          </p>
        </div>

        {/* Important Disclaimer */}
        <div style={{
          padding: 'var(--spacing-lg)',
          backgroundColor: 'rgba(245, 158, 11, 0.15)',
          borderRadius: 'var(--radius-md)',
          border: '2px solid var(--color-warning)',
          marginTop: 'var(--spacing-xl)',
        }}>
          <h3 style={{ color: 'var(--color-warning)', marginBottom: 'var(--spacing-sm)', fontSize: '1.5rem' }}>
            ⚠️ Important Medical Disclaimer
          </h3>
          <p style={{ fontWeight: 700, fontSize: '1.25rem', marginBottom: 'var(--spacing-md)', color: 'var(--color-warning)' }}>
            This application does not replace professional veterinary care.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.8', marginBottom: 'var(--spacing-sm)' }}>
            Animind is designed for informational and supportive purposes only. It is not intended to diagnose, 
            treat, cure, or prevent any disease or medical condition in animals.
          </p>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.8', marginBottom: 'var(--spacing-sm)' }}>
            <strong>Always consult a qualified veterinarian</strong> for:
          </p>
          <ul style={{
            marginLeft: 'var(--spacing-lg)',
            marginBottom: 'var(--spacing-md)',
            fontSize: '1.05rem',
            lineHeight: '1.8',
          }}>
            <li>Medical diagnosis and treatment of your pet</li>
            <li>Signs of illness, distress, or unusual behavior</li>
            <li>Health concerns or emergency situations</li>
            <li>Questions about your pet's medical condition</li>
          </ul>
          <p style={{ fontSize: '1.05rem', lineHeight: '1.8', fontWeight: 600 }}>
            Animind is a tool to help you understand your pet's behavior patterns, but it cannot and 
            should not replace professional veterinary care. If you have any concerns about your pet's 
            health, seek immediate veterinary attention.
          </p>
        </div>

        {/* Contact */}
        <div style={{
          marginTop: 'var(--spacing-xl)',
          textAlign: 'center',
          padding: 'var(--spacing-lg)',
        }}>
          <p style={{ marginBottom: 'var(--spacing-md)' }}>
            Have questions about privacy or ethics? We're here to help.
          </p>
          <a href="/contact" className="btn btn-primary">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  )
}

