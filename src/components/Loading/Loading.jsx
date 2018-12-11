import React from 'react';
import PropTypes from 'prop-types';

import StyledLoading from './StyledLoading';
import imgSrc from '../../assets/gif/loading-icon.gif';

function Loading(props) {
  console.log('props', props);
  return (
    <StyledLoading {...props}>
      <img src={imgSrc} alt="" />
    </StyledLoading>
  );
}

Loading.propTypes = {
  centered: PropTypes.bool,
  fullScreen: PropTypes.bool,
};

Loading.defaultProps = {
  centered: false,
  fullScreen: false,
};

export default Loading;
