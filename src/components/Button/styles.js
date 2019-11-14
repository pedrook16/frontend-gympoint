import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.button`
  background: #ee4d64;
  color: #fff;
  border: 0;
  border-radius: 4px;
  padding: 2px 20px;
  font-weight: bold;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background: ${darken(0.03, '#ee4d64')};
  }

  svg {
    margin-right: 5px;
  }
`;
