import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const location = useLocation()

  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>🛍️ ShopEase</div>
      <div style={styles.links}>
        <CustomLink to="/" label="Products" active={location.pathname === '/'} />
        <CustomLink to="/favorites" label="Favorites" active={location.pathname === '/favorites'} />
      </div>
    </nav>
  )
}

function CustomLink({ to, label, active }) {
  return (
    <Link
      to={to}
      style={{
        ...styles.link,
        ...(active ? styles.activeLink : {}),
      }}
    >
      {label}
    </Link>
  )
}

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    background: 'linear-gradient(to right, #667eea, #764ba2)',
    boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
    color: '#fff',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    fontFamily: `'Segoe UI', sans-serif`,
    animation: 'slideInLeft 1s ease',
  },
  links: {
    display: 'flex',
    gap: '1.5rem',
    animation: 'fadeIn 1s ease-in-out',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '1.1rem',
    padding: '0.5rem 1rem',
    borderRadius: '8px',
    transition: 'all 0.3s ease',
    fontWeight: '500',
  },
  activeLink: {
    background: '#ffffff33',
    boxShadow: '0 2px 6px rgba(255,255,255,0.4)',
  },
}
