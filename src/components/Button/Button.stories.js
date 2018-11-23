import React from 'react';
import { storiesOf } from '@storybook/react';
import { wInfo } from '../../../.storybook/utils';

import Button from './Button';

storiesOf('Button', module)
  .addWithJSX(
    'with red background',
    wInfo(`
    description of the component
    `)(() => <Button bg="red">Click me</Button>)
  )
  .addWithJSX('with green background', () => (
    <Button bg="green">Click me</Button>
  ));