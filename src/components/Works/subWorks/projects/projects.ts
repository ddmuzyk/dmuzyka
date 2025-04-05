import pokesearch from '../../../../imgs/pokesearch.png' ;
import punkbeers from '../../../../imgs/punkbeers.png';
import casino from '../../../../imgs/casino.png';

const projects = [
  {
    title: 'Casino-online',
    description: 'My biggest project to date (still in progress), meant to enable users to train their abilities in various bet games without risking real money. Texas Hold\'em Poker, the part I\'m currently working on, is going to be a single player game against symbolic AI.',
    img: casino,
    live: null,
    code: 'https://github.com/ddmuzyk/casino-online',
    hover_color: '#6BCCAA'
  },
  {
    title: 'PokeSearch',
    description: 'Inspired by Google Search website that allows users to find information about characters from the famous Pokemon series. By integrating the site with localStorage, users can add those characters to favorites which are saved locally in their browsers.',
    img: pokesearch,
    live: 'https://pokesearch-pgoy.onrender.com/',
    code: 'https://github.com/ddmuzyk/PokeSearch',
    hover_color: 'yellow'
  },
  {
    title: 'PunkBeers',
    description: 'React Router based application to enable beer research from API data. It was made as a homework assignment for an interview process. (Update 07.05.2024) - the Punk API unfortunately has been shut down, so the app is no longer working. I\'m planning to replace it with another API in the future.',
    img: punkbeers,
    live: null,
    code: 'https://github.com/ddmuzyk/punkbeers',
    hover_color: 'rgb(255, 148, 237)',
  },
]

export default projects;