import { Link } from 'react-router-dom';
import { socials, footerMeta } from '../data/portfolio';
import { Icons } from './Icons';
import Wordmark from './Wordmark';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <span className="footer-copy">
          © {footerMeta.year}
          <Wordmark />
          All rights reserved.
        </span>
        <div className="footer-socials">
          <Link to="/portfolio" aria-label="View all work" title="All work">
            {Icons.code}
          </Link>
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
            >
              {Icons[s.icon]}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
