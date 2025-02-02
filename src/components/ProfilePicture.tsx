import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';
import { useTheme } from '../context/ThemeContext';

function AnimatedSphere() {
  const sphereRef = useRef<any>();
  const { theme } = useTheme();

  useFrame(({ clock }) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.z = clock.getElapsedTime() * 0.2;
    }
  });

  return (
    <Sphere ref={sphereRef} args={[1, 64, 64]} scale={1.5}>
      <MeshDistortMaterial
        color={theme === 'dark' ? '#4a9eff' : '#2563eb'}
        attach="material"
        distort={0.4}
        speed={2}
        roughness={0.5}
        metalness={0.8}
      />
    </Sphere>
  );
}

export default function ProfilePicture({ }: { imageUrl: string }) {
  return (
    <div className="relative w-full aspect-square max-w-md mx-auto">
      <div className="absolute inset-0 z-10">
        <Canvas camera={{ position: [0, 0, 2.5] }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <AnimatedSphere />
        </Canvas>
      </div>
      <div className="absolute inset-5 z-20">
        <div className="w-full h-full rounded-full overflow-hidden border-4 border-white/20 shadow-xl">
          <img
            src="../DSC00342.jpg"
            alt="Profile"
            className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
          />
        </div>
      </div>
    </div>
  );
}