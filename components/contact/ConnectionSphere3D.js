'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { 
  Float, 
  MeshDistortMaterial,
  Stars,
  Sparkles
} from '@react-three/drei'
import * as THREE from 'three'

// Central sphere representing connection
function CentralSphere() {
  const sphereRef = useRef()
  const ringRef = useRef()
  
  useFrame((state) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.y += 0.002
      sphereRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1
    }
    if (ringRef.current) {
      ringRef.current.rotation.z += 0.003
    }
  })

  return (
    <group ref={sphereRef}>
      {/* Main sphere */}
      <mesh>
        <sphereGeometry args={[1.5, 64, 64]} />
        <MeshDistortMaterial
          color="#D40000"
          emissive="#D40000"
          emissiveIntensity={0.3}
          distort={0.3}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
      
      {/* Inner glow */}
      <mesh>
        <sphereGeometry args={[1.3, 32, 32]} />
        <meshStandardMaterial
          color="#ffffff"
          emissive="#D40000"
          emissiveIntensity={0.5}
          transparent
          opacity={0.1}
        />
      </mesh>
      
      {/* Orbiting ring */}
      <group ref={ringRef}>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[2.5, 0.02, 16, 100]} />
          <meshStandardMaterial
            color="#D40000"
            emissive="#D40000"
            emissiveIntensity={0.8}
            transparent
            opacity={0.6}
          />
        </mesh>
        
        {/* Ring node */}
        <mesh position={[2.5, 0, 0]}>
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshStandardMaterial
            color="#ffffff"
            emissive="#ffffff"
            emissiveIntensity={1}
          />
        </mesh>
      </group>
      
      {/* Second ring */}
      <mesh rotation={[Math.PI / 3, Math.PI / 4, 0]}>
        <torusGeometry args={[2.2, 0.015, 16, 100]} />
        <meshStandardMaterial
          color="#ffffff"
          emissive="#ffffff"
          emissiveIntensity={0.5}
          transparent
          opacity={0.3}
        />
      </mesh>
    </group>
  )
}

// Floating connection points
function ConnectionPoints() {
  const groupRef = useRef()
  
  const points = useMemo(() => {
    const pts = []
    for (let i = 0; i < 8; i++) {
      const theta = (i / 8) * Math.PI * 2
      const r = 4 + Math.random() * 1
      pts.push({
        position: [
          r * Math.cos(theta),
          (Math.random() - 0.5) * 2,
          r * Math.sin(theta)
        ],
        speed: 0.5 + Math.random() * 1,
        size: 0.05 + Math.random() * 0.1
      })
    }
    return pts
  }, [])

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.001
    }
  })

  return (
    <group ref={groupRef}>
      {points.map((pt, i) => (
        <Float key={i} speed={pt.speed} rotationIntensity={0.2} floatIntensity={0.5}>
          <mesh position={pt.position}>
            <octahedronGeometry args={[pt.size, 0]} />
            <meshStandardMaterial
              color={i % 2 === 0 ? '#D40000' : '#ffffff'}
              emissive={i % 2 === 0 ? '#D40000' : '#ffffff'}
              emissiveIntensity={0.8}
              metalness={0.9}
              roughness={0.1}
            />
          </mesh>
        </Float>
      ))}
    </group>
  )
}

// Connection lines from center to points
function ConnectionLines() {
  const linesRef = useRef()
  
  useFrame((state) => {
    if (linesRef.current) {
      linesRef.current.rotation.y += 0.001
      linesRef.current.children.forEach((child, i) => {
        if (child.material) {
          child.material.opacity = 0.1 + Math.sin(state.clock.elapsedTime * 2 + i) * 0.1
        }
      })
    }
  })

  return (
    <group ref={linesRef}>
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => {
        const theta = (i / 8) * Math.PI * 2
        const r = 4
        const x = r * Math.cos(theta)
        const z = r * Math.sin(theta)
        const length = Math.sqrt(x * x + z * z)
        const angle = Math.atan2(z, x)
        
        return (
          <mesh
            key={i}
            position={[x / 2, 0, z / 2]}
            rotation={[0, -angle + Math.PI / 2, Math.PI / 2]}
          >
            <cylinderGeometry args={[0.005, 0.005, length, 8]} />
            <meshStandardMaterial
              color="#D40000"
              emissive="#D40000"
              emissiveIntensity={0.5}
              transparent
              opacity={0.2}
            />
          </mesh>
        )
      })}
    </group>
  )
}

// Ambient particles
function AmbientParticles() {
  const particles = useMemo(() => {
    const pts = []
    for (let i = 0; i < 50; i++) {
      pts.push({
        position: [
          (Math.random() - 0.5) * 15,
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 15
        ],
        speed: 0.3 + Math.random() * 0.5
      })
    }
    return pts
  }, [])

  return (
    <>
      {particles.map((p, i) => (
        <Float key={i} speed={p.speed} rotationIntensity={0.1} floatIntensity={0.3}>
          <mesh position={p.position}>
            <sphereGeometry args={[0.015, 8, 8]} />
            <meshStandardMaterial
              color={i % 3 === 0 ? '#D40000' : '#ffffff'}
              emissive={i % 3 === 0 ? '#D40000' : '#ffffff'}
              emissiveIntensity={1}
            />
          </mesh>
        </Float>
      ))}
    </>
  )
}

// Camera animation
function CameraRig() {
  useFrame((state) => {
    const time = state.clock.elapsedTime
    state.camera.position.x = Math.sin(time * 0.1) * 0.5
    state.camera.position.y = 0.5 + Math.sin(time * 0.15) * 0.3
    state.camera.lookAt(0, 0, 0)
  })
  
  return null
}

// Scene
function Scene() {
  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.1} />
      <directionalLight position={[5, 10, 5]} intensity={0.3} color="#ffffff" />
      <directionalLight position={[-5, 5, -5]} intensity={0.2} color="#D40000" />
      <pointLight position={[0, 0, 0]} intensity={2} color="#D40000" distance={8} />
      
      {/* Fog */}
      <fog attach="fog" args={['#000000', 6, 20]} />
      
      {/* Stars */}
      <Stars radius={30} depth={50} count={1000} factor={3} saturation={0} fade speed={0.5} />
      
      {/* Camera */}
      <CameraRig />
      
      {/* Main elements */}
      <CentralSphere />
      <ConnectionPoints />
      <ConnectionLines />
      <AmbientParticles />
      
      {/* Sparkles */}
      <Sparkles count={50} scale={[12, 8, 12]} size={1.5} speed={0.3} color="#D40000" opacity={0.3} />
    </>
  )
}

export default function ConnectionSphere3D() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <Scene />
      </Canvas>
    </div>
  )
}

