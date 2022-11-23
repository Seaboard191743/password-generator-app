import React from 'react';

export const PasswordSetting = ({
  checked,
  id,
  name,
  label,
  handleChange,
  disabled,
}) => {
  return (
    <div className='input-setting' style={{ opacity: disabled ? 0.3 : 1 }}>
      <input
        type='checkbox'
        id={id}
        name={name}
        checked={checked}
        onChange={handleChange}
        disabled={disabled}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};
