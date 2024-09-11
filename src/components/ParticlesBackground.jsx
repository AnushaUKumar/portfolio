import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import particlesConfig from './config/particlesConfig';

const ParticlesBackground = () => {
  const particlesInit = useCallback((engine) => {
    loadFull(engine);
  }, []);

  return (
    <div className="particles-background absolute top-0 left-0 w-full h-full z-0">
      <Particles id="tsparticles" options={particlesConfig} init={particlesInit} />
    </div>
  );
};

export default ParticlesBackground;
