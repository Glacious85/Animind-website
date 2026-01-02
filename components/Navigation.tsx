'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      backgroundColor: 'var(--color-surface)',
      boxShadow: 'var(--shadow-sm)',
      padding: 'var(--spacing-md) 0',
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <Link href="/" style={{
          fontSize: '1.5rem',
          fontWeight: 700,
          color: 'var(--color-primary)',
        }}>
          Animind
        </Link>

        {/* Desktop Menu */}
        <div style={{
          display: 'none',
          gap: 'var(--spacing-lg)',
          alignItems: 'center',
        }} className="desktop-menu">
          <Link href="/">Home</Link>
          <Link href="/how-it-works">How It Works</Link>
          <Link href="/about">About</Link>
          <Link href="/privacy">Privacy</Link>
          <Link href="/contact" className="btn btn-primary">Join Testing</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{
            display: 'block',
            background: 'none',
            border: 'none',
            fontSize: '1.5rem',
            cursor: 'pointer',
            color: 'var(--color-text)',
          }}
          className="mobile-menu-button"
          aria-label="Toggle menu"
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--spacing-md)',
          padding: 'var(--spacing-md)',
          backgroundColor: 'var(--color-surface)',
          borderTop: '1px solid var(--color-border)',
        }} className="mobile-menu">
          <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/how-it-works" onClick={() => setIsOpen(false)}>How It Works</Link>
          <Link href="/about" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="/privacy" onClick={() => setIsOpen(false)}>Privacy</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="btn btn-primary">Join Testing</Link>
        </div>
      )}

      <style jsx>{`
        @media (min-width: 768px) {
          .desktop-menu {
            display: flex !important;
          }
          .mobile-menu-button {
            display: none !important;
          }
          .mobile-menu {
            display: none !important;
          }
        }
        @media (max-width: 767px) {
          .desktop-menu {
            display: none !important;
          }
        }
      `}</style>
    </nav>
  )
}

