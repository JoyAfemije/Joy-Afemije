import { Link } from 'react-router-dom';
import { projects } from '../data/portfolio';
import { Icons } from './Icons';
import Reveal from './Reveal';

const featured = projects.filter((p) => p.featured);

/**
 * Home-page teaser: three featured projects that link into the full
 * case studies on the /portfolio page.
 */
export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="wrap">
        <div className="section-head">
          <Reveal as="span" className="eyebrow">
            Selected work
          </Reveal>
          <Reveal as="h2" delay={0.08}>
            A few recent projects
          </Reveal>
          <Reveal as="p" delay={0.12}>
            Quiet, considered builds. Each one solved a real problem for a
            real client.
          </Reveal>
        </div>

        <div className="featured-grid">
          {featured.map((project, i) => (
            <Reveal key={project.id} delay={i * 0.08} y={20}>
              <Link
                to={`/portfolio#${project.id}`}
                className="featured-card"
                style={{ height: '100%' }}
              >
                <div className="featured-visual">
                  <img
                    src={project.image}
                    alt={project.alt}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="featured-body">
                  <span className="featured-cat">{project.category}</span>
                  <h3>{project.title}</h3>
                  <p>{project.summary}</p>
                  <span className="featured-link">
                    Read the case study {Icons.arrow}
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal className="view-all-row" delay={0.1}>
          <Link to="/portfolio" className="btn btn-ghost">
            View all projects {Icons.arrow}
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
