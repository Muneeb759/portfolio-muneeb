import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random';
import { useTheme } from '../context/ThemeContext';

function Stars() {
  const ref = useRef<any>();
  const { theme } = useTheme();
  
  const positions = useMemo(() => {
    const pos = new Float32Array(2000 * 3);
    random.inSphere(pos, { radius: 1.5 });
    return pos;
  }, []);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 20;
      ref.current.rotation.y -= delta / 25;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={positions}
        stride={3}
        frustumCulled={false}
      >
        <PointMaterial
          transparent
          color={theme === 'dark' ? '#4a9eff' : '#000000'}
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={theme === 'dark' ? 0.8 : 0.5}
        />
      </Points>
    </group>
  );
}

export default function Background() {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10">
      <Canvas
        camera={{ position: [0, 0, 1] }}
        style={{ background: 'transparent' }}
      >
        <Stars />
      </Canvas>
    </div>
  );
}