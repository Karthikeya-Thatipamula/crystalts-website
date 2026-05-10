import { Float, Line, MeshDistortMaterial, Sparkles } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { Bloom, EffectComposer, Vignette } from '@react-three/postprocessing';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';

function Core() {
  const mesh = useRef<THREE.Mesh>(null);
  const light = useRef<THREE.PointLight>(null);

  useFrame(({ clock, pointer }) => {
    const t = clock.getElapsedTime();
    if (mesh.current) {
      mesh.current.rotation.x = t * 0.16 + pointer.y * 0.18;
      mesh.current.rotation.y = t * 0.22 + pointer.x * 0.24;
    }
    if (light.current) light.current.intensity = 2.8 + Math.sin(t * 1.7) * 0.65;
  });

  return (
    <Float speed={1.25} rotationIntensity={0.28} floatIntensity={0.42}>
      <mesh ref={mesh} castShadow>
        <icosahedronGeometry args={[1.45, 7]} />
        <MeshDistortMaterial
          color="#bff8ff"
          roughness={0.08}
          metalness={0.18}
          transmission={0.58}
          thickness={1.2}
          distort={0.18}
          speed={1.45}
          transparent
          opacity={0.76}
        />
      </mesh>
      <pointLight ref={light} color="#67e8f9" intensity={3.2} distance={8} />
    </Float>
  );
}

function Network() {
  const group = useRef<THREE.Group>(null);
  const points = useMemo(() => {
    return Array.from({ length: 15 }, (_, i) => {
      const angle = (i / 15) * Math.PI * 2;
      const radius = 2.6 + (i % 4) * 0.32;
      return new THREE.Vector3(Math.cos(angle) * radius, Math.sin(i * 1.7) * 0.62, Math.sin(angle) * radius);
    });
  }, []);

  useFrame(({ clock }) => {
    if (group.current) group.current.rotation.y = clock.getElapsedTime() * 0.055;
  });

  return (
    <group ref={group}>
      {points.map((point, index) => (
        <mesh position={point} key={index}>
          <sphereGeometry args={[0.035 + (index % 3) * 0.01, 16, 16]} />
          <meshBasicMaterial color={index % 2 ? '#8b5cf6' : '#67e8f9'} transparent opacity={0.88} />
        </mesh>
      ))}
      {points.map((point, index) => (
        <Line
          key={`line-${index}`}
          points={[point, points[(index + 5) % points.length]]}
          color={index % 2 ? '#8b5cf6' : '#67e8f9'}
          transparent
          opacity={0.22}
          lineWidth={1}
        />
      ))}
    </group>
  );
}

export default function CrystalScene({ compact = false }: { compact?: boolean }) {
  return (
    <Canvas
      className="crystal-canvas"
      dpr={[1, 1.75]}
      camera={{ position: [0, 0.2, compact ? 6.8 : 5.6], fov: 42 }}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
    >
      <color attach="background" args={['#000000']} />
      <ambientLight intensity={0.55} />
      <directionalLight position={[4, 4, 3]} intensity={1.8} color="#ffffff" />
      <Core />
      <Network />
      <Sparkles count={compact ? 42 : 90} scale={compact ? 5 : 7} size={2.2} speed={0.32} color="#dffbff" opacity={0.56} />
      <EffectComposer multisampling={0}>
        <Bloom luminanceThreshold={0.18} intensity={0.68} mipmapBlur />
        <Vignette darkness={0.38} eskil={false} />
      </EffectComposer>
    </Canvas>
  );
}
