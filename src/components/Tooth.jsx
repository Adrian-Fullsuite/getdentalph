import { useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function Tooth() {
  const ref = useRef(null);

  const model = useLoader(GLTFLoader, "model/tooth.glb");
  useFrame(() => {
    ref.current.rotation.x += 0.001;
    ref.current.rotation.y += 0.01;
  });
  return (
    <>
      <OrbitControls
        target={[0, 0, 0]}
        maxDistance={13}
        minDistance={3}
        enableZoom={true}
      />
      <PerspectiveCamera makeDefault fov={4000} position={[10, 0, 0]} />
      <ambientLight />
      <primitive
        ref={ref}
        object={model.scene}
        position={[0, 0, 0]}
      ></primitive>
    </>
  );
}

export default Tooth;
