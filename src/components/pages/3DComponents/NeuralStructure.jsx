

// import React, { useRef, useMemo, useState, useEffect } from 'react';
// import { extend, useFrame, useLoader } from '@react-three/fiber';
// import { BufferGeometry, Float32BufferAttribute, Vector3, Color, ShaderMaterial, LineBasicMaterial, TextureLoader } from 'three';
// import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';

// // Extend to include TextGeometry in Three.js
// extend({ TextGeometry });

// function NeuralStructure() {
//     const groupRef = useRef();
//     const [activeLines, setActiveLines] = useState([]); // Track active lines for glow effect
//     const materialRef = useRef(); // Reference for shader material to control animation
//     const [selectedNode, setSelectedNode] = useState(null); // Node selected by the user
//     const [outputIconsVisible, setOutputIconsVisible] = useState(false);
//     const [dimNodes, setDimNodes] = useState(false);
//     const [selectedCategory, setSelectedCategory] = useState(null);
//     const [hiddenIconsState, setHiddenIconsState] = useState(null);

//     // Load textures for icons and hidden layers
//     const iconTextures = [
//         useLoader(TextureLoader, '/images/aboutme.jpg'),
//         useLoader(TextureLoader, '/images/skill.png'),
//         useLoader(TextureLoader, '/images/graduate.png'),
//         useLoader(TextureLoader, '/images/work-experience.png'),
//         useLoader(TextureLoader, '/images/projects.png')
//     ];

//     const outputIcons = [
//         useLoader(TextureLoader, '/images/webstack.jpg'),
//         useLoader(TextureLoader, '/images/data.png'),
//         useLoader(TextureLoader, '/images/backend.png'),
//         useLoader(TextureLoader, '/images/bachelors.jpg'),
//         useLoader(TextureLoader, '/images/masters.jpg'),
//         useLoader(TextureLoader, '/images/masters_college.jpg')
//     ];

//     const hiddenIcons = {
//         webstack: [
//             useLoader(TextureLoader, '/images/html.png'),
//             useLoader(TextureLoader, '/images/css.png'),
//             useLoader(TextureLoader, '/images/javascript.png'),
//             useLoader(TextureLoader, '/images/react.png'),
//             useLoader(TextureLoader, '/images/nodejs.png')
//         ],
//         datascience: [
//             useLoader(TextureLoader, '/images/python.png'),
//             useLoader(TextureLoader, '/images/pandas.png'),
//             useLoader(TextureLoader, '/images/numpy.png'),
//             useLoader(TextureLoader, '/images/powerbi.png'),
//             useLoader(TextureLoader, '/images/ML.png')
//         ],
//         backend: [
//             useLoader(TextureLoader, '/images/express.png'),
//             useLoader(TextureLoader, '/images/mongo.png'),
//             useLoader(TextureLoader, '/images/sql.png'),
//             useLoader(TextureLoader, '/images/express.png'),
//             useLoader(TextureLoader, '/images/tableau.png')
//         ],
//         bachelors: [
//             useLoader(TextureLoader, '/images/bachelors_college.png')
//         ],
//         masters: [
//             useLoader(TextureLoader, '/images/masters_college.jpg')
//         ],
//         experience1: [
//             useLoader(TextureLoader, '/images/masters_college.jpg')
//         ],
//         experience2: [
//             useLoader(TextureLoader, '/images/masters_college.jpg')
//         ]
//     };

//     // Node positions for different layers
//     const positions = useMemo(() => ({
//         hidden1: Array.from({ length: 5 }, (_, i) => new Vector3(-15, 20 - i * 10, 0)),
//         hidden2: Array.from({ length: 9 }, (_, i) => new Vector3(20, 40 - i * 10, 0)),
//         output: [
//             new Vector3(55, 20, 0),
//             new Vector3(55, 10, 0),
//             new Vector3(55, 0, 0),
//             new Vector3(55, -10, 0),
//             new Vector3(55, -20, 0)
//         ]
//     }), []);

//     const totalLayers = Object.keys(positions).length;

//     // Default line material for non-glowing lines
//     const defaultLineMaterial = useMemo(() => new LineBasicMaterial({
//         color: new Color(0x888888),  // Non-glowing lines will have a dim gray color
//         linewidth: 0.002,
//         transparent: true,
//         opacity: 0.5
//     }), []);

//     // Custom shader material for glowing effect
//     const shaderMaterial = useMemo(() => new ShaderMaterial({
//         uniforms: {
//             time: { value: 0 },
//             color: { value: new Color(0x00ffff) },
//             opacity: { value: 1.0 }
//         },
//         vertexShader: `
//             varying vec3 vPosition;
//             void main() {
//                 vPosition = position;
//                 gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
//             }
//         `,
//         fragmentShader: `
//             uniform float time;
//             uniform vec3 color;
//             varying vec3 vPosition;
//             void main() {
//                 float intensity = 0.5 + 0.5 * sin(vPosition.x * 10.0 + time * 5.0);
//                 gl_FragColor = vec4(color * intensity, intensity);
//             }
//         `,
//         transparent: true
//     }), []);

//     // Function to compute the color of layers
//     const computeColor = (layerIndex, totalLayers) => {
//         const startColor = new Color(0xfafafa); // Light Silver (for input layer)
//         const midColor = new Color(0xb0b0b0);  // Metallic Silver (hidden layer)
//         const endColor = new Color(0xf8f8ff);  // White Smoke (for output layer)

//         if (layerIndex === 0) return startColor; // For input layer
//         if (layerIndex === totalLayers - 1) return endColor; // For output layer

//         const t = layerIndex / (totalLayers - 1);
//         return startColor.clone().lerp(midColor, t).lerp(endColor, t * t); // For hidden layers
//     };

//     // Function to add line animations
//     const lines = useMemo(() => {
//         const allLines = [];
//         const addLine = (start, end, index, isActive) => {
//             const geometry = new BufferGeometry().setFromPoints([start, end]);

//             allLines.push(
//                 <line key={`line-${index}`} geometry={geometry} material={isActive ? shaderMaterial : defaultLineMaterial} />
//             );
//         };

//         let lineIndex = 0;

//         // Connect hidden1 to hidden2
//         positions.hidden1.forEach((startPos) => {
//             positions.hidden2.forEach((endPos) => {
//                 const isActive = activeLines.includes(lineIndex);  // Check if this line should glow
//                 addLine(startPos, endPos, lineIndex++, isActive);
//             });
//         });

//         // Connect hidden2 to output
//         positions.hidden2.forEach((startPos) => {
//             positions.output.forEach((endPos) => {
//                 const isActive = activeLines.includes(lineIndex);  // Check if this line should glow
//                 addLine(startPos, endPos, lineIndex++, isActive);
//             });
//         });

//         return allLines; // Make sure to return the lines array
//     }, [positions, activeLines, shaderMaterial, defaultLineMaterial]);

//     // Update animation time
//     useFrame(({ clock }) => {
//         if (shaderMaterial) {
//             shaderMaterial.uniforms.time.value = clock.getElapsedTime();
//         }
//     });

//     // Handle input node click functionality
//     const handleInputNodeClick = (index) => {
//         // Reset hidden state when clicking another node
//         setSelectedCategory(null);
//         setHiddenIconsState(null);

//         // Toggle output icons visibility and set selected node
//         if (selectedNode === index) {
//             // If the same node is clicked again, reset the states
//             setOutputIconsVisible(false);
//             setDimNodes(false);
//             setSelectedNode(null);
//         } else {
//             // Otherwise, display the output icons for the selected node
//             setOutputIconsVisible(true);
//             setDimNodes(true);
//             setSelectedNode(index);
//         }
//     };

