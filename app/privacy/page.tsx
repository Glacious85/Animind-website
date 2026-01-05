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
            <strong>All video and image analysis happens 100% on your device</strong> using TensorFlow Lite. 
            This means your pet's images and videos are processed locally and never leave your phone 
            unless you explicitly choose to provide feedback to improve the AI (by tapping "Correct" or "Wrong" buttons).
          </p>
          <p>
            Most of your data is stored locally:
          </p>
          <ul style={{
            marginLeft: 'var(--spacing-lg)',
            marginBottom: 'var(--spacing-md)',
            color: 'var(--color-text-light)',
          }}>
            <li>✅ Pet profiles stored locally (Room database)</li>
            <li>✅ Behavior analysis history stored locally</li>
            <li>✅ Calendar events stored locally</li>
            <li>✅ Camera images saved locally to `training_images/` folder</li>
            <li>✅ All analysis processing happens on-device</li>
          </ul>
          <p>
            <strong>Remote storage only occurs when:</strong>
          </p>
          <ul style={{
            marginLeft: 'var(--spacing-lg)',
            marginBottom: 'var(--spacing-md)',
            color: 'var(--color-text-light)',
          }}>
            <li>You choose to sign in with Google (authentication data stored in Supabase)</li>
            <li>You provide feedback on behavior detection (training data uploaded to Supabase to improve AI models)</li>
          </ul>

          <h3>What We Collect</h3>
          <p>
            We only collect the minimum data necessary to provide you with behavior analysis:
          </p>
          <ul style={{
            marginLeft: 'var(--spacing-lg)',
            marginBottom: 'var(--spacing-md)',
            color: 'var(--color-text-light)',
          }}>
            <li><strong>Camera/Image Data:</strong> Camera frames captured during real-time analysis. Images are processed <strong>100% on-device</strong> using TensorFlow Lite. Images are saved locally and only uploaded to our servers if you choose to provide feedback to improve the AI.</li>
            <li><strong>Pet Profile Data:</strong> Pet name, type, photo, date of birth, and breed (all optional). Stored <strong>locally on your device only</strong>.</li>
            <li><strong>Behavior Analysis Results:</strong> Detected behaviors, confidence scores, timestamps, and body language features. Stored <strong>locally on your device</strong>.</li>
            <li><strong>User Feedback/Corrections:</strong> When you provide feedback (Correct/Wrong buttons), we collect the detected behavior, corrected behavior, confidence score, and timestamp. This data is uploaded to Supabase to improve our AI models. <strong>This is completely optional</strong> - you can skip feedback at any time.</li>
            <li><strong>Training Data:</strong> Only when you provide feedback, we upload anonymized training data (base64-encoded images, behavior labels, and body language features) to Supabase for AI model improvement. Images are optimized (224x224px, 60% JPEG quality) before upload.</li>
            <li><strong>Account Information (Optional):</strong> If you choose to sign in with Google, we collect your email, name, and avatar URL via Google OAuth. <strong>You can use the app in guest mode without creating an account.</strong></li>
            <li><strong>Calendar/Event Data:</strong> Pet care calendar events (vet appointments, vaccines, medications) stored <strong>locally on your device only</strong>.</li>
          </ul>

          <h3>Third-Party Services</h3>
          <p>
            We use the following third-party services:
          </p>
          <ul style={{
            marginLeft: 'var(--spacing-lg)',
            marginBottom: 'var(--spacing-md)',
            color: 'var(--color-text-light)',
          }}>
            <li><strong>Supabase:</strong> Used for user authentication (optional), training data storage (only when you provide feedback), and user profile storage (if authenticated). All data is encrypted in transit (HTTPS/TLS) and at rest. See <a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary)' }}>Supabase Privacy Policy</a>.</li>
            <li><strong>Google Sign-In:</strong> Optional authentication service. If you choose to sign in with Google, Google OAuth handles authentication. See <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary)' }}>Google Privacy Policy</a>.</li>
          </ul>

          <h3>What We Do NOT Collect</h3>
          <p>
            For transparency, here's what we <strong>do not</strong> collect:
          </p>
          <ul style={{
            marginLeft: 'var(--spacing-lg)',
            marginBottom: 'var(--spacing-md)',
            color: 'var(--color-text-light)',
          }}>
            <li>❌ <strong>No analytics or usage tracking</strong> - We do not use analytics services or track user behavior.</li>
            <li>❌ <strong>No crash reporting</strong> - We do not send crash reports or error logs to third parties.</li>
            <li>❌ <strong>No advertising data</strong> - We do not collect data for advertising purposes.</li>
            <li>❌ <strong>No data selling</strong> - We never sell your data to third parties.</li>
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
            To exercise these rights, please contact us at{' '}
            <a href="mailto:support@animind.zohodesk.eu" style={{ color: 'var(--color-primary)' }}>
              support@animind.zohodesk.eu
            </a>
            {' '}or through our contact page.
          </p>

          <h3>Data Deletion</h3>
          <p>
            You can delete your data at any time:
          </p>
          <ul style={{
            marginLeft: 'var(--spacing-lg)',
            marginBottom: 'var(--spacing-md)',
            color: 'var(--color-text-light)',
          }}>
            <li><strong>Local Data:</strong> Delete pet profiles from within the app, or uninstall the app to delete all local data.</li>
            <li><strong>Remote Data:</strong> Contact us at <a href="mailto:support@animind.zohodesk.eu" style={{ color: 'var(--color-primary)' }}>support@animind.zohodesk.eu</a> to request deletion of your data from our servers.</li>
          </ul>
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

