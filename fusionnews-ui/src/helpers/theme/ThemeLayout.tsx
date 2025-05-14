// src/component/settings/UIPreferences.tsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { toggleTheme } from '../../redux/theme/theme.slide';
import "../theme/theme.css";

const UIPreferences = () => {
  const dispatch = useDispatch();
  const { theme} = useSelector((state: RootState) => state.theme);

  return (
    <div className="theme-switch-container">
      <label className="theme-switch">
        <input
          type="checkbox"
          checked={theme === 'dark'}
          onChange={() => dispatch(toggleTheme())}
        />
        <span className="slider"></span>
      </label>
    </div>
  );
};

export default UIPreferences;
