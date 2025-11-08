import './Works.css';
import { projects } from './components/projects';
import Project from './components/Project/Project';

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
            </div>
        </div>
    )
}

export default Works;