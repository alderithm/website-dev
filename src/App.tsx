import React, { Suspense } from 'react';
import XWing from './assets/XWing';
import AvatarTest from './assets/AvatarTest';
import GhostTest from './assets/GhostTest';
import Stage from './assets/Stage';
import MainLight from './MainLight';
import MenuOverlay from './components/MenuOverlay';
// import reportWebVitals from './reportWebVitals';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { a } from '@react-spring/web';
import useMediaQuery from './hooks/useMediaQuery';

const aspect = window.innerWidth / window.innerHeight;
const frustumSize = 500;
const left = frustumSize * aspect / - 2;
const right = frustumSize * aspect / 2;
const top = frustumSize / 2;
const bottom = frustumSize / - 2;

function App() {
  const [isSmallScreen] = useMediaQuery("screen and (max-aspect-ratio: 8/7)");
 
  const yposadjustment = -100;

  return (
    <a.main>
    <Canvas className="canvas" 
      shadows 
      camera={{ position: [-300, 300, 300], left: left, right: right, top: top, bottom: bottom, near: 1, far: 1000 } } 
      orthographic
    >
      <Suspense fallback={null}>
        <MainLight />
        <XWing 
          rotation={ [0, Math.PI / 2, 0] } 
          scale={15} 
          position={ [100, 5 + yposadjustment, 0] } 
        />
        <AvatarTest 
          castShadow 
          scale={18} 
          position={[-150, 4.5 + yposadjustment, -100]} 
          rotation={ [0, -Math.PI / 6, 0 ] }
        />
        <GhostTest 
          castShadow 
          scale={4} 
          rotation={[0, Math.PI / 2, 0]} 
          position={[-50, 4 + yposadjustment, -100]} 
        />
        <Stage 
          scale={isSmallScreen ? 8.5 : 15} 
          position={[0, 0 + yposadjustment, 0]} 
          rotation={[0, -Math.PI / 2, 0]} 
        />
        <OrbitControls />
      </Suspense>
    </Canvas>
    <MenuOverlay></MenuOverlay>
  </a.main>
  );
}

export default App;
