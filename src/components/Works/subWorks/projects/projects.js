import pokesearch from '../../../../imgs/pokesearch.png' ;
import spock from '../../../../imgs/spock-rock.png';
import punkbeers from '../../../../imgs/punkbeers.png';
import casino from '../../../../imgs/casino.png';

const projects = [
  {
    title: 'Casino-online',
    description: 'My biggest project to date (still in progress), meant to enable users to train their abilities in various bet games without risking real money. Texas Hold\'em Poker, the part I\'m currently working on, is going to be a single player game against symbolic AI.',
    img: casino,
    live: null,
    code: 'https://github.com/ddmuzyk/casino-online',
  },
  {
    title: 'PokeSearch',
    description: 'Inspired by Google Search website that allows users to find information about characters from the famous Pokemon series. By integrating the site with localStorage, users can add those characters to favorites which are saved locally in their browsers.',
    img: pokesearch,
    live: 'https://pokesearch-pgoy.onrender.com/',
    code: 'https://github.com/ddmuzyk/PokeSearch'
  },
  {
    title: 'PunkBeers',
    description: 'React Router based application to enable beer research from API data. It was made as a homework assignment for an interview process. ',
    img: punkbeers,
    live: 'https://punkbeers.onrender.com/',
    code: 'https://github.com/ddmuzyk/punkbeers'
  },
  {
    title: 'Spock-Rock Game',
    description: 'A turn based mini game that allows user to combat with AI enemy. The one who riches 10 points first - wins.',
    img: spock,
    live: 'https://ddmuzyk.github.io/spock-rock-papers-scissors-lizard/',
    code: 'https://github.com/ddmuzyk/spock-rock-papers-scissors-lizard'
  },
]

export default projects;