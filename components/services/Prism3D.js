'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { 
  Float, 
  MeshDistortMaterial,
  MeshTransmissionMaterial,
  Stars,
  Sparkles,
  Environment
} from '@react-three/drei'
import * as THREE from 'three'

// Central prism representing transformation
function CentralPrism() {
  const prismRef = useRef()
  const innerRef = useRef()
  
  useFrame((state) => {
    if (prismRef.current) {
      prismRef.current.rotation.y += 0.003
      prismRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1
    }
    if (innerRef.current) {
      innerRef.current.rotation.y -= 0.005
    }
  })

  return (
    <group ref={prismRef}>
      {/* Outer prism */}
      <mesh rotation={[0, 0, Math.PI / 6]}>
        <cylinderGeometry args={[1.5, 1.5, 3, 6]} />
        <meshStandardMaterial
          color="#1a1a1a"
          metalness={0.9}
          roughness={0.1}
          transparent
          opacity={0.3}
          wireframe
        />
      </mesh>
      
      {/* Inner glowing core */}
      <mesh ref={innerRef}>
        <cylinderGeometry args={[0.8, 0.8, 2.5, 6]} />
        <meshStandardMaterial
          color="#D40000"
          emissive="#D40000"
          emissiveIntensity={0.5}
          transparent
          opacity={0.6}
        />
      </mesh>
      
      {/* Top cap */}
      <mesh position={[0, 1.5, 0]}>
        <cylinderGeometry args={[0.8, 0, 0.5, 6]} />
        <meshStandardMaterial
          color="#D40000"
          emissive="#D40000"
          emissiveIntensity={1}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
      
      {/* Bottom cap */}
      <mesh position={[0, -1.5, 0]} rotation={[Math.PI, 0, 0]}>
        <cylinderGeometry args={[0.8, 0, 0.5, 6]} />
        <meshStandardMaterial
          color="#D40000"
          emissive="#D40000"
          emissiveIntensity={1}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
      
      {/* Ring accents */}
      {[-0.8, 0, 0.8].map((y, i) => (
        <mesh key={i} position={[0, y, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[1.2, 0.03, 8, 32]} />
          <meshStandardMaterial
            color={i === 1 ? '#ffffff' : '#D40000'}
            emissive={i === 1 ? '#ffffff' : '#D40000'}
            emissiveIntensity={0.8}
          />
        </mesh>
      ))}
    </group>
  )
}

// Orbiting service icons
function OrbitingElements() {
  const groupRef = useRef()
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.002
    }
  })

  const elements = useMemo(() => {
    return [
      { angle: 0, shape: 'octahedron', color: '#D40000' },
      { angle: Math.PI / 2.5, shape: 'box', color: '#ffffff' },
      { angle: Math.PI, shape: 'icosahedron', color: '#D40000' },
      { angle: Math.PI * 1.5, shape: 'tetrahedron', color: '#ffffff' },
      { angle: Math.PI * 2 * 0.8, shape: 'dodecahedron', color: '#D40000' },
    ]
  }, [])

  return (
    <group ref={groupRef}>
      {elements.map((el, i) => {
        const x = Math.cos(el.angle) * 4
        const z = Math.sin(el.angle) * 4
        const y = Math.sin(el.angle * 2) * 0.5
        
        return (
          <Float key={i} speed={2} rotationIntensity={0.5} floatIntensity={0.3}>
            <mesh position={[x, y, z]}>
              {el.shape === 'octahedron' && <octahedronGeometry args={[0.3, 0]} />}
              {el.shape === 'box' && <boxGeometry args={[0.4, 0.4, 0.4]} />}
              {el.shape === 'icosahedron' && <icosahedronGeometry args={[0.3, 0]} />}
              {el.shape === 'tetrahedron' && <tetrahedronGeometry args={[0.35, 0]} />}
              {el.shape === 'dodecahedron' && <dodecahedronGeometry args={[0.25, 0]} />}
              <MeshDistortMaterial
                color={el.color}
                emissive={el.color}
                emissiveIntensity={0.6}
                distort={0.2}
                speed={3}
                metalness={0.9}
                roughness={0.1}
              />
            </mesh>
          </Float>
        )
      })}
    </group>
  )
}

