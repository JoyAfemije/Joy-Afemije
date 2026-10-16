import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { projects, brand } from '../data/portfolio';
import { Icons } from '../components/Icons';
import Reveal from '../components/Reveal';

/**
 * One full case study: media, role, actions, tools, and a reflection
 * (challenge → solution → outcome).
 */
function CaseStudy({ project }) {
  return (
    <article className="case" id={project.id}>
      <motion.div
        className="case-media"
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px 0px -8% 0px' }}
        transition={{ duration: 0.9, ease: [0.22, 0.8, 0.26, 1] }}
      >
        <img
          src={project.image}
          alt={project.alt}
          loading="lazy"
          decoding="async"
        />
      </motion.div>

      <div className="wrap" style={{ paddingInline: 0 }}>
        <Reveal className="case-meta">
          <span className="case-index">{project.index}</span>
          <span className="case-cat">{project.category}</span>
        </Reveal>

        <Reveal as="h2" delay={0.05}>
          {project.title}
        </Reveal>
        <Reveal as="p" className="case-summary" delay={0.1}>
          {project.summary}
        </Reveal>

        <div className="case-body">
          <div>
            <Reveal as="p" className="case-role" delay={0.12}>
              {project.role}
            </Reveal>
            <Reveal as="ul" className="case-actions" delay={0.16}>
              {project.actions.map((action) => (
                <li key={action}>{action}</li>
              ))}
            </Reveal>
          </div>

          <Reveal className="case-block" delay={0.2}>
            <h3>Tools I used</h3>
            <div className="case-tools">
              {project.tools.map((tool) => (
                <span className="tag" key={tool}>
                  {tool}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="case-reflections">
          <Reveal className="reflection" delay={0.06}>
            <span className="reflection-label">The issue I faced</span>
            <p>{project.challenge}</p>
          </Reveal>
          <Reveal className="reflection" delay={0.12}>
            <span className="reflection-label">How I overcame it</span>
            <p>{project.solution}</p>
          </Reveal>
          <Reveal className="reflection" delay={0.18}>
            <span className="reflection-label">What I gained</span>
            <p>{project.outcome}</p>
          </Reveal>
        </div>

        <Reveal className="case-footer" delay={0.1}>
          {project.live ? (
            <a
              className="project-link"
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit live site {Icons.arrow}
            </a>
          ) : (
            // Honest state: `wip` builds are still being made, the rest are
            // designed but not published yet.
            <span className="project-soon" role="note">
              {project.wip ? 'Still in progress' : 'Live site coming soon'}
            </span>
          )}
          <span className="case-cat">{project.tags.join(' · ')}</span>
        </Reveal>
      </div>
    </article>
  );
}

export default function PortfolioPage() {
  return (
    <main id="main">
      <section className="portfolio-hero">
        <div className="wrap portfolio-hero-grid">
          <Reveal as="span" className="eyebrow">
            The full portfolio
          </Reveal>
          <Reveal as="h1" delay={0.06}>
            Every project, <em className="display-em">honestly</em> told.
          </Reveal>
          <Reveal as="p" delay={0.12}>
            {brand.name} is the studio of a frontend and full-stack developer
            in Lagos. Below is everything I&apos;ve designed and built: what I
            did, the tools I used, the problems I met, and what each one taught
            me.
          </Reveal>
          <Reveal as="p" className="portfolio-count" delay={0.16}>
            Updated as I build
          </Reveal>
        </div>
      </section>

      {/* Jump rail */}
      <div className="wrap">
        <nav className="portfolio-index" aria-label="Project index">
          {projects.map((p) => (
            <a key={p.id} href={`#${p.id}`}>
              {p.index} {p.title}
            </a>
          ))}
        </nav>
      </div>

      <section>
        <div className="wrap case-studies">
          {projects.map((project) => (
            <CaseStudy key={project.id} project={project} />
          ))}
        </div>
      </section>

      <div className="portfolio-end">
        <div className="wrap" style={{ textAlign: 'center' }}>
          <Reveal>
            <Link to="/#contact" className="btn btn-primary">
              Start a project with me
            </Link>
          </Reveal>
        </div>
      </div>
    </main>
  );
}
