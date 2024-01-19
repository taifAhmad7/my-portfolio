import Header from '../components/header';
import Hero from '../components/hero';
import HeroAnimation from '../components/hero-animation';
import About from '../components/about';
import Projects from '../components/projects';
import Skills from '../components/skills';
import Contact from '../components/contact';
import Footer from '../components/footer';

export default function Home() {
  return (
    <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sky-950 to-slate-950 text-white h-screen overflow-scroll z-0 scroll-smooth">
      {/* <Header /> */}

      <section id="hero">
        <Hero />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <section id="footer">
        <Footer />
      </section>
    </div>
  );
}
