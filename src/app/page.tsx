import Header from '../components/header';
import Hero from '../components/hero';
import HeroAnimation from '../components/hero-animation';
import About from '../components/about';

export default function Home() {
  return (
    <div className="bg-slate-900 text-white h-screen overflow-scroll z-0">
      <Header />

      <section id="hero" className="mt-[-90px]">
        <Hero />
      </section>

      <section>
        <About />
      </section>
      {/* <Projects /> */}
      {/* <Skills /> */}
      {/* <Experience /> */}
      {/* <Contact /> */}
    </div>
  );
}