//     // Handle output node click functionality
//     const handleOutputClick = (index) => {
//         if (selectedNode !== null) {
//             if (selectedNode === 1 && index < 3) {
//                 setSelectedCategory(index);
//                 setHiddenIconsState(Object.keys(hiddenIcons)[index]);
//             } else if (selectedNode === 2 && index >= 3) {
//                 setSelectedCategory(index);
//                 setHiddenIconsState(Object.keys(hiddenIcons)[index]);
//             } else if (selectedNode === 3) {
//                 if (index === 3) {
//                     setSelectedCategory("data_analyst_intern");
//                     setHiddenIconsState("experience1");
//                 } else if (index === 4) {
//                     setSelectedCategory("data_engineer");
//                     setHiddenIconsState("experience2");
//                 }
//             }
//         }
//     };

//     // Randomly activate a subset of lines every 1.5 seconds
//     useEffect(() => {
//         const interval = setInterval(() => {
//             const totalLines = positions.hidden1.length * positions.hidden2.length + positions.hidden2.length * positions.output.length;

//             const newActiveLines = Array.from({ length: 50 }, () => Math.floor(Math.random() * totalLines));  // Activate random 50 lines
//             setActiveLines(newActiveLines);
//         }, 1500);

//         return () => clearInterval(interval);
//     }, [positions]);

//     // Metallic material for inactive nodes
//     const metallicMaterial = {
//         color: new Color(0xfafafa),  // Light silver color for nodes
//         metalness: 0.8,              // High metalness for a metallic look
//         roughness: 0.1,              // Low roughness for smooth reflections
//         emissive: new Color(0x555555), // Subtle emissive glow
//         emissiveIntensity: 0.1       // Control the intensity of the glow
//     };

//     return (
//         <group ref={groupRef} position={[-30, 0, 0]} scale={[1.2, 1.2, 1.2]}>
//             {/* Lighting Setup */}
//             <ambientLight intensity={0.8} />
//             <directionalLight 
//                 position={[10, 10, 90]} 
//                 intensity={3} 
//                 castShadow={true}  
//                 shadow-mapSize-width={1024}
//                 shadow-mapSize-height={1024}
//                 shadow-camera-far={50}
//                 shadow-camera-left={-10}
//                 shadow-camera-right={10}
//                 shadow-camera-top={10}
//                 shadow-camera-bottom={-10}
//             />

//             {/* Render hidden1 nodes */}
//             {positions.hidden1.map((pos, index) => (
//                 <mesh
//                     key={`hidden1-${index}`}
//                     position={pos.toArray()}
//                     onClick={() => handleInputNodeClick(index)}
//                 >
//                     {index < 5 ? (
//                         <mesh position={[0, 0, 1]}>
//                             <circleGeometry args={[4, 32]} />
//                             <meshBasicMaterial
//                                 map={iconTextures[index]}
//                                 opacity={dimNodes && index !== selectedNode ? 0.2 : 1}
//                                 transparent
//                             />
//                         </mesh>
//                     ) : (
//                         <mesh>
//                             <sphereGeometry args={[2.3, 32, 32]} />
//                             <meshStandardMaterial {...metallicMaterial} />
//                         </mesh>
//                     )}
//                 </mesh>
//             ))}

//             {/* Render hidden2 nodes */}
//             {positions.hidden2.map((pos, index) => (
//                 <mesh key={`hidden2-${index}`} position={pos.toArray()}>
//                     {hiddenIconsState && index < hiddenIcons[hiddenIconsState]?.length ? (
//                         <mesh position={[0, 0, 1]}>
//                             <circleGeometry args={[4, 32]} />
//                             <meshBasicMaterial map={hiddenIcons[hiddenIconsState][index]} />
//                         </mesh>
//                     ) : (
//                         <sphereGeometry args={[2.5, 32, 32]} />
//                     )}
//                     <meshStandardMaterial {...metallicMaterial} />
//                 </mesh>
//             ))}

//             {/* Render output nodes */}
//             {positions.output.map((pos, index) => (
//                 <mesh
//                     key={`output-${index}`}
//                     position={pos.toArray()}
//                     onClick={() => handleOutputClick(index)}
//                 >
//                     {outputIconsVisible &&
//                     ((selectedNode === 1 && index < 3) || 
//                     (selectedNode === 2 && index >= 3 && index <= 4) || 
//                     (selectedNode === 3 && index >= 3)) ? (
//                         <mesh position={[0, 0, 1]}>
//                             <circleGeometry args={[4, 32]} />
//                             <meshBasicMaterial 
//                                 map={
//                                     selectedNode === 1 && index < 3 ? outputIcons[index] :  
//                                     selectedNode === 2 && index >= 3 ? outputIcons[index] :  
//                                     selectedNode === 3 && index === 3 ? outputIcons[5] :  
//                                     selectedNode === 3 && index === 4 ? outputIcons[6] :  
//                                     null
//                                 } 
//                             />
//                         </mesh>
//                     ) : (
//                         <sphereGeometry args={[2.5, 32, 32]} />
//                     )}
//                     <meshStandardMaterial {...metallicMaterial} />
//                 </mesh>
//             ))}

//             {/* Render glowing lines */}
//             {lines}
//         </group>
//     );
// }

// export default NeuralStructure;
// import React, { useRef, useMemo, useState, useEffect } from 'react';
// import { extend, useFrame, useLoader } from '@react-three/fiber';
// import { BufferGeometry, Float32BufferAttribute, Vector3, Color, ShaderMaterial, LineBasicMaterial, TextureLoader } from 'three';
// import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';

// // Extend to include TextGeometry in Three.js
// extend({ TextGeometry });

// function NeuralStructure() {
//     const groupRef = useRef();
//     const [activeLines, setActiveLines] = useState([]); // Track active lines for glow effect
//     const materialRef = useRef(); // Reference for shader material to control animation
//     const [selectedNode, setSelectedNode] = useState(null); // Node selected by the user
//     const [outputIconsVisible, setOutputIconsVisible] = useState(false);
//     const [dimNodes, setDimNodes] = useState(false);
//     const [selectedCategory, setSelectedCategory] = useState(null);
//     const [hiddenIconsState, setHiddenIconsState] = useState(null);

//     // Load textures for icons and hidden layers
//     const iconTextures = [
//         useLoader(TextureLoader, '/images/aboutme.jpg'),
//         useLoader(TextureLoader, '/images/skill.png'),
//         useLoader(TextureLoader, '/images/graduate.png'),
//         useLoader(TextureLoader, '/images/work-experience.png'),
//         useLoader(TextureLoader, '/images/projects.png')
//     ];

//     const outputIcons = [
//         useLoader(TextureLoader, '/images/webstack.jpg'),
//         useLoader(TextureLoader, '/images/data.png'),
//         useLoader(TextureLoader, '/images/backend.png'),
//         useLoader(TextureLoader, '/images/bachelors.jpg'),
//         useLoader(TextureLoader, '/images/masters.jpg'),
//         useLoader(TextureLoader, '/images/masters_college.jpg')
//     ];

//     const hiddenIcons = {
//         webstack: [
//             useLoader(TextureLoader, '/images/html.png'),
//             useLoader(TextureLoader, '/images/css.png'),
//             useLoader(TextureLoader, '/images/javascript.png'),
//             useLoader(TextureLoader, '/images/react.png'),
//             useLoader(TextureLoader, '/images/nodejs.png')
//         ],
//         datascience: [
//             useLoader(TextureLoader, '/images/python.png'),
//             useLoader(TextureLoader, '/images/pandas.png'),
//             useLoader(TextureLoader, '/images/numpy.png'),
//             useLoader(TextureLoader, '/images/powerbi.png'),
//             useLoader(TextureLoader, '/images/ML.png')
//         ],
//         backend: [
//             useLoader(TextureLoader, '/images/express.png'),
//             useLoader(TextureLoader, '/images/mongo.png'),
//             useLoader(TextureLoader, '/images/sql.png'),
//             useLoader(TextureLoader, '/images/express.png'),
//             useLoader(TextureLoader, '/images/tableau.png')
//         ],
//         bachelors: [
//             useLoader(TextureLoader, '/images/bachelors_college.png')
//         ],
//         masters: [
//             useLoader(TextureLoader, '/images/masters_college.jpg')
//         ],
//         experience1: [
//             useLoader(TextureLoader, '/images/masters_college.jpg')
//         ],
//         experience2: [
//             useLoader(TextureLoader, '/images/masters_college.jpg')
//         ]
//     };

