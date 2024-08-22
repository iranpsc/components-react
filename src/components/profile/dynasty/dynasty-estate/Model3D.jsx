import { OrbitControls, useFBX } from "@react-three/drei";

import { Canvas } from "@react-three/fiber";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  canvas {
    width: 100px;
  }
`;
const Model = () => {
  const fbx = useFBX("/building.fbx");

  return (
    <primitive
      object={fbx}
      scale={[0.002, 0.002, 0.002]}
      position={[0, -2, 0]}
    />
  );
};

const Model3D = () => {
  return (
    <Container>
      <Canvas camera={{ position: [3, 3, 3] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} />
        <Model />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </Container>
  );
};

export default Model3D;
