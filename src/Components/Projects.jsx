import { projects } from "../Constants"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/all"
gsap.registerPlugin(ScrollTrigger)
export default function Projects() {

    useGSAP(() => {
        gsap.from('#Projects', {
                scrollTrigger:'#Projects',
                y:180,
                opacity:0
        }, )
    }, [])
    return (

        <section id="Projects">
            <h1 className="Logo">Projects</h1>
            {projects.map((project) => (
                <div key={project.demo}>
                    <div className='project' key={project.title} >
                        <div className="projectVideo" key={project.videoURL}>
                            <video muted autoPlay className="myVideo " loop>
                                <source src={project.videoURL} key={project.videoURL} type="video/mp4"></source>
                            </video>
                        </div>
                        <div className="projectAbout" key={project.description}>
                            <h3 className="projectName" key={project.title}>{project.title}</h3>
                            <p className="projectDescription" key={project.description}>{project.description}</p>
                            <div className='code' key={project.code}>
                                <a href={project.code} key={project.code} className='links' target='_blank'>Code <i className="fa-brands fa-github"></i></a>
                                <a href={project.demo} key={project.demo} target='_blank' className='links'>Live Demo <i className="fa-solid fa-up-right-from-square"></i></a>
                            </div>
                        </div>
                    </div>
                </div>))}
        </section>

    )

}