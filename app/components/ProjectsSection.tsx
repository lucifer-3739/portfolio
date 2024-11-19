"use client"


import Link from "next/link";
import { portfolioProjects } from "../lib/constants";
import ProjectCard from "./ProjectCard";
import ShinyButton from "./ui/ShinyButton";
import { ChevronRight } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const ProjectsSection = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (sectionRef.current && cardsRef.current.length) {
      gsap.fromTo(
        cardsRef.current,
        { opacity: 0, x: -200 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power4.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 95%",
            end: "bottom 60%",
            scrub: true,
          },
        }
      );
    }
  }, []);

  return (
    <div className="py-32" id="work">
      <div className="flex gap-4 flex-col sm:flex-row sm:items-center justify-between">
        <h2 className="text-3xl min-[430px]:text-4xl md:text-5xl font-bold dark:text-stone-200">
          My portfolio
        </h2>

        <ShinyButton icon={<ChevronRight />}>
          <Link href="https://github.com/andrijaweb" target="_blank">
            All Projects
          </Link>
        </ShinyButton>
      </div>

      {/* <div className="grid lg:grid-cols-2 gap-4 mt-8">
        {portfolioProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div> */}
      <div className="grid items-center justify-between gap-4 mt-8">
        {portfolioProjects.map((project, index) => (
          <div
            key={project.id}
            ref={(el) => {
              cardsRef.current[index] = el;
            }}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