//     // Node positions for different layers
//     const positions = useMemo(() => ({
//         hidden1: Array.from({ length: 5 }, (_, i) => new Vector3(-15, 20 - i * 10, 0)),
//         hidden2: Array.from({ length: 9 }, (_, i) => new Vector3(20, 40 - i * 10, 0)),
//         output: [
//             new Vector3(55, 20, 0),
//             new Vector3(55, 10, 0),
//             new Vector3(55, 0, 0),
//             new Vector3(55, -10, 0),
//             new Vector3(55, -20, 0)
//         ]
//     }), []);

//     const totalLayers = Object.keys(positions).length;

//     // Default line material for non-glowing lines
//     const defaultLineMaterial = useMemo(() => new LineBasicMaterial({
//         color: new Color(0x888888),  // Non-glowing lines will have a dim gray color
//         linewidth: 0.002,
//         transparent: true,
//         opacity: 0.5
//     }), []);

//     // Custom shader material for glowing effect
//     const shaderMaterial = useMemo(() => new ShaderMaterial({
//         uniforms: {
//             time: { value: 0 },
//             color1: { value: new Color(0xFFFFFF) },  // Dark red
//             color2: { value: new Color(0x90EE90) },  // Light orange
//             opacity: { value: 1.0 }
//         },
//         vertexShader: `
//             varying vec3 vPosition;
//             void main() {
//                 vPosition = position;
//                 gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
//             }
//         `,
//         fragmentShader: `
//             uniform float time;
//             uniform vec3 color1;
//             uniform vec3 color2;
//             varying vec3 vPosition;
//             void main() {
//                 // Create a gradient effect from dark red to light orange
//                 float mixFactor = abs(sin(vPosition.x * 0.1 + time * 0.5)); // Adjust speed and smoothness of the gradient
//                 vec3 finalColor = mix(color1, color2, mixFactor);
//                 gl_FragColor = vec4(finalColor, 1.0);
//             }
//         `,
//         transparent: true
//     }), []);

//     // Function to compute the color of layers
//     const computeColor = (layerIndex, totalLayers) => {
//         const startColor = new Color(0xfafafa); // Light Silver (for input layer)
//         const midColor = new Color(0xb0b0b0);  // Metallic Silver (hidden layer)
//         const endColor = new Color(0xf8f8ff);  // White Smoke (for output layer)

//         if (layerIndex === 0) return startColor; // For input layer
//         if (layerIndex === totalLayers - 1) return endColor; // For output layer

//         const t = layerIndex / (totalLayers - 1);
//         return startColor.clone().lerp(midColor, t).lerp(endColor, t * t); // For hidden layers
//     };

//     // Function to add line animations
//     const lines = useMemo(() => {
//         const allLines = [];
//         const addLine = (start, end, index, isActive) => {
//             const geometry = new BufferGeometry().setFromPoints([start, end]);

//             allLines.push(
//                 <line key={`line-${index}`} geometry={geometry} material={isActive ? shaderMaterial : defaultLineMaterial} />
//             );
//         };

//         let lineIndex = 0;

//         // Connect hidden1 to hidden2
//         positions.hidden1.forEach((startPos) => {
//             positions.hidden2.forEach((endPos) => {
//                 const isActive = activeLines.includes(lineIndex);  // Check if this line should glow
//                 addLine(startPos, endPos, lineIndex++, isActive);
//             });
//         });

//         // Connect hidden2 to output
//         positions.hidden2.forEach((startPos) => {
//             positions.output.forEach((endPos) => {
//                 const isActive = activeLines.includes(lineIndex);  // Check if this line should glow
//                 addLine(startPos, endPos, lineIndex++, isActive);
//             });
//         });

//         return allLines; // Make sure to return the lines array
//     }, [positions, activeLines, shaderMaterial, defaultLineMaterial]);

//     // Update animation time
//     useFrame(({ clock }) => {
//         if (shaderMaterial) {
//             shaderMaterial.uniforms.time.value = clock.getElapsedTime();
//         }
//     });

//     // Handle input node click functionality
//     const handleInputNodeClick = (index) => {
//         // Reset hidden state when clicking another node
//         setSelectedCategory(null);
//         setHiddenIconsState(null);

//         // Toggle output icons visibility and set selected node
//         if (selectedNode === index) {
//             // If the same node is clicked again, reset the states
//             setOutputIconsVisible(false);
//             setDimNodes(false);
//             setSelectedNode(null);
//         } else {
//             // Otherwise, display the output icons for the selected node
//             setOutputIconsVisible(true);
//             setDimNodes(true);
//             setSelectedNode(index);
//         }
//     };

//     // Handle output node click functionality
//     const handleOutputClick = (index) => {
//         if (selectedNode !== null) {
//             if (selectedNode === 1 && index < 3) {
//                 setSelectedCategory(index);
//                 setHiddenIconsState(Object.keys(hiddenIcons)[index]);
//             } else if (selectedNode === 2 && index >= 3) {
//                 setSelectedCategory(index);
//                 setHiddenIconsState(Object.keys(hiddenIcons)[index]);
//             } else if (selectedNode === 3) {
//                 if (index === 3) {
//                     setSelectedCategory("data_analyst_intern");
//                     setHiddenIconsState("experience1");
//                 } else if (index === 4) {
//                     setSelectedCategory("data_engineer");
//                     setHiddenIconsState("experience2");
//                 }
//             }
//         }
//     };

//     // Randomly activate a subset of lines every 1.5 seconds
//     useEffect(() => {
//         const interval = setInterval(() => {
//             const totalLines = positions.hidden1.length * positions.hidden2.length + positions.hidden2.length * positions.output.length;

//             const newActiveLines = Array.from({ length: 50 }, () => Math.floor(Math.random() * totalLines));  // Activate random 50 lines
//             setActiveLines(newActiveLines);
//         }, 1500);

//         return () => clearInterval(interval);
//     }, [positions]);

//     // Proper metallic and emissive materials for nodes (matching your provided colors and lighting)
//     const nodeMaterial = (color) => ({
//         color: new Color(color),       // Node color
//         metalness: 0.9,               // High metalness for a metallic look
//         roughness: 0.1,               // Low roughness for smooth reflections
//         emissive: new Color(0x555555), // Subtle emissive color for a gentle glow
//         emissiveIntensity: 0.3        // Control the intensity of the glow
//     });

//     return (
//         <group ref={groupRef} position={[-30, 0, 0]} scale={[1.2, 1.2, 1.2]}>
//             {/* Lighting Setup */}
//             <ambientLight intensity={0.8} />  {/* Ambient lighting for soft background illumination */}
//             <directionalLight 
//                 position={[10, 10, 90]} 
//                 intensity={3} 
//                 castShadow={true}  
//                 shadow-mapSize-width={1024}
//                 shadow-mapSize-height={1024}
//             />

//             {/* Render hidden1 nodes with metallic and emissive material */}
//             {positions.hidden1.map((pos, index) => (
//                 <mesh
//                     key={`hidden1-${index}`}
//                     position={pos.toArray()}
//                     onClick={() => handleInputNodeClick(index)}
//                 >
//                     {index < 5 ? (
//                         <mesh position={[0, 0, 1]}>
//                             <circleGeometry args={[4, 32]} />
//                             <meshBasicMaterial
//                                 map={iconTextures[index]}
//                                 opacity={dimNodes && index !== selectedNode ? 0.2 : 1}
//                                 transparent
//                             />
//                         </mesh>
//                     ) : (
//                         <mesh>
//                             <sphereGeometry args={[2.5, 32, 32]} />
//                             <meshStandardMaterial {...nodeMaterial(0xfafafa)} />  {/* Light silver color */}
//                         </mesh>
//                     )}
//                 </mesh>
//             ))}

