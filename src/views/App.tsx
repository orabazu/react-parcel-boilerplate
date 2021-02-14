import React, { useEffect } from 'react';
import { greet } from '../../rust/Cargo.toml';
import './style.scss';

const App = ({ name }: { name: string }): JSX.Element => {
  useEffect(() => {
    greet();
  }, []);
  return (
    <h1 className="heading">
      Hello
      {name}
    </h1>
  );
};

export default App;
