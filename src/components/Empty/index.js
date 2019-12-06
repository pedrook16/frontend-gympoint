import React from 'react';
import Lottie from 'react-lottie';
import animated from '~/assets/Animated/empty.json';

import { Container } from './styles';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animated,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

export default function Empty({ children }) {
  return (
    <Container>
      <Lottie options={defaultOptions} height={200} width={200} />
      <span>{children}</span>
    </Container>
  );
}