//             {/* Render hidden2 nodes */}
//             {positions.hidden2.map((pos, index) => (
//                 <mesh key={`hidden2-${index}`} position={pos.toArray()}>
//                     {hiddenIconsState && index < hiddenIcons[hiddenIconsState]?.length ? (
//                         <mesh position={[0, 0, 1]}>
//                             <circleGeometry args={[4, 32]} />
//                             <meshBasicMaterial map={hiddenIcons[hiddenIconsState][index]} />
//                         </mesh>
//                     ) : (
//                         <sphereGeometry args={[2.5, 32, 32]} />
//                     )}
//                     <meshStandardMaterial {...nodeMaterial(0xb0b0b0)} />  {/* Light metallic silver */}
//                 </mesh>
//             ))}

//             {/* Render output nodes */}
//             {positions.output.map((pos, index) => (
//                 <mesh
//                     key={`output-${index}`}
//                     position={pos.toArray()}
//                     onClick={() => handleOutputClick(index)}
//                 >
//                     {outputIconsVisible &&
//                     ((selectedNode === 1 && index < 3) || 
//                     (selectedNode === 2 && index >= 3 && index <= 4) || 
//                     (selectedNode === 3 && index >= 3)) ? (
//                         <mesh position={[0, 0, 1]}>
//                             <circleGeometry args={[4, 32]} />
//                             <meshBasicMaterial 
//                                 map={
//                                     selectedNode === 1 && index < 3 ? outputIcons[index] :  
//                                     selectedNode === 2 && index >= 3 ? outputIcons[index] :  
//                                     selectedNode === 3 && index === 3 ? outputIcons[5] :  
//                                     selectedNode === 3 && index === 4 ? outputIcons[6] :  
//                                     null
//                                 } 
//                             />
//                         </mesh>
//                     ) : (
//                         <sphereGeometry args={[2.5, 32, 32]} />
//                     )}
//                     <meshStandardMaterial {...nodeMaterial(0xb0b0b0)} />
//                 </mesh>
//             ))}

//             {/* Render glowing lines */}
//             {lines}
//         </group>
//     );
// }

// export default NeuralStructure;
// import React, { useRef, useMemo, useState, useEffect } from 'react';
// import { extend, useFrame, useLoader } from '@react-three/fiber';
// import { BufferGeometry, Vector3, Color, ShaderMaterial, LineBasicMaterial, TextureLoader } from 'three';
// import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';

// // Extend to include TextGeometry in Three.js
// extend({ TextGeometry });

// function NeuralStructure() {
//     const groupRef = useRef();
//     const materialRef = useRef(); // Reference for shader material to control animation
//     const [activeLineProgress, setActiveLineProgress] = useState(0); // Track progress for the glowing pulse effect

//     // Node positions for different layers
//     const positions = useMemo(() => ({
//         hidden1: Array.from({ length: 5 }, (_, i) => new Vector3(-15, 20 - i * 10, 0)),
//         hidden2: Array.from({ length: 9 }, (_, i) => new Vector3(20, 40 - i * 10, 0)),
//         output: [
//             new Vector3(55, 20, 0),
//             new Vector3(55, 10, 0),
//             new Vector3(55, 0, 0),
//             new Vector3(55, -10, 0),
//             new Vector3(55, -20, 0)
//         ]
//     }), []);

//     // Default dull line material
//     const defaultLineMaterial = useMemo(() => new LineBasicMaterial({
//         color: new Color(0x888888),  // Dull gray color
//         linewidth: 0.002,
//         transparent: true,
//         opacity: 0.3
//     }), []);

//     // Custom shader material for glowing effect
//     const shaderMaterial = useMemo(() => new ShaderMaterial({
//         uniforms: {
//             time: { value: 0 },
//             color1: { value: new Color(0xFFFFFF) },  // Bright white for the glow
//             opacity: { value: 1.0 }
//         },
//         vertexShader: `
//             varying vec3 vPosition;
//             void main() {
//                 vPosition = position;
//                 gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
//             }
//         `,
//         fragmentShader: `
//             uniform float time;
//             uniform vec3 color1;
//             varying vec3 vPosition;
//             void main() {
//                 float pulse = sin(time + vPosition.x * 0.1) * 0.5 + 0.5; // Glowing pulse
//                 gl_FragColor = vec4(color1 * pulse, 1.0);  // Apply the glow
//             }
//         `,
//         transparent: true
//     }), []);

//     // Function to add line animations with a moving glow
//     const lines = useMemo(() => {
//         const allLines = [];
//         const addLine = (start, end, index, isActive) => {
//             const geometry = new BufferGeometry().setFromPoints([start, end]);

//             allLines.push(
//                 <line key={`line-${index}`} geometry={geometry} material={isActive ? shaderMaterial : defaultLineMaterial} />
//             );
//         };

//         let lineIndex = 0;

//         // Select only a few lines to be active with the glowing effect
//         const glowingLines = [0, 3, 5, 7, 9]; // These will glow

//         // Connect hidden1 to hidden2 with dull lines, but make some glow
//         positions.hidden1.forEach((startPos) => {
//             positions.hidden2.forEach((endPos) => {
//                 const isActive = glowingLines.includes(lineIndex % glowingLines.length);  // Some lines glow
//                 addLine(startPos, endPos, lineIndex++, isActive);
//             });
//         });

//         // Connect hidden2 to output with dull lines, but make some glow
//         positions.hidden2.forEach((startPos) => {
//             positions.output.forEach((endPos) => {
//                 const isActive = glowingLines.includes(lineIndex % glowingLines.length);  // Some lines glow
//                 addLine(startPos, endPos, lineIndex++, isActive);
//             });
//         });

//         return allLines;
//     }, [positions, shaderMaterial, defaultLineMaterial]);

//     // Update animation time for glowing effect and create a pulse moving from input to output
//     useFrame(({ clock }) => {
//         if (shaderMaterial) {
//             shaderMaterial.uniforms.time.value = clock.getElapsedTime();  // Time drives the glowing pulse
//         }
//     });

//     return (
//         <group ref={groupRef} position={[-30, 0, 0]} scale={[1.2, 1.2, 1.2]}>
//             {/* Lighting Setup */}
//             <ambientLight intensity={0.8} />  {/* Ambient lighting for soft background illumination */}
//             <directionalLight 
//                 position={[10, 10, 90]} 
//                 intensity={3} 
//                 castShadow={true}  
//                 shadow-mapSize-width={1024}
//                 shadow-mapSize-height={1024}
//             />

//             {/* Render hidden1 nodes */}
//             {positions.hidden1.map((pos, index) => (
//                 <mesh
//                     key={`hidden1-${index}`}
//                     position={pos.toArray()}
//                 >
//                     <sphereGeometry args={[2.5, 32, 32]} />
//                     <meshStandardMaterial color={0xfafafa} metalness={0.8} roughness={0.2} />
//                 </mesh>
//             ))}

//             {/* Render hidden2 nodes */}
//             {positions.hidden2.map((pos, index) => (
//                 <mesh key={`hidden2-${index}`} position={pos.toArray()}>
//                     <sphereGeometry args={[2.5, 32, 32]} />
//                     <meshStandardMaterial color={0xb0b0b0} metalness={0.8} roughness={0.2} />
//                 </mesh>
//             ))}

