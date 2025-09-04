// // "use client"

// // import { useEffect, useRef, useState } from "react"
// // import { gsap } from "gsap"
// // import { ScrollTrigger } from "gsap/ScrollTrigger"
// // import { ScrollToPlugin } from "gsap/ScrollToPlugin"
// // import { ChevronUp } from "lucide-react"
// // import Hero from "@/components/Hero"
// // import About from "@/components/About"
// // import Experience from "@/components/Experience"
// // import Projects from "@/components/Projects"
// // import Skills from "@/components/Skills"
// // import Education from "@/components/Education"
// // import Contact from "@/components/Contact"
// // import Navigation from "@/components/Navigation"
// // import ThreeBackground from "@/components/ThreeBackground"
// // import { Button } from "@/components/ui/button"

// // if (typeof window !== "undefined") {
// //   gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)
// // }

// // export default function Home() {
// //   const containerRef = useRef<HTMLDivElement>(null)
// //   const [showScrollTop, setShowScrollTop] = useState(false)

// //   useEffect(() => {
// //     if (typeof window === "undefined") return

// //     const ctx = gsap.context(() => {
// //       // Smooth scroll setup
// //       gsap.to(containerRef.current, {
// //         duration: 0.1,
// //         ease: "none",
// //       })

// //       // Page load animation
// //       gsap.fromTo(
// //         ".page-section",
// //         {
// //           opacity: 0,
// //           y: 50,
// //         },
// //         {
// //           opacity: 1,
// //           y: 0,
// //           duration: 1,
// //           stagger: 0.2,
// //           scrollTrigger: {
// //             trigger: ".page-section",
// //             start: "top 80%",
// //             end: "bottom 20%",
// //             toggleActions: "play none none reverse",
// //           },
// //         },
// //       )

// //       ScrollTrigger.create({
// //         start: "top -200",
// //         end: 99999,
// //         onUpdate: (self) => {
// //           setShowScrollTop(self.progress > 0)
// //         },
// //       })
// //     }, containerRef)

// //     return () => ctx.revert()
// //   }, [])

// //   const scrollToTop = () => {
// //     gsap.to(window, {
// //       duration: 1.5,
// //       scrollTo: { y: 0 },
// //       ease: "power2.inOut",
// //     })
// //   }

// //   return (
// //     <div
// //       ref={containerRef}
// //       className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
// //     >
// //       <ThreeBackground />
// //       <Navigation />

// //       <main className="relative z-10">
// //         <section id="home" className="page-section">
// //           <Hero />
// //         </section>

// //         <section id="about" className="page-section">
// //           <About />
// //         </section>

// //         <section id="experience" className="page-section">
// //           <Experience />
// //         </section>

// //         <section id="projects" className="page-section">
// //           <Projects />
// //         </section>

// //         <section id="skills" className="page-section">
// //           <Skills />
// //         </section>

// //         <section id="education" className="page-section">
// //           <Education />
// //         </section>

// //         <section id="contact" className="page-section">
// //           <Contact />
// //         </section>
// //       </main>

// //       {showScrollTop && (
// //         <Button
// //           onClick={scrollToTop}
// //           className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
// //           size="sm"
// //         >
// //           <ChevronUp className="w-6 h-6" />
// //         </Button>
// //       )}
// //     </div>
// //   )
// // }


// "use client"

// import { useEffect, useRef, useState } from "react"
// import { gsap } from "gsap"
// import { ScrollTrigger } from "gsap/ScrollTrigger"
// import { ScrollToPlugin } from "gsap/ScrollToPlugin"
// import { ChevronUp } from "lucide-react"
// import Hero from "@/components/Hero"
// import About from "@/components/About"
// import Experience from "@/components/Experience"
// import Projects from "@/components/Projects"
// import Skills from "@/components/Skills"
// import Education from "@/components/Education"
// import Contact from "@/components/Contact"
// import Navigation from "@/components/Navigation"
// import ThreeBackground from "@/components/ThreeBackground"
// import { Button } from "@/components/ui/button"

// if (typeof window !== "undefined") {
//   gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)
// }

// export default function Home() {
//   const containerRef = useRef<HTMLDivElement>(null)
//   const [showScrollTop, setShowScrollTop] = useState(false)

//   useEffect(() => {
//     if (typeof window === "undefined") return

//     const ctx = gsap.context(() => {
//       // Smooth scroll setup
//       gsap.to(containerRef.current, {
//         duration: 0.1,
//         ease: "none",
//       })

