import React from 'react';

const Rainbow = (WrappedComponent) => {
    const colours = ['red', 'pink', 'green', 'brown', 'violet'];
    const randomColour = colours[Math.round(Math.random() * 3)];
    const className = randomColour + '-text';

    return (props) => {
        return (
          <div className={className}>
              <WrappedComponent {...props}/>
          </div>
        );
    };
};

export  default Rainbow;

