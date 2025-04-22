// src/component/settings/UIPreferences.tsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../../redux/theme/theme.slide';
import { RootState } from '../../redux/store';

const UIPreferences = () => {
  const dispatch = useDispatch();
  const { theme} = useSelector((state: RootState) => state.theme);

  return (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <button onClick={() => dispatch(toggleTheme())}>
        {theme === 'light' ? '🌞 Light' : '🌙 Dark'}
      </button>
    
    </div>
  );
};

export default UIPreferences;
