import React from 'react';
import PropTypes from 'prop-types';
import Lottie from 'react-lottie';
import animated from '~/assets/Animated/empty.json';

import { Container } from './styles';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animated,
};

export default function Empty({ children }) {
  return (
    <Container>
      <Lottie options={defaultOptions} height={200} width={200} />
      <span>{children}</span>
    </Container>
  );
}

Empty.propTypes = {
  children: PropTypes.string.isRequired,
};
