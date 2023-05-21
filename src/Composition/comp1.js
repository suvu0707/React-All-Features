import React from 'react';
import Composition2 from './comp2';

function Composition1() {
  return (
    <div>
        <Composition2 name={'Suvendu'}><h1>Hii How are u</h1></Composition2>
        <Composition2><h1>Hello How are uii</h1></Composition2>
        <Composition2><h1>Heyy How are u</h1></Composition2>
    </div>
  )
}

export default Composition1;


// It combining multiple components and nesting them which is easier and follows the component pattern.

// Component composition is the name for passing components as props to other components, thus creating 
// new components with other components.

// Children is nothing more than a prop to the  component.