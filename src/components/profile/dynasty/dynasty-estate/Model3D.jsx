import { OrbitControls, useGLTF, useTexture } from "@react-three/drei";

import { Canvas } from "@react-three/fiber";
import model from '../../../../assets/images/profile/home.png'
import styled from "styled-components";
import { useRef } from "react";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HouseModel = () => {
  const texture = useTexture(model);
  const meshRef = useRef();

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[5, 5]} />
      <meshBasicMaterial map={texture} transparent />
    </mesh>
  );
};

const Model3D = () => {
  return (
    <Container>
      <Canvas camera={{ position: [3, 3, 3] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} />
        <HouseModel />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </Container>
  );
};

export default Model3D;
