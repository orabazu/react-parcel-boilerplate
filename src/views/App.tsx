import React, { useEffect } from 'react';
import modulex from '../../rust/Cargo.toml';

// import('pkg').then((module) => {
//   module.add(2, 2);
// });

function getWasm() {
  // const module = await import('myWasm');
  console.log(modulex.greet());
}
//   getWasm()

const App = ({ name }: { name: string }): JSX.Element => {
  useEffect(() => {
    getWasm();
  }, []);
  return (
    <h1>
      Hello
      {name}
    </h1>
  );
};

export default App;
