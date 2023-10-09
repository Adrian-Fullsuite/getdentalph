import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
function Place() {
  return (
    <>
      <OrbitControls
        target={[0, 0, 0]}
        maxDistance={13}
        minDistance={3}
        enableZoom={true}
      />
      <PerspectiveCamera makeDefault fov={50} position={[0, 0, 0]} />
      <mesh>
        <boxGeometry />
        <meshBasicMaterial />
      </mesh>
    </>
  );
}

export default Place;
