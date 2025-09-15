// "use client"

// import { useEffect, useRef } from "react"
// import { gsap } from "gsap"
// import { ScrollTrigger } from "gsap/ScrollTrigger"
// import { Calendar, MapPin, Building } from "lucide-react"
// import { Card, CardContent } from "@/components/ui/card"

// if (typeof window !== "undefined") {
//   gsap.registerPlugin(ScrollTrigger)
// }

// export default function Experience() {
//   const sectionRef = useRef<HTMLDivElement>(null)

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.fromTo(
//         ".experience-title",
//         {
//           opacity: 0,
//           y: 50,
//         },
//         {
//           opacity: 1,
//           y: 0,
//           duration: 1,
//           scrollTrigger: {
//             trigger: ".experience-title",
//             start: "top 80%",
//             toggleActions: "play none none reverse",
//           },
//         },
//       )

//       gsap.fromTo(
//         ".experience-card",
//         {
//           opacity: 0,
//           x: -100,
//         },
//         {
//           opacity: 1,
//           x: 0,
//           duration: 1,
//           stagger: 0.2,
//           scrollTrigger: {
//             trigger: ".experience-card",
//             start: "top 70%",
//             toggleActions: "play none none reverse",
//           },
//         },
//       )
//     }, sectionRef)

//     return () => ctx.revert()
//   }, [])

//   return (
//     <div ref={sectionRef} className="min-h-screen py-20 px-4">
//       <div className="max-w-6xl mx-auto">
//         <div className="text-center mb-16">
//           <h2 className="experience-title text-4xl lg:text-6xl font-bold text-white mb-6">
//             Work{" "}
//             <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
//               Experience
//             </span>
//           </h2>
//         </div>

//         <div className="space-y-8">
//           {/* Company Information Box */}
//           <Card className="experience-card bg-gray-900/50 border-gray-700 hover:border-blue-400/50 transition-all duration-300">
//             <CardContent className="p-6 md:p-8">
//               <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
//                 <div className="mb-4 sm:mb-0">
//                   <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Frontend Engineer</h3>
//                   <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-2 sm:space-y-0 text-gray-400">
//                     <div className="flex items-center space-x-1">
//                       <Building className="w-4 h-4 flex-shrink-0" />
//                       <span className="text-sm md:text-base">Tizaraa IT</span>
//                     </div>
//                     <div className="flex items-center space-x-1">
//                       <Calendar className="w-4 h-4 flex-shrink-0" />
//                       <span className="text-sm md:text-base">Jan 2022 - Present</span>
//                     </div>
//                     <div className="flex items-center space-x-1">
//                       <MapPin className="w-4 h-4 flex-shrink-0" />
//                       <span className="text-sm md:text-base">Dhaka, Bangladesh</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <p className="text-gray-300 leading-relaxed text-sm md:text-base">
//                 Working as a Frontend Engineer at Tizaraa IT, a growing IT firm in Bangladesh.
//                 Responsible for developing and maintaining modern web applications using cutting-edge technologies.
//               </p>
//             </CardContent>
//           </Card>

//           {/* Projects Section */}
//           <div className="grid gap-6 md:gap-8">
//             {/* Tizaraa Project Box */}
//             <Card className="experience-card bg-gray-900/50 border-gray-700 hover:border-blue-400/50 transition-all duration-300">
//               <CardContent className="p-6 md:p-8">
//                 <div className="border-l-4 border-blue-400 pl-4 md:pl-6">
//                   <h4 className="text-xl md:text-2xl font-semibold text-blue-400 mb-3">
//                     Project: Tizaraa E-commerce Platform
//                   </h4>
//                   <p className="text-gray-300 mb-4 leading-relaxed text-sm md:text-base">
//                     Tizaraa is a multivendor e-commerce platform similar to Daraz and Alibaba, allowing multiple vendors
//                     to sell their products to a wide audience.
//                   </p>
//                   <div className="space-y-3">
//                     <h5 className="text-lg font-medium text-white mb-2">Key Responsibilities:</h5>
//                     <ul className="space-y-2 text-gray-400">
//                       <li className="flex items-start">
//                         <span className="text-blue-400 mr-2 mt-1 flex-shrink-0">•</span>
//                         <span className="text-sm md:text-base">
//                           Developed and optimized the user interface for seamless user experience across devices
//                         </span>
//                       </li>
//                       <li className="flex items-start">
//                         <span className="text-blue-400 mr-2 mt-1 flex-shrink-0">•</span>
//                         <span className="text-sm md:text-base">
//                           Collaborated with backend developers to integrate APIs for real-time data fetching and
//                           updating
//                         </span>
//                       </li>
//                       <li className="flex items-start">
//                         <span className="text-blue-400 mr-2 mt-1 flex-shrink-0">•</span>
//                         <span className="text-sm md:text-base">
//                           Ensured cross-browser compatibility and enhanced website performance
//                         </span>
//                       </li>
//                       <li className="flex items-start">
//                         <span className="text-blue-400 mr-2 mt-1 flex-shrink-0">•</span>
//                         <span className="text-sm md:text-base">
//                           Implemented responsive design for improved user engagement
//                         </span>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>

//             {/* Johkasou Project Box */}
//             <Card className="experience-card bg-gray-900/50 border-gray-700 hover:border-purple-400/50 transition-all duration-300">
//               <CardContent className="p-6 md:p-8">
//                 <div className="border-l-4 border-purple-400 pl-4 md:pl-6">
//                   <h4 className="text-xl md:text-2xl font-semibold text-purple-400 mb-3">
//                     Project: Johkasou ERP System
//                   </h4>
//                   <p className="text-gray-300 mb-4 leading-relaxed text-sm md:text-base">
//                     An advanced enterprise resource planning (ERP) solution developed using Japanese technology,
//                     designed to enhance business operations by integrating various functions and optimizing resource
//                     utilization.
//                   </p>
//                   <div className="space-y-3">
//                     <h5 className="text-lg font-medium text-white mb-2">Key Responsibilities:</h5>
//                     <ul className="space-y-2 text-gray-400">
//                       <li className="flex items-start">
//                         <span className="text-purple-400 mr-2 mt-1 flex-shrink-0">•</span>
//                         <span className="text-sm md:text-base">
//                           Implemented responsive design principles to enhance accessibility and engagement for users
//                         </span>
//                       </li>
//                       <li className="flex items-start">
//                         <span className="text-purple-400 mr-2 mt-1 flex-shrink-0">•</span>
//                         <span className="text-sm md:text-base">
//                           Collaborated with backend developers to integrate APIs for real-time data fetching, updating,
//                           and synchronization
//                         </span>
//                       </li>
//                       <li className="flex items-start">
//                         <span className="text-purple-400 mr-2 mt-1 flex-shrink-0">•</span>
//                         <span className="text-sm md:text-base">
//                           Ensured cross-browser compatibility by testing and optimizing UI components across multiple
//                           platforms
//                         </span>
//                       </li>
//                       <li className="flex items-start">
//                         <span className="text-purple-400 mr-2 mt-1 flex-shrink-0">•</span>
//                         <span className="text-sm md:text-base">
//                           Maintained and updated frontend code to improve performance, fix bugs, and implement new
//                           features
//                         </span>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }


"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Calendar, MapPin, Building, ExternalLink } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function Experience() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".experience-title",
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: ".experience-title",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      )

      gsap.fromTo(
        ".experience-card",
        {
          opacity: 0,
          x: -100,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".experience-card",
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        },
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={sectionRef} className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="experience-title text-4xl lg:text-6xl font-bold text-white mb-6">
            Work{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
        </div>

        <div className="space-y-8">
          {/* Company Information Box */}
          <Card className="experience-card bg-gray-900/50 border-gray-700 hover:border-blue-400/50 transition-all duration-300">
            <CardContent className="p-6 md:p-8">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
                <div className="mb-4 sm:mb-0">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Frontend Developer</h3>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-2 sm:space-y-0 text-gray-400">
                    <div className="flex items-center space-x-1">
                      <Building className="w-4 h-4 flex-shrink-0" />
                      <span className="text-sm md:text-base">Tizaraa IT</span>
                      <a 
                        href="https://it.tizaraa.com/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="ml-2 inline-flex items-center space-x-1 text-blue-400 hover:text-blue-300 transition-colors duration-200 group"
                      >
                        <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                        <span className="text-sm md:text-base">Visit</span>
                      </a>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4 flex-shrink-0" />
                      <span className="text-sm md:text-base">Jan 2022 - Present</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4 flex-shrink-0" />
                      <span className="text-sm md:text-base">Dhaka, Bangladesh</span>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                Working as a Frontend Developer at Tizaraa IT, a growing IT firm in Bangladesh.
                Responsible for developing and maintaining modern web applications using cutting-edge technologies.
              </p>
            </CardContent>
          </Card>

          {/* Projects Section */}
          <div className="grid gap-6 md:gap-8">
            {/* Tizaraa Project Box */}
            <Card className="experience-card bg-gray-900/50 border-gray-700 hover:border-blue-400/50 transition-all duration-300">
              <CardContent className="p-6 md:p-8">
                <div className="border-l-4 border-blue-400 pl-4 md:pl-6">
                  <h4 className="text-xl md:text-2xl font-semibold text-blue-400 mb-3">
                    Project: Tizaraa E-commerce Platform
                  </h4>
                  <p className="text-gray-300 mb-4 leading-relaxed text-sm md:text-base">
                    Tizaraa is a multivendor e-commerce platform similar to Daraz and Alibaba, allowing multiple vendors
                    to sell their products to a wide audience.
                  </p>
                  <div className="space-y-3">
                    <h5 className="text-lg font-medium text-white mb-2">Key Responsibilities:</h5>
                    <ul className="space-y-2 text-gray-400">
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2 mt-1 flex-shrink-0">•</span>
                        <span className="text-sm md:text-base">
                          Developed and optimized the user interface for seamless user experience across devices
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2 mt-1 flex-shrink-0">•</span>
                        <span className="text-sm md:text-base">
                          Collaborated with backend developers to integrate APIs for real-time data fetching and
                          updating
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2 mt-1 flex-shrink-0">•</span>
                        <span className="text-sm md:text-base">
                          Ensured cross-browser compatibility and enhanced website performance
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-400 mr-2 mt-1 flex-shrink-0">•</span>
                        <span className="text-sm md:text-base">
                          Implemented responsive design for improved user engagement
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Johkasou Project Box */}
            <Card className="experience-card bg-gray-900/50 border-gray-700 hover:border-purple-400/50 transition-all duration-300">
              <CardContent className="p-6 md:p-8">
                <div className="border-l-4 border-purple-400 pl-4 md:pl-6">
                  <h4 className="text-xl md:text-2xl font-semibold text-purple-400 mb-3">
                    Project: Johkasou ERP System
                  </h4>
                  <p className="text-gray-300 mb-4 leading-relaxed text-sm md:text-base">
                    An advanced enterprise resource planning (ERP) solution developed using Japanese technology,
                    designed to enhance business operations by integrating various functions and optimizing resource
                    utilization.
                  </p>
                  <div className="space-y-3">
                    <h5 className="text-lg font-medium text-white mb-2">Key Responsibilities:</h5>
                    <ul className="space-y-2 text-gray-400">
                      <li className="flex items-start">
                        <span className="text-purple-400 mr-2 mt-1 flex-shrink-0">•</span>
                        <span className="text-sm md:text-base">
                          Implemented responsive design principles to enhance accessibility and engagement for users
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-400 mr-2 mt-1 flex-shrink-0">•</span>
                        <span className="text-sm md:text-base">
                          Collaborated with backend developers to integrate APIs for real-time data fetching, updating,
                          and synchronization
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-400 mr-2 mt-1 flex-shrink-0">•</span>
                        <span className="text-sm md:text-base">
                          Ensured cross-browser compatibility by testing and optimizing UI components across multiple
                          platforms
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-400 mr-2 mt-1 flex-shrink-0">•</span>
                        <span className="text-sm md:text-base">
                          Maintained and updated frontend code to improve performance, fix bugs, and implement new
                          features
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}