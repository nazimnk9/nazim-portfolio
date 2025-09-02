// "use client"

// import { Canvas } from "@react-three/fiber"
// import { Stars, OrbitControls } from "@react-three/drei"
// import { useRef } from "react"
// import { useFrame } from "@react-three/fiber"
// import type * as THREE from "three"

// function AnimatedSphere() {
//   const meshRef = useRef<THREE.Mesh>(null)

//   useFrame((state) => {
//     if (meshRef.current) {
//       meshRef.current.rotation.x = state.clock.elapsedTime * 0.2
//       meshRef.current.rotation.y = state.clock.elapsedTime * 0.3
//       meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.5
//     }
//   })

//   return (
//     <mesh ref={meshRef} position={[2, 0, -5]}>
//       <sphereGeometry args={[1, 32, 32]} />
//       <meshStandardMaterial color="#8b5cf6" wireframe transparent opacity={0.3} />
//     </mesh>
//   )
// }

// function FloatingCubes() {
//   const cubesRef = useRef<THREE.Group>(null)

//   useFrame((state) => {
//     if (cubesRef.current) {
//       cubesRef.current.rotation.y = state.clock.elapsedTime * 0.1
//       cubesRef.current.children.forEach((cube, i) => {
//         cube.position.y = Math.sin(state.clock.elapsedTime + i) * 0.5
//         cube.rotation.x = state.clock.elapsedTime * 0.5
//         cube.rotation.z = state.clock.elapsedTime * 0.3
//       })
//     }
//   })

//   return (
//     <group ref={cubesRef}>
//       {Array.from({ length: 5 }).map((_, i) => (
//         <mesh key={i} position={[-4 + i * 2, 0, -8]}>
//           <boxGeometry args={[0.5, 0.5, 0.5]} />
//           <meshStandardMaterial color={`hsl(${240 + i * 30}, 70%, 60%)`} transparent opacity={0.4} />
//         </mesh>
//       ))}
//     </group>
//   )
// }

// export default function ThreeBackground() {
//   return (
//     <div className="fixed inset-0 z-0">
//       <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
//         <ambientLight intensity={0.5} />
//         <pointLight position={[10, 10, 10]} intensity={1} />
//         <Stars radius={300} depth={60} count={1000} factor={7} />
//         <AnimatedSphere />
//         <FloatingCubes />
//         <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
//       </Canvas>
//     </div>
//   )
// }


"use client"

import { Canvas } from "@react-three/fiber"
import { Stars, OrbitControls } from "@react-three/drei"
import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import type * as THREE from "three"

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.5
    }
  })

  return (
    <mesh ref={meshRef} position={[2, 0, -5]}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color="#3b82f6" wireframe transparent opacity={0.3} />
    </mesh>
  )
}

function FloatingCubes() {
  const cubesRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (cubesRef.current) {
      cubesRef.current.rotation.y = state.clock.elapsedTime * 0.1
      cubesRef.current.children.forEach((cube, i) => {
        cube.position.y = Math.sin(state.clock.elapsedTime + i) * 0.5
        cube.rotation.x = state.clock.elapsedTime * 0.5
        cube.rotation.z = state.clock.elapsedTime * 0.3
      })
    }
  })

  return (
    <group ref={cubesRef}>
      {Array.from({ length: 5 }).map((_, i) => (
        <mesh key={i} position={[-4 + i * 2, 0, -8]}>
          <boxGeometry args={[0.5, 0.5, 0.5]} />
          <meshStandardMaterial color={`hsl(${220 + i * 15}, 70%, 60%)`} transparent opacity={0.4} />
        </mesh>
      ))}
    </group>
  )
}

export default function ThreeBackground() {
  return (
    <div className="fixed inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.6} />
        <pointLight position={[10, 10, 10]} intensity={1.2} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#1e40af" />
        <Stars radius={300} depth={60} count={1000} factor={7} />
        <AnimatedSphere />
        <FloatingCubes />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  )
}
