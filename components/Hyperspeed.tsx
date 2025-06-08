"use client";

import * as THREE from "three";
import React, { useMemo, useRef, forwardRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { EffectComposer, GodRays } from "@react-three/postprocessing";
import { Sun } from "lucide-react";

const HyperspeedEffect = ({
  length = 400,
  roadWidth = 10,
  lanesPerRoad = 4,
  fov = 90,
  speedUp = 2,
  ...props
}) => {
  const ref = useRef<THREE.InstancedMesh>(null);

  const [positions, scales] = useMemo(() => {
    const positions = [];
    const scales = [];
    const geometry = new THREE.BoxGeometry(1, 1, 1);

    for (let i = 0; i < 2000; i++) {
      const x = (Math.random() - 0.5) * roadWidth;
      const y = (Math.random() - 0.5) * 20;
      const z = (Math.random() - 1) * length;
      positions.push(x, y, z);
      scales.push(
        (Math.random() - 0.5) * 0.2,
        (Math.random() - 0.5) * 0.2,
        Math.random() * 5
      );
    }
    return [new Float32Array(positions), new Float32Array(scales)];
  }, [length, roadWidth]);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.position.z += delta * 20 * speedUp;
      if (ref.current.position.z > length) {
        ref.current.position.z = 0;
      }
    }
  });

  return (
    <instancedMesh ref={ref} args={[undefined, undefined, 2000]}>
      <boxGeometry args={[0.02, 0.02, 4]} />
      <meshBasicMaterial color="white" />
    </instancedMesh>
  );
};

const SunComponent = forwardRef<THREE.Mesh>((props, ref) => (
  <mesh ref={ref} position={[0, 0, -200]}>
    <sphereGeometry args={[1, 32, 32]} />
    <meshBasicMaterial color="white" />
  </mesh>
));
SunComponent.displayName = "SunComponent";

const Hyperspeed = (props: any) => {
  const sunRef = useRef<THREE.Mesh>(null!);

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 0.1], fov: props.effectOptions?.fov || 90 }}
      >
        <color attach="background" args={["black"]} />
        <HyperspeedEffect {...props.effectOptions} />
        <EffectComposer>
          <GodRays
            sun={sunRef}
            exposure={0.5}
            decay={0.9}
            blur={true}
            samples={30}
          />
        </EffectComposer>
        <SunComponent ref={sunRef} />
      </Canvas>
    </div>
  );
};

export default Hyperspeed; 