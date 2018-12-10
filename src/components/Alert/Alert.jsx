import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

// import CircledNotificationIcon from '../CircledNotificationIcon';
import { ModalClose } from '../Modal';

import {
  alert,
  alertContent,
} from './alert.module.scss';

export const ALERT_TYPES = {
  default: 'default',
  danger: 'danger',
  success: 'success',
};

const fadeMilliseconds = 6000;

class Alert extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.fade) {
      if (nextProps.isOpen && !this.props.isOpen) {
        this.timeout = setTimeout(() => {
          this.props.toggle();
        }, fadeMilliseconds);
      } else if (!nextProps.isOpen && this.props.isOpen) {
        this.clearTimeout();
      }
    }
  }

  componentWillUnmount() {
    this.clearTimeout();
  }

  clearTimeout = () => {
    if (this.timeout) {
      clearTimeout(this.timeout);
      this.timeout = null;
    }
  };

  timeout = null;

  render() {
    const {
      type,
      toggle,
      isOpen,
      children,
    } = this.props;
    const alertType = ALERT_TYPES[type];
    const alertContentClassname = classNames(alertContent, { [alertType]: true });
    return (
      <div className={classNames(alert, { isOpen })}>
        {/* <CircledNotificationIcon /> */}
        <div className={alertContentClassname}>
          {children}
        </div>
        <ModalClose
          forAlert
          onClick={toggle}
        />
      </div>
    );
  };
}

Alert.propTypes = {
  type: PropTypes.oneOf([
    'default',
    'danger',
    'success',
  ]),
  fade: PropTypes.bool,
  isOpen: PropTypes.bool,
  toggle: PropTypes.func,
  children: PropTypes.string.isRequired,
};

Alert.defaultProps = {
  type: ALERT_TYPES.default,
  fade: false,
  isOpen: false,
  toggle: () => {},
};

export default Alert;
