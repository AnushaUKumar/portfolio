// import React, { useRef, useEffect, useMemo } from 'react';
// import { useFrame } from '@react-three/fiber';
// import { AdditiveBlending, Vector3 } from 'three';
// import GlowingText from './GlowingText';

// function ParticleNetwork({ expanded, showNodes, showDetails, showNeuralStructure }) {
//     const groupRef = useRef();
//     const particlesRef = useRef();
//     const linesGeometryRef = useRef();

//     const maxParticleCount = 300;
//     const particleCount = 300;
//     const r = 20;
//     const rHalf = r / 2;
//     const maxConnections = 10;
//     const minDistance = 8;
//     let vertexpos = 0;
//     let colorpos = 0;
//     let numConnected = 0;

//     const segments = maxParticleCount * maxParticleCount;
//     const positions = useMemo(() => new Float32Array(segments * 3), [segments]);
//     const colors = useMemo(() => new Float32Array(segments * 3), [segments]);

//     const particlePositions = useMemo(() => new Float32Array(maxParticleCount * 3), []);
//     const particlesData = useMemo(() => [], []);
//     const v = useMemo(() => new Vector3(), []);

//     useEffect(() => {
//         for (let i = 0; i < maxParticleCount; i++) {
//             const x = Math.random() * r - r / 2;
//             const y = Math.random() * r - r / 2;
//             const z = Math.random() * r - r / 2;

//             particlePositions[i * 3] = x;
//             particlePositions[i * 3 + 1] = y;
//             particlePositions[i * 3 + 2] = z;

//             const v = new Vector3(
//                 -1 + Math.random() * 2,
//                 -1 + Math.random() * 2,
//                 -1 + Math.random() * 2
//             );
//             particlesData.push({
//                 velocity: v.normalize().divideScalar(100),
//                 numConnections: 0
//             });
//         }

//         particlesRef.current.setDrawRange(0, particleCount);
//     }, [maxParticleCount, particleCount, particlePositions, particlesData]);

//     useFrame((_, delta) => {
//         vertexpos = 0;
//         colorpos = 0;
//         numConnected = 0;

//         for (let i = 0; i < particleCount; i++) particlesData[i].numConnections = 0;

//         for (let i = 0; i < particleCount; i++) {
//             const particleData = particlesData[i];

//             v.set(
//                 particlePositions[i * 3],
//                 particlePositions[i * 3 + 1],
//                 particlePositions[i * 3 + 2]
//             )
//                 .add(particleData.velocity)
//                 .setLength(expanded ? (showNodes ? 35 : 25) : 15);

//             particlePositions[i * 3] = v.x;
//             particlePositions[i * 3 + 1] = v.y;
//             particlePositions[i * 3 + 2] = v.z;

//             if (particlePositions[i * 3 + 1] < -rHalf || particlePositions[i * 3 + 1] > rHalf)
//                 particleData.velocity.y = -particleData.velocity.y;

//             if (particlePositions[i * 3] < -rHalf || particlePositions[i * 3] > rHalf)
//                 particleData.velocity.x = -particleData.velocity.x;

//             if (particlePositions[i * 3 + 2] < -rHalf || particlePositions[i * 3 + 2] > rHalf)
//                 particleData.velocity.z = -particleData.velocity.z;

//             if (particleData.numConnections >= maxConnections) continue;

//             for (let j = i + 1; j < particleCount; j++) {
//                 const particleDataB = particlesData[j];
//                 if (particleDataB.numConnections >= maxConnections) continue;

//                 const dx = particlePositions[i * 3] - particlePositions[j * 3];
//                 const dy = particlePositions[i * 3 + 1] - particlePositions[j * 3 + 1];
//                 const dz = particlePositions[i * 3 + 2] - particlePositions[j * 3 + 2];
//                 const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

//                 if (dist < minDistance) {
//                     particleData.numConnections++;
//                     particleDataB.numConnections++;

//                     const alpha = 1.0 - dist / minDistance;

//                     const colorGradient = new Vector3(1, 1, 1);

//                     positions[vertexpos++] = particlePositions[i * 3];
//                     positions[vertexpos++] = particlePositions[i * 3 + 1];
//                     positions[vertexpos++] = particlePositions[i * 3 + 2];

