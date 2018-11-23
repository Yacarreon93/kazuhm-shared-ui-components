import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from './Button';

storiesOf('Button', module)
  .addWithJSX('with red background', () => (
    <Button bg="red">Click me</Button>
  ))
  .addWithJSX('with green background', () => (
    <Button bg="green">Click me</Button>
  ));