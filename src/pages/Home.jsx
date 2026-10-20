import Hero from '../components/Hero';
import Stats from '../components/Stats';
import About from '../components/About';
import Skills from '../components/Skills';
import Tools from '../components/Tools';
import Projects from '../components/Projects';
import Testimonials from '../components/Testimonials';
import Faqs from '../components/Faqs';
import Collaboration from '../components/Collaboration';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <main id="main">
      <Hero />
      <Stats />
      <About />
      <Skills />
      <Tools />
      <Projects />
      <Testimonials />
      <Faqs />
      <Collaboration />
      <Contact />
    </main>
  );
}
