export default function Terms() {
  return (
    <section className="section">
      <div className="container" style={{ maxWidth: '800px' }}>
        <h1 style={{ marginBottom: 'var(--spacing-md)' }}>Terms of Service</h1>
        
        <div style={{ marginBottom: 'var(--spacing-xl)' }}>
          <p style={{ fontSize: '1.125rem', color: 'var(--color-text-light)' }}>
            <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
          <p style={{ fontSize: '1.125rem', color: 'var(--color-text-light)', marginTop: 'var(--spacing-md)' }}>
            Please read these Terms of Service carefully before using Animind. By using our app, you agree to be bound by these terms.
          </p>
        </div>

        {/* Acceptance of Terms */}
        <div className="card" style={{ marginBottom: 'var(--spacing-lg)' }}>
          <h2 style={{ color: 'var(--color-primary)', marginBottom: 'var(--spacing-md)' }}>
            1. Acceptance of Terms
          </h2>
          <p>
            By downloading, installing, or using Animind ("the App"), you agree to be bound by these Terms of Service 
            and our Privacy Policy. If you do not agree to these terms, please do not use the App.
          </p>
        </div>

        {/* Description of Service */}
        <div className="card" style={{ marginBottom: 'var(--spacing-lg)' }}>
          <h2 style={{ color: 'var(--color-primary)', marginBottom: 'var(--spacing-md)' }}>
            2. Description of Service
          </h2>
          <p>
            Animind is an AI-powered mobile application that uses computer vision technology to analyze pet behavior 
            through visual data (images and videos). The App provides informational insights about your pet's behavior 
            patterns and is designed for educational and supportive purposes.
          </p>
          <p style={{ marginTop: 'var(--spacing-md)' }}>
            <strong>Important:</strong> Animind is currently in beta testing. Features, functionality, and availability 
            may change without notice.
          </p>
        </div>

        {/* Medical Disclaimer */}
        <div className="card" style={{ 
          marginBottom: 'var(--spacing-lg)',
          border: '2px solid var(--color-error)',
          backgroundColor: 'rgba(239, 68, 68, 0.1)',
        }}>
          <h2 style={{ color: 'var(--color-error)', marginBottom: 'var(--spacing-md)' }}>
            3. Medical Disclaimer - CRITICAL
          </h2>
          <p style={{ fontWeight: 700, fontSize: '1.125rem', marginBottom: 'var(--spacing-md)' }}>
            Animind is for informational purposes only and does NOT replace professional veterinary care.
          </p>
          <p>
            By using Animind, you acknowledge and agree that:
          </p>
          <ul style={{
            marginLeft: 'var(--spacing-lg)',
            marginBottom: 'var(--spacing-md)',
            color: 'var(--color-text-light)',
            lineHeight: '1.8',
          }}>
            <li>Animind cannot diagnose, treat, cure, or prevent any disease or medical condition.</li>
            <li>Animind does not provide medical advice, diagnoses, or treatment recommendations.</li>
            <li>You must consult a qualified veterinarian for any health concerns, medical diagnoses, or treatment plans.</li>
            <li>You are solely responsible for your pet's health and wellbeing.</li>
            <li>Animind is not liable for any health decisions made based on information provided by the App.</li>
          </ul>
          <p style={{ fontWeight: 600, marginTop: 'var(--spacing-md)' }}>
            If your pet shows signs of illness, distress, or unusual behavior, seek immediate veterinary attention.
          </p>
        </div>

        {/* User Responsibilities */}
        <div className="card" style={{ marginBottom: 'var(--spacing-lg)' }}>
          <h2 style={{ color: 'var(--color-primary)', marginBottom: 'var(--spacing-md)' }}>
            4. User Responsibilities
          </h2>
          <p>You agree to:</p>
          <ul style={{
            marginLeft: 'var(--spacing-lg)',
            marginBottom: 'var(--spacing-md)',
            color: 'var(--color-text-light)',
            lineHeight: '1.8',
          }}>
            <li>Use the App only for lawful purposes and in accordance with these Terms.</li>
            <li>Provide accurate information when creating pet profiles or providing feedback.</li>
            <li>Not use the App to harm, abuse, or exploit animals in any way.</li>
            <li>Not attempt to reverse engineer, decompile, or extract source code from the App.</li>
            <li>Not use the App for commercial purposes without written permission.</li>
            <li>Maintain the security of your account credentials (if you create an account).</li>
            <li>Report any bugs, security issues, or concerns to us promptly.</li>
          </ul>
        </div>

        {/* Intellectual Property */}
        <div className="card" style={{ marginBottom: 'var(--spacing-lg)' }}>
          <h2 style={{ color: 'var(--color-primary)', marginBottom: 'var(--spacing-md)' }}>
            5. Intellectual Property
          </h2>
          <p>
            The App, including all content, features, functionality, AI models, computer vision algorithms, and 
            design elements, is owned by Animind and protected by copyright, trademark, and other intellectual 
            property laws.
          </p>
          <p style={{ marginTop: 'var(--spacing-md)' }}>
            You may not:
          </p>
          <ul style={{
            marginLeft: 'var(--spacing-lg)',
            marginBottom: 'var(--spacing-md)',
            color: 'var(--color-text-light)',
            lineHeight: '1.8',
          }}>
            <li>Copy, modify, or distribute the App or any part of it.</li>
            <li>Use Animind's trademarks, logos, or branding without permission.</li>
            <li>Extract or use the AI models, algorithms, or training data for other purposes.</li>
          </ul>
        </div>

        {/* User Content */}
        <div className="card" style={{ marginBottom: 'var(--spacing-lg)' }}>
          <h2 style={{ color: 'var(--color-primary)', marginBottom: 'var(--spacing-md)' }}>
            6. User Content and Feedback
          </h2>
          <p>
            When you provide feedback (by tapping "Correct" or "Wrong" buttons), you grant Animind a non-exclusive, 
            royalty-free, worldwide license to use, modify, and incorporate your feedback and associated data 
            (including anonymized images) to improve our AI models and services.
          </p>
          <p style={{ marginTop: 'var(--spacing-md)' }}>
            You retain ownership of your pet photos and videos. However, by providing feedback, you consent to 
            the upload of anonymized, optimized training data to our servers for AI improvement purposes.
          </p>
        </div>

        {/* Limitation of Liability */}
        <div className="card" style={{ marginBottom: 'var(--spacing-lg)' }}>
          <h2 style={{ color: 'var(--color-primary)', marginBottom: 'var(--spacing-md)' }}>
            7. Limitation of Liability
          </h2>
          <p>
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, ANIMIND AND ITS DEVELOPERS SHALL NOT BE LIABLE FOR:
          </p>
          <ul style={{
            marginLeft: 'var(--spacing-lg)',
            marginBottom: 'var(--spacing-md)',
            color: 'var(--color-text-light)',
            lineHeight: '1.8',
          }}>
            <li>Any indirect, incidental, special, consequential, or punitive damages.</li>
            <li>Any loss of data, profits, or business opportunities.</li>
            <li>Any health-related decisions made based on information from the App.</li>
            <li>Any harm to pets or property resulting from use or misuse of the App.</li>
            <li>Any errors, bugs, or interruptions in service.</li>
          </ul>
          <p style={{ marginTop: 'var(--spacing-md)' }}>
            The App is provided "AS IS" without warranties of any kind, express or implied.
          </p>
        </div>

        {/* Beta Testing */}
        <div className="card" style={{ marginBottom: 'var(--spacing-lg)' }}>
          <h2 style={{ color: 'var(--color-primary)', marginBottom: 'var(--spacing-md)' }}>
            8. Beta Testing Program
          </h2>
          <p>
            Animind is currently in beta testing. By participating in the beta program, you acknowledge that:
          </p>
          <ul style={{
            marginLeft: 'var(--spacing-lg)',
            marginBottom: 'var(--spacing-md)',
            color: 'var(--color-text-light)',
            lineHeight: '1.8',
          }}>
            <li>The App may contain bugs, errors, or incomplete features.</li>
            <li>Features may change, be removed, or added without notice.</li>
            <li>Data may be lost during updates or changes.</li>
            <li>You are using the App at your own risk.</li>
            <li>We appreciate your feedback to help improve the App.</li>
          </ul>
        </div>

        {/* Termination */}
        <div className="card" style={{ marginBottom: 'var(--spacing-lg)' }}>
          <h2 style={{ color: 'var(--color-primary)', marginBottom: 'var(--spacing-md)' }}>
            9. Termination
          </h2>
          <p>
            We reserve the right to suspend or terminate your access to the App at any time, with or without 
            cause or notice, for any reason, including violation of these Terms.
          </p>
          <p style={{ marginTop: 'var(--spacing-md)' }}>
            You may stop using the App at any time by uninstalling it from your device.
          </p>
        </div>

        {/* Changes to Terms */}
        <div className="card" style={{ marginBottom: 'var(--spacing-lg)' }}>
          <h2 style={{ color: 'var(--color-primary)', marginBottom: 'var(--spacing-md)' }}>
            10. Changes to Terms
          </h2>
          <p>
            We may update these Terms of Service from time to time. We will notify you of any material changes 
            by updating the "Last Updated" date at the top of this page. Your continued use of the App after 
            such changes constitutes acceptance of the updated Terms.
          </p>
        </div>

        {/* Governing Law */}
        <div className="card" style={{ marginBottom: 'var(--spacing-lg)' }}>
          <h2 style={{ color: 'var(--color-primary)', marginBottom: 'var(--spacing-md)' }}>
            11. Governing Law
          </h2>
          <p>
            These Terms shall be governed by and construed in accordance with applicable laws. Any disputes 
            arising from these Terms or use of the App shall be resolved through appropriate legal channels.
          </p>
        </div>

        {/* Contact */}
        <div style={{
          marginTop: 'var(--spacing-xl)',
          textAlign: 'center',
          padding: 'var(--spacing-lg)',
        }}>
          <p style={{ marginBottom: 'var(--spacing-md)' }}>
            Questions about these Terms? Contact us:
          </p>
          <a href="mailto:support@animind.zohodesk.eu" style={{
            fontSize: '1.125rem',
            fontWeight: 600,
            color: 'var(--color-primary)',
            marginRight: 'var(--spacing-md)',
          }}>
            support@animind.zohodesk.eu
          </a>
          <a href="/contact" className="btn btn-primary" style={{ marginLeft: 'var(--spacing-md)' }}>
            Contact Page
          </a>
        </div>
      </div>
    </section>
  )
}

