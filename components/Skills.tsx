// "use client"

// import { useEffect, useRef } from "react"
// import { gsap } from "gsap"
// import { ScrollTrigger } from "gsap/ScrollTrigger"

// if (typeof window !== "undefined") {
//   gsap.registerPlugin(ScrollTrigger)
// }

// const skillCategories = [
//   {
//     title: "Frontend Technologies",
//     color: "from-blue-500 to-cyan-500",
//     skills: [
//       { name: "React.js", level: 90 },
//       { name: "Next.js", level: 85 },
//       { name: "TypeScript", level: 80 },
//       { name: "JavaScript", level: 95 },
//       { name: "HTML5", level: 95 },
//       { name: "CSS3", level: 90 },
//     ],
//   },
//   {
//     title: "Styling & UI",
//     color: "from-purple-500 to-pink-500",
//     skills: [
//       { name: "Tailwind CSS", level: 90 },
//       { name: "Bootstrap", level: 85 },
//       { name: "Material-UI", level: 75 },
//       { name: "Responsive Design", level: 95 },
//     ],
//   },
//   {
//     title: "Backend & Database",
//     color: "from-green-500 to-teal-500",
//     skills: [
//       { name: "Node.js", level: 80 },
//       { name: "Express.js", level: 75 },
//       { name: "MongoDB", level: 80 },
//       { name: "Firebase", level: 85 },
//       { name: "MySQL", level: 70 },
//     ],
//   },
//   {
//     title: "Tools & Others",
//     color: "from-orange-500 to-red-500",
//     skills: [
//       { name: "Git & GitHub", level: 85 },
//       { name: "API Integration", level: 90 },
//       { name: "Performance Optimization", level: 80 },
//       { name: "Cross-browser Testing", level: 85 },
//     ],
//   },
// ]

