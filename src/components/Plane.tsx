export default function Plane() {
  return (
    <mesh receiveShadow castShadow rotation-x={-Math.PI / 2} position-y={-3}>
      <planeGeometry args={[100, 100, 1, 1]} />
      <shadowMaterial opacity={0.4} />
    </mesh>
  );
}
