import React from 'react';
import PropTypes from 'prop-types';

import imgSrc from '../../assets/gif/loading-icon.gif';

import StyledLoading from './StyledLoading';

export default function Loading(props) {
  return (
    <StyledLoading {...props}>
      <img src={imgSrc} alt="" />
    </StyledLoading>
  );
}

Loading.propTypes = {
  fullScreen: PropTypes.bool,
  fullWidth: PropTypes.bool,
};

Loading.defaultProps = {
  fullScreen: false,
  fullWidth: false,
};
