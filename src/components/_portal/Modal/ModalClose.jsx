import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import CloseIcon from '../Icons/Close';

import { close } from './modalClose.module.scss';

export default function ModalClose(props) {
  return (
    <div
      tabIndex="0"
      role="button"
      onKeyPress={() => {}}
      className={classNames(close, { forAlert: props.forAlert })}
      onClick={props.onClick}
    >
      <CloseIcon />
    </div>
  );
}

ModalClose.propTypes = {
  forAlert: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

ModalClose.defaultProps = {
  forAlert: false,
};
