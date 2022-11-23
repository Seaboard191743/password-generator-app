import React from 'react';

import { GeneratorPassword } from './GeneratorPassword';
import { GeneratorSettings } from './GeneratorSettings';

export const GeneratorContainer = () => {
  return (
    <div className='generator-container'>
      <GeneratorPassword />
      <GeneratorSettings />
    </div>
  );
};
