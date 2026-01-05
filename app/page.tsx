import Link from 'next/link'

export default function Home() {
  return (
    <>
      {/* Hero Section με ζωντανή εικόνα */}
      <section style={{
        position: 'relative',
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #14B8A6 0%, #0D9488 100%)',
      }}>
        {/* Background Image Overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'url(https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.15,
          zIndex: 1,
        }} />
        
        {/* Gradient Overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, rgba(20, 184, 166, 0.92) 0%, rgba(13, 148, 136, 0.92) 100%)',
          zIndex: 2,
        }} />

        <div className="container" style={{
          position: 'relative',
          zIndex: 3,
          padding: 'var(--spacing-3xl) var(--spacing-md)',
        }}>
          <h1 style={{
            color: '#F1F5F9',
            marginBottom: 'var(--spacing-md)',
            textShadow: '0 2px 20px rgba(0, 0, 0, 0.3)',
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            fontWeight: 800,
            lineHeight: 1.1,
          }}>
            Understand Your Rabbit Like Never Before 🐇
          </h1>
          
          <p style={{
            fontSize: 'clamp(1.25rem, 3vw, 1.75rem)',
            color: 'rgba(241, 245, 249, 0.95)',
            maxWidth: '800px',
            margin: '0 auto var(--spacing-lg)',
            lineHeight: '1.6',
            fontWeight: 600,
          }}>
            See what your rabbit is feeling — without guesswork.
            <br />
            <span style={{ fontSize: '1.1em', fontWeight: 700 }}>
              Visual AI analyzes body language & movement.
            </span>
          </p>

          {/* Quick Stats */}
          <div style={{
            display: 'flex',
            gap: 'var(--spacing-xl)',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginTop: 'var(--spacing-xl)',
            marginBottom: 'var(--spacing-md)',
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 800,
                color: '#F1F5F9',
                marginBottom: 'var(--spacing-xs)',
              }}>
                100%
              </div>
              <div style={{
                fontSize: '1rem',
                color: 'rgba(241, 245, 249, 0.9)',
                fontWeight: 600,
              }}>
                On-Device Processing
              </div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 800,
                color: '#F1F5F9',
                marginBottom: 'var(--spacing-xs)',
              }}>
                #1
              </div>
              <div style={{
                fontSize: '1rem',
                color: 'rgba(241, 245, 249, 0.9)',
                fontWeight: 600,
              }}>
                AI for Rabbits
              </div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 800,
                color: '#F1F5F9',
                marginBottom: 'var(--spacing-xs)',
              }}>
                🐇
              </div>
              <div style={{
                fontSize: '1rem',
                color: 'rgba(241, 245, 249, 0.9)',
                fontWeight: 600,
              }}>
                Visual Analysis
              </div>
            </div>
          </div>

          <div style={{
            display: 'flex',
            gap: 'var(--spacing-md)',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginTop: 'var(--spacing-xl)',
          }}>
            <Link href="/contact" className="btn btn-primary btn-large" style={{
              fontSize: '1.25rem',
              padding: 'var(--spacing-md) var(--spacing-2xl)',
              backgroundColor: '#0F172A',
              color: '#F1F5F9',
              boxShadow: '0 8px 32px rgba(15, 23, 42, 0.4)',
            }}>
              Get Early Access — Android Beta
            </Link>
            <Link href="/how-it-works" className="btn btn-secondary btn-large" style={{
              backgroundColor: 'rgba(15, 23, 42, 0.2)',
              color: '#F1F5F9',
              borderColor: '#F1F5F9',
              borderWidth: '2px',
              fontSize: '1.125rem',
              padding: 'var(--spacing-md) var(--spacing-2xl)',
            }}>
              See how it works →
            </Link>
          </div>
        </div>
      </section>

      {/* Value Proposition - Πιο καθαρό μήνυμα */}
      <section className="section" style={{ backgroundColor: 'var(--color-surface)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-2xl)' }}>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: 'var(--spacing-lg)' }}>
              The First Visual AI for Rabbit Behavior 🐇
            </h2>
            <p style={{ 
              maxWidth: '700px', 
              margin: '0 auto', 
              fontSize: '1.5rem', 
              lineHeight: '1.8',
              color: 'var(--color-text-light)',
              fontWeight: 500,
            }}>
              Rabbits communicate silently through body language. 
              <strong style={{ color: 'var(--color-primary)' }}> We see what they're doing</strong> — 
              not just what they're saying.
            </p>
          </div>

          {/* Εικονογραφημένες κάρτες - Τρόποι λειτουργίας */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'var(--spacing-xl)',
            marginTop: 'var(--spacing-2xl)',
          }}>
            <div className="card" style={{
              textAlign: 'center',
              background: 'linear-gradient(135deg, var(--color-surface) 0%, var(--color-surface-variant) 100%)',
              border: '2px solid var(--color-primary)',
              boxShadow: '0 8px 24px rgba(79, 209, 199, 0.2)',
            }}>
              <div style={{
                width: '100px',
                height: '100px',
                borderRadius: 'var(--radius-full)',
                backgroundColor: 'var(--color-primary-light)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '3.5rem',
                margin: '0 auto var(--spacing-md)',
                boxShadow: '0 4px 16px rgba(79, 209, 199, 0.3)',
              }}>
                📸
              </div>
              <h3 style={{ color: 'var(--color-primary)', fontSize: '1.5rem', marginBottom: 'var(--spacing-sm)' }}>
                Capture & Review
              </h3>
              <p style={{ lineHeight: '1.7', fontSize: '1.05rem' }}>
                Record videos or upload photos of your rabbit. Our AI processes visual data in real-time, 
                analyzing body language and movement patterns that audio-based apps miss.
              </p>
            </div>

            <div className="card" style={{
              textAlign: 'center',
              background: 'linear-gradient(135deg, var(--color-surface) 0%, var(--color-surface-variant) 100%)',
              border: '2px solid var(--color-primary)',
              boxShadow: '0 8px 24px rgba(79, 209, 199, 0.2)',
            }}>
              <div style={{
                width: '100px',
                height: '100px',
                borderRadius: 'var(--radius-full)',
                backgroundColor: 'var(--color-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '3.5rem',
                margin: '0 auto var(--spacing-md)',
                boxShadow: '0 4px 16px rgba(79, 209, 199, 0.3)',
              }}>
                🧠
              </div>
              <h3 style={{ color: 'var(--color-primary)', fontSize: '1.5rem', marginBottom: 'var(--spacing-sm)' }}>
                Behavior Insights
              </h3>
              <p style={{ lineHeight: '1.7', fontSize: '1.05rem' }}>
                Get instant, evidence-based interpretations of your rabbit's behavior. Understand their 
                emotional state, stress levels, and wellbeing indicators through advanced computer vision analysis.
              </p>
            </div>

            <div className="card" style={{
              textAlign: 'center',
              background: 'linear-gradient(135deg, var(--color-surface) 0%, var(--color-surface-variant) 100%)',
              border: '2px solid var(--color-primary)',
              boxShadow: '0 8px 24px rgba(79, 209, 199, 0.2)',
            }}>
              <div style={{
                width: '100px',
                height: '100px',
                borderRadius: 'var(--radius-full)',
                backgroundColor: 'var(--color-success)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '3.5rem',
                margin: '0 auto var(--spacing-md)',
                boxShadow: '0 4px 16px rgba(16, 185, 129, 0.3)',
              }}>
                📊
              </div>
              <h3 style={{ color: 'var(--color-primary)', fontSize: '1.5rem', marginBottom: 'var(--spacing-sm)' }}>
                Trends & Reports
              </h3>
              <p style={{ lineHeight: '1.7', fontSize: '1.05rem' }}>
                Track behavioral patterns over time. Generate detailed reports for veterinary consultation 
                and monitor your rabbit's health trends with comprehensive analytics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Rabbits Section */}
      <section className="section">
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
              }}>🐇</div>
              <h3 style={{ color: 'var(--color-primary)', fontSize: '1.5rem' }}>Revolutionary Rabbit Behavior Recognition</h3>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.7' }}>
                <strong>Animind represents the first AI-powered application</strong> specifically engineered for 
                rabbit behavior analysis. Rabbits are among the most misunderstood companion animals, with 
                communication methods that are primarily visual and silent. Our proprietary computer vision 
                models decode their subtle body language, postural indicators, and movement patterns—offering 
                pet owners unprecedented insight into their rabbit's wellbeing and emotional state.
              </p>
            </div>

            <div className="card" style={{
              border: '1px solid var(--color-border)',
              opacity: 0.8,
            }}>
              <div style={{
                fontSize: '4rem',
                marginBottom: 'var(--spacing-md)',
                filter: 'grayscale(0.3)',
              }}>🐱</div>
              <h3 style={{ color: 'var(--color-text-light)' }}>Cats Coming Soon</h3>
              <p style={{ color: 'var(--color-text-muted)' }}>
                We're expanding to cats! Join our testing program to be among the first 
                to experience cat behavior analysis.
              </p>
            </div>

            <div className="card" style={{
              border: '1px solid var(--color-border)',
              opacity: 0.8,
            }}>
              <div style={{
                fontSize: '4rem',
                marginBottom: 'var(--spacing-md)',
                filter: 'grayscale(0.3)',
              }}>🐶</div>
              <h3 style={{ color: 'var(--color-text-light)' }}>Dogs Coming Soon</h3>
              <p style={{ color: 'var(--color-text-muted)' }}>
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

      {/* Video/GIF Placeholder Section */}
      <section className="section" style={{ backgroundColor: 'var(--color-surface)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-xl)' }}>
            <h2>See Animind in Action</h2>
            <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.125rem', color: 'var(--color-text-light)' }}>
              Watch how our visual AI analyzes rabbit behavior in real-time
            </p>
          </div>
          
          <div style={{
            maxWidth: '900px',
            margin: '0 auto',
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
            backgroundColor: 'var(--color-surface-variant)',
            aspectRatio: '16/9',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '2px solid var(--color-primary)',
          }}>
            <div style={{
              textAlign: 'center',
              padding: 'var(--spacing-xl)',
              color: 'var(--color-text-muted)',
            }}>
              <div style={{ fontSize: '4rem', marginBottom: 'var(--spacing-md)' }}>📹</div>
              <p style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: 'var(--spacing-sm)' }}>
                Demo Video Coming Soon
              </p>
              <p style={{ fontSize: '1rem' }}>
                Watch the app analyze rabbit behavior in real-time
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing / Future Plans */}
      <section className="section" style={{ backgroundColor: 'var(--color-surface)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-2xl)' }}>
            <h2>Future Plans & Pricing</h2>
            <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.125rem', color: 'var(--color-text-light)' }}>
              We're building Animind to be accessible to all pet owners
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 'var(--spacing-xl)',
            maxWidth: '1000px',
            margin: '0 auto',
          }}>
            <div className="card" style={{
              textAlign: 'center',
              background: 'linear-gradient(135deg, var(--color-surface) 0%, var(--color-surface-variant) 100%)',
              border: '2px solid var(--color-primary)',
            }}>
              <h3 style={{ color: 'var(--color-primary)', fontSize: '1.5rem', marginBottom: 'var(--spacing-md)' }}>
                Beta Testing
              </h3>
              <div style={{
                fontSize: '2.5rem',
                fontWeight: 700,
                color: 'var(--color-primary)',
                marginBottom: 'var(--spacing-md)',
              }}>
                FREE
              </div>
              <ul style={{
                listStyle: 'none',
                textAlign: 'left',
                marginBottom: 'var(--spacing-lg)',
                lineHeight: '2',
              }}>
                <li>✅ Early access to all features</li>
                <li>✅ Unlimited behavior analysis</li>
                <li>✅ Priority support</li>
                <li>✅ Help shape the product</li>
              </ul>
              <Link href="/contact" className="btn btn-primary" style={{ width: '100%' }}>
                Join Beta Program
              </Link>
            </div>

            <div className="card" style={{
              textAlign: 'center',
              background: 'linear-gradient(135deg, var(--color-surface) 0%, var(--color-surface-variant) 100%)',
              border: '2px solid var(--color-primary-light)',
              transform: 'scale(1.05)',
            }}>
              <div style={{
                backgroundColor: 'var(--color-primary)',
                color: '#0F172A',
                padding: 'var(--spacing-xs) var(--spacing-md)',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.9rem',
                fontWeight: 600,
                display: 'inline-block',
                marginBottom: 'var(--spacing-md)',
              }}>
                COMING SOON
              </div>
              <h3 style={{ color: 'var(--color-primary)', fontSize: '1.5rem', marginBottom: 'var(--spacing-md)' }}>
                Premium
              </h3>
              <div style={{
                fontSize: '2.5rem',
                fontWeight: 700,
                color: 'var(--color-primary)',
                marginBottom: 'var(--spacing-md)',
              }}>
                TBD
              </div>
              <ul style={{
                listStyle: 'none',
                textAlign: 'left',
                marginBottom: 'var(--spacing-lg)',
                lineHeight: '2',
              }}>
                <li>✅ Advanced analytics</li>
                <li>✅ Multi-pet support</li>
                <li>✅ Export reports</li>
                <li>✅ Cloud sync</li>
                <li>✅ Priority AI processing</li>
              </ul>
              <div style={{
                padding: 'var(--spacing-sm)',
                backgroundColor: 'var(--color-surface-variant)',
                borderRadius: 'var(--radius-sm)',
                fontSize: '0.9rem',
                color: 'var(--color-text-muted)',
              }}>
                Pricing details coming soon
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section" style={{ backgroundColor: 'var(--color-surface)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-2xl)' }}>
            <h2>Frequently Asked Questions</h2>
            <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.125rem', color: 'var(--color-text-light)' }}>
              Common questions about Animind and how it works
            </p>
          </div>

          <div style={{
            display: 'grid',
            gap: 'var(--spacing-md)',
            maxWidth: '800px',
            margin: '0 auto',
          }}>
            <div className="card" style={{
              background: 'linear-gradient(135deg, var(--color-surface) 0%, var(--color-surface-variant) 100%)',
            }}>
              <h3 style={{ color: 'var(--color-primary)', fontSize: '1.25rem', marginBottom: 'var(--spacing-sm)' }}>
                How does Animind work?
              </h3>
              <p style={{ lineHeight: '1.7', color: 'var(--color-text-light)' }}>
                Animind uses advanced computer vision technology to analyze your rabbit's body language through video and photos. 
                The AI processes visual data on your device, detecting subtle behavioral patterns that are often missed by human observers.
              </p>
            </div>

            <div className="card" style={{
              background: 'linear-gradient(135deg, var(--color-surface) 0%, var(--color-surface-variant) 100%)',
            }}>
              <h3 style={{ color: 'var(--color-primary)', fontSize: '1.25rem', marginBottom: 'var(--spacing-sm)' }}>
                Is my data private?
              </h3>
              <p style={{ lineHeight: '1.7', color: 'var(--color-text-light)' }}>
                Yes! All video analysis happens 100% on your device. Your pet's images and videos never leave your phone 
                unless you explicitly choose to provide feedback to improve the AI. Most data is stored locally on your device.
              </p>
            </div>

            <div className="card" style={{
              background: 'linear-gradient(135deg, var(--color-surface) 0%, var(--color-surface-variant) 100%)',
            }}>
              <h3 style={{ color: 'var(--color-primary)', fontSize: '1.25rem', marginBottom: 'var(--spacing-sm)' }}>
                Why rabbits first?
              </h3>
              <p style={{ lineHeight: '1.7', color: 'var(--color-text-light)' }}>
                Rabbits are among the most misunderstood companion animals. They communicate almost exclusively through 
                subtle visual cues, making them perfect for visual AI analysis. Animind is the first AI application 
                specifically designed for rabbit behavior recognition.
              </p>
            </div>

            <div className="card" style={{
              background: 'linear-gradient(135deg, var(--color-surface) 0%, var(--color-surface-variant) 100%)',
            }}>
              <h3 style={{ color: 'var(--color-primary)', fontSize: '1.25rem', marginBottom: 'var(--spacing-sm)' }}>
                Can Animind diagnose my rabbit's health?
              </h3>
              <p style={{ lineHeight: '1.7', color: 'var(--color-text-light)' }}>
                <strong>No.</strong> Animind is for informational purposes only and does not replace professional veterinary care. 
                It helps you understand your rabbit's behavior patterns, but you should always consult a qualified veterinarian 
                for medical diagnoses, treatment, or health concerns.
              </p>
            </div>

            <div className="card" style={{
              background: 'linear-gradient(135deg, var(--color-surface) 0%, var(--color-surface-variant) 100%)',
            }}>
              <h3 style={{ color: 'var(--color-primary)', fontSize: '1.25rem', marginBottom: 'var(--spacing-sm)' }}>
                When will cats and dogs be available?
              </h3>
              <p style={{ lineHeight: '1.7', color: 'var(--color-text-light)' }}>
                We're actively working on expanding Animind to support cats and dogs. Join our beta testing program to 
                get early access when these features become available.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Medical Disclaimer - Πιο Visible */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div style={{
            padding: 'var(--spacing-xl)',
            backgroundColor: 'rgba(239, 68, 68, 0.15)',
            borderRadius: 'var(--radius-lg)',
            border: '2px solid var(--color-error)',
            textAlign: 'center',
            boxShadow: '0 4px 16px rgba(239, 68, 68, 0.2)',
          }}>
            <h3 style={{ 
              color: 'var(--color-error)', 
              fontSize: '1.5rem',
              marginBottom: 'var(--spacing-md)',
            }}>
              ⚠️ Important: Information Only — Not a Vet Tool
            </h3>
            <p style={{ 
              fontSize: '1.125rem', 
              color: 'var(--color-text)',
              lineHeight: '1.8',
              margin: 0,
              fontWeight: 500,
            }}>
              <strong>Animind is for informational purposes only and does not replace professional veterinary care.</strong>
              <br />
              Always consult a qualified veterinarian for medical advice, diagnoses, or treatment plans.
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
              fontSize: '1.25rem',
              padding: 'var(--spacing-md) var(--spacing-2xl)',
              boxShadow: '0 8px 32px rgba(15, 23, 42, 0.4)',
            }}>
              Get Early Access — Join Beta Now
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