//       // Page load animation
//       gsap.fromTo(
//         ".page-section",
//         {
//           opacity: 0,
//           y: 50,
//         },
//         {
//           opacity: 1,
//           y: 0,
//           duration: 1,
//           stagger: 0.2,
//           scrollTrigger: {
//             trigger: ".page-section",
//             start: "top 80%",
//             end: "bottom 20%",
//             toggleActions: "play none none reverse",
//           },
//         },
//       )

//       ScrollTrigger.create({
//         start: "top -200",
//         end: 99999,
//         onUpdate: (self) => {
//           setShowScrollTop(self.progress > 0)
//         },
//       })
//     }, containerRef)

//     return () => ctx.revert()
//   }, [])

//   const scrollToTop = () => {
//     gsap.to(window, {
//       duration: 1.5,
//       scrollTo: { y: 0 },
//       ease: "power2.inOut",
//     })
//   }

//   return (
//     <div
//       ref={containerRef}
//       className="relative min-h-screen bg-gradient-to-br from-slate-800 via-blue-900 to-slate-900 overflow-x-hidden"
//     >
//       <ThreeBackground />
//       <Navigation />

//       <main className="relative z-10 w-full overflow-x-hidden">
//         <section id="home" className="page-section w-full">
//           <Hero />
//         </section>

//         <section id="about" className="page-section w-full">
//           <About />
//         </section>

//         <section id="experience" className="page-section w-full">
//           <Experience />
//         </section>

//         <section id="projects" className="page-section w-full">
//           <Projects />
//         </section>

//         <section id="skills" className="page-section w-full">
//           <Skills />
//         </section>

//         <section id="education" className="page-section w-full">
//           <Education />
//         </section>

//         <section id="contact" className="page-section w-full">
//           <Contact />
//         </section>
//       </main>

//       {showScrollTop && (
//         <Button
//           onClick={scrollToTop}
//           className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-50 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center"
//           size="sm"
//         >
//           <ChevronUp className="w-4 h-4 sm:w-6 sm:h-6" />
//         </Button>
//       )}
//     </div>
//   )
// }

"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { ChevronUp } from "lucide-react"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Experience from "@/components/Experience"
import Projects from "@/components/Projects"
import Skills from "@/components/Skills"
import Education from "@/components/Education"
import Contact from "@/components/Contact"
import Navigation from "@/components/Navigation"
import ThreeBackground from "@/components/ThreeBackground"
import Loader from "@/components/Loader"
import { Button } from "@/components/ui/button"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)
}

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (typeof window === "undefined") return

    const ctx = gsap.context(() => {
      if (!isLoading) {
        // Smooth scroll setup
        gsap.to(containerRef.current, {
          duration: 0.1,
          ease: "none",
        })

        // Page load animation with enhanced entrance
        gsap.fromTo(
          ".page-section",
          {
            opacity: 0,
            y: 50,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.2,
            scrollTrigger: {
              trigger: ".page-section",
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            },
          },
        )

        ScrollTrigger.create({
          start: "top -200",
          end: 99999,
          onUpdate: (self) => {
            setShowScrollTop(self.progress > 0)
          },
        })
      }
    }, containerRef)

    return () => ctx.revert()
  }, [isLoading]) // Added isLoading dependency

  const scrollToTop = () => {
    gsap.to(window, {
      duration: 1.5,
      scrollTo: { y: 0 },
      ease: "power2.inOut",
    })
  }

  const handleLoaderComplete = () => {
    setIsLoading(false)
  }

  if (isLoading) {
    return <Loader onComplete={handleLoaderComplete} />
  }

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen bg-gradient-to-br from-slate-800 via-blue-900 to-slate-900 overflow-x-hidden"
    >
      <ThreeBackground />
      <Navigation />

      <main className="relative z-10 w-full overflow-x-hidden">
        <section id="home" className="page-section w-full">
          <Hero />
        </section>

        <section id="about" className="page-section w-full">
          <About />
        </section>

        <section id="experience" className="page-section w-full">
          <Experience />
        </section>

        <section id="projects" className="page-section w-full">
          <Projects />
        </section>

        <section id="skills" className="page-section w-full">
          <Skills />
        </section>

        <section id="education" className="page-section w-full">
          <Education />
        </section>

        <section id="contact" className="page-section w-full">
          <Contact />
        </section>
      </main>

      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-50 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center"
          size="sm"
        >
          <ChevronUp className="w-4 h-4 sm:w-6 sm:h-6" />
        </Button>
      )}
    </div>
  )
}
