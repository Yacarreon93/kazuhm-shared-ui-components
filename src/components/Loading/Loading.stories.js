import React from 'react';
import { storiesOf } from '@storybook/react';

import Loading from './';

storiesOf('Loading', module)
  .addWithJSX(
    'Animated loading icon',
    () => <Loading />,
  );