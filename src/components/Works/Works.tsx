import './Works.css';
import projects from './subWorks/projects/projects';
import Project from './subWorks/Project/Project';

const Works = () => {
    return (
        <div id='works' className='works'>
            <h1 id='worksTitle' className='worksTitle'>My projects</h1>
            <div className='projects'>
              {projects.map((project) => {
                return <Project key={project.title} 
                title={project.title} 
                description={project.description}
                img={project.img}
                live={project.live}
                code={project.code}
                hover_color={project.hover_color}
                />
              })}
                {/* <div className='project'>
                    <a href='https://chuckveryfunny.onrender.com/' className='projectName'>Chuck Norris Joke Generator</a>
                    <p className='projectDesc'>Full-stack app which allows you to generate jokes about Chuck Norris and see the number of jokes you've created. Made using React, Express and Postgres.</p>
                </div>
                <div className='project'>
                    <a href='https://ddmuzyk.github.io/Calculator/' className='projectName'>Calculator</a>
                    <p className='projectDesc'>It is what it is.</p>
                </div>
                <div className='project'>
                    <h2 className='projectName'>To do app</h2>
                    <p className='projectDesc'>Basic to do app, allows you to add and remove items from your list.</p>
                </div> */}
            </div>
        </div>
    )
}

export default Works;