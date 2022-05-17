import React from 'react';
import './style.css';
import HOC from './wrappedComponent';

function App(props) {
  return (
    <>
      <h3> This is {props.componentName} </h3>
    </>
  );
}

export default HOC(App);
