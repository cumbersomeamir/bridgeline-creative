'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { 
  Float, 
  MeshDistortMaterial,
  Stars,
  Trail,
  Sparkles,
  OrbitControls
} from '@react-three/drei'
import * as THREE from 'three'

// Animated cable/suspension line
function Cable({ start, end, segments = 50, delay = 0, color = '#D40000', thickness = 0.02 }) {
  const meshRef = useRef()
  
  const { curve, tubeGeometry } = useMemo(() => {
    const points = []
    for (let i = 0; i <= segments; i++) {
      const t = i / segments
      const x = THREE.MathUtils.lerp(start[0], end[0], t)
      const y = THREE.MathUtils.lerp(start[1], end[1], t)
      const z = THREE.MathUtils.lerp(start[2], end[2], t)
      // Add sag
      const sag = Math.sin(t * Math.PI) * 0.5
      points.push(new THREE.Vector3(x, y - sag, z))
    }
    const curve = new THREE.CatmullRomCurve3(points)
    const tubeGeometry = new THREE.TubeGeometry(curve, segments, thickness, 8, false)
    return { curve, tubeGeometry }
  }, [start, end, segments, thickness])

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.elapsedTime + delay
      const positions = meshRef.current.geometry.attributes.position.array
      
      for (let i = 0; i < positions.length; i += 3) {
        const originalY = positions[i + 1]
        positions[i + 1] = originalY + Math.sin(time * 2 + i * 0.1) * 0.02
      }
      meshRef.current.geometry.attributes.position.needsUpdate = true
    }
  })

  return (
    <mesh ref={meshRef} geometry={tubeGeometry}>
      <meshStandardMaterial 
        color={color} 
        emissive={color}
        emissiveIntensity={0.5}
        metalness={0.8}
        roughness={0.2}
      />
    </mesh>
  )
}

// Bridge tower pillar
function BridgeTower({ position, height = 5 }) {
  const meshRef = useRef()
  const glowRef = useRef()
  
  useFrame((state) => {
    if (glowRef.current) {
      glowRef.current.material.emissiveIntensity = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.5
    }
  })

  return (
    <group position={position}>
      {/* Main tower - tapered */}
      <mesh position={[0, height / 2, 0]}>
        <cylinderGeometry args={[0.15, 0.25, height, 8]} />
        <meshStandardMaterial 
          color="#0a0a0a" 
          metalness={0.95} 
          roughness={0.1}
        />
      </mesh>
      
      {/* Tower accent rings */}
      {[0.3, 0.5, 0.7, 0.9].map((t, i) => (
        <mesh key={i} position={[0, height * t, 0]}>
          <torusGeometry args={[0.2, 0.03, 8, 16]} />
          <meshStandardMaterial 
            color="#D40000" 
            emissive="#D40000"
            emissiveIntensity={0.5}
            metalness={0.9}
            roughness={0.1}
          />
        </mesh>
      ))}
      
      {/* Tower cap with glow */}
      <mesh ref={glowRef} position={[0, height + 0.3, 0]}>
        <octahedronGeometry args={[0.3, 0]} />
        <meshStandardMaterial 
          color="#D40000" 
          emissive="#D40000"
          emissiveIntensity={1.5}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
      
      {/* Light beacon */}
      <pointLight
        position={[0, height + 0.3, 0]}
        intensity={3}
        color="#D40000"
        distance={8}
        decay={2}
      />
    </group>
  )
}

// Bridge deck with segments
function BridgeDeck() {
  const deckRef = useRef()
  
  useFrame((state) => {
    if (deckRef.current) {
      deckRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.03
    }
  })

  return (
    <group ref={deckRef}>
      {/* Main deck */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[14, 0.2, 2]} />
        <meshStandardMaterial 
          color="#0a0a0a" 
          metalness={0.8} 
          roughness={0.2}
        />
      </mesh>
      
      {/* Deck surface lines */}
      {[-0.6, 0, 0.6].map((z, i) => (
        <mesh key={i} position={[0, 0.11, z]}>
          <boxGeometry args={[14, 0.01, 0.05]} />
          <meshStandardMaterial 
            color="#D40000" 
            emissive="#D40000"
            emissiveIntensity={0.3}
          />
        </mesh>
      ))}
      
      {/* Deck edge rails */}
      <mesh position={[0, 0.3, 0.95]}>
        <boxGeometry args={[14, 0.08, 0.08]} />
        <meshStandardMaterial 
          color="#1a1a1a" 
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>
      <mesh position={[0, 0.3, -0.95]}>
        <boxGeometry args={[14, 0.08, 0.08]} />
        <meshStandardMaterial 
          color="#1a1a1a" 
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>
      
      {/* Vertical rail posts */}
      {Array.from({ length: 15 }).map((_, i) => (
        <group key={i}>
          <mesh position={[-7 + i, 0.2, 0.95]}>
            <boxGeometry args={[0.04, 0.4, 0.04]} />
            <meshStandardMaterial color="#1a1a1a" metalness={0.9} roughness={0.1} />
          </mesh>
          <mesh position={[-7 + i, 0.2, -0.95]}>
            <boxGeometry args={[0.04, 0.4, 0.04]} />
            <meshStandardMaterial color="#1a1a1a" metalness={0.9} roughness={0.1} />
          </mesh>
        </group>
      ))}
    </group>
  )
}

