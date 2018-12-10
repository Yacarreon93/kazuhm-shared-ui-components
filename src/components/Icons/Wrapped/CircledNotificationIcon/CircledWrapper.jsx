import React from 'react';
import PropTypes from 'prop-types';

import { circledWrapper } from './circledWrapper.module.scss';

const CircledWrapper = ({ children }) => (
  <div className={circledWrapper}>
    {children}
  </div>
);

CircledWrapper.propTypes = {
  children: PropTypes.node,
};

CircledWrapper.defaultProps = {
  children: null,
};

export default CircledWrapper;
