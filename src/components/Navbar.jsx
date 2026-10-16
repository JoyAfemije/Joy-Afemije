import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { navLinks } from '../data/portfolio';
import { useScrolled } from '../hooks/useScrolled';
import { useActiveSection } from '../hooks/useActiveSection';
import ThemeToggle from './ThemeToggle';
import Wordmark from './Wordmark';

export default function Navbar() {
  const scrolled = useScrolled(20);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const activeSection = useActiveSection([
    'home',
    'about',
    'skills',
    'tools',
    'projects',
    'contact',
  ]);

  // Close the mobile menu on Escape or when resizing past the breakpoint.
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    const onResize = () => window.innerWidth > 900 && setOpen(false);
    document.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    return () => {
      document.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  // A link like "/#about" is active when its section is in view on the home
  // page; "/portfolio" is active when we're on that route.
  const isActive = (href) => {
    if (href.startsWith('/#')) {
      return pathname === '/' && activeSection === href.slice(2);
    }
    return pathname === href;
  };

  const menuLinks = [
    ...navLinks,
    { label: 'Get in touch', href: '/#contact', cta: true },
  ];

  return (
    <>
      <header className={`nav ${scrolled ? 'scrolled' : ''}`}>
        <nav className="wrap nav-inner" aria-label="Primary">
          <Link to="/" className="nav-logo" onClick={() => setOpen(false)}>
            <Wordmark />
          </Link>

          <div className="nav-right">
            <ul className="nav-links">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className={`nav-link ${isActive(link.href) ? 'active' : ''}`}
                    aria-current={isActive(link.href) ? 'true' : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/#contact" className="nav-cta">
                  Get in touch
                </Link>
              </li>
            </ul>

            <ThemeToggle />

            <button
              className="nav-toggle"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((v) => !v)}
            >
              <span className="nav-toggle-bars">
                <span />
                <span />
                <span />
              </span>
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 0.8, 0.26, 1] }}
          >
            <div className="wrap">
              {menuLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={link.cta ? 'nav-cta' : ''}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
