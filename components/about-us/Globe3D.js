'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { 
  Float, 
  MeshDistortMaterial,
  Stars,
  Sparkles,
  Line
} from '@react-three/drei'
import * as THREE from 'three'

// Animated connection arc between two points
function ConnectionArc({ start, end, color = '#D40000' }) {
  const lineRef = useRef()
  
  const points = useMemo(() => {
    const curve = new THREE.QuadraticBezierCurve3(
      new THREE.Vector3(...start),
      new THREE.Vector3(
        (start[0] + end[0]) / 2,
        Math.max(start[1], end[1]) + 2,
        (start[2] + end[2]) / 2
      ),
      new THREE.Vector3(...end)
    )
    return curve.getPoints(50)
  }, [start, end])

  useFrame((state) => {
    if (lineRef.current) {
      lineRef.current.material.dashOffset -= 0.01
    }
  })

  return (
    <Line
      ref={lineRef}
      points={points}
      color={color}
      lineWidth={2}
      dashed
      dashScale={10}
      dashSize={0.5}
      dashOffset={0}
    />
  )
}

// Glowing location marker
function LocationMarker({ position, label, color = '#D40000' }) {
  const markerRef = useRef()
  const ringRef = useRef()
  
  useFrame((state) => {
    if (markerRef.current) {
      markerRef.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 2) * 0.1)
    }
    if (ringRef.current) {
      ringRef.current.rotation.z += 0.01
      ringRef.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 3) * 0.2)
    }
  })

  return (
    <group position={position}>
      {/* Core sphere */}
      <mesh ref={markerRef}>
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={2}
        />
      </mesh>
      
      {/* Pulsing ring */}
      <mesh ref={ringRef} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.3, 0.02, 8, 32]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={1}
          transparent
          opacity={0.6}
        />
      </mesh>
      
      {/* Vertical beam */}
      <mesh position={[0, 0.5, 0]}>
        <cylinderGeometry args={[0.02, 0.02, 1, 8]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.5}
          transparent
          opacity={0.5}
        />
      </mesh>
    </group>
  )
}

// Stylized globe/network sphere
function NetworkGlobe() {
  const globeRef = useRef()
  const wireframeRef = useRef()
  
  useFrame((state) => {
    if (globeRef.current) {
      globeRef.current.rotation.y += 0.002
    }
    if (wireframeRef.current) {
      wireframeRef.current.rotation.y += 0.002
    }
  })

  // Generate network nodes on sphere surface
  const nodes = useMemo(() => {
    const pts = []
    for (let i = 0; i < 30; i++) {
      const phi = Math.acos(-1 + (2 * i) / 30)
      const theta = Math.sqrt(30 * Math.PI) * phi
      const x = 2 * Math.cos(theta) * Math.sin(phi)
      const y = 2 * Math.sin(theta) * Math.sin(phi)
      const z = 2 * Math.cos(phi)
      pts.push([x, y, z])
    }
    return pts
  }, [])

  return (
    <group ref={globeRef}>
      {/* Main globe wireframe */}
      <mesh ref={wireframeRef}>
        <sphereGeometry args={[2, 24, 24]} />
        <meshStandardMaterial
          color="#1a1a1a"
          wireframe
          transparent
          opacity={0.3}
        />
      </mesh>
      
      {/* Inner glow */}
      <mesh>
        <sphereGeometry args={[1.95, 32, 32]} />
        <meshStandardMaterial
          color="#0a0a0a"
          transparent
          opacity={0.8}
        />
      </mesh>
      
      {/* Network nodes */}
      {nodes.map((pos, i) => (
        <mesh key={i} position={pos}>
          <sphereGeometry args={[0.03, 8, 8]} />
          <meshStandardMaterial
            color={i % 3 === 0 ? '#D40000' : '#ffffff'}
            emissive={i % 3 === 0 ? '#D40000' : '#ffffff'}
            emissiveIntensity={0.5}
          />
        </mesh>
      ))}
    </group>
  )
}

