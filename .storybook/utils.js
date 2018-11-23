import { withInfo } from '@storybook/addon-info';

const wInfoStyle = {
  header: {
    h1: {
      color: 'red',
    },
  },
};

export const wInfo = text => withInfo({
  text,
  // inline: true,
  // source: false,
  styles: wInfoStyle,
});