import React from 'react';
import PropTypes from 'prop-types';

export const BluetoothButton = ({ small, clickHandler }) => (
  <button className={small ? 'small' : null} onClick={clickHandler}>
    Connect
  </button>
);

BluetoothButton.propTypes = {
  small: PropTypes.string,
  clickHandler: PropTypes.func.isRequired,
};

BluetoothButton.defaultProps = {
  small: false,
};
