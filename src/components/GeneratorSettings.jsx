import React from 'react';
import { PasswordLength } from './PasswordLength';
import { PasswordSettingsList } from './PasswordSettingsList';
import { PasswordStrength } from './PasswordStrength';
import { GenerateButton } from './GenerateButton';

export const GeneratorSettings = () => {
  return (
    <div className='generator-settings'>
      <PasswordLength />
      <PasswordSettingsList />
      <PasswordStrength />
      <GenerateButton />
    </div>
  );
};
