'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    petType: 'rabbit',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you'd send this to a backend
    // For now, we'll use a mailto link or show success message
    const subject = `Beta Tester Application - ${formData.petType}`
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\nPet Type: ${formData.petType}\n\nMessage:\n${formData.message}`
    
    // You can replace this email with your actual email
    window.location.href = `mailto:beta@animind.app?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    
    setSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section className="section">
      <div className="container" style={{ maxWidth: '700px' }}>
        <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-2xl)' }}>
          <h1>Join Our Beta Testing Program</h1>
          <p style={{ fontSize: '1.125rem', color: 'var(--color-text-light)' }}>
            Help us improve Animind and get early access to new features. We'd love to have you!
          </p>
        </div>

        {submitted ? (
          <div className="card" style={{
            textAlign: 'center',
            padding: 'var(--spacing-xl)',
            backgroundColor: 'var(--color-success)',
            color: 'white',
          }}>
            <h2 style={{ color: 'white', marginBottom: 'var(--spacing-md)' }}>Thank You! 🎉</h2>
            <p style={{ fontSize: '1.125rem', marginBottom: 'var(--spacing-md)' }}>
              We've received your application. If you used the email link, we'll be in touch soon!
            </p>
            <p>
              If the email didn't open, please send us an email at{' '}
              <a href="mailto:beta@animind.app" style={{ color: 'white', textDecoration: 'underline' }}>
                beta@animind.app
              </a>
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="btn btn-secondary"
              style={{ marginTop: 'var(--spacing-md)', backgroundColor: 'var(--color-surface-variant)', color: 'var(--color-success)' }}
            >
              Submit Another Application
            </button>
          </div>
        ) : (
          <div className="card">
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: 'var(--spacing-md)' }}>
                <label htmlFor="name" style={{
                  display: 'block',
                  marginBottom: 'var(--spacing-xs)',
                  fontWeight: 600,
                  color: 'var(--color-text)',
                }}>
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: 'var(--spacing-sm)',
                    border: '2px solid var(--color-border)',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '1rem',
                    fontFamily: 'inherit',
                    backgroundColor: 'var(--color-surface-variant)',
                    color: 'var(--color-text)',
                  }}
                />
              </div>

              <div style={{ marginBottom: 'var(--spacing-md)' }}>
                <label htmlFor="email" style={{
                  display: 'block',
                  marginBottom: 'var(--spacing-xs)',
                  fontWeight: 600,
                  color: 'var(--color-text)',
                }}>
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: 'var(--spacing-sm)',
                    border: '2px solid var(--color-border)',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '1rem',
                    fontFamily: 'inherit',
                    backgroundColor: 'var(--color-surface-variant)',
                    color: 'var(--color-text)',
                  }}
                />
              </div>

              <div style={{ marginBottom: 'var(--spacing-md)' }}>
                <label htmlFor="petType" style={{
                  display: 'block',
                  marginBottom: 'var(--spacing-xs)',
                  fontWeight: 600,
                  color: 'var(--color-text)',
                }}>
                  Pet Type *
                </label>
                <select
                  id="petType"
                  name="petType"
                  required
                  value={formData.petType}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: 'var(--spacing-sm)',
                    border: '2px solid var(--color-border)',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '1rem',
                    fontFamily: 'inherit',
                    backgroundColor: 'var(--color-surface-variant)',
                    color: 'var(--color-text)',
                  }}
                >
                  <option value="rabbit">Rabbit (Currently Available)</option>
                  <option value="cat">Cat (Coming Soon)</option>
                  <option value="dog">Dog (Coming Soon)</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div style={{ marginBottom: 'var(--spacing-lg)' }}>
                <label htmlFor="message" style={{
                  display: 'block',
                  marginBottom: 'var(--spacing-xs)',
                  fontWeight: 600,
                  color: 'var(--color-text)',
                }}>
                  Tell Us About You & Your Pet (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="What interests you about Animind? What would you like to see in the app?"
                  style={{
                    width: '100%',
                    padding: 'var(--spacing-sm)',
                    border: '2px solid var(--color-border)',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '1rem',
                    fontFamily: 'inherit',
                    resize: 'vertical',
                    backgroundColor: 'var(--color-surface-variant)',
                    color: 'var(--color-text)',
                  }}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-large"
                style={{ width: '100%' }}
              >
                Submit Application
              </button>
            </form>
          </div>
        )}

        {/* Alternative Contact */}
        <div style={{
          marginTop: 'var(--spacing-xl)',
          textAlign: 'center',
          padding: 'var(--spacing-lg)',
          backgroundColor: 'var(--color-surface)',
          borderRadius: 'var(--radius-md)',
        }}>
          <h3 style={{ marginBottom: 'var(--spacing-sm)' }}>Prefer Email?</h3>
          <p style={{ marginBottom: 'var(--spacing-md)', color: 'var(--color-text-light)' }}>
            You can also reach us directly at:
          </p>
          <a href="mailto:beta@animind.app" style={{
            fontSize: '1.125rem',
            fontWeight: 600,
            color: 'var(--color-primary)',
          }}>
            beta@animind.app
          </a>
        </div>
      </div>
    </section>
  )
}

