import pokesearch from '../../../../imgs/pokesearch.png' ;
import spock from '../../../../imgs/spock-rock.png'

const projects = [
  {
    title: 'PokeSearch',
    description: 'Inspired by Google Search website that allows users to find information about characters from the famous Pokemon series. By integrating the site with localStorage, users can add those characters to favorites which are saved locally in their browsers.',
    img: pokesearch,
    live: 'https://pokesearch-pgoy.onrender.com/',
    code: 'https://github.com/ddmuzyk/PokeSearch'
  },
  {
    title: 'Spock-Rock Game',
    description: 'A turn based mini game that allows user to combat with AI enemy. The one who riches 10 points first - wins.',
    img: spock,
    live: 'https://ddmuzyk.github.io/spock-rock-papers-scissors-lizard/',
    code: 'https://github.com/ddmuzyk/spock-rock-papers-scissors-lizard'
  }
]

export default projects;