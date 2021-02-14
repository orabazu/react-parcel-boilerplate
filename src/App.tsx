import React from 'react';
import {render} from 'react-dom';
import './style.scss';
// synchronous import
import { greet } from '../hello/pkg/hello'
console.log(greet())


class App extends React.Component {
  render() {
    return (
      <div>
        <h1 className="heading">Build with <span role="img" aria-label="emoji"> 📦</span></h1>
      </div>
    );
  }
}
render(<App />, document.getElementById("root"));
