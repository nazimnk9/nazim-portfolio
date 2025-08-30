"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const skillCategories = [
  {
    title: "Frontend Technologies",
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "React.js", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "JavaScript", level: 95 },
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 },
    ],
  },
  {
    title: "Styling & UI",
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "Tailwind CSS", level: 90 },
      { name: "Bootstrap", level: 85 },
      { name: "Material-UI", level: 75 },
      { name: "Responsive Design", level: 95 },
    ],
  },
  {
    title: "Backend & Database",
    color: "from-green-500 to-teal-500",
    skills: [
      { name: "Node.js", level: 80 },
      { name: "Express.js", level: 75 },
      { name: "MongoDB", level: 80 },
      { name: "Firebase", level: 85 },
      { name: "MySQL", level: 70 },
    ],
  },
  {
    title: "Tools & Others",
    color: "from-orange-500 to-red-500",
    skills: [
      { name: "Git & GitHub", level: 85 },
      { name: "API Integration", level: 90 },
      { name: "Performance Optimization", level: 80 },
      { name: "Cross-browser Testing", level: 85 },
    ],
  },
]

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".skills-title",
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: ".skills-title",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      )

      gsap.fromTo(
        ".skill-category",
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".skills-grid",
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        },
      )

      // Animate skill bars
      gsap.fromTo(
        ".skill-bar",
        {
          width: "0%",
        },
        {
          width: (i, el) => el.getAttribute("data-level") + "%",
          duration: 1.5,
          ease: "power2.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".skills-grid",
            start: "top 60%",
            toggleActions: "play none none reverse",
          },
        },
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={sectionRef} className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="skills-title text-4xl lg:text-6xl font-bold text-white mb-6">
            Technical{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="skills-title text-xl text-gray-300 max-w-3xl mx-auto">
            Proficient in modern web technologies with a focus on creating scalable, performant applications
          </p>
        </div>

        <div className="skills-grid grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="skill-category bg-gray-900/50 rounded-xl p-6 border border-gray-700">
              <h3
                className={`text-2xl font-bold mb-6 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}
              >
                {category.title}
              </h3>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-medium">{skill.name}</span>
                      <span className="text-gray-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className={`skill-bar h-2 rounded-full bg-gradient-to-r ${category.color} transition-all duration-300`}
                        data-level={skill.level}
                        style={{ width: "0%" }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Certifications & Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl p-6 border border-blue-500/30">
              <h4 className="text-lg font-semibold text-blue-400 mb-2">Certified MERN Stack Developer</h4>
              <p className="text-gray-300">Creative IT Institute</p>
            </div>
            <div className="bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-xl p-6 border border-green-500/30">
              <h4 className="text-lg font-semibold text-green-400 mb-2">Certified Web Designer & Developer</h4>
              <p className="text-gray-300">Creative IT Institute</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
