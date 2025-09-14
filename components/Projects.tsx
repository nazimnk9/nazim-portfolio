// "use client"

// import { useEffect, useRef, useState } from "react"
// import { gsap } from "gsap"
// import { ScrollTrigger } from "gsap/ScrollTrigger"
// import { ExternalLink } from "lucide-react"
// import { Card, CardContent } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import Image from "next/image"

// if (typeof window !== "undefined") {
//   gsap.registerPlugin(ScrollTrigger)
// }

// const projects = [
//   {
//     id: 1,
//     title: "Tizaraa E-commerce Platform",
//     description:
//       "A comprehensive multivendor e-commerce platform similar to Daraz and Alibaba, allowing multiple vendors to sell their products to a wide audience. Built with modern web technologies for seamless user experience.",
//     image:
//       "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tizaraa-ecommerce-app-screenshoot-yhenZUX7VgUMX7aHbREEKx17Ex3xz8.png",
//     technologies: ["Tailwind CSS", "Material-UI", "TypeScript", "React.js", "Next.js" ],
//     liveUrl: "https://tizaraa.com",
//     features: [
//       "Multi-vendor marketplace functionality",
//       "Real-time product search and filtering",
//       "Responsive design for all devices",
//       "Secure payment integration",
//       "Admin dashboard for vendor management",
//     ],
//   },
//   {
//     id: 2,
//     title: "Johkasou ERP System",
//     description:
//       "An advanced enterprise resource planning (ERP) solution developed using Japanese technology. Specifically designed to enhance business operations by integrating various functions and optimizing resource utilization.",
//     image:
//       "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/johkasou-erp-system-app-screenshoot-c17ccHXmU9yiX47T0iIjqCHqB21GhT.png",
//     technologies: ["Tailwind CSS", "Material-UI", "Javascript", "React.js", "Next.js"],
//     liveUrl: "https://johkasou-erp.com",
//     features: [
//       "Comprehensive business process management",
//       "Real-time data synchronization",
//       "Multi-language support (Japanese/English)",
//       "Advanced reporting and analytics",
//       "Role-based access control",
//     ],
//   },
//   {
//     id: 3,
//     title: "Video Calling App",
//     description:
//       "A modern video calling application built with Clerk authentication and Stream for real-time video functionality. Features comprehensive video calling capabilities including meeting scheduling, recordings, and personal rooms without chat functionality.",
//     image:
//       "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/video-calling-app-nNTiZkiF9CcC1q4Cm11yg0O8LV3TPi.png",
//     technologies: ["Tailwind CSS", "shadcn/ui", "TypeScript", "React.js", "Next.js", "Clerk", "Stream"],
//     liveUrl: "https://video-calling-app-lilac.vercel.app",
//     features: [
//       "Real-time video calling functionality",
//       "Meeting scheduling and management",
//       "Recording capabilities",
//       "Personal room creation",
//       "Secure authentication with Clerk",
//     ],
//   },
// ]

// export default function Projects() {
//   const sectionRef = useRef<HTMLDivElement>(null)
//   const [showAllProjects, setShowAllProjects] = useState(false)

//   const displayedProjects = showAllProjects ? projects : projects.slice(0, 2)

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       // Section title animation
//       gsap.fromTo(
//         ".projects-title",
//         {
//           opacity: 0,
//           y: 50,
//         },
//         {
//           opacity: 1,
//           y: 0,
//           duration: 1,
//           scrollTrigger: {
//             trigger: ".projects-title",
//             start: "top 80%",
//             end: "bottom 20%",
//             toggleActions: "play none none reverse",
//           },
//         },
//       )

//       // Project cards animation
//       gsap.fromTo(
//         ".project-card",
//         {
//           opacity: 0,
//           y: 100,
//           scale: 0.8,
//         },
//         {
//           opacity: 1,
//           y: 0,
//           scale: 1,
//           duration: 1,
//           stagger: 0.3,
//           ease: "back.out(1.7)",
//           scrollTrigger: {
//             trigger: ".projects-container",
//             start: "top 70%",
//             end: "bottom 20%",
//             toggleActions: "play none none reverse",
//           },
//         },
//       )

//       // Hover animations for project cards
//       const cards = document.querySelectorAll(".project-card")
//       cards.forEach((card) => {
//         card.addEventListener("mouseenter", () => {
//           gsap.to(card, {
//             scale: 1.05,
//             duration: 0.3,
//             ease: "power2.out",
//           })
//         })

