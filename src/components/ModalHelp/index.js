import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-awesome-modal';

export default function ModalHelp({ children, ...rest }) {
  return <Modal {...rest}>{children}</Modal>;
}

ModalHelp.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array])
    .isRequired,
};
