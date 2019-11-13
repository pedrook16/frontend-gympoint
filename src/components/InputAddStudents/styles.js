import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 200px;
  margin-left: 15px;

  svg {
    position: absolute;
    top: 8px;
    right: 88%;
    z-index: 2;
    border: none;
    background: transparent;
    outline: none;
  }

  input {
    width: 100%;
    padding: 2px 10px 2px 30px;
    border-radius: 4px;
    border: 1px solid #eee;

    ::placeholder {
      color: #999;
    }
  }
`;
