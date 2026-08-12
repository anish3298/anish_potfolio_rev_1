import { Canvas } from '@react-three/fiber';
import { OrbitControls, Html, Float, Environment, Sparkles } from '@react-three/drei';
import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';

function SceneContents() {
  const ringRef = useRef();
  const controlRef = useRef();
  const particles = useMemo(
    () =>
      Array.from({ length: 28 }, (_, index) => ({
        id: index,
        speed: 0.4 + Math.random() * 0.7,
        x: -2 + Math.random() * 4,
        y: -1 + Math.random() * 2.6,
        z: -1 + Math.random() * 3,
        color: Math.random() > 0.5 ? '#38bdf8' : '#a78bfa'
      })),
    []
  );

  useFrame((state, delta) => {
    if (ringRef.current) {
      ringRef.current.rotation.y += delta * 0.35;
      ringRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.25) * 0.08;
    }
    if (controlRef.current) {
      controlRef.current.update();
    }
  });

  return (
    <>
      <color attach="background" args={['#020617']} />
      <ambientLight intensity={0.55} />
      <pointLight position={[4, 4, 5]} intensity={1.1} color="#60a5fa" />
      <pointLight position={[-4, 2, 6]} intensity={0.8} color="#c084fc" />
      <Environment preset="city" />

      <Float rotationIntensity={0.7} floatIntensity={1.4} speed={1.3}>
        <group ref={ringRef}>
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <ringGeometry args={[1.6, 2.4, 120, 1]} />
            <meshStandardMaterial
              color="#38bdf8"
              emissive="#38bdf8"
              emissiveIntensity={0.3}
              roughness={0.15}
              metalness={0.95}
            />
          </mesh>
          <mesh position={[0, 0.04, 0]}>
            <torusGeometry args={[1.1, 0.18, 32, 120]} />
            <meshStandardMaterial color="#0f172a" roughness={0.1} metalness={0.9} emissive="#38bdf8" emissiveIntensity={0.2} />
          </mesh>
          <mesh position={[0, 0, 0.1]}>
            <boxGeometry args={[2.8, 1.5, 0.16]} />
            <meshStandardMaterial color="#020617" roughness={0.12} metalness={0.9} emissive="#0f172a" emissiveIntensity={0.14} />
            <mesh position={[0, 0.08, 0.1]}>
              <boxGeometry args={[2.7, 1.2, 0.02]} />
              <meshStandardMaterial color="#111827" roughness={0.3} />
            </mesh>
          </mesh>
        </group>
      </Float>

      {particles.map((particle) => (
        <Float key={particle.id} speed={particle.speed} floatIntensity={0.9} rotationIntensity={0.35}>
          <mesh position={[particle.x, particle.y, particle.z]}>
            <sphereGeometry args={[0.08, 16, 16]} />
            <meshStandardMaterial color={particle.color} emissive={particle.color} emissiveIntensity={0.8} />
          </mesh>
        </Float>
      ))}

      <Sparkles count={28} scale={7} size={3} color="#38bdf8" speed={0.55} />
      <OrbitControls
        ref={controlRef}
        enableZoom={false}
        enablePan={false}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 2.2}
      />

      <Html center className="text-center text-slate-200">
        <div className="mx-auto w-full rounded-3xl border border-cyan-300/10 bg-slate-950/90 px-6 py-4 text-left shadow-2xl shadow-cyan-500/10 backdrop-blur-sm">
          <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">Developer Workspace</p>
          <h2 className="mt-3 text-2xl font-semibold text-white">Interactive 3D scene</h2>
          <p className="mt-2 text-sm leading-6 text-slate-300">Subtle visuals that reflect modern development, performance, and recruiter-friendly presentation.</p>
        </div>
      </Html>
    </>
  );
}

function HeroScene() {
  return (
    <Canvas camera={{ position: [0, 0, 9], fov: 35 }} gl={{ antialias: true }}>
      <SceneContents />
    </Canvas>
  );
}

export default HeroScene;
