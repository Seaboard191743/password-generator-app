import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

export const PasswordStrength = () => {
  const indicatorRef = useRef(null);
  const passwordStrength = useSelector((state) => state.password.total);
  const label =
    passwordStrength['totalStrength'][passwordStrength['level']].title;

  useEffect(() => {
    const indicator = indicatorRef.current;
    Array.from(indicator.children).forEach((item, i) => {
      item.style.background = 'none';
      while (i < passwordStrength.level) {
        item.style.background =
          passwordStrength['totalStrength'][passwordStrength['level']].style;
        i += 1;
      }
    });
  }, [passwordStrength]);

  return (
    <div className='password-strength'>
      <span>Strength</span>
      <div className='indicator'>
        <span className='indicator-label'>{label}</span>
        <div ref={indicatorRef} className='indicator-charge'>
          <div className='indicator-charge-item'></div>
          <div className='indicator-charge-item'></div>
          <div className='indicator-charge-item'></div>
          <div className='indicator-charge-item'></div>
        </div>
      </div>
    </div>
  );
};
