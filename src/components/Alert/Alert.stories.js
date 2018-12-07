import React from 'react';
import { storiesOf } from '@storybook/react';
import { string } from '@storybook/addon-knobs/react';

import { wInfo } from '../../../.storybook/utils';

import Alert from './Alert';

storiesOf('Alert', module)
  .addWithJSX(
    'Open alert',
    wInfo(`
    description of the component
    `)(() => <Alert isOpen >Alert</Alert>)
  );