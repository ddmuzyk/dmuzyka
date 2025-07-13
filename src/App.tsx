import './App.css';
import { useRef } from 'react';
import Introduction from './components/Introduction/Introduction';
import Skills from './components/Skills/Skills';
import Works from './components/Works/Works';
import Hobbies from './components/Hobbies/Hobbies';
import Contact from './components/Contact/Contact';
import Navbar from './components/Navbar';
import { Sections } from './types';

const App = () => {
    const introductionRef = useRef<HTMLDivElement>(null);
    const skillsRef = useRef<HTMLDivElement>(null);
    const worksRef = useRef<HTMLDivElement>(null);
    const hobbiesRef = useRef<HTMLDivElement>(null);
    const contactRef = useRef<HTMLDivElement>(null);

    const handleClick = (section: Sections) => {
      switch (section) {
        case Sections.INTRODUCTION:
          introductionRef.current?.scrollIntoView({ behavior: 'smooth' });
          break;
        case Sections.SKILLS:
          skillsRef.current?.scrollIntoView({ behavior: 'smooth' });
          break;
        case Sections.WORKS:
          worksRef.current?.scrollIntoView({ behavior: 'smooth' });
          break;
        case Sections.HOBBIES:
          hobbiesRef.current?.scrollIntoView({ behavior: 'smooth' });
          break;
        case Sections.CONTACT:
          contactRef.current?.scrollIntoView({ behavior: 'smooth' });
          break;
        default:
          break;
      }
    }

    return (
        <main>
            <Navbar handleClick={handleClick}/>
            <section ref={introductionRef}>
              <Introduction />
            </section>
            <section ref={skillsRef}>
              <Skills />
            </section>
            <section ref={worksRef}>
              <Works />
            </section>
            <section ref={hobbiesRef}>
              <Hobbies />
            </section>
            <section ref={contactRef}>
              <Contact />
            </section>
        </main>
    )
}

export default App;