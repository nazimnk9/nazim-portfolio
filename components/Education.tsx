"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { GraduationCap, Award, Calendar } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const educationData = [
  {
    level: "Bachelor of Science (B.Sc)",
    subject: "Computer Science and Engineering (CSE)",
    institution: "Bangladesh University, Dhaka",
    cgpa: "3.62",
    //period: "2020 - 2023",
    type: "university",
  },
  // {
  //   level: "Higher Secondary Certificate (HSC)",
  //   subject: "Science Group",
  //   institution: "College Of Development Alternative (CODA), Dhaka",
  //   gpa: "4.31 (A)",
  //   period: "2012 - 2014",
  //   type: "college",
  // },
  // {
  //   level: "Secondary School Certificate (SSC)",
  //   subject: "Science Group",
  //   institution: "Bangladesh Bank High School, Dhaka",
  //   gpa: "4.10 (A)",
  //   period: "2010 - 2012",
  //   type: "school",
  // },
]

const references = [
  {
    name: "Dr. Mohammad Nurul Huda",
    title: "Professor",
    department: "Department of CSE",
    university: "United International University",
    email: "mnh@cse.uiu.ac.bd",
  },
  {
    name: "Dr. Khondoker Abdullah Al Mamun",
    title: "Professor",
    department: "Department of CSE",
    university: "United International University",
    email: "mamun@cse.uiu.ac.bd",
  },
]

export default function Education() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".education-title",
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: ".education-title",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      )

      gsap.fromTo(
        ".education-card",
        {
          opacity: 0,
          x: -50,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".education-timeline",
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        },
      )

      gsap.fromTo(
        ".reference-card",
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".references-section",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={sectionRef} className="min-h-screen py-12 sm:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="education-title text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-6">
            Education &{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              References
            </span>
          </h2>
        </div>

        <div className="education-timeline mb-16 sm:mb-20">
          <div className="bg-gray-900/30 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gray-700/50">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 text-center">Academic Background</h3>
            <div className="relative">
              {/* Timeline line - hidden on mobile */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-purple-400 hidden sm:block"></div>

              <div className="space-y-6 sm:space-y-8">
                {educationData.map((edu, index) => (
                  <Card
                    key={index}
                    className="education-card bg-gray-900/50 border-gray-700 hover:border-blue-400/50 transition-all duration-300 sm:ml-16 relative"
                  >
                    {/* Timeline dot - hidden on mobile */}
                    <div
                      className={`absolute -left-20 top-6 w-4 h-4 rounded-full border-4 border-gray-900 hidden sm:block ${
                        edu.type === "university"
                          ? "bg-blue-400"
                          : edu.type === "college"
                            ? "bg-purple-400"
                            : "bg-green-400"
                      }`}
                    ></div>

                    <CardContent className="p-4 sm:p-6">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 space-y-4 sm:space-y-0">
                        <div className="flex items-start space-x-3">
                          <GraduationCap
                            className={`w-6 h-6 mt-1 flex-shrink-0 ${
                              edu.type === "university"
                                ? "text-blue-400"
                                : edu.type === "college"
                                  ? "text-purple-400"
                                  : "text-green-400"
                            }`}
                          />
                          <div className="min-w-0">
                            <h4 className="text-lg sm:text-xl font-bold text-white">{edu.level}</h4>
                            <p className="text-gray-300 font-medium text-sm sm:text-base">{edu.subject}</p>
                            <p className="text-gray-400 text-sm sm:text-base">{edu.institution}</p>
                          </div>
                        </div>
                        <div className="text-left sm:text-right flex-shrink-0">
                          {/* <div className="flex items-center space-x-1 text-gray-400 mb-2">
                            <Calendar className="w-4 h-4" />
                            <span className="text-sm">{edu.period}</span>
                          </div> */}
                          {edu.cgpa && (
                            <div className="flex items-center space-x-1">
                              <Award className="w-4 h-4 text-yellow-400" />
                              <span className="text-yellow-400 font-semibold text-sm">CGPA: {edu.cgpa}</span>
                            </div>
                          )}
                          {/* {edu.gpa && (
                            <div className="flex items-center space-x-1">
                              <Award className="w-4 h-4 text-yellow-400" />
                              <span className="text-yellow-400 font-semibold text-sm">GPA: {edu.gpa}</span>
                            </div>
                          )} */}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="references-section">
          <div className="bg-gray-900/30 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gray-700/50">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 text-center">Academic References</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
              {references.map((ref, index) => (
                <Card
                  key={index}
                  className="reference-card bg-gray-900/50 border-gray-700 hover:border-blue-400/50 transition-all duration-300"
                >
                  <CardContent className="p-4 sm:p-6">
                    <div className="text-center">
                      <h4 className="text-lg sm:text-xl font-bold text-white mb-2">{ref.name}</h4>
                      <p className="text-blue-400 font-medium mb-1 text-sm sm:text-base">{ref.title}</p>
                      <p className="text-gray-300 mb-1 text-sm sm:text-base">{ref.department}</p>
                      <p className="text-gray-400 mb-3 text-sm sm:text-base">{ref.university}</p>
                      <a
                        href={`mailto:${ref.email}`}
                        className="text-purple-400 hover:text-purple-300 transition-colors duration-200 text-sm sm:text-base break-all"
                      >
                        {ref.email}
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
