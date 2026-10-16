import { useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import { MotionConfig } from 'motion/react';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import PortfolioPage from './pages/PortfolioPage';

/**
 * Route changes should start at the top, but hash links ("/#about" or
 * "#farmsphere" on the portfolio page) should glide to their section.
 */
function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Small delay lets the new page render before we measure positions.
      const timer = setTimeout(() => {
        document
          .querySelector(hash)
          ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 80);
      return () => clearTimeout(timer);
    }
    window.scrollTo({ top: 0, left: 0 });
    return undefined;
  }, [pathname, hash]);

  return null;
}

export default function App() {
  // MotionConfig reducedMotion="user" makes every animation in the tree
  // automatically honour the visitor's "reduce motion" setting.
  return (
    <MotionConfig reducedMotion="user">
      <BrowserRouter>
        <ScrollManager />
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <ScrollProgress />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          {/* Unknown routes fall back to the home page */}
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </MotionConfig>
  );
}
