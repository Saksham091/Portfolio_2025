import { use, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);

    useGSAP(() => {
        const projects = [project1Ref.current, project2Ref.current, project3Ref.current];

        projects.forEach((card, index) => {
            gsap.fromTo(
                card,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    delay: 0.3 * index,
                    scrollTrigger: {
                        trigger: card,
                        start: "top bottom-=100",
                    }
                }
            )
        });
        gsap.fromTo(sectionRef.current, { opacity: 0 }, { opacity: 1, duration: 1.5 })
    }, [])

    return (
        <section id="work" ref={sectionRef} className="app-showcase">
            <div className="w-full">
                <div className="showcaselayout">

                    {/* Left Side */}

                    <div className="first-project-wrapper" ref={project1Ref}>
                        <div className="image-wrapper">
                            <img src="/images/project1.png" alt="Librarium" />
                        </div>
                        <div className="text-content">
                            <h2>Effortless Book Discovery Through a Clean, Seamless Platform website called Librarium</h2>
                            <p className="text-white-50 md:text-xl">Built using React, Node.js, Express, and MongoDB, Librarium is designed for readers who want simplicity, variety, and joy in every click.</p>
                        </div>
                    </div>

                    {/* Right Side */}

                    <div className="project-list-wrapper overflow-hidden">
                        <div className="project" ref={project2Ref}>
                            <div className="image-wrapper pt-5 pb-4 bg-[#ffefdb]">
                                <img src="/images/project2.png" alt="Weather Explorer" />
                                <h2 className="mt-7">Weather Explorer</h2>
                            </div>
                        </div>

                        <div className="project mt-10" ref={project3Ref}>
                            <div className="image-wrapper pt-5 pb-4 bg-[#ffe7db]">
                                <img src="/images/project3.png" alt="Gamedex" />
                                <h2 className="mt-7">Gamedex (In Progress)</h2>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}

export default ShowcaseSection