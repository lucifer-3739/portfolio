"use client";

import { useEffect, useRef } from "react";
import { techCardsItems } from "../lib/constants";
import TechCard from "./TechCard";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Skills = () => {
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
            start: "top 85%",
            end: "bottom 60%",
            scrub: true,
          },
        }
      );
    }
  }, []);

  return (
    <div
      className="relative z-10 py-16 sm:py-24"
      id="about"
      ref={sectionRef}
    >
      <div className="space-y-4 mb-10">
        <h1 className="text-3xl min-[430px]:text-4xl md:text-5xl font-bold dark:text-stone-200">
          Current technologies
        </h1>
        <p className="text-sm min-[430px]:text-base max-w-lg md:max-w-3xl text-dark-200/70 dark:text-stone-200/70">
          I&apos;m proficient in a range of modern technologies that empower me
          to build highly functional solutions. These are some of my main
          technologies.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-center justify-between gap-4">
        {techCardsItems.map((cardItem, index) => (
          <div
            key={cardItem.name}
            ref={(el) => {
              cardsRef.current[index] = el;
            }}
          >
            <TechCard cardInfo={cardItem} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;