import { useState } from 'react';

const useBooleanState = (initialState = false) => {
  const [state, setState] = useState(initialState);

  const setTrue = () => setState(true);
  const setFalse = () => setState(false);
  const toggle = () => setState((prevState) => !prevState);

  return [state, setTrue, setFalse, toggle] as const;
};

export default useBooleanState;
