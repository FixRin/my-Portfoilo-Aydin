import { projects } from "../Constants"
export default function Projects() {
    return (
        <section id="Projects">
            <h1 className="Logo">Projects</h1>
            {projects.map((project) => (
                <div>
                    <div className='project' key={project.title} >
                        <div className="projectVideo" >
                            <video muted autoPlay className="myVideo " loop>
                                <source src={project.videoURL} type="video/mp4"></source>
                            </video>
                        </div>
                        <div className="projectAbout">
                            <h3 className="projectName">{project.title}</h3>
                            <p className="projectDescription">{project.description}</p>
                            <div className='code'>
                                <a href={project.code} className='links' target='_blank'>Code <i class="fa-brands fa-github"></i></a>
                                <a href={project.demo} target='_blank' className='links'>Live Demo <i class="fa-solid fa-up-right-from-square"></i></a>
                            </div>
                        </div>
                    </div>
                </div>))}
        </section>

    )

}