// Floating data particles
function DataParticles() {
  const particlesRef = useRef()
  
  const particles = useMemo(() => {
    const pts = []
    for (let i = 0; i < 100; i++) {
      pts.push({
        position: [
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 10
        ],
        speed: 0.5 + Math.random() * 0.5
      })
    }
    return pts
  }, [])

  return (
    <group ref={particlesRef}>
      {particles.map((particle, i) => (
        <Float key={i} speed={particle.speed} rotationIntensity={0.2} floatIntensity={0.5}>
          <mesh position={particle.position}>
            <octahedronGeometry args={[0.02, 0]} />
            <meshStandardMaterial
              color={i % 2 === 0 ? '#D40000' : '#ffffff'}
              emissive={i % 2 === 0 ? '#D40000' : '#ffffff'}
              emissiveIntensity={0.8}
            />
          </mesh>
        </Float>
      ))}
    </group>
  )
}

// Floating geometric accents
function FloatingElements() {
  return (
    <>
      <Float speed={1.5} rotationIntensity={0.8} floatIntensity={0.6}>
        <mesh position={[-4, 2, -2]}>
          <octahedronGeometry args={[0.4, 0]} />
          <MeshDistortMaterial
            color="#D40000"
            emissive="#D40000"
            emissiveIntensity={0.6}
            distort={0.3}
            speed={2}
            metalness={0.9}
            roughness={0.1}
          />
        </mesh>
      </Float>
      
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.8}>
        <mesh position={[4, -1, -3]}>
          <icosahedronGeometry args={[0.3, 0]} />
          <MeshDistortMaterial
            color="#ffffff"
            emissive="#ffffff"
            emissiveIntensity={0.3}
            distort={0.2}
            speed={3}
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>
      </Float>
      
      <Float speed={1.8} rotationIntensity={0.6} floatIntensity={0.7}>
        <mesh position={[3, 3, -4]}>
          <tetrahedronGeometry args={[0.25, 0]} />
          <MeshDistortMaterial
            color="#D40000"
            emissive="#D40000"
            emissiveIntensity={0.8}
            distort={0.4}
            speed={1.5}
            metalness={0.9}
            roughness={0.1}
          />
        </mesh>
      </Float>
    </>
  )
}

// Camera animation
function CameraRig() {
  useFrame((state) => {
    const time = state.clock.elapsedTime
    state.camera.position.x = Math.sin(time * 0.1) * 0.5
    state.camera.position.y = Math.cos(time * 0.1) * 0.3
    state.camera.lookAt(0, 0, 0)
  })
  
  return null
}

// Main scene
function Scene() {
  // India and UK approximate positions on globe
  const indiaPos = [1.5, -0.5, 1.2]
  const ukPos = [-0.8, 1.2, 1.5]

  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.15} />
      <directionalLight position={[10, 10, 5]} intensity={0.3} color="#ff9966" />
      <directionalLight position={[-10, 5, -5]} intensity={0.2} color="#6699ff" />
      <pointLight position={[0, 5, 0]} intensity={2} color="#D40000" distance={15} />
      
      {/* Fog */}
      <fog attach="fog" args={['#000000', 8, 20]} />
      
      {/* Stars */}
      <Stars radius={50} depth={50} count={2000} factor={4} saturation={0} fade speed={0.3} />
      
      {/* Camera animation */}
      <CameraRig />
      
      {/* Main globe */}
      <NetworkGlobe />
      
      {/* Location markers */}
      <LocationMarker position={indiaPos} label="India" color="#D40000" />
      <LocationMarker position={ukPos} label="UK" color="#ffffff" />
      
      {/* Connection arc */}
      <ConnectionArc start={indiaPos} end={ukPos} color="#D40000" />
      
      {/* Floating elements */}
      <FloatingElements />
      
      {/* Data particles */}
      <DataParticles />
      
      {/* Sparkles */}
      <Sparkles count={100} scale={[12, 8, 8]} size={2} speed={0.3} color="#D40000" opacity={0.5} />
    </>
  )
}

export default function Globe3D() {
  return (
    <div className="absolute inset-x-0 top-0 h-[500px] md:h-full md:inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 50 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <Scene />
      </Canvas>
    </div>
  )
}

