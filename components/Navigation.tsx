// "use client"

// import { useState, useEffect } from "react"
// import { gsap } from "gsap"
// import { ScrollToPlugin } from "gsap/ScrollToPlugin"
// import { Menu, X, Download, User } from "lucide-react"
// import { Button } from "@/components/ui/button"

// if (typeof window !== "undefined") {
//   gsap.registerPlugin(ScrollToPlugin)
// }

// const navItems = [
//   { name: "Home", href: "#home" },
//   { name: "About", href: "#about" },
//   { name: "Experience", href: "#experience" },
//   { name: "Projects", href: "#projects" },
//   { name: "Skills", href: "#skills" },
//   { name: "Education", href: "#education" },
//   { name: "Contact", href: "#contact" },
// ]

// export default function Navigation() {
//   const [isOpen, setIsOpen] = useState(false)
//   const [activeSection, setActiveSection] = useState("home")

//   useEffect(() => {
//     gsap.fromTo(
//       ".nav-item",
//       {
//         opacity: 0,
//         y: -20,
//       },
//       {
//         opacity: 1,
//         y: 0,
//         duration: 0.6,
//         stagger: 0.1,
//         delay: 0.5,
//       },
//     )
//   }, [])

//   const downloadCV = () => {
//     window.open("https://drive.google.com/file/d/188_mxyyOLOYS0kmZdVHSP9-iVVDdSQRY/view?usp=sharing", "_blank")
//   }

//   const scrollToSection = (href: string) => {
//     const element = document.querySelector(href)
//     if (element) {
//       gsap.to(window, {
//         duration: 1,
//         scrollTo: { y: element, offsetY: 80 },
//         ease: "power2.inOut",
//       })
//       setActiveSection(href.slice(1))
//     }
//     setIsOpen(false)
//   }

//   const scrollToHome = () => {
//     scrollToSection("#home")
//   }

//   return (
//     <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           <div className="nav-item">
//             {/* <button
//               onClick={scrollToHome}
//               className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent hover:from-blue-300 hover:to-purple-300 transition-all duration-200 cursor-pointer"
//             >
//               Md. Nazim Ahmed
//             </button> */}
//             <button
//                 onClick={scrollToHome}
//                 className="person-container flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 hover:from-blue-500/30 hover:to-purple-500/30 border border-blue-400/30 cursor-pointer transition-all duration-300 group"
//               >
//                 <User className="person-icon w-6 h-6 text-blue-400 group-hover:text-white" />
//               </button>
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden md:block">
//             <div className="ml-10 flex items-baseline space-x-4">
//               {navItems.map((item) => (
//                 <button
//                   key={item.name}
//                   onClick={() => scrollToSection(item.href)}
//                   className={`nav-item px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 cursor-pointer ${
//                     activeSection === item.href.slice(1)
//                       ? "text-blue-400 bg-blue-400/10"
//                       : "text-gray-300 hover:text-white hover:bg-white/10"
//                   }`}
//                 >
//                   {item.name}
//                 </button>
//               ))}
//               <Button
//                 onClick={downloadCV}
//                 className="nav-item ml-4 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 cursor-pointer"
//               >
//                 <Download className="w-4 h-4 mr-2" />
//                 Download CV
//               </Button>
//             </div>
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden">
//             <Button
//               variant="ghost"
//               size="sm"
//               onClick={() => setIsOpen(!isOpen)}
//               className="text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-purple-500/20 transition-all duration-300 ease-in-out transform hover:scale-105"
//             >
//               {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//             </Button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Navigation */}
//       {isOpen && (
//         <div className="md:hidden bg-black/90 backdrop-blur-md">
//           <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//             {navItems.map((item) => (
//               <button
//                 key={item.name}
//                 onClick={() => scrollToSection(item.href)}
//                 className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/10 w-full text-left"
//               >
//                 {item.name}
//               </button>
//             ))}
//             <Button onClick={downloadCV} className="w-full mt-4 bg-gradient-to-r from-blue-500 to-purple-500">
//               <Download className="w-4 h-4 mr-2" />
//               Download CV
//             </Button>
//           </div>
//         </div>
//       )}
//     </nav>
//   )
// }

"use client"

import { useState, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"
import { Menu, X, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollToPlugin)
}

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    gsap.fromTo(
      ".nav-item",
      {
        opacity: 0,
        y: -20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        delay: 0.5,
      },
    )
  }, [])

  const downloadCV = () => {
    window.open("https://drive.google.com/file/d/1B_R6DtgCeanu56XcKPs3LuHzAKe9Of83/view?usp=sharing", "_blank")
  }

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      gsap.to(window, {
        duration: 1,
        scrollTo: { y: element, offsetY: 80 },
        ease: "power2.inOut",
      })
      setActiveSection(href.slice(1))
    }
    setIsOpen(false)
  }

  const scrollToHome = () => {
    scrollToSection("#home")
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="nav-item">
            <button
              onClick={scrollToHome}
              className="group flex items-center space-x-2 hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <div className="relative">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  className="transition-all duration-300 group-hover:rotate-12"
                >
                  {/* Outer ring */}
                  <circle
                    cx="20"
                    cy="20"
                    r="18"
                    fill="none"
                    stroke="url(#gradient1)"
                    strokeWidth="2"
                    className="opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  
                  {/* Inner geometric shape */}
                  <polygon
                    points="12,28 20,8 28,28 20,22"
                    fill="url(#gradient2)"
                    className="group-hover:fill-[url(#gradient3)] transition-all duration-300"
                  />
                  
                  {/* Center dot */}
                  <circle
                    cx="20"
                    cy="20"
                    r="3"
                    fill="url(#gradient4)"
                    className="group-hover:r-4 transition-all duration-300"
                  />
                  
                  {/* Accent lines */}
                  <line
                    x1="8"
                    y1="12"
                    x2="32"
                    y2="12"
                    stroke="url(#gradient1)"
                    strokeWidth="1"
                    opacity="0.6"
                    className="group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <line
                    x1="8"
                    y1="28"
                    x2="32"
                    y2="28"
                    stroke="url(#gradient1)"
                    strokeWidth="1"
                    opacity="0.6"
                    className="group-hover:opacity-100 transition-opacity duration-300"
                  />
                  
                  <defs>
                    <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#a855f7" />
                    </linearGradient>
                    <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#60a5fa" />
                      <stop offset="100%" stopColor="#c084fc" />
                    </linearGradient>
                    <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#93c5fd" />
                      <stop offset="100%" stopColor="#ddd6fe" />
                    </linearGradient>
                    <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#ffffff" />
                      <stop offset="100%" stopColor="#e0e7ff" />
                    </linearGradient>
                  </defs>
                </svg>
                
                {/* Subtle glow effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </div>
              
              {/* Optional: Add a subtle text element */}
              <div className="hidden sm:block">
                <div className="text-sm font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Portfolio
                </div>
              </div>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`nav-item px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 cursor-pointer ${
                    activeSection === item.href.slice(1)
                      ? "text-blue-400 bg-blue-400/10"
                      : "text-gray-300 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <Button
                onClick={downloadCV}
                className="nav-item ml-4 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 cursor-pointer"
              >
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-purple-500/20 transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/10 w-full text-left"
              >
                {item.name}
              </button>
            ))}
            <Button onClick={downloadCV} className="w-full mt-4 bg-gradient-to-r from-blue-500 to-purple-500">
              <Download className="w-4 h-4 mr-2" />
              Download CV
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}