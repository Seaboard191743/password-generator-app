import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { usePassword, setCopiedToTrue } from '../slices/passwordSlice';

export const GeneratorPassword = () => {
  const password = useSelector(usePassword);
  const copiedValue = useSelector((state) => state.password.copied);
  const dispatch = useDispatch();
  const className = password ? 'password password-generated' : 'password';

  const handleCopied = () => {
    if (password) {
      dispatch(setCopiedToTrue());
      navigator.clipboard.writeText(password);
    }
  };
  return (
    <div className='generator-password'>
      <h2 className={className}>{password || 'AldSAkdk'}</h2>
      <div className='password-copy' onClick={handleCopied}>
        <span style={{ display: copiedValue ? 'inline-block' : 'none' }}>
          Copied
        </span>

        <img
          src={
            password
              ? '/fa-regular_copy_active.svg'
              : '/fa-regular_copy_not_active.svg'
          }
          alt='copy'
          style={{ cursor: password ? 'pointer' : 'regular' }}
        />
      </div>
    </div>
  );
};