//         card.addEventListener("mouseleave", () => {
//           gsap.to(card, {
//             scale: 1,
//             duration: 0.3,
//             ease: "power2.out",
//           })
//         })
//       })
//     }, sectionRef)

//     return () => ctx.revert()
//   }, [showAllProjects]) // Added showAllProjects dependency to re-run animations

//   const handleProjectClick = (url: string) => {
//     window.open(url, "_blank", "noopener,noreferrer")
//   }

//   const handleSeeMore = () => {
//     setShowAllProjects(true)
//     // Animate new project card
//     setTimeout(() => {
//       gsap.fromTo(
//         ".project-card:last-child",
//         {
//           opacity: 0,
//           y: 100,
//           scale: 0.8,
//         },
//         {
//           opacity: 1,
//           y: 0,
//           scale: 1,
//           duration: 1,
//           ease: "back.out(1.7)",
//         },
//       )
//     }, 100)
//   }

//   return (
//     <div ref={sectionRef} className="min-h-screen py-20 px-4">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-16">
//           <h2 className="projects-title text-4xl lg:text-6xl font-bold text-white mb-6">
//             Featured{" "}
//             <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Projects</span>
//           </h2>
//           <p className="projects-title text-xl text-gray-300 max-w-3xl mx-auto">
//             Showcasing my expertise in building modern, scalable web applications with cutting-edge technologies
//           </p>
//         </div>

//         <div className="projects-container grid grid-cols-1 lg:grid-cols-2 gap-8">
//           {displayedProjects.map((project) => (
//             <Card
//               key={project.id}
//               className="project-card bg-gray-900/50 border-gray-700 hover:border-blue-400/50 transition-all duration-300 overflow-hidden cursor-pointer"
//               onClick={() => handleProjectClick(project.liveUrl)}
//             >
//               <div className="relative h-64 overflow-hidden">
//                 <Image
//                   src={project.image || "/placeholder.svg"}
//                   alt={project.title}
//                   fill
//                   className="object-cover transition-transform duration-300 hover:scale-110"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
//                 <div className="absolute top-4 right-4">
//                   <Button
//                     size="sm"
//                     variant="secondary"
//                     className="bg-black/50 hover:bg-black/70 text-white"
//                     onClick={(e) => {
//                       e.stopPropagation()
//                       handleProjectClick(project.liveUrl)
//                     }}
//                   >
//                     <ExternalLink className="w-4 h-4" />
//                   </Button>
//                 </div>
//               </div>

//               <CardContent className="p-6">
//                 <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
//                 <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>

//                 <div className="mb-4">
//                   <h4 className="text-sm font-semibold text-blue-400 mb-2">Key Features:</h4>
//                   <ul className="text-sm text-gray-400 space-y-1">
//                     {project.features.map((feature, index) => (
//                       <li key={index} className="flex items-start">
//                         <span className="text-blue-400 mr-2">•</span>
//                         {feature}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>

//                 <div className="flex flex-wrap gap-2">
//                   {project.technologies.map((tech) => (
//                     <span
//                       key={tech}
//                       className="px-3 py-1 text-xs font-medium bg-blue-500/20 text-blue-300 rounded-full border border-blue-500/30"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
//               </CardContent>
//             </Card>
//           ))}
//         </div>

//         {!showAllProjects && (
//           <div className="text-center mt-12">
//             <Button
//               onClick={handleSeeMore}
//               className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 cursor-pointer"
//             >
//               See More Projects
//             </Button>
//           </div>
//         )}
//       </div>
//     </div>
//   )
// }