// export default function Skills() {
//   const sectionRef = useRef<HTMLDivElement>(null)

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.fromTo(
//         ".skills-title",
//         {
//           opacity: 0,
//           y: 50,
//         },
//         {
//           opacity: 1,
//           y: 0,
//           duration: 1,
//           scrollTrigger: {
//             trigger: ".skills-title",
//             start: "top 80%",
//             toggleActions: "play none none reverse",
//           },
//         },
//       )

//       gsap.fromTo(
//         ".skill-category",
//         {
//           opacity: 0,
//           y: 50,
//         },
//         {
//           opacity: 1,
//           y: 0,
//           duration: 0.8,
//           stagger: 0.2,
//           scrollTrigger: {
//             trigger: ".skills-grid",
//             start: "top 70%",
//             toggleActions: "play none none reverse",
//           },
//         },
//       )

//       // Animate skill bars
//       gsap.fromTo(
//         ".skill-bar",
//         {
//           width: "0%",
//         },
//         {
//           width: (i, el) => el.getAttribute("data-level") + "%",
//           duration: 1.5,
//           ease: "power2.out",
//           stagger: 0.1,
//           scrollTrigger: {
//             trigger: ".skills-grid",
//             start: "top 60%",
//             toggleActions: "play none none reverse",
//           },
//         },
//       )
//     }, sectionRef)

//     return () => ctx.revert()
//   }, [])

//   return (
//     <div ref={sectionRef} className="min-h-screen py-20 px-4">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-16">
//           <h2 className="skills-title text-4xl lg:text-6xl font-bold text-white mb-6">
//             Technical{" "}
//             <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Skills</span>
//           </h2>
//           <p className="skills-title text-xl text-gray-300 max-w-3xl mx-auto">
//             Proficient in modern web technologies with a focus on creating scalable, performant applications
//           </p>
//         </div>

//         <div className="skills-grid grid grid-cols-1 lg:grid-cols-2 gap-8">
//           {skillCategories.map((category, categoryIndex) => (
//             <div key={categoryIndex} className="skill-category bg-gray-900/50 rounded-xl p-6 border border-gray-700">
//               <h3
//                 className={`text-2xl font-bold mb-6 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}
//               >
//                 {category.title}
//               </h3>

//               <div className="space-y-4">
//                 {category.skills.map((skill, skillIndex) => (
//                   <div key={skillIndex} className="skill-item">
//                     <div className="flex justify-between items-center mb-2">
//                       <span className="text-white font-medium">{skill.name}</span>
//                       <span className="text-gray-400 text-sm">{skill.level}%</span>
//                     </div>
//                     <div className="w-full bg-gray-700 rounded-full h-2">
//                       <div
//                         className={`skill-bar h-2 rounded-full bg-gradient-to-r ${category.color} transition-all duration-300`}
//                         data-level={skill.level}
//                         style={{ width: "0%" }}
//                       ></div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Certifications */}
//         <div className="mt-16 text-center">
//           <h3 className="text-2xl font-bold text-white mb-8">Certifications & Achievements</h3>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
//             <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl p-6 border border-blue-500/30">
//               <h4 className="text-lg font-semibold text-blue-400 mb-2">Certified MERN Stack Developer</h4>
//               <p className="text-gray-300">Creative IT Institute</p>
//             </div>
//             <div className="bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-xl p-6 border border-green-500/30">
//               <h4 className="text-lg font-semibold text-green-400 mb-2">Certified Web Designer & Developer</h4>
//               <p className="text-gray-300">Creative IT Institute</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// "use client"

// import { useEffect, useRef, useState } from "react"
// import { gsap } from "gsap"
// import { ScrollTrigger } from "gsap/ScrollTrigger"

// if (typeof window !== "undefined") {
//   gsap.registerPlugin(ScrollTrigger)
// }

// const skillCategories = [
//   {
//     title: "Frontend Technologies",
//     color: "from-blue-500 to-cyan-500",
//     skills: [
//       { name: "React.js", level: 90 },
//       { name: "Next.js", level: 85 },
//       { name: "TypeScript", level: 80 },
//       { name: "JavaScript", level: 95 },
//       { name: "HTML5", level: 95 },
//       { name: "CSS3", level: 90 },
//     ],
//   },
//   {
//     title: "Styling & UI",
//     color: "from-purple-500 to-pink-500",
//     skills: [
//       { name: "Tailwind CSS", level: 90 },
//       { name: "Bootstrap", level: 85 },
//       { name: "Material-UI", level: 75 },
//       { name: "Responsive Design", level: 95 },
//     ],
//   },
//   {
//     title: "Backend & Database",
//     color: "from-green-500 to-teal-500",
//     skills: [
//       { name: "Node.js", level: 80 },
//       { name: "Express.js", level: 75 },
//       { name: "MongoDB", level: 80 },
//       { name: "Firebase", level: 85 },
//       { name: "MySQL", level: 70 },
//     ],
//   },
//   {
//     title: "Tools & Others",
//     color: "from-orange-500 to-red-500",
//     skills: [
//       { name: "Git & GitHub", level: 85 },
//       { name: "API Integration", level: 90 },
//       { name: "Performance Optimization", level: 80 },
//       { name: "Cross-browser Testing", level: 85 },
//     ],
//   },
// ]

// export default function Skills() {
//   const sectionRef = useRef<HTMLDivElement>(null)
//   const [modalImage, setModalImage] = useState<string | null>(null)

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.fromTo(
//         ".skills-title",
//         {
//           opacity: 0,
//           y: 50,
//         },
//         {
//           opacity: 1,
//           y: 0,
//           duration: 1,
//           scrollTrigger: {
//             trigger: ".skills-title",
//             start: "top 80%",
//             toggleActions: "play none none reverse",
//           },
//         },
//       )

//       gsap.fromTo(
//         ".skill-category",
//         {
//           opacity: 0,
//           y: 50,
//         },
//         {
//           opacity: 1,
//           y: 0,
//           duration: 0.8,
//           stagger: 0.2,
//           scrollTrigger: {
//             trigger: ".skills-grid",
//             start: "top 70%",
//             toggleActions: "play none none reverse",
//           },
//         },
//       )

//       // Animate skill bars
//       gsap.fromTo(
//         ".skill-bar",
//         {
//           width: "0%",
//         },
//         {
//           width: (i, el) => el.getAttribute("data-level") + "%",
//           duration: 1.5,
//           ease: "power2.out",
//           stagger: 0.1,
//           scrollTrigger: {
//             trigger: ".skills-grid",
//             start: "top 60%",
//             toggleActions: "play none none reverse",
//           },
//         },
//       )
//     }, sectionRef)

//     return () => ctx.revert()
//   }, [])

//   const openModal = (imageSrc: string) => {
//     setModalImage(imageSrc)
//   }

//   const closeModal = () => {
//     setModalImage(null)
//   }

//   return (
//     <div ref={sectionRef} className="min-h-screen py-20 px-4">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-16">
//           <h2 className="skills-title text-4xl lg:text-6xl font-bold text-white mb-6">
//             Technical{" "}
//             <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Skills</span>
//           </h2>
//           <p className="skills-title text-xl text-gray-300 max-w-3xl mx-auto">
//             Proficient in modern web technologies with a focus on creating scalable, performant applications
//           </p>
//         </div>

//         <div className="skills-grid grid grid-cols-1 lg:grid-cols-2 gap-8">
//           {skillCategories.map((category, categoryIndex) => (
//             <div key={categoryIndex} className="skill-category bg-gray-900/50 rounded-xl p-6 border border-gray-700">
//               <h3
//                 className={`text-2xl font-bold mb-6 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}
//               >
//                 {category.title}
//               </h3>

//               <div className="space-y-4">
//                 {category.skills.map((skill, skillIndex) => (
//                   <div key={skillIndex} className="skill-item">
//                     <div className="flex justify-between items-center mb-2">
//                       <span className="text-white font-medium">{skill.name}</span>
//                       <span className="text-gray-400 text-sm">{skill.level}%</span>
//                     </div>
//                     <div className="w-full bg-gray-700 rounded-full h-2">
//                       <div
//                         className={`skill-bar h-2 rounded-full bg-gradient-to-r ${category.color} transition-all duration-300`}
//                         data-level={skill.level}
//                         style={{ width: "0%" }}
//                       ></div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Certifications */}
//         <div className="mt-16 text-center">
//           <h3 className="text-2xl font-bold text-white mb-8">Certifications & Achievements</h3>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
//             <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl p-6 border border-blue-500/30">
//               <h4 className="text-lg font-semibold text-blue-400 mb-2">Certified MERN Stack Developer</h4>
//               <p className="text-gray-300 mb-4">Creative IT Institute</p>
//               <div className="mb-4">
//                 <img 
//                   src="/images/mern-stack-development.jpg" 
//                   alt="MERN Stack Development Certificate"
//                   className="w-full h-48 object-cover rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
//                   onClick={() => openModal('/images/mern-stack-development.jpg')}
//                 />
//               </div>
//               <a 
//                 href="https://certificate.citsmp.com/?certificate_id=mern-23080526"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors"
//               >
//                 View Live Certificate
//               </a>
//             </div>
            
//             <div className="bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-xl p-6 border border-green-500/30">
//               <h4 className="text-lg font-semibold text-green-400 mb-2">Certified Web Designer & Developer</h4>
//               <p className="text-gray-300 mb-4">Creative IT Institute</p>
//               <div className="mb-4">
//                 <img 
//                   src="/images/web-design.jpg" 
//                   alt="Web Design Certificate"
//                   className="w-full h-48 object-cover rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
//                   onClick={() => openModal('/images/web-design.jpg')}
//                 />
//               </div>
//             </div>

//             <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-xl p-6 border border-orange-500/30">
//               <h4 className="text-lg font-semibold text-orange-400 mb-2">Certified Web Developer</h4>
//               <p className="text-gray-300 mb-4">Creative IT Institute</p>
//               <div className="mb-4">
//                 <img 
//                   src="/images/web-development.jpg" 
//                   alt="Web Development Certificate"
//                   className="w-full h-48 object-cover rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
//                   onClick={() => openModal('/images/web-development.jpg')}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Modal for Image Magnification */}
//       {modalImage && (
//         <div 
//           className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
//           onClick={closeModal}
//         >
//           <div className="relative max-w-4xl max-h-[90vh] w-full h-full flex items-center justify-center">
//             <img 
//               src={modalImage} 
//               alt="Certificate" 
//               className="max-w-full max-h-full object-contain rounded-lg"
//               onClick={(e) => e.stopPropagation()}
//             />
//             <button
//               onClick={closeModal}
//               className="absolute top-4 right-4 text-white text-2xl bg-black/50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/70 transition-colors"
//             >
//               ×
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }

"use client"

import { useEffect, useRef, useState } from "react"
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
      { name: "React.js", level: 95 },
      { name: "Next.js", level: 93 },
      { name: "TypeScript", level: 95 },
      { name: "JavaScript", level: 96 },
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 95 },
    ],
  },
  {
    title: "Styling & UI",
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "Tailwind CSS", level: 95 },
      { name: "Bootstrap", level: 95 },
      { name: "Material-UI", level: 93 },
      { name: "Responsive Design", level: 94 },
    ],
  },
  {
    title: "Backend & Database",
    color: "from-green-500 to-teal-500",
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Express.js", level: 92 },
      { name: "MongoDB", level: 95 },
      { name: "Firebase", level: 95 },
      { name: "MySQL", level: 92 },
    ],
  },
  {
    title: "Tools & Others",
    color: "from-orange-500 to-red-500",
    skills: [
      { name: "Git & GitHub", level: 97 },
      { name: "API Integration", level: 95 },
      { name: "Performance Optimization", level: 95 },
      { name: "Cross-browser Testing", level: 93 },
    ],
  },
]

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [modalImage, setModalImage] = useState<string | null>(null)

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

  const openModal = (imageSrc: string) => {
    setModalImage(imageSrc)
  }

  const closeModal = () => {
    setModalImage(null)
  }

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

          {modalImage && (
            <div className="mb-8 bg-gray-900/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 shadow-2xl animate-in fade-in duration-300">
              <div className="relative max-w-4xl mx-auto">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-lg font-semibold text-white">Certificate Preview</h4>
                  <button
                    onClick={closeModal}
                    className="text-gray-400 hover:text-white text-2xl bg-gray-800 hover:bg-gray-700 rounded-full w-8 h-8 flex items-center justify-center transition-all duration-200 hover:scale-110"
                  >
                    ×
                  </button>
                </div>
                <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-600">
                  <img
                    src={modalImage || "/placeholder.svg"}
                    alt="Certificate Preview"
                    className="w-full h-auto max-h-[70vh] object-contain rounded-lg shadow-lg"
                  />
                </div>
                <div className="mt-4 flex justify-center space-x-4">
                  <button
                    onClick={closeModal}
                    className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-200 transform hover:scale-105 shadow-lg"
                  >
                    Close Preview
                  </button>
                  <button
                    onClick={() => window.open(modalImage, "_blank")}
                    className="px-6 py-2 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-lg hover:from-green-600 hover:to-teal-600 transition-all duration-200 transform hover:scale-105 shadow-lg"
                  >
                    Open Full Size
                  </button>
                </div>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl p-6 border border-blue-500/30">
              <h4 className="text-lg font-semibold text-blue-400 mb-2">Certified MERN Stack Developer</h4>
              <p className="text-gray-300 mb-4">Creative IT Institute</p>
              <div className="mb-4">
                <img
                  src="/images/mern-stack-development.jpg"
                  alt="MERN Stack Development Certificate"
                  className="w-full h-60 object-cover rounded-lg cursor-pointer hover:opacity-80 transition-all duration-200 hover:scale-105 shadow-lg"
                  onClick={() => openModal("/images/mern-stack-development.jpg")}
                />
              </div>
              <a
                href="https://certificate.citsmp.com/?certificate_id=mern-23080526"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors"
              >
                View Live Certificate
              </a>
            </div>

            <div className="bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-xl p-6 border border-green-500/30">
              <h4 className="text-lg font-semibold text-green-400 mb-2">Certified Web Developer</h4>
              <p className="text-gray-300 mb-4">Creative IT Institute</p>
              <div className="mb-4">
                <img
                  src="/images/web-development.jpg"
                  alt="Web Development Certificate"
                  className="w-full h-60 object-cover rounded-lg cursor-pointer hover:opacity-80 transition-all duration-200 hover:scale-105 shadow-lg"
                  onClick={() => openModal("/images/web-development.jpg")}
                />
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-xl p-6 border border-orange-500/30">
              <h4 className="text-lg font-semibold text-orange-400 mb-2">Certified Web Designer</h4>
              <p className="text-gray-300 mb-4">Creative IT Institute</p>
              <div className="mb-4">
                <img
                  src="/images/web-design.jpg"
                  alt="Web Design Certificate"
                  className="w-full h-60 object-cover rounded-lg cursor-pointer hover:opacity-80 transition-all duration-200 hover:scale-105 shadow-lg"
                  onClick={() => openModal("/images/web-design.jpg")}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
