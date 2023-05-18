import { Color } from "three";

import Plane from "@/components/Plane";
import { Tree } from "@/components/Tree";

export default function GhibliExperience() {
  return (
    <>
      <Tree
        colors={[
          new Color("#427062").convertLinearToSRGB(),
          new Color("#33594E").convertLinearToSRGB(),
          new Color("#234549").convertLinearToSRGB(),
          new Color("#1E363F").convertLinearToSRGB(),
        ]}
        position={[0, 0, 0]}
      />
      <Plane />
    </>
  );
}
