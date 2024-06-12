
import React from 'react'; 


// const Greeting = ({ name }) => { 
// return <div>Hello, {name}!</div>;
//  };
//  export default Greeting;

// creating type annotation for the name
type MyName = {
  name: string
}

// using type annotation in the function
const Greeting = ({name}: MyName) => {
  return <div>Hello, {name}!</div>
}

export default Greeting


