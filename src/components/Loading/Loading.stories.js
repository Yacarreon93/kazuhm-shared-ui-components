import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

import Loading from './Loading';

storiesOf('Icons', module)
  .addWithJSX(
    'Loading',
    () => (
      <Loading
        centered={boolean('centered', false)}
        fullScreen={boolean('fullScreen', false)}
      />
    ),
  );