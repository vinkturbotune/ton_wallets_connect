import { AppContext } from './AppProvider';
import React from 'react';

export function useGameState() {
  const context = React.useContext(AppContext);

  if (!context) {
    throw new Error('use only context provider!');
  }

  return context;
}
