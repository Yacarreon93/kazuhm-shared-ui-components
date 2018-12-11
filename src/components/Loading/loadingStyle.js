import { css } from 'styled-components';

function getPosition(props) {
  if (props.fullScreen) return 'absolute';
  return 'static';
}

function getTop(props) {
  if (props.fullScreen) return '0';
  return 'auto';
}

function getLeft(props) {
  if (props.fullScreen) return '0';
  return 'auto';
}

function getWidth(props) {
  if (props.fullScreen) return '100vw';
  return 'auto';
}

function getHeight(props) {
  if (props.fullScreen) return '100vh';
  return 'auto';
}

function getFlexGrow(props) {
  if (props.centered || props.fullScreen) return '1';
  return '0';
}

const loadingStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  position: ${getPosition};
  top: ${getTop};
  left: ${getLeft};
  width: ${getWidth};
  height: ${getHeight};
  flex-grow: ${getFlexGrow};
`;

export default loadingStyle;
