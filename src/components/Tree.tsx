import { GhibliShader } from "@/shaders/GhibliShader";

import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

import { Color, Mesh, Vector3 } from "three";
import { GLTF } from "three-stdlib";
import { useMemo, useRef } from "react";

type GLTFResult = GLTF & {
  nodes: {
    Foliage: THREE.Mesh;
  };
  materials: {
    ["Stylized Foliage"]: THREE.MeshBasicMaterial;
  };
};

type Props = {
  colors: [Color, Color, Color, Color];
  position?: [number, number, number];
};

export function Tree(
  { colors, position }: Props,
  props: JSX.IntrinsicElements["group"]
) {
  const { nodes } = useGLTF("/trees.glb") as GLTFResult;
  const treeRef = useRef<Mesh>(null);

  useFrame((_state, delta) => {
    if (!treeRef.current) return null;

    treeRef.current.rotation.x += delta;
  });

  const uniforms = useMemo(() => {
    return {
      colorMap: {
        value: colors,
      },
      brightnessThresholds: {
        value: [0.6, 0.35, 0.001],
      },
      lightPosition: {
        value: new Vector3(15, 15, 15),
      },
    };
  }, [colors]);

  return (
    <group {...props} dispose={null}>
      <mesh
        scale={0.5}
        ref={treeRef}
        castShadow
        receiveShadow
        geometry={nodes.Foliage.geometry}
        position={position}
      >
        <shaderMaterial
          attach="material"
          {...GhibliShader}
          uniforms={uniforms}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload("/trees.glb");