//                     positions[vertexpos++] = particlePositions[j * 3];
//                     positions[vertexpos++] = particlePositions[j * 3 + 1];
//                     positions[vertexpos++] = particlePositions[j * 3 + 2];

//                     colors[colorpos++] = colorGradient.x * alpha;
//                     colors[colorpos++] = colorGradient.y * alpha;
//                     colors[colorpos++] = colorGradient.z * alpha;

//                     colors[colorpos++] = colorGradient.x * alpha;
//                     colors[colorpos++] = colorGradient.y * alpha;
//                     colors[colorpos++] = colorGradient.z * alpha;

//                     numConnected++;
//                 }
//             }
//         }

//         linesGeometryRef.current.setDrawRange(0, numConnected * 2);
//         linesGeometryRef.current.attributes.position.needsUpdate = true;
//         linesGeometryRef.current.attributes.color.needsUpdate = true;

//         particlesRef.current.attributes.position.needsUpdate = true;

//         if (!showNeuralStructure) {
//             groupRef.current.rotation.y += delta / 5;
//         }

//         if (showNeuralStructure) {
//             groupRef.current.rotation.y += delta * 0.2;
//             groupRef.current.scale.lerp(new Vector3(20, 20, 20), delta * 1);
//         }
//     });

//     return (
//         <>
//             <group ref={groupRef} scale={[2.0, 2.0, 2.0]} dispose={null}>
//                 {showNodes && !showNeuralStructure && (
//                     <GlowingText
//                         position={[-34, 0, 0]}
//                         fontSize={5}
//                         text="ANUSHA UDAYAKUMAR"
//                     />
//                 )}

//                 <points>
//                     <bufferGeometry ref={particlesRef}>
//                         <bufferAttribute
//                             attach="attributes-position"
//                             count={particleCount}
//                             array={particlePositions}
//                             itemSize={3}
//                         />
//                     </bufferGeometry>
//                     <pointsMaterial
//                         color={'white'}
//                         size={3}
//                         blending={AdditiveBlending}
//                         transparent={true}
//                         sizeAttenuation={false}
//                     />
//                 </points>
//                 <lineSegments>
//                     <bufferGeometry ref={linesGeometryRef}>
//                         <bufferAttribute
//                             attach="attributes-position"
//                             count={positions.length / 3}
//                             array={positions}
//                             itemSize={3}
//                         />
//                         <bufferAttribute
//                             attach="attributes-color"
//                             count={colors.length / 3}
//                             array={colors}
//                             itemSize={3}
//                         />
//                     </bufferGeometry>
//                     <lineBasicMaterial
//                         vertexColors={true}
//                         blending={AdditiveBlending}
//                         transparent={true}
//                     />
//                 </lineSegments>
//             </group>
//         </>
//     );
// }

//export default ParticleNetwork;
//import React, { useRef, useEffect, useMemo } from 'react';
// import { useFrame } from '@react-three/fiber';
// import { AdditiveBlending, Vector3 } from 'three';
// import GlowingText from './GlowingText';

// function ParticleNetwork({ expanded, showNodes, showDetails, showNeuralStructure, nameVisible }) {
//     const groupRef = useRef();
//     const particlesRef = useRef();
//     const linesGeometryRef = useRef();

//     const maxParticleCount = 300;
//     const particleCount = 300;
//     const r = 20;
//     const rHalf = r / 2;
//     const maxConnections = 10;
//     const minDistance = 8;
//     let vertexpos = 0;
//     let colorpos = 0;
//     let numConnected = 0;

//     const segments = maxParticleCount * maxParticleCount;
//     const positions = useMemo(() => new Float32Array(segments * 3), [segments]);
//     const colors = useMemo(() => new Float32Array(segments * 3), [segments]);

//     const particlePositions = useMemo(() => new Float32Array(maxParticleCount * 3), []);
//     const particlesData = useMemo(() => [], []);
//     const v = useMemo(() => new Vector3(), []);

//     useEffect(() => {
//         for (let i = 0; i < maxParticleCount; i++) {
//             const x = Math.random() * r - r / 2;
//             const y = Math.random() * r - r / 2;
//             const z = Math.random() * r - r / 2;