// Floating energy orb that travels across the bridge
function EnergyOrb({ speed = 1, offset = 0 }) {
  const orbRef = useRef()
  
  useFrame((state) => {
    if (orbRef.current) {
      const time = state.clock.elapsedTime * speed + offset
      orbRef.current.position.x = Math.sin(time * 0.4) * 6
      orbRef.current.position.y = 1 + Math.sin(time * 2) * 0.5
      orbRef.current.position.z = Math.cos(time * 0.3) * 0.8
    }
  })

  return (
    <Trail
      width={1.5}
      length={10}
      color="#D40000"
      attenuation={(t) => t * t}
    >
      <mesh ref={orbRef}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial
          color="#ffffff"
          emissive="#D40000"
          emissiveIntensity={4}
        />
      </mesh>
    </Trail>
  )
}

// Main suspension cables between towers
function MainCable({ startTower, endTower, height = 6 }) {
  const points = useMemo(() => {
    const pts = []
    const segments = 60
    for (let i = 0; i <= segments; i++) {
      const t = i / segments
      const x = THREE.MathUtils.lerp(startTower[0], endTower[0], t)
      // Catenary curve
      const sag = Math.cosh((t - 0.5) * 3) * 0.8 - 1
      const y = height + sag
      pts.push(new THREE.Vector3(x, y, 0))
    }
    return pts
  }, [startTower, endTower, height])
  
  const curve = useMemo(() => new THREE.CatmullRomCurve3(points), [points])
  const tubeGeometry = useMemo(() => new THREE.TubeGeometry(curve, 60, 0.04, 8, false), [curve])

  return (
    <mesh geometry={tubeGeometry}>
      <meshStandardMaterial 
        color="#ffffff" 
        emissive="#ffffff"
        emissiveIntensity={0.3}
        metalness={0.9}
        roughness={0.1}
      />
    </mesh>
  )
}

// Abstract geometric bridge structure
function AbstractBridge() {
  const groupRef = useRef()
  
  useFrame((state) => {
    if (groupRef.current) {
      // Subtle rotation
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.05
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.08) * 0.02
    }
  })

  // Vertical suspension cables from main cable to deck
  const suspensionCables = useMemo(() => {
    const cables = []
    // Left side cables
    for (let i = 0; i < 6; i++) {
      const x = -5.5 + i * 1
      const topY = 5.5 + Math.cosh(((-5.5 + i) / 7 - 0.5) * 3) * 0.8 - 1
      cables.push({ start: [x, topY, 0], end: [x, 0.2, 0], color: '#D40000' })
    }
    // Right side cables
    for (let i = 0; i < 6; i++) {
      const x = 0.5 + i * 1
      const topY = 5.5 + Math.cosh(((0.5 + i) / 7 - 0.5) * 3) * 0.8 - 1
      cables.push({ start: [x, topY, 0], end: [x, 0.2, 0], color: '#D40000' })
    }
    return cables
  }, [])

  return (
    <group ref={groupRef} position={[0, -1.5, 0]}>
      {/* Bridge towers */}
      <BridgeTower position={[-4, 0, 0]} height={6} />
      <BridgeTower position={[4, 0, 0]} height={6} />
      
      {/* Bridge deck */}
      <BridgeDeck />
      
      {/* Main suspension cables */}
      <MainCable startTower={[-7, 0, 0]} endTower={[7, 0, 0]} height={5.5} />
      
      {/* Vertical suspension cables */}
      {suspensionCables.map((cable, i) => (
        <Cable 
          key={i} 
          start={cable.start} 
          end={cable.end} 
          delay={i * 0.1}
          color={cable.color}
          thickness={0.015}
          segments={20}
        />
      ))}
      
      {/* Energy orbs */}
      <EnergyOrb speed={0.6} offset={0} />
      <EnergyOrb speed={0.8} offset={3} />
      <EnergyOrb speed={0.5} offset={6} />
      
      {/* Sparkles around the bridge */}
      <Sparkles
        count={150}
        scale={[18, 10, 8]}
        size={3}
        speed={0.4}
        color="#D40000"
        opacity={0.6}
      />
      
      {/* Additional white sparkles */}
      <Sparkles
        count={80}
        scale={[20, 12, 10]}
        size={2}
        speed={0.2}
        color="#ffffff"
        opacity={0.3}
      />
    </group>
  )
}

