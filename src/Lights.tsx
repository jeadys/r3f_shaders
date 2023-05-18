export default function Lights() {
  return (
    <>
      <ambientLight intensity={0.1} />
      <directionalLight
        color="white"
        position={[15, 15, 15]}
        castShadow
        shadow-mapSize={[2048, 2048]}
      />
    </>
  );
}