// Connecting beams from center to orbiting elements
function ConnectingBeams() {
  const beamsRef = useRef()
  
  useFrame((state) => {
    if (beamsRef.current) {
      beamsRef.current.rotation.y += 0.002
      beamsRef.current.children.forEach((child, i) => {
        child.material.opacity = 0.2 + Math.sin(state.clock.elapsedTime * 2 + i) * 0.15
      })
    }
  })

  return (
    <group ref={beamsRef}>
      {[0, 1, 2, 3, 4].map((i) => {
        const angle = (i / 5) * Math.PI * 2
        return (
          <mesh 
            key={i} 
            position={[Math.cos(angle) * 2, 0, Math.sin(angle) * 2]}
            rotation={[0, -angle, Math.PI / 2]}
          >
            <cylinderGeometry args={[0.01, 0.01, 4, 8]} />
            <meshStandardMaterial
              color="#D40000"
              emissive="#D40000"
              emissiveIntensity={0.5}
              transparent
              opacity={0.3}
            />
          </mesh>
        )
      })}
    </group>
  )
}

// Floating particles
function ServiceParticles() {
  const particles = useMemo(() => {
    const pts = []
    for (let i = 0; i < 60; i++) {
      const theta = Math.random() * Math.PI * 2
      const phi = Math.random() * Math.PI
      const r = 5 + Math.random() * 3
      pts.push({
        position: [
          r * Math.sin(phi) * Math.cos(theta),
          r * Math.cos(phi),
          r * Math.sin(phi) * Math.sin(theta)
        ],
        speed: 0.5 + Math.random() * 1
      })
    }
    return pts
  }, [])

  return (
    <>
      {particles.map((p, i) => (
        <Float key={i} speed={p.speed} rotationIntensity={0.2} floatIntensity={0.4}>
          <mesh position={p.position}>
            <sphereGeometry args={[0.02, 8, 8]} />
            <meshStandardMaterial
              color={i % 2 === 0 ? '#D40000' : '#ffffff'}
              emissive={i % 2 === 0 ? '#D40000' : '#ffffff'}
              emissiveIntensity={1}
            />
          </mesh>
        </Float>
      ))}
    </>
  )
}

// Camera rig
function CameraRig() {
  useFrame((state) => {
    const time = state.clock.elapsedTime
    state.camera.position.x = Math.sin(time * 0.1) * 0.5
    state.camera.position.y = 1 + Math.sin(time * 0.15) * 0.3
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
      <directionalLight position={[5, 10, 5]} intensity={0.4} color="#ffffff" />
      <directionalLight position={[-5, 5, -5]} intensity={0.2} color="#D40000" />
      <pointLight position={[0, 3, 0]} intensity={3} color="#D40000" distance={10} />
      <pointLight position={[0, -3, 0]} intensity={2} color="#D40000" distance={10} />
      
      {/* Fog */}
      <fog attach="fog" args={['#000000', 8, 25]} />
      
      {/* Stars */}
      <Stars radius={50} depth={50} count={1500} factor={4} saturation={0} fade speed={0.3} />
      
      {/* Camera */}
      <CameraRig />
      
      {/* Main elements */}
      <CentralPrism />
      <OrbitingElements />
      <ConnectingBeams />
      <ServiceParticles />
      
      {/* Sparkles */}
      <Sparkles count={80} scale={[15, 10, 15]} size={2} speed={0.3} color="#D40000" opacity={0.4} />
    </>
  )
}

export default function Prism3D() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 2, 8], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <Scene />
      </Canvas>
    </div>
  )
}

