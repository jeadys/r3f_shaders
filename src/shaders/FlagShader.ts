export const FlagShader = {
  uniforms: {
    uFrequency: { value: [20, 10] },
    uTime: { value: 0 },
    uTexture: { value: "/dbz.jpg" },
  },

  vertexShader: /* glsl */ `
    uniform vec2 uFrequency;
    uniform float uTime;

    varying vec2 vUv;
    varying float vElevation;

    void main() {
        vec4 modelPosition = modelMatrix * vec4(position, 1.0);
        
        float elevation = sin(modelPosition.x * uFrequency.x - uTime) * 0.1;
        elevation += sin(modelPosition.y * uFrequency.y - uTime) * 0.1;1;
    
        modelPosition.z += elevation;
    
        vec4 viewPosition = viewMatrix * modelPosition;
        vec4 projectionPosition = projectionMatrix * viewPosition; 
    
        gl_Position = projectionPosition;
    
        vUv = uv;
        vElevation = elevation;
    }
    `,

  fragmentShader: /* glsl */ `
    precision mediump float;

    uniform vec3 uColor;
    uniform sampler2D uTexture;
    
    varying vec2 vUv;
    varying float vElevation;

    void main() {
        vec4 textureColor = texture2D(uTexture, vUv);
        textureColor.rgb *= vElevation * 2.0 + 1.0;
    
        gl_FragColor = textureColor;
    }
    `,
};
