import React from 'react';
import { GeneratorTitle } from './GeneratorTitle';
import { GeneratorContainer } from './GeneratorContainer';

export const Generator = () => {
  return (
    <div className='generator'>
      <GeneratorTitle />
      <GeneratorContainer />
    </div>
  );
};