//             {/* Render output nodes */}
//             {positions.output.map((pos, index) => (
//                 <mesh
//                     key={`output-${index}`}
//                     position={pos.toArray()}
//                 >
//                     <sphereGeometry args={[2.5, 32, 32]} />
//                     <meshStandardMaterial color={0xf8f8ff} metalness={0.8} roughness={0.2} />
//                 </mesh>
//             ))}

//             {/* Render dull and glowing lines */}
//             {lines}
//         </group>
//     );
// }

// export default NeuralStructure;

// import React, { useRef, useMemo, useState, useEffect } from 'react';
// import { extend, useFrame, useLoader } from '@react-three/fiber';
// import { BufferGeometry, Vector3, Color, ShaderMaterial, LineBasicMaterial, TextureLoader } from 'three';
// import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
// import { Html } from '@react-three/drei'; // Import Html for overlaying UI text
// import { useNavigate } from 'react-router-dom'; 
// // Extend to include TextGeometry in Three.js
// extend({ TextGeometry });

// function NeuralStructure(onAboutClick) {
//     const groupRef = useRef();
//     const [activeLines, setActiveLines] = useState([]); // Track active lines for glow effect
//     const materialRef = useRef(); // Reference for shader material to control animation
//     const [selectedNode, setSelectedNode] = useState(null); // Node selected by the user
//     const [outputIconsVisible, setOutputIconsVisible] = useState(false);
//     const [dimNodes, setDimNodes] = useState(false);
//     const [selectedCategory, setSelectedCategory] = useState(null);
//     const [hiddenIconsState, setHiddenIconsState] = useState(null);
//     const [displayedText, setDisplayedText] = useState(''); // For displaying node name on the screen
//     const [textPosition, setTextPosition] = useState([0, 0, 0]); // Position of the text next to the clicked node

//     // Load textures for icons and hidden layers
//     const iconTextures = [
        
//         useLoader(TextureLoader, '/images/skills.png'),
//         useLoader(TextureLoader, '/images/education.png'),
//         useLoader(TextureLoader, '/images/workexperience.png'),
//         useLoader(TextureLoader, '/images/about.png'),
//         useLoader(TextureLoader, '/images/projects.png')
//     ];

//     const outputIcons = [
//         useLoader(TextureLoader, '/images/frontend.png'),
//         useLoader(TextureLoader, '/images/datascience.png'),
//         useLoader(TextureLoader, '/images/backend.png'),
//         useLoader(TextureLoader, '/images/bachelors.png'),
//         useLoader(TextureLoader, '/images/masters.jpg'),
//         useLoader(TextureLoader, '/images/masters_college.jpg'),
//         useLoader(TextureLoader, '/images/masters_college.jpg')
//     ];

//     const hiddenIcons = {
//         webstack: [
//             useLoader(TextureLoader, '/images/html.png'),
//             useLoader(TextureLoader, '/images/css.png'),
//             useLoader(TextureLoader, '/images/javascript.png'),
//             useLoader(TextureLoader, '/images/react.png'),
//             useLoader(TextureLoader, '/images/nodejs.png')
//         ],
//         datascience: [
//             useLoader(TextureLoader, '/images/python.png'),
//             useLoader(TextureLoader, '/images/pandas.png'),
//             useLoader(TextureLoader, '/images/numpy.png'),
//             useLoader(TextureLoader, '/images/powerbi.png'),
//             useLoader(TextureLoader, '/images/ML.png')
//         ],
//         backend: [
//             useLoader(TextureLoader, '/images/express.png'),
//             useLoader(TextureLoader, '/images/mongo.png'),
//             useLoader(TextureLoader, '/images/sql.png'),
//             useLoader(TextureLoader, '/images/tableau.png')
//         ],
//         bachelors: [
//             useLoader(TextureLoader, '/images/bachelors_college.png')
//         ],
//         masters: [
//             useLoader(TextureLoader, '/images/masters_college.jpg')
//         ],
//         experience1: [
//             useLoader(TextureLoader, '/images/masters_college.jpg')
//         ],
//         experience2: [
//             useLoader(TextureLoader, '/images/masters_college.jpg')
//         ]
//     };

//     // Node positions for different layers
//     const positions = useMemo(() => ({
//         hidden1: Array.from({ length: 5 }, (_, i) => new Vector3(-15, 20 - i * 10, 0)),
//         hidden2: Array.from({ length: 9 }, (_, i) => new Vector3(20, 40 - i * 10, 0)),
//         output: [
//             new Vector3(55, 20, 0),
//             new Vector3(55, 10, 0),
//             new Vector3(55, 0, 0),
//             new Vector3(55, -10, 0),
//             new Vector3(55, -20, 0)
//         ]
//     }), []);

//     const totalLayers = Object.keys(positions).length;

//     // Default line material for non-glowing lines
//     const defaultLineMaterial = useMemo(() => new LineBasicMaterial({
//         color: new Color(0x888888),  // Non-glowing lines will have a dim gray color
//         linewidth: 0.002,
//         transparent: true,
//         opacity: 0.3
//     }), []);

//     // Custom shader material for glowing effect
//     const shaderMaterial = useMemo(() => new ShaderMaterial({
//         uniforms: {
//             time: { value: 0 },
//             color1: { value: new Color(0xFFFFFF) },  // Bright white for the glow
//             opacity: { value: 1.0 }
//         },
//         vertexShader: `
//             varying vec3 vPosition;
//             void main() {
//                 vPosition = position;
//                 gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
//             }
//         `,
//         fragmentShader: `
//             uniform float time;
//             uniform vec3 color1;
//             varying vec3 vPosition;
//             void main() {
//                 float pulse = sin(time + vPosition.x * 0.1) * 0.5 + 0.5; // Glowing pulse
//                 gl_FragColor = vec4(color1 * pulse, 1.0);  // Apply the glow
//             }
//         `,
//         transparent: true
//     }), []);

//     // Function to compute the color of layers
//     const computeColor = (layerIndex, totalLayers) => {
//         const startColor = new Color(0xfafafa); // Light Silver (for input layer)
//         const midColor = new Color(0xb0b0b0);  // Metallic Silver (hidden layer)
//         const endColor = new Color(0xf8f8ff);  // White Smoke (for output layer)

//         if (layerIndex === 0) return startColor; // For input layer
//         if (layerIndex === totalLayers - 1) return endColor; // For output layer

//         const t = layerIndex / (totalLayers - 1);
//         return startColor.clone().lerp(midColor, t).lerp(endColor, t * t); // For hidden layers
//     };

//     // Function to add line animations
//     const lines = useMemo(() => {
//         const allLines = [];
//         const addLine = (start, end, index, isActive) => {
//             const geometry = new BufferGeometry().setFromPoints([start, end]);

//             allLines.push(
//                 <line key={`line-${index}`} geometry={geometry} material={isActive ? shaderMaterial : defaultLineMaterial} />
//             );
//         };

//         let lineIndex = 0;

//         // Glowing lines selection
//         const glowingLines = [0, 3, 5, 7, 9]; // Select lines to have the glow

//         // Connect hidden1 to hidden2
//         positions.hidden1.forEach((startPos) => {
//             positions.hidden2.forEach((endPos) => {
//                 const isActive = glowingLines.includes(lineIndex % glowingLines.length);  // Some lines glow
//                 addLine(startPos, endPos, lineIndex++, isActive);
//             });
//         });

//         // Connect hidden2 to output
//         positions.hidden2.forEach((startPos) => {
//             positions.output.forEach((endPos) => {
//                 const isActive = glowingLines.includes(lineIndex % glowingLines.length);  // Some lines glow
//                 addLine(startPos, endPos, lineIndex++, isActive);
//             });
//         });

//         return allLines; // Return all the lines with the pulse animation
//     }, [positions, shaderMaterial, defaultLineMaterial]);