"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ExternalLink } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const projects = [
  {
    id: 1,
    title: "Tizaraa E-commerce Platform",
    description:
      "A comprehensive multivendor e-commerce platform similar to Daraz and Alibaba, allowing multiple vendors to sell their products to a wide audience. Built with modern web technologies for seamless user experience.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tizaraa-ecommerce-app-screenshoot-yhenZUX7VgUMX7aHbREEKx17Ex3xz8.png",
    technologies: ["Tailwind CSS", "Material-UI", "TypeScript", "React.js", "Next.js" ],
    liveUrl: "https://tizaraa.com",
    features: [
      "Multi-vendor marketplace functionality",
      "Real-time product search and filtering",
      "Responsive design for all devices",
      "Secure payment integration",
      "Admin dashboard for vendor management",
    ],
  },
  {
    id: 2,
    title: "Johkasou ERP System",
    description:
      "An advanced enterprise resource planning (ERP) solution developed using Japanese technology. Specifically designed to enhance business operations by integrating various functions and optimizing resource utilization.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/johkasou-erp-system-app-screenshoot-c17ccHXmU9yiX47T0iIjqCHqB21GhT.png",
    technologies: ["Tailwind CSS", "Material-UI", "Javascript", "React.js", "Next.js"],
    liveUrl: "https://johkasou-erp.com",
    features: [
      "Comprehensive business process management",
      "Real-time data synchronization",
      "Multi-language support (Japanese/English)",
      "Advanced reporting and analytics",
      "Role-based access control",
    ],
  },
  {
    id: 3,
    title: "Video Calling App",
    description:
      "A modern video calling application built with Clerk authentication and Stream for real-time video functionality. Features comprehensive video calling capabilities including meeting scheduling, recordings, and personal rooms without chat functionality.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/video-calling-app-nNTiZkiF9CcC1q4Cm11yg0O8LV3TPi.png",
    technologies: ["Tailwind CSS", "shadcn/ui", "TypeScript", "React.js", "Next.js", "Clerk", "Stream"],
    liveUrl: "https://video-calling-app-lilac.vercel.app",
    features: [
      "Real-time video calling functionality",
      "Meeting scheduling and management",
      "Recording capabilities",
      "Personal room creation",
      "Secure authentication with Clerk",
    ],
  },
  {
    id: 4,
    title: "Whiteboard App",
    description:
      "A collaborative whiteboard application similar to Canva and Figma, featuring real-time collaboration, drawing tools, and design capabilities for creative professionals and teams.",
    image:
      "/images/whiteboard-app.png",
    technologies: ["Tailwind CSS", "TypeScript", "React.js", "Next.js", "Socket.io"],
    liveUrl: "https://whiteboard-app-alpha.vercel.app/design/4/edit",
    features: [
      "Real-time collaborative drawing and design tools",
      "Multi-user collaboration with Socket.io integration",
      "Responsive design for cross-device compatibility",
      "Professional-grade design tools and features",
      "Optimized performance for smooth drawing experience",
    ],
  },
]

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [showAllProjects, setShowAllProjects] = useState(false)

  const displayedProjects = showAllProjects ? projects : projects.slice(0, 2)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section title animation
      gsap.fromTo(
        ".projects-title",
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: ".projects-title",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        },
      )

      // Project cards animation
      gsap.fromTo(
        ".project-card",
        {
          opacity: 0,
          y: 100,
          scale: 0.8,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          stagger: 0.3,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: ".projects-container",
            start: "top 70%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        },
      )

      // Hover animations for project cards
      const cards = document.querySelectorAll(".project-card")
      cards.forEach((card) => {
        card.addEventListener("mouseenter", () => {
          gsap.to(card, {
            scale: 1.05,
            duration: 0.3,
            ease: "power2.out",
          })
        })

        card.addEventListener("mouseleave", () => {
          gsap.to(card, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
          })
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [showAllProjects]) // Added showAllProjects dependency to re-run animations

  const handleProjectClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer")
  }

  const handleSeeMore = () => {
    setShowAllProjects(true)
    // Animate new project card
    setTimeout(() => {
      gsap.fromTo(
        ".project-card:last-child",
        {
          opacity: 0,
          y: 100,
          scale: 0.8,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "back.out(1.7)",
        },
      )
    }, 100)
  }

  return (
    <div ref={sectionRef} className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="projects-title text-4xl lg:text-6xl font-bold text-white mb-6">
            Featured{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="projects-title text-xl text-gray-300 max-w-3xl mx-auto">
            Showcasing my expertise in building modern, scalable web applications with cutting-edge technologies
          </p>
        </div>

        <div className="projects-container grid grid-cols-1 lg:grid-cols-2 gap-8">
          {displayedProjects.map((project) => (
            <Card
              key={project.id}
              className="project-card bg-gray-900/50 border-gray-700 hover:border-blue-400/50 transition-all duration-300 overflow-hidden cursor-pointer"
              onClick={() => handleProjectClick(project.liveUrl)}
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
                <div className="absolute top-4 right-4">
                  <Button
                    size="sm"
                    variant="secondary"
                    className="bg-black/50 hover:bg-black/70 text-white"
                    onClick={(e) => {
                      e.stopPropagation()
                      handleProjectClick(project.liveUrl)
                    }}
                  >
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-blue-400 mb-2">Key Features:</h4>
                  <ul className="text-sm text-gray-400 space-y-1">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-blue-500/20 text-blue-300 rounded-full border border-blue-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {!showAllProjects && (
          <div className="text-center mt-12">
            <Button
              onClick={handleSeeMore}
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 cursor-pointer"
            >
              See More Projects
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
