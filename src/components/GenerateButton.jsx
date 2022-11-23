import React, { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import {
  usePasswordLength,
  generatePassword,
  setCopiedToFalse,
} from '../slices/passwordSlice';

export const GenerateButton = () => {
  const [disable, setDisable] = useState(false);
  const passwordLength = useSelector(usePasswordLength);
  const settings = useSelector(
    (state) => state.password['settings'].checkboxes
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const isSomeSettingIsTrue = Object.values(settings).some((item) => item);
    if (
      passwordLength < 1 ||
      !isSomeSettingIsTrue ||
      (passwordLength > 0 && !isSomeSettingIsTrue)
    ) {
      setDisable(true);
    } else {
      setDisable(false);
    }
  }, [settings, passwordLength]);

  const handleGeneratePassword = () => {
    dispatch(generatePassword());
    dispatch(setCopiedToFalse());
  };

  return (
    <button
      className='generate-btn'
      disabled={disable}
      onClick={handleGeneratePassword}
    >
      Generate
      <img src='/bx_arrow-to-left.svg' alt='btn-arrow' />
    </button>
  );
};
