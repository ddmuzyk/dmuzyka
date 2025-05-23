import './App.css';
import Introduction from './components/Introduction/Introduction';
import Skills from './components/Skills/Skills';
import Works from './components/Works/Works';
import Hobbies from './components/Hobbies/Hobbies';
import Contact from './components/Contact/Contact';
import Navbar from './components/Navbar';

const App = () => {

    // const handleClick = () => {
    //     scrollToref.current.scrollIntoView({
    //         behavior: 'smooth',
    //         block: "nearest",
    //         inline: "start"
    //         });
    // };

    

    // const handleClick = (id) => {
    //     const element = document.getElementById(id);
    //     element.scrollIntoView({behavior: "smooth", block: "end"});
    // }

    // const handleClick = (id) => {
    //     scrollIntoView(document.getElementById(id), {behavior: "smooth", block: "end"})
    // }

    // Scroll function
    const handleClick = (id) => {
      const element = document.getElementById(id);
      if (id === 'skills') {
        const skillPosition = element.offsetTop -200;
        window.scrollTo({
          top: skillPosition,
          behavior: 'smooth'
        })
      } else if ( id === 'introduction') {
        const introPosition = element.offsetTop -500;
        window.scrollTo({
          top: introPosition,
          behavior: 'smooth'
        })
      } else {
        const scrollPosition = element.offsetTop - 100;
        window.scrollTo({
          top: scrollPosition,
          behavior: 'smooth'
        })
      }
    }

    return (
        <main className='components'>
            <Navbar handleClick={handleClick}/>
            <Introduction/>
            <Skills/>
            <Works/>
            <Hobbies/>
            <Contact/>
        </main>
    )
}

export default App;