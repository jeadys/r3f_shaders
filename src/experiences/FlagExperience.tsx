import { FlagShader } from "@/shaders/FlagShader";

import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";

import { DoubleSide, RawShaderMaterial } from "three";
import { useRef } from "react";

export default function FlagExperience() {
  const texture = useTexture("/dbz.jpg");
  const shaderRef = useRef<RawShaderMaterial>(null);

  useFrame((state) => {
    if (!shaderRef.current) return null;
    const time = state.clock.getElapsedTime();

    shaderRef.current.uniforms.uTime.value = time;
  });

  const uniforms = {
    uFrequency: { value: [20, 10] },
    uTime: { value: 0 },
    uTexture: { value: texture },
  };

  return (
    <mesh castShadow receiveShadow position={[0, 0, 0]}>
      <planeGeometry args={[1, 1, 32, 32]} />
      <shaderMaterial
        ref={shaderRef}
        attach="material"
        {...FlagShader}
        uniforms={uniforms}
        transparent
        side={DoubleSide}
      />
    </mesh>
  );
}
