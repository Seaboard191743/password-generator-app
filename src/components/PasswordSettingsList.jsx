import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { usePasswordLength } from '../slices/passwordSlice';
import {
  setPasswordSettings,
  setPasswordSettingsLevel,
  setTotalStrength,
} from '../slices/passwordSlice';

import { PasswordSetting } from './PasswordSetting';

export const PasswordSettingsList = () => {
  const [checked, setChecked] = useState({
    uppercaseletters: false,
    lowercaseletters: false,
    numbers: false,
    symbols: false,
  });
  const [disabled, setDisabled] = useState(true);

  const passwordLength = useSelector(usePasswordLength);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, checked } = e.target;
    setChecked((prev) => ({ ...prev, [name]: checked }));
    dispatch(setPasswordSettingsLevel({ value: checked }));
    dispatch(setTotalStrength());
  };

  useEffect(() => {
    dispatch(setPasswordSettings(checked));
  }, [checked, dispatch]);

  useEffect(() => {
    if (passwordLength > 0) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [passwordLength]);

  return (
    <div className='password-settings'>
      <PasswordSetting
        id='letter-uppercase'
        label='Include Uppercase Letters'
        name='uppercaseletters'
        handleChange={handleChange}
        checked={checked.uppercaseletters}
        disabled={disabled}
      />
      <PasswordSetting
        id='letter-lowercase'
        label='Include Lowercase Letters'
        name='lowercaseletters'
        handleChange={handleChange}
        checked={checked.lowercaseletters}
        disabled={disabled}
      />
      <PasswordSetting
        id='numbers'
        label='Include Numbers'
        name='numbers'
        handleChange={handleChange}
        checked={checked.numbers}
        disabled={disabled}
      />
      <PasswordSetting
        id='symbols'
        label='Include Symbols'
        name='symbols'
        handleChange={handleChange}
        checked={checked.symbols}
        disabled={disabled}
      />
    </div>
  );
};
