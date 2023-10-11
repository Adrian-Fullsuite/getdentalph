/* eslint-disable react/no-unknown-property */
import { useFrame, useLoader } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import { useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function Tooth() {
  const ref = useRef(null);

  const model = useLoader(GLTFLoader, "model/tooth_final.glb");
  useFrame(() => {
    ref.current.rotation.y += 0.01;
  });
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 10]} />
      <ambientLight />
      <spotLight
        color={[1, 1, 1]}
        intensity={200}
        angle={0.6}
        penumbra={0.5}
        position={[0, 10, 5]}
        castShadow
        shadow-bias={-0.0001}
      />
      <spotLight
        color={[1, 1, 1]}
        intensity={200}
        angle={0.6}
        penumbra={0.5}
        position={[0, 10, -5]}
        castShadow
        shadow-bias={-0.0001}
      />
      <spotLight
        color={[1, 1, 1]}
        intensity={100}
        angle={0.6}
        penumbra={0.5}
        position={[0, -5, -5]}
        castShadow
        shadow-bias={-0.0001}
      />
      <spotLight
        color={[1, 1, 1]}
        intensity={100}
        angle={0.6}
        penumbra={0.5}
        position={[-5, -5, 0]}
        castShadow
        shadow-bias={-0.0001}
      />
      <primitive
        ref={ref}
        object={model.scene}
        position={[0, 0, 0]}
      ></primitive>
    </>
  );
}

export default Tooth;