//     // Update animation time for glowing effect and create a pulse moving from input to output
//     useFrame(({ clock }) => {
//         if (shaderMaterial) {
//             shaderMaterial.uniforms.time.value = clock.getElapsedTime();  // Time drives the glowing pulse
//         }
//     });

//     // Handle input node click functionality
//     const handleInputNodeClick = (index) => {
//         setSelectedCategory(null);
//         setHiddenIconsState(null);

//         let nodeName = ''; // Define the node name to display
//         if (index === 0) nodeName = 'Skills';
//         if (index === 1) nodeName = 'Education';
//         if (index === 2) nodeName = 'Work Experience';
//         if (index === 3) nodeName = 'About'

//         if (index === 4) nodeName = 'Projects';

//         setDisplayedText(nodeName);  // Display node name visually

//         // Set the position of the text to be centered with the node on the left
//         const nodePosition = positions.hidden1[index];
//         setTextPosition([nodePosition.x - 15, nodePosition.y, nodePosition.z]); // Adjust the X offset for alignment

//         setSelectedNode(index);  // Track the clicked node
//         setOutputIconsVisible(true);
//         setDimNodes(true);
//     };

//     const handleHiddenNodeClick = (index) => {
//         let nodeName = ''; 
//         if (hiddenIconsState === 'webstack') {
//             if (index === 0) nodeName = 'HTML';
//             if (index === 1) nodeName = 'CSS';
//             if (index === 2) nodeName = 'JavaScript';
//             if (index === 3) nodeName = 'React';
//             if (index === 4) nodeName = 'Node.js';
//         }
//         if (hiddenIconsState === 'datascience') {
//             if (index === 0) nodeName = 'Python';
//             if (index === 1) nodeName = 'Pandas';
//             if (index === 2) nodeName = 'NumPy';
//             if (index === 3) nodeName = 'PowerBI';
//             if (index === 4) nodeName = 'Machine Learning';
//         }
//         // Add other hidden icons handling here
//         if (hiddenIconsState === 'backend') {
//             if (index === 0) nodeName = 'express';
//             if (index === 1) nodeName = 'Pandas';
//             if (index === 2) nodeName = 'NumPy';
//             if (index === 3) nodeName = 'PowerBI';
//             if (index === 4) nodeName = 'Machine Learning';
//         }

//         if (hiddenIconsState === 'bachelors') {
//             if (index === 0) nodeName = 'VVCE';
            
//         }

//         if (hiddenIconsState === 'masters') {
//             if (index === 0) nodeName = 'University at Buffalo';
            
//         }
//         if (hiddenIconsState === 'experience1') {
//             if (index === 0) nodeName = 'Verusen';
            
//         }
        
//         if (hiddenIconsState === 'experience2') {
//             if (index === 0) nodeName = 'TCS';
            
//         }

        
//         setDisplayedText(nodeName); 
//         setTextPosition([27, 46.5, 0]);  // Always display hidden node text at the top
//     };

//     // Handle output node click functionality
//     const handleOutputClick = (index) => {
//         let nodeName = '';
//         if (selectedNode === 0) {
//             if (index === 0) nodeName = 'Web Stack';
//             if (index === 1) nodeName = 'Data Science';
//             if (index === 2) nodeName = 'Backend';
//         }

//         if (selectedNode === 1) {
//             if (index === 3) nodeName = 'Bachelor degree';
//             if (index === 4) nodeName = 'Master Degree';
//         }

//         if (selectedNode === 2) {
//             if (index === 3) nodeName = 'Data Analyst Intern';
//             if (index === 4) nodeName = 'Data Engineer';
//         }

//         // Handle hidden icons state based on output node selection
//         if (selectedNode === 0 && index === 0) setHiddenIconsState('webstack');
//         if (selectedNode === 0 && index === 1) setHiddenIconsState('datascience');
//         if (selectedNode === 0 && index === 2) setHiddenIconsState('backend');
//         if (selectedNode === 1 && index === 3) setHiddenIconsState('bachelors');
//         if (selectedNode === 1 && index === 4) setHiddenIconsState('masters');
//         if (selectedNode === 2 && index === 3) setHiddenIconsState('experience1');
//         if (selectedNode === 2 && index === 4) setHiddenIconsState('experience2');

//         setDisplayedText(nodeName);  // Display output node name

//         // Set the position of the text to be to the right of the output nodes
//         const nodePosition = positions.output[index];
//         setTextPosition([nodePosition.x + 30, nodePosition.y, nodePosition.z]); // Adjust X position for right alignment
//     };

//     // Randomly activate a subset of lines every 1.5 seconds
//     useEffect(() => {
//         const interval = setInterval(() => {
//             const totalLines = positions.hidden1.length * positions.hidden2.length + positions.hidden2.length * positions.output.length;

//             const newActiveLines = Array.from({ length: 50 }, () => Math.floor(Math.random() * totalLines));  // Activate random 50 lines
//             setActiveLines(newActiveLines);
//         }, 1500);

//         return () => clearInterval(interval);
//     }, [positions]);

//     // Proper metallic and emissive materials for nodes (matching your provided colors and lighting)
//     const nodeMaterial = (color ,emissiveColor) => ({
//         color: new Color(color),       // Node color
//         metalness: 0.9,               // High metalness for a metallic look
//         roughness: 0.1,               // Low roughness for smooth reflections
//         emissive: new Color(0x555555), // Subtle emissive color for a gentle glow
//         emissiveIntensity: 0.3        // Control the intensity of the glow
//     });

//     return (
//         <group ref={groupRef} position={[-30, 0, 0]} scale={[1.2, 1.2, 1.2]}>
//             {/* Lighting Setup */}
//             <ambientLight intensity={5} />  {/* Ambient lighting for soft background illumination */}
//             <directionalLight 
//                 position={[10, 10, 90]} 
//                 intensity={3} 
//                 castShadow={true}  
//                 shadow-mapSize-width={1024}
//                 shadow-mapSize-height={1024}
//             />

//             {/* Render hidden1 nodes with metallic and emissive material */}
//             {positions.hidden1.map((pos, index) => (
//                 <mesh
//                     key={`hidden1-${index}`}
//                     position={pos.toArray()}
//                     onClick={() => handleInputNodeClick(index)}
//                 >
//                     {index < 5 ? (
//                         <mesh position={[0, 0, 1]}>
//                             <circleGeometry args={[4, 32]} />
//                             <meshBasicMaterial
//                                 map={iconTextures[index]}
//                                 opacity={dimNodes && index !== selectedNode ? 0.2 : 1}
//                                 transparent
//                             />
//                         </mesh>
//                     ) : (
//                         <mesh>
//                             <sphereGeometry args={[2.5, 32, 32]} />
//                             <meshStandardMaterial {...nodeMaterial(0xfafafa)} />  {/* Light silver color */}
//                         </mesh>
//                     )}
//                 </mesh>
//             ))}

//             {/* Render hidden2 nodes */}
//             {positions.hidden2.map((pos, index) => (
//                 <mesh
//                     key={`hidden2-${index}`}
//                     position={pos.toArray()}
//                     onClick={() => handleHiddenNodeClick(index)} // Call the click handler for hidden nodes
//                 >
//                     {hiddenIconsState && index < hiddenIcons[hiddenIconsState]?.length ? (
//                         <mesh position={[0, 0, 1]}>
//                             <circleGeometry args={[4, 32]} />
//                             <meshBasicMaterial map={hiddenIcons[hiddenIconsState][index]} />
//                         </mesh>
//                     ) : (
//                         <sphereGeometry args={[2.5, 32, 32]} />
//                     )}
//                     <meshStandardMaterial {...nodeMaterial(0xb0b0b0)} />  {/* Light metallic silver */}
//                 </mesh>
//             ))}

