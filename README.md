# React TypeScript Components

This repository contains two examples of converting React components from JavaScript to TypeScript. The examples include a functional component and a class component.

## Table of Contents

- [Functional Component](#functional-component)
- [Class Component](#class-component)
- [Setup](#setup)
- [Usage](#usage)

## Functional Component

The `Greeting` component is a simple functional component that takes a `name` prop and displays a greeting message.

### Code

```tsx
import React from 'react';

type GreetingProps = {
  name: string;
};

const Greeting = ({ name }: GreetingProps) => {
  return <div>Hello, {name}!</div>;
};

export default Greeting;