//             particlePositions[i * 3] = x;
//             particlePositions[i * 3 + 1] = y;
//             particlePositions[i * 3 + 2] = z;

//             const v = new Vector3(
//                 -1 + Math.random() * 2,
//                 -1 + Math.random() * 2,
//                 -1 + Math.random() * 2
//             );
//             particlesData.push({
//                 velocity: v.normalize().divideScalar(100),
//                 numConnections: 0
//             });
//         }

//         particlesRef.current.setDrawRange(0, particleCount);
//     }, [maxParticleCount, particleCount, particlePositions, particlesData]);

//     useFrame((_, delta) => {
//         vertexpos = 0;
//         colorpos = 0;
//         numConnected = 0;

//         for (let i = 0; i < particleCount; i++) particlesData[i].numConnections = 0;

//         for (let i = 0; i < particleCount; i++) {
//             const particleData = particlesData[i];

//             v.set(
//                 particlePositions[i * 3],
//                 particlePositions[i * 3 + 1],
//                 particlePositions[i * 3 + 2]
//             )
//                 .add(particleData.velocity)
//                 .setLength(expanded ? (showNodes ? 35 : 25) : 15);

//             particlePositions[i * 3] = v.x;
//             particlePositions[i * 3 + 1] = v.y;
//             particlePositions[i * 3 + 2] = v.z;

//             if (particlePositions[i * 3 + 1] < -rHalf || particlePositions[i * 3 + 1] > rHalf)
//                 particleData.velocity.y = -particleData.velocity.y;

//             if (particlePositions[i * 3] < -rHalf || particlePositions[i * 3] > rHalf)
//                 particleData.velocity.x = -particleData.velocity.x;

//             if (particlePositions[i * 3 + 2] < -rHalf || particlePositions[i * 3 + 2] > rHalf)
//                 particleData.velocity.z = -particleData.velocity.z;

//             if (particleData.numConnections >= maxConnections) continue;

//             for (let j = i + 1; j < particleCount; j++) {
//                 const particleDataB = particlesData[j];
//                 if (particleDataB.numConnections >= maxConnections) continue;

//                 const dx = particlePositions[i * 3] - particlePositions[j * 3];
//                 const dy = particlePositions[i * 3 + 1] - particlePositions[j * 3 + 1];
//                 const dz = particlePositions[i * 3 + 2] - particlePositions[j * 3 + 2];
//                 const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

//                 if (dist < minDistance) {
//                     particleData.numConnections++;
//                     particleDataB.numConnections++;

//                     const alpha = 1.0 - dist / minDistance;

//                     const colorGradient = new Vector3(1, 1, 1);

//                     positions[vertexpos++] = particlePositions[i * 3];
//                     positions[vertexpos++] = particlePositions[i * 3 + 1];
//                     positions[vertexpos++] = particlePositions[i * 3 + 2];

//                     positions[vertexpos++] = particlePositions[j * 3];
//                     positions[vertexpos++] = particlePositions[j * 3 + 1];
//                     positions[vertexpos++] = particlePositions[j * 3 + 2];

//                     colors[colorpos++] = colorGradient.x * alpha;
//                     colors[colorpos++] = colorGradient.y * alpha;
//                     colors[colorpos++] = colorGradient.z * alpha;

//                     colors[colorpos++] = colorGradient.x * alpha;
//                     colors[colorpos++] = colorGradient.y * alpha;
//                     colors[colorpos++] = colorGradient.z * alpha;

//                     numConnected++;
//                 }
//             }
//         }

//         linesGeometryRef.current.setDrawRange(0, numConnected * 2);
//         linesGeometryRef.current.attributes.position.needsUpdate = true;
//         linesGeometryRef.current.attributes.color.needsUpdate = true;

//         particlesRef.current.attributes.position.needsUpdate = true;

//         if (!showNeuralStructure) {
//             groupRef.current.rotation.y += delta / 5;
//         }

//         if (showNeuralStructure) {
//             groupRef.current.rotation.y += delta * 0.2;
//             groupRef.current.scale.lerp(new Vector3(20, 20, 20), delta * 1);
//         }
//     });

