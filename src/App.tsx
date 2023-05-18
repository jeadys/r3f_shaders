import GhibliExperience from "./experiences/GhibliExperience";
import Lights from "@/Lights";
import "./App.css";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Perf } from "r3f-perf";

function App() {
  return (
    <Canvas shadows>
      <Perf position="top-left" />
      <Lights />
      <GhibliExperience />

      <OrbitControls />
    </Canvas>
  );
}

export default App;
