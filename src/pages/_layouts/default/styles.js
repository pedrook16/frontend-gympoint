import styled from 'styled-components';

export const Wrapper = styled.div`
  background: #eee;
  height: 100%;
`;

export const Content = styled.div`
  max-width: 900px;
  margin: 50px auto;

  header {
    display: flex;
    justify-content: space-between;

    > div {
      display: flex;
    }
  }
`;