//     return (
//         <group ref={groupRef} scale={[2.0, 2.0, 2.0]} dispose={null}>
//             {showNodes && !showNeuralStructure && (
//                 <GlowingText
//                     position={[-44, 0, 0]}
//                     fontSize={4}
//                     text="ANUSHA UDAYAKUMAR"
//                     visible={nameVisible} // Name visibility controlled by parent
//                 />
//             )}

//             <points>
//                 <bufferGeometry ref={particlesRef}>
//                     <bufferAttribute
//                         attach="attributes-position"
//                         count={particleCount}
//                         array={particlePositions}
//                         itemSize={3}
//                     />
//                 </bufferGeometry>
//                 <pointsMaterial
//                     color={'white'}
//                     size={3}
//                     blending={AdditiveBlending}
//                     transparent={true}
//                     sizeAttenuation={false}
//                 />
//             </points>
//             <lineSegments>
//                 <bufferGeometry ref={linesGeometryRef}>
//                     <bufferAttribute
//                         attach="attributes-position"
//                         count={positions.length / 3}
//                         array={positions}
//                         itemSize={3}
//                     />
//                     <bufferAttribute
//                         attach="attributes-color"
//                         count={colors.length / 3}
//                         array={colors}
//                         itemSize={3}
//                     />
//                 </bufferGeometry>
//                 <lineBasicMaterial
//                     vertexColors={true}
//                     blending={AdditiveBlending}
//                     transparent={true}
//                 />
//             </lineSegments>
//         </group>
//     );
// }

