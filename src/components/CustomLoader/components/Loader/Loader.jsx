import React from 'react';
import PropTypes from 'prop-types';

import './Loader.scss';

const lightBlue = '#3578E5';

const Loader = (props) => {
  const {
    width,
    height,
    weight,
    color,
  } = props;
  const loaderStyle = {
    width,
    height,
  };
  const divStyle = {
    width,
    height,
    borderWidth: weight,
    borderColor: `${color} transparent transparent transparent`,
  };
  return (
    <div
      className="kzm-loader"
      style={loaderStyle}
    >
      <div style={divStyle} />
      <div style={divStyle} />
      <div style={divStyle} />
      <div style={divStyle} />
    </div>
  );
};

export default Loader;

Loader.propTypes = {
  width: PropTypes.string,
  height: PropTypes.string,
  weight: PropTypes.string,
  color: PropTypes.string,
};

Loader.defaultProps = {
  width: '50px',
  height: '50px',
  weight: '6px',
  color: lightBlue,
};
