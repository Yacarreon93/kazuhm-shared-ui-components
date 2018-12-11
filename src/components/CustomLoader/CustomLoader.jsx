import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import gif from '../../../assets/gif/loader-kaz.gif';

import './CustomLoader.scss';

const CustomLoader = props => (
  <div
    className={classNames('kzm-custom-loader', {
      'full-screen': props.fullScreen,
      'full-width': props.fullWidth,
    })}
  >
    <img src={gif} alt="" />
  </div>
);

CustomLoader.propTypes = {
  fullScreen: PropTypes.bool,
  fullWidth: PropTypes.bool,
};

CustomLoader.defaultProps = {
  fullScreen: false,
  fullWidth: false,
};

export default CustomLoader;
