import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Box({ render }) {
  return <Container>{render}</Container>;
}

Box.propTypes = {
  render: PropTypes.element.isRequired,
};
