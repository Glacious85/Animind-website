import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{
      backgroundColor: 'var(--color-surface)',
      borderTop: '1px solid var(--color-border)',
      padding: 'var(--spacing-xl) 0',
      marginTop: 'var(--spacing-3xl)',
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: 'var(--spacing-lg)',
          marginBottom: 'var(--spacing-lg)',
        }}>
          <div>
            <h3 style={{ marginBottom: 'var(--spacing-sm)', fontSize: '1.25rem' }}>Animind</h3>
            <p style={{ color: 'var(--color-text-light)', fontSize: '0.9rem' }}>
              Understanding your pet's behavior through AI.
            </p>
          </div>
          
          <div>
            <h4 style={{ marginBottom: 'var(--spacing-sm)', fontSize: '1rem' }}>Pages</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-xs)' }}>
              <Link href="/how-it-works" style={{ color: 'var(--color-text-light)', fontSize: '0.9rem' }}>How It Works</Link>
              <Link href="/about" style={{ color: 'var(--color-text-light)', fontSize: '0.9rem' }}>About</Link>
              <Link href="/privacy" style={{ color: 'var(--color-text-light)', fontSize: '0.9rem' }}>Privacy & Ethics</Link>
              <Link href="/contact" style={{ color: 'var(--color-text-light)', fontSize: '0.9rem' }}>Contact</Link>
            </div>
          </div>
          
          <div>
            <h4 style={{ marginBottom: 'var(--spacing-sm)', fontSize: '1rem' }}>Medical Disclaimer</h4>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', lineHeight: '1.6', fontWeight: 500 }}>
              <strong>⚠️ Important:</strong> This application does not replace professional veterinary care. 
              Always consult a qualified veterinarian for medical advice, diagnosis, or treatment of your pet.
            </p>
          </div>
        </div>
        
        <div style={{
          paddingTop: 'var(--spacing-lg)',
          borderTop: '1px solid var(--color-border)',
          textAlign: 'center',
          color: 'var(--color-text-muted)',
          fontSize: '0.85rem',
        }}>
          <p style={{ marginBottom: 'var(--spacing-xs)' }}>
            © {new Date().getFullYear()} Animind. All rights reserved.
          </p>
          <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
            Animind™ is a trademark. This application is for informational purposes only and does not 
            constitute veterinary advice. Consult a qualified veterinarian for medical concerns.
          </p>
        </div>
      </div>
    </footer>
  )
}