// export default ParticleNetwork;
import React, { useRef, useEffect, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { AdditiveBlending, Vector3 } from 'three';
import GlowingText from './GlowingText';

function ParticleNetwork({ expanded, showNodes, showDetails, showNeuralStructure, nameVisible }) {
    const groupRef = useRef();
    const particlesRef = useRef();
    const linesGeometryRef = useRef();

    const maxParticleCount = 300;
    const particleCount = 300;
    const r = 20;
    const rHalf = r / 2;
    const maxConnections = 10;
    const minDistance = 8;
    let vertexpos = 0;
    let colorpos = 0;
    let numConnected = 0;

    const segments = maxParticleCount * maxParticleCount;
    const positions = useMemo(() => new Float32Array(segments * 3), [segments]);
    const colors = useMemo(() => new Float32Array(segments * 3), [segments]);

    const particlePositions = useMemo(() => new Float32Array(maxParticleCount * 3), []);
    const particlesData = useMemo(() => [], []);
    const v = useMemo(() => new Vector3(), []);

    useEffect(() => {
        for (let i = 0; i < maxParticleCount; i++) {
            const x = Math.random() * r - r / 2;
            const y = Math.random() * r - r / 2;
            const z = Math.random() * r - r / 2;

            particlePositions[i * 3] = x;
            particlePositions[i * 3 + 1] = y;
            particlePositions[i * 3 + 2] = z;

            const v = new Vector3(
                -1 + Math.random() * 2,
                -1 + Math.random() * 2,
                -1 + Math.random() * 2
            );
            particlesData.push({
                velocity: v.normalize().divideScalar(100),
                numConnections: 0
            });
        }

        particlesRef.current.setDrawRange(0, particleCount);
    }, [maxParticleCount, particleCount, particlePositions, particlesData]);

    useFrame((_, delta) => {
        vertexpos = 0;
        colorpos = 0;
        numConnected = 0;

        for (let i = 0; i < particleCount; i++) particlesData[i].numConnections = 0;

        for (let i = 0; i < particleCount; i++) {
            const particleData = particlesData[i];

            v.set(
                particlePositions[i * 3],
                particlePositions[i * 3 + 1],
                particlePositions[i * 3 + 2]
            )
                .add(particleData.velocity)
                .setLength(expanded ? (showNodes ? 35 : 25) : 15);

            particlePositions[i * 3] = v.x;
            particlePositions[i * 3 + 1] = v.y;
            particlePositions[i * 3 + 2] = v.z;

            if (particlePositions[i * 3 + 1] < -rHalf || particlePositions[i * 3 + 1] > rHalf)
                particleData.velocity.y = -particleData.velocity.y;

            if (particlePositions[i * 3] < -rHalf || particlePositions[i * 3] > rHalf)
                particleData.velocity.x = -particleData.velocity.x;

            if (particlePositions[i * 3 + 2] < -rHalf || particlePositions[i * 3 + 2] > rHalf)
                particleData.velocity.z = -particleData.velocity.z;

            if (particleData.numConnections >= maxConnections) continue;

            for (let j = i + 1; j < particleCount; j++) {
                const particleDataB = particlesData[j];
                if (particleDataB.numConnections >= maxConnections) continue;

                const dx = particlePositions[i * 3] - particlePositions[j * 3];
                const dy = particlePositions[i * 3 + 1] - particlePositions[j * 3 + 1];
                const dz = particlePositions[i * 3 + 2] - particlePositions[j * 3 + 2];
                const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

                if (dist < minDistance) {
                    particleData.numConnections++;
                    particleDataB.numConnections++;

                    const alpha = 1.0 - dist / minDistance;

                    const colorGradient = new Vector3(1, 1, 1);

                    positions[vertexpos++] = particlePositions[i * 3];
                    positions[vertexpos++] = particlePositions[i * 3 + 1];
                    positions[vertexpos++] = particlePositions[i * 3 + 2];

                    positions[vertexpos++] = particlePositions[j * 3];
                    positions[vertexpos++] = particlePositions[j * 3 + 1];
                    positions[vertexpos++] = particlePositions[j * 3 + 2];

                    colors[colorpos++] = colorGradient.x * alpha;
                    colors[colorpos++] = colorGradient.y * alpha;
                    colors[colorpos++] = colorGradient.z * alpha;

                    colors[colorpos++] = colorGradient.x * alpha;
                    colors[colorpos++] = colorGradient.y * alpha;
                    colors[colorpos++] = colorGradient.z * alpha;

                    numConnected++;
                }
            }
        }

        linesGeometryRef.current.setDrawRange(0, numConnected * 2);
        linesGeometryRef.current.attributes.position.needsUpdate = true;
        linesGeometryRef.current.attributes.color.needsUpdate = true;

        particlesRef.current.attributes.position.needsUpdate = true;

        // Keep rotating particles
        if (!showNeuralStructure) {
            groupRef.current.rotation.y += delta / 5;
        }

        // Expand the particle sphere on transition
        if (showNeuralStructure) {
            groupRef.current.rotation.y += delta * 0.2;
            groupRef.current.scale.lerp(new Vector3(20, 20, 20), delta * 1);
        }
    });

    return (
        <>
            {/* Static GlowingText */}
            {showNodes && !showNeuralStructure && (
                <GlowingText
                    position={[-80, 0, 0]}
                    fontSize={10}
                    text="ANUSHA UDAYAKUMAR"
                    visible={nameVisible}
                />
            )}

            {/* Rotating and expanding particles */}
            <group ref={groupRef} scale={[2.0, 2.0, 2.0]} dispose={null}>
                <points>
                    <bufferGeometry ref={particlesRef}>
                        <bufferAttribute
                            attach="attributes-position"
                            count={particleCount}
                            array={particlePositions}
                            itemSize={3}
                        />
                    </bufferGeometry>
                    <pointsMaterial
                        color={'white'}
                        size={0.8} // Adjust particle size to reduce glow
                        blending={AdditiveBlending}
                        transparent={true}
                        opacity={0.4} // Reduced opacity to reduce glow effect
                        sizeAttenuation={true}
                    />
                </points>
                <lineSegments>
                    <bufferGeometry ref={linesGeometryRef}>
                        <bufferAttribute
                            attach="attributes-position"
                            count={positions.length / 3}
                            array={positions}
                            itemSize={3}
                        />
                        <bufferAttribute
                            attach="attributes-color"
                            count={colors.length / 3}
                            array={colors}
                            itemSize={3}
                        />
                    </bufferGeometry>
                    <lineBasicMaterial
                        vertexColors={true}
                        blending={AdditiveBlending}
                        transparent={true}
                        opacity={0.35} // Lower line opacity to reduce glow
                    />
                </lineSegments>
            </group>
        </>
    );
}

export default ParticleNetwork;