//             {/* Render output nodes */}
//             {positions.output.map((pos, index) => (
//                 <mesh
//                     key={`output-${index}`}
//                     position={pos.toArray()}
//                     onClick={() => handleOutputClick(index)}
//                 >
//                     {outputIconsVisible &&
//                     ((selectedNode === 0 && index < 3) || 
//                     (selectedNode ===   1 && index >= 3 && index <= 4) || 
//                     (selectedNode === 2 && index >= 3)) ? (
//                         <mesh position={[0, 0, 1]}>
//                             <circleGeometry args={[4, 32]} />
//                             <meshBasicMaterial 
//                                 map={
//                                     selectedNode === 0 && index < 3 ? outputIcons[index] :  
//                                     selectedNode === 1 && index >= 3 ? outputIcons[index] :  
//                                     selectedNode === 2 && index === 3 ? outputIcons[5] :  
//                                     selectedNode === 2 && index === 4 ? outputIcons[6] :  
//                                     null
//                                 } 
//                             />
//                         </mesh>
//                     ) : (
//                         <sphereGeometry args={[2.5, 32, 32]} />
//                     )}
//                     <meshStandardMaterial {...nodeMaterial(0xb0b0b0)} />
//                 </mesh>
//             ))}

//             {/* Display the text next to the clicked node */}
//             {displayedText && (
//                 <Html 
//                     position={textPosition} center /* Use the same position */>
//                     {/* Conditionally apply CSS class based on input/output node */}
//                     <div className={`single-line-text ${selectedNode !== null && selectedNode < positions.hidden1.length ? 'input-node-text' : 'output-node-text'}`}>
//                         {displayedText}
//                     </div>
//                 </Html>
//             )}

//             {/* Render glowing lines */}
//             {lines}
//         </group>
//     );
// }

// export default NeuralStructure;
// NeuralStructure.jsx

import React, { useRef, useMemo, useState, useEffect } from 'react';
import { extend, useFrame, useLoader } from '@react-three/fiber';
import {
  BufferGeometry,
  Vector3,
  Color,
  ShaderMaterial,
  LineBasicMaterial,
  TextureLoader,
} from 'three';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import { Html } from '@react-three/drei';
import { useNavigate } from 'react-router-dom';

// Extend to include TextGeometry in Three.js
extend({ TextGeometry });

