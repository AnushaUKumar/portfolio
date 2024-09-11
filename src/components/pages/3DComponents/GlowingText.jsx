// import React, { useRef, useEffect, useState } from 'react';
// import { extend, useFrame } from '@react-three/fiber';
// import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
// import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
// import * as THREE from 'three';
// import { shaderMaterial } from '@react-three/drei';

// extend({ TextGeometry });

// const GlowingMaterial = shaderMaterial(
//   { time: 0, color: new THREE.Color(0xF5F5F5) },
//   `uniform float time;
//    void main() {
//      vec3 transformed = position.xyz;
//      gl_Position = projectionMatrix * modelViewMatrix * vec4(transformed, 1.0);
//    }`,
//   `uniform vec3 color;
//    uniform float time;
//    void main() {
//      gl_FragColor = vec4(color * abs(sin(time)), 1.0);
//    }`
// );



// extend({ GlowingMaterial });

// function GlowingText({ position, fontSize, text }) {
//   const meshRef = useRef();
//   const [font, setFont] = useState();

//   useEffect(() => {
//     const loader = new FontLoader();
//     fetch('/fonts/Saira Stencil One_Regular.json')  // Adjust the path to your font
//       .then(response => response.json())
//       .then(loadedFont => {
//         setFont(loader.parse(loadedFont));
//       })
//       .catch(error => {
//         console.error('Error loading font:', error);
//       });
//   }, []);

//   useFrame((state, delta) => {
//     if (meshRef.current) {
//       meshRef.current.material.uniforms.time.value += delta;
//     }
//   });

//   if (!font) return null;

//   return (
//     <mesh position={position} ref={meshRef}>
//       <textGeometry args={[text, { font, size: fontSize, height: 0.1 }]} />
//       <glowingMaterial attach="material" />
//     </mesh>
//   );
// }

// export default GlowingText;
// import React, { useRef, useEffect, useState } from 'react';
// import { extend, useFrame } from '@react-three/fiber';
// import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
// import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
// import * as THREE from 'three';
// import { shaderMaterial } from '@react-three/drei';

// // Extend TextGeometry to use in React Three Fiber
// extend({ TextGeometry });

// const GradientMaterial = shaderMaterial(
//   { time: 0, startColor: new THREE.Color(0xAFE1AF), endColor: new THREE.Color(0xAAFF00) },
//   `uniform float time;
//    varying vec3 vPosition;
//    void main() {
//      vPosition = position;
//      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
//    }`,
//   `uniform vec3 startColor;
//    uniform vec3 endColor;
//    varying vec3 vPosition;
//    void main() {
//      float gradientFactor = (vPosition.y + 1.0) / 2.0;
//      vec3 gradientColor = mix(startColor, endColor, gradientFactor);
//      gl_FragColor = vec4(gradientColor, 1.0);
//    }`
// );

// extend({ GradientMaterial });

// function GlowingText({ position, fontSize, text }) {
//   const meshRef = useRef();
//   const [font, setFont] = useState();

//   useEffect(() => {
//     const loader = new FontLoader();
//     fetch('/fonts/Saira Stencil One_Regular.json') // Ensure the correct path
//       .then(response => response.json())
//       .then(loadedFont => {
//         setFont(loader.parse(loadedFont));
//       })
//       .catch(error => {
//         console.error('Error loading font:', error);
//       });
//   }, []);

//   useFrame((state, delta) => {
//     if (meshRef.current) {
//       meshRef.current.material.uniforms.time.value += delta;
//     }
//   });

//   if (!font) return null;

//   return (
//     <mesh
//       position={position}
//       ref={meshRef}
//       castShadow
//       receiveShadow // Enable shadow casting and receiving
//     >
//       <textGeometry args={[text, { font, size: fontSize, height: 0.1 }]} />
//       <gradientMaterial attach="material" />
//     </mesh>
//   );
// }

// export default GlowingText;
import React, { useRef, useEffect, useState } from 'react';
import { extend, useFrame } from '@react-three/fiber';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import * as THREE from 'three';
import { shaderMaterial } from '@react-three/drei';

// Extend TextGeometry to use in React Three Fiber
extend({ TextGeometry });

const GradientMaterial = shaderMaterial(
  { time: 0, startColor: new THREE.Color(0x36454F), endColor: new THREE.Color(0xC0C0C0) }, // Adjusted colors for less brightness
  `uniform float time;
   varying vec3 vPosition;
   void main() {
     vPosition = position;
     gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
   }`,
  `uniform vec3 startColor;
   uniform vec3 endColor;
   varying vec3 vPosition;
   void main() {
     float gradientFactor = (vPosition.y + 1.0) / 2.0;
     vec3 gradientColor = mix(startColor, endColor, gradientFactor);
     gl_FragColor = vec4(gradientColor * 0.3, 1.0);  // Lowered brightness and added a soft transparency
   }`
);

extend({ GradientMaterial });

function GlowingText({ position, fontSize, text }) {
  const meshRef = useRef();
  const [font, setFont] = useState();

  useEffect(() => {
    const loader = new FontLoader();
    fetch('/fonts/Saira Stencil One_Regular.json') // Ensure the correct path to your font
      .then((response) => response.json())
      .then((loadedFont) => {
        setFont(loader.parse(loadedFont));
      })
      .catch((error) => {
        console.error('Error loading font:', error);
      });
  }, []);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.material.uniforms.time.value += delta;
    }
  });

  if (!font) return null;

  return (
    <mesh
      position={position}
      ref={meshRef}
      castShadow
      receiveShadow
    >
      <textGeometry args={[text, { font, size: fontSize, height: 0.1 }]} />
      <gradientMaterial attach="material" />
    </mesh>
  );
}

export default GlowingText;