// Floating geometric accents
function FloatingGeometry() {
  return (
    <>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <mesh position={[-6, 3, -3]}>
          <octahedronGeometry args={[0.4, 0]} />
          <MeshDistortMaterial
            color="#D40000"
            emissive="#D40000"
            emissiveIntensity={0.8}
            distort={0.3}
            speed={2}
            metalness={0.9}
            roughness={0.1}
          />
        </mesh>
      </Float>
      
      <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
        <mesh position={[6, 4, -4]}>
          <icosahedronGeometry args={[0.35, 0]} />
          <MeshDistortMaterial
            color="#ffffff"
            emissive="#ffffff"
            emissiveIntensity={0.4}
            distort={0.2}
            speed={3}
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>
      </Float>
      
      <Float speed={2.5} rotationIntensity={0.7} floatIntensity={0.6}>
        <mesh position={[0, 5, -5]}>
          <tetrahedronGeometry args={[0.3, 0]} />
          <MeshDistortMaterial
            color="#D40000"
            emissive="#D40000"
            emissiveIntensity={1}
            distort={0.4}
            speed={1.5}
            metalness={0.9}
            roughness={0.1}
          />
        </mesh>
      </Float>
      
      <Float speed={1.8} rotationIntensity={0.4} floatIntensity={0.7}>
        <mesh position={[-4, 5, -6]}>
          <dodecahedronGeometry args={[0.25, 0]} />
          <MeshDistortMaterial
            color="#D40000"
            emissive="#D40000"
            emissiveIntensity={0.6}
            distort={0.25}
            speed={2}
            metalness={0.85}
            roughness={0.15}
          />
        </mesh>
      </Float>
    </>
  )
}

// Camera animation component
function CameraRig() {
  useFrame((state) => {
    const time = state.clock.elapsedTime
    // Subtle camera movement
    state.camera.position.x = Math.sin(time * 0.1) * 0.5
    state.camera.position.y = 3 + Math.sin(time * 0.15) * 0.3
    state.camera.lookAt(0, 1, 0)
  })
  
  return null
}

// Scene setup
function Scene() {
  return (
    <>
      {/* Ambient light */}
      <ambientLight intensity={0.15} />
      
      {/* Key light - warm */}
      <directionalLight
        position={[10, 10, 5]}
        intensity={0.4}
        color="#ff9966"
      />
      
      {/* Fill light - cool */}
      <directionalLight
        position={[-10, 5, -5]}
        intensity={0.2}
        color="#6699ff"
      />
      
      {/* Red accent lights */}
      <pointLight
        position={[0, 8, 2]}
        intensity={4}
        color="#D40000"
        distance={20}
        decay={2}
      />
      
      <pointLight
        position={[-5, 3, 3]}
        intensity={2}
        color="#D40000"
        distance={12}
        decay={2}
      />
      
      <pointLight
        position={[5, 3, 3]}
        intensity={2}
        color="#D40000"
        distance={12}
        decay={2}
      />
      
      {/* Fog for depth */}
      <fog attach="fog" args={['#000000', 10, 30]} />
      
      {/* Stars in background */}
      <Stars
        radius={60}
        depth={60}
        count={3000}
        factor={5}
        saturation={0}
        fade
        speed={0.3}
      />
      
      {/* Camera animation */}
      <CameraRig />
      
      {/* Main bridge */}
      <AbstractBridge />
      
      {/* Floating geometric accents */}
      <FloatingGeometry />
    </>
  )
}

export default function Bridge3D() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 3, 12], fov: 45 }}
        dpr={[1, 2]}
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: "high-performance"
        }}
      >
        <Scene />
      </Canvas>
    </div>
  )
}