function NeuralStructure() {
  const groupRef = useRef();
  const [activeLines, setActiveLines] = useState([]);
  const materialRef = useRef();
  const [selectedNode, setSelectedNode] = useState(null);
  const [outputIconsVisible, setOutputIconsVisible] = useState(false);
  const [dimNodes, setDimNodes] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [hiddenIconsState, setHiddenIconsState] = useState(null);
  const [displayedText, setDisplayedText] = useState('');
  const [textPosition, setTextPosition] = useState([0, 0, 0]);

  // Define all image URLs
  const iconTextureUrls = [
    '/images/skills.png',
    '/images/education.png',
    '/images/workexperience.png',
    '/images/about.png',
    '/images/projects.png',
  ];

  const outputIconUrls = [
    '/images/frontend.png',
    '/images/datascience.png',
    '/images/backend.png',
    '/images/bachelors.png',
    '/images/masters.jpg',
    '/images/masters_college.jpg',
    '/images/masters_college.jpg',
  ];

  const hiddenIconCategories = {
    webstack: [
      '/images/html.png',
      '/images/css.png',
      '/images/javascript.png',
      '/images/react.png',
      '/images/nodejs.png',
    ],
    datascience: [
      '/images/python.png',
      '/images/pandas.png',
      '/images/numpy.png',
      '/images/powerbi.png',
      '/images/ML.png',
    ],
    backend: [
      '/images/express.png',
      '/images/mongo.png',
      '/images/sql.png',
      '/images/tableau.png',
    ],
    bachelors: ['/images/bachelors_college.png'],
    masters: ['/images/masters_college.jpg'],
    experience1: ['/images/masters_college.jpg'],
    experience2: ['/images/masters_college.jpg'],
  };

  // Flatten hidden icons URLs
  const hiddenIconUrls = Object.values(hiddenIconCategories).flat();

  // Load all images efficiently
  const iconTextures = useLoader(TextureLoader, iconTextureUrls);
  const outputIcons = useLoader(TextureLoader, outputIconUrls);
  const hiddenIconsTextures = useLoader(TextureLoader, hiddenIconUrls);

  // Map hiddenIconsTextures back to categories
  const hiddenIcons = useMemo(() => {
    const icons = {};
    let index = 0;
    for (const category in hiddenIconCategories) {
      const urls = hiddenIconCategories[category];
      icons[category] = hiddenIconsTextures.slice(index, index + urls.length);
      index += urls.length;
    }
    return icons;
  }, [hiddenIconsTextures, hiddenIconCategories]);

  // Node positions for different layers
  const positions = useMemo(
    () => ({
      hidden1: Array.from({ length: 5 }, (_, i) => new Vector3(-15, 20 - i * 10, 0)),
      hidden2: Array.from({ length: 9 }, (_, i) => new Vector3(20, 40 - i * 10, 0)),
      output: [
        new Vector3(55, 20, 0),
        new Vector3(55, 10, 0),
        new Vector3(55, 0, 0),
        new Vector3(55, -10, 0),
        new Vector3(55, -20, 0),
      ],
    }),
    []
  );

  const totalLayers = Object.keys(positions).length;

  // Default line material for non-glowing lines
  const defaultLineMaterial = useMemo(
    () =>
      new LineBasicMaterial({
        color: new Color(0x888888),
        linewidth: 0.002,
        transparent: true,
        opacity: 0.3,
      }),
    []
  );

  // Custom shader material for glowing effect
  const shaderMaterial = useMemo(
    () =>
      new ShaderMaterial({
        uniforms: {
          time: { value: 0 },
          color1: { value: new Color(0xffffff) },
          opacity: { value: 1.0 },
        },
        vertexShader: `
          varying vec3 vPosition;
          void main() {
              vPosition = position;
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
        fragmentShader: `
          uniform float time;
          uniform vec3 color1;
          varying vec3 vPosition;
          void main() {
              float pulse = sin(time + vPosition.x * 0.1) * 0.5 + 0.5;
              gl_FragColor = vec4(color1 * pulse, 1.0);
          }
        `,
        transparent: true,
      }),
    []
  );

  // Function to compute the color of layers
  const computeColor = (layerIndex, totalLayers) => {
    const startColor = new Color(0xfafafa);
    const midColor = new Color(0xb0b0b0);
    const endColor = new Color(0xf8f8ff);

    if (layerIndex === 0) return startColor;
    if (layerIndex === totalLayers - 1) return endColor;

    const t = layerIndex / (totalLayers - 1);
    return startColor.clone().lerp(midColor, t).lerp(endColor, t * t);
  };

  // Function to add line animations
  const lines = useMemo(() => {
    const allLines = [];
    const addLine = (start, end, index, isActive) => {
      const geometry = new BufferGeometry().setFromPoints([start, end]);

      allLines.push(
        <line
          key={`line-${index}`}
          geometry={geometry}
          material={isActive ? shaderMaterial : defaultLineMaterial}
        />
      );
    };

    let lineIndex = 0;

    // Glowing lines selection
    const glowingLines = [0, 3, 5, 7, 9];

    // Connect hidden1 to hidden2
    positions.hidden1.forEach((startPos) => {
      positions.hidden2.forEach((endPos) => {
        const isActive = glowingLines.includes(lineIndex % glowingLines.length);
        addLine(startPos, endPos, lineIndex++, isActive);
      });
    });

    // Connect hidden2 to output
    positions.hidden2.forEach((startPos) => {
      positions.output.forEach((endPos) => {
        const isActive = glowingLines.includes(lineIndex % glowingLines.length);
        addLine(startPos, endPos, lineIndex++, isActive);
      });
    });

    return allLines;
  }, [positions, shaderMaterial, defaultLineMaterial]);

  // Update animation time for glowing effect
  useFrame(({ clock }) => {
    if (shaderMaterial) {
      shaderMaterial.uniforms.time.value = clock.getElapsedTime();
    }
  });

  // Handle input node click functionality
  const handleInputNodeClick = (index) => {
    setSelectedCategory(null);
    setHiddenIconsState(null);

    let nodeName = '';
    if (index === 0) nodeName = 'Skills';
    if (index === 1) nodeName = 'Education';
    if (index === 2) nodeName = 'Work Experience';
    if (index === 3) nodeName = 'About';
    if (index === 4) nodeName = 'Projects';

    setDisplayedText(nodeName);

    const nodePosition = positions.hidden1[index];
    setTextPosition([nodePosition.x - 15, nodePosition.y, nodePosition.z]);

    setSelectedNode(index);
    setOutputIconsVisible(true);
    setDimNodes(true);
  };

  const handleHiddenNodeClick = (index) => {
    let nodeName = '';
    if (hiddenIconsState === 'webstack') {
      if (index === 0) nodeName = 'HTML';
      if (index === 1) nodeName = 'CSS';
      if (index === 2) nodeName = 'JavaScript';
      if (index === 3) nodeName = 'React';
      if (index === 4) nodeName = 'Node.js';
    }
    if (hiddenIconsState === 'datascience') {
      if (index === 0) nodeName = 'Python';
      if (index === 1) nodeName = 'Pandas';
      if (index === 2) nodeName = 'NumPy';
      if (index === 3) nodeName = 'PowerBI';
      if (index === 4) nodeName = 'Machine Learning';
    }
    if (hiddenIconsState === 'backend') {
      if (index === 0) nodeName = 'Express';
      if (index === 1) nodeName = 'MongoDB';
      if (index === 2) nodeName = 'SQL';
      if (index === 3) nodeName = 'Tableau';
    }
    if (hiddenIconsState === 'bachelors') {
      if (index === 0) nodeName = 'VVCE';
    }
    if (hiddenIconsState === 'masters') {
      if (index === 0) nodeName = 'University at Buffalo';
    }
    if (hiddenIconsState === 'experience1') {
      if (index === 0) nodeName = 'Verusen';
    }
    if (hiddenIconsState === 'experience2') {
      if (index === 0) nodeName = 'TCS';
    }

    setDisplayedText(nodeName);
    setTextPosition([27, 46.5, 0]);
  };

  // Handle output node click functionality
  const handleOutputClick = (index) => {
    let nodeName = '';
    if (selectedNode === 0) {
      if (index === 0) nodeName = 'Web Stack';
      if (index === 1) nodeName = 'Data Science';
      if (index === 2) nodeName = 'Backend';
    }
    if (selectedNode === 1) {
      if (index === 3) nodeName = 'Bachelor Degree';
      if (index === 4) nodeName = 'Master Degree';
    }
    if (selectedNode === 2) {
      if (index === 3) nodeName = 'Data Analyst Intern';
      if (index === 4) nodeName = 'Data Engineer';
    }

    // Handle hidden icons state based on output node selection
    if (selectedNode === 0 && index === 0) setHiddenIconsState('webstack');
    if (selectedNode === 0 && index === 1) setHiddenIconsState('datascience');
    if (selectedNode === 0 && index === 2) setHiddenIconsState('backend');
    if (selectedNode === 1 && index === 3) setHiddenIconsState('bachelors');
    if (selectedNode === 1 && index === 4) setHiddenIconsState('masters');
    if (selectedNode === 2 && index === 3) setHiddenIconsState('experience1');
    if (selectedNode === 2 && index === 4) setHiddenIconsState('experience2');

    setDisplayedText(nodeName);

    const nodePosition = positions.output[index];
    setTextPosition([nodePosition.x + 30, nodePosition.y, nodePosition.z]);
  };

  // Randomly activate a subset of lines every 1.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      const totalLines =
        positions.hidden1.length * positions.hidden2.length +
        positions.hidden2.length * positions.output.length;

      const newActiveLines = Array.from({ length: 50 }, () =>
        Math.floor(Math.random() * totalLines)
      );
      setActiveLines(newActiveLines);
    }, 1500);

    return () => clearInterval(interval);
  }, [positions]);

  // Proper metallic and emissive materials for nodes
  const nodeMaterial = (color, emissiveColor) => ({
    color: new Color(color),
    metalness: 0.9,
    roughness: 0.1,
    emissive: new Color(0x555555),
    emissiveIntensity: 0.3,
  });

  return (
    <group ref={groupRef} position={[-30, 0, 0]} scale={[1.2, 1.2, 1.2]}>
      {/* Lighting Setup */}
      <ambientLight intensity={5} />
      <directionalLight
        position={[10, 10, 90]}
        intensity={3}
        castShadow={true}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />

      {/* Render hidden1 nodes */}
      {positions.hidden1.map((pos, index) => (
        <mesh
          key={`hidden1-${index}`}
          position={pos.toArray()}
          onClick={() => handleInputNodeClick(index)}
        >
          {index < 5 ? (
            <mesh position={[0, 0, 1]}>
              <circleGeometry args={[4, 32]} />
              <meshBasicMaterial
                map={iconTextures[index]}
                opacity={dimNodes && index !== selectedNode ? 0.2 : 1}
                transparent
              />
            </mesh>
          ) : (
            <mesh>
              <sphereGeometry args={[2.5, 32, 32]} />
              <meshStandardMaterial {...nodeMaterial(0xfafafa)} />
            </mesh>
          )}
        </mesh>
      ))}

      {/* Render hidden2 nodes */}
      {positions.hidden2.map((pos, index) => (
        <mesh
          key={`hidden2-${index}`}
          position={pos.toArray()}
          onClick={() => handleHiddenNodeClick(index)}
        >
          {hiddenIconsState && index < hiddenIcons[hiddenIconsState]?.length ? (
            <mesh position={[0, 0, 1]}>
              <circleGeometry args={[4, 32]} />
              <meshBasicMaterial map={hiddenIcons[hiddenIconsState][index]} />
            </mesh>
          ) : (
            <sphereGeometry args={[2.5, 32, 32]} />
          )}
          <meshStandardMaterial {...nodeMaterial(0xb0b0b0)} />
        </mesh>
      ))}

      {/* Render output nodes */}
      {positions.output.map((pos, index) => (
        <mesh
          key={`output-${index}`}
          position={pos.toArray()}
          onClick={() => handleOutputClick(index)}
        >
          {outputIconsVisible &&
          ((selectedNode === 0 && index < 3) ||
            (selectedNode === 1 && index >= 3 && index <= 4) ||
            (selectedNode === 2 && index >= 3)) ? (
            <mesh position={[0, 0, 1]}>
              <circleGeometry args={[4, 32]} />
              <meshBasicMaterial
                map={
                  selectedNode === 0 && index < 3
                    ? outputIcons[index]
                    : selectedNode === 1 && index >= 3
                    ? outputIcons[index]
                    : selectedNode === 2 && index === 3
                    ? outputIcons[5]
                    : selectedNode === 2 && index === 4
                    ? outputIcons[6]
                    : null
                }
              />
            </mesh>
          ) : (
            <sphereGeometry args={[2.5, 32, 32]} />
          )}
          <meshStandardMaterial {...nodeMaterial(0xb0b0b0)} />
        </mesh>
      ))}

      {/* Display the text next to the clicked node */}
      {displayedText && (
        <Html position={textPosition} center>
          <div
            className={`single-line-text ${
              selectedNode !== null && selectedNode < positions.hidden1.length
                ? 'input-node-text'
                : 'output-node-text'
            }`}
          >
            {displayedText}
          </div>
        </Html>
      )}

      {/* Render glowing lines */}
      {lines}
    </group>
  );
}

export default NeuralStructure;
