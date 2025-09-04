"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"

interface LoaderProps {
  onComplete: () => void
}

export default function Loader({ onComplete }: LoaderProps) {
  const loaderRef = useRef<HTMLDivElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const circleRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial setup
      gsap.set(loaderRef.current, { opacity: 1 })
      gsap.set(progressRef.current, { width: "0%" })
      gsap.set(textRef.current, { opacity: 0, y: 20 })
      gsap.set(circleRefs.current, { scale: 0, rotation: 0 })

      // Create timeline
      const tl = gsap.timeline({
        onComplete: () => {
          // Exit animation
          gsap.to(loaderRef.current, {
            opacity: 0,
            duration: 0.8,
            ease: "power2.inOut",
            onComplete: onComplete,
          })
        },
      })

      // Animate circles appearing
      tl.to(circleRefs.current, {
        scale: 1,
        rotation: 360,
        duration: 0.8,
        stagger: 0.1,
        ease: "back.out(1.7)",
      })

      // Animate text appearing
      tl.to(
        textRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.4",
      )

      // Animate progress bar
      tl.to(
        progressRef.current,
        {
          width: "100%",
          duration: 2,
          ease: "power2.inOut",
        },
        "-=0.2",
      )

      // Rotate circles continuously
      gsap.to(circleRefs.current, {
        rotation: "+=360",
        duration: 2,
        repeat: -1,
        ease: "none",
        stagger: 0.1,
      })

      // Pulse effect on circles
      gsap.to(circleRefs.current, {
        scale: 1.2,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
        stagger: 0.2,
      })
    }, loaderRef)

    return () => ctx.revert()
  }, [onComplete])

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800"
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Main loader content */}
      <div className="relative z-10 flex flex-col items-center space-y-8">
        {/* Animated circles */}
        <div className="relative flex items-center justify-center">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              ref={(el) => (circleRefs.current[i] = el)}
              className="absolute w-16 h-16 border-4 border-transparent border-t-blue-400 border-r-indigo-400 rounded-full"
              style={{
                transform: `rotate(${i * 120}deg)`,
              }}
            />
          ))}

          {/* Center logo/icon */}
          <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full flex items-center justify-center">
            <div className="w-4 h-4 bg-white rounded-full animate-pulse" />
          </div>
        </div>

        {/* Loading text */}
        <div ref={textRef} className="text-center">
          <h2 className="text-2xl font-bold text-white mb-2">Loading Portfolio</h2>
          <p className="text-blue-200 text-sm">Preparing an amazing experience...</p>
        </div>

        {/* Progress bar */}
        <div className="w-64 h-1 bg-slate-700 rounded-full overflow-hidden">
          <div ref={progressRef} className="h-full bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full" />
        </div>

        {/* Loading percentage (animated) */}
        <div className="text-blue-300 text-sm font-mono">
          <span className="animate-pulse">●</span> Initializing...
        </div>
      </div>

      {/* Subtle grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />
    </div>
  )
}
