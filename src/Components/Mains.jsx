import { useGSAP } from "@gsap/react";
import gsap from "gsap";
export default function Main() {    
    useGSAP(() => {
        gsap.fromTo('#Photo', {
            borderBottomLeftRadius: 50, 
            borderBottomRightRadius: 50,
            borderTopLeftRadius: 50,
            borderTopRightRadius: 50,
            duration: 4
        }, {
            borderBottomLeftRadius: 30, 
            borderBottomRightRadius: 39,
            borderTopLeftRadius: 45,
            borderTopRightRadius: 29,
            yoyo: true,
            repeat: -1,
            duration: 4
        })
    }, [])

    return (
        <main>
            <section id="About-Me">
                <div className="aboutContainer">
                    <div>
                        <h2 className="Logo">About me</h2>
                        <div id="abouts">
                            <h2 className="First">Hi! I'm Front-end React
                                Developer.</h2>
                            <p>
                                As a junior Front-end Developer, I possess an impressive arsenal of skills in HTML, CSS, JavaScript, React,
                                Redux, Tailwind, Bootstrap, Basics of UI/UX design
                                responsive websites,Git and GitHub,
                                Web.
                            </p>
                            <p>
                                My expertise lies in crafting dynamic, interfaces through writing clean and optimized code and utilizing cutting-edge development tools and techniques. I am also a team player who thrives in calloborating with cross-functional teams to produce outstanding web applications.
                            </p>
                        </div>
                    </div>

                    <img className='myPhoto' id="Photo" src="./src/assets/Chico_Lachowski.jpg" alt="my photo" />
                </div>
                <section className="container" id="Skills">
                    <h2 className="Logo">Skills</h2>
                    <div className="flex">
                        <i className="fa-brands fa-html5"></i>
                        <i className="fa-brands fa-css3-alt"></i>
                        <i className="fa-brands fa-js"></i>
                        <i className="fa-brands fa-react"></i>
                        <i className="fa-brands fa-bootstrap"></i>
                        <i> <img src="./src/assets/redux.png.png" alt="icon" id="redux" /></i>
                        <i><img src="./src/assets/tailwind.png" alt="icon" id="icon2" /></i>
                        <i className="fa-brands fa-chrome"></i>
                        <i className="fa-brands fa-git"></i>
                        <i className="fa-brands fa-github-square"></i>
                    </div>
                </section>
            </section>
        </main>
    )
}