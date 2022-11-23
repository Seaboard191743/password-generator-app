import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  usePasswordLength,
  setPasswordLength,
  setTotalStrength,
} from '../slices/passwordSlice';

export const PasswordLength = () => {
  const passwordLength = useSelector(usePasswordLength);
  const dispatch = useDispatch();

  const inputRef = useRef(null);

  const changePasswordLength = (e) => {
    dispatch(setPasswordLength({ value: e.target.value }));
    dispatch(setTotalStrength());
  };

  useEffect(() => {
    const input = inputRef.current;
    const { min, max, value } = input;
    const size = ((value - min) * 100) / (max - min) + '% 100%';
    input.style.backgroundSize = size;
  }, [passwordLength]);

  return (
    <div className='password-length'>
      <div className='password-length-info'>
        <span className='password-length-title'>Character Length</span>
        <span className='password-length-num'>{passwordLength}</span>
      </div>
      <div className='password-length-setting'>
        <label htmlFor='password-length'></label>
        <input
          ref={inputRef}
          type='range'
          id='password-length'
          min='0'
          max='15'
          onChange={changePasswordLength}
          value={passwordLength}
        />
      </div>
    </div>
  );
};
