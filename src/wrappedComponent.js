import React from 'react';

function HigerOrderComponent(Component) {
  return (props) => {
    return (
      <>
        <h3> Hello, Added from HOC </h3>
        <Component {...props} />
      </>
    );
  };
}

export default HigerOrderComponent;
