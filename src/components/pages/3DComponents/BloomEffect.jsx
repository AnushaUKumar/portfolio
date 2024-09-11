// import React from 'react';
// import { EffectComposer, Bloom } from '@react-three/postprocessing';

// function BloomEffect() {
//   return (
//     <EffectComposer>
//       <Bloom luminanceThreshold={0.3} luminanceSmoothing={0.9} height={300} />
//     </EffectComposer>
//   );
// }

// export default BloomEffect;
import React from 'react';
import { EffectComposer, Bloom } from '@react-three/postprocessing';

function BloomEffect() {
  return (
    <EffectComposer>
      <Bloom luminanceThreshold={0.3} luminanceSmoothing={0.9} height={300} />
    </EffectComposer>
  );
}

export default BloomEffect;
