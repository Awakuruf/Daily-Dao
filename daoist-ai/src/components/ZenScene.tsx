// File: src/components/ZenScene.tsx
import { Canvas } from '@react-three/fiber';

export function ZenScene() {
  return (
    <Canvas className="w-full h-full fixed top-0 left-0 z-0">
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <mesh position={[0, 0, -5]}>
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial color="#e0f7fa" />
      </mesh>
    </Canvas>
  );
}