import styled, { css } from 'styled-components';

export const Container = styled.div`
  background: #fff;
  padding: 0 30px;
  border-bottom: 1px solid #999;
`;
export const Content = styled.div`
  height: 64px;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${props =>
    props.seleted &&
    css`
      color: #444;
    `}

  nav {
    display: flex;
    align-items: center;

    img {
      height: 30px;
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid #eee;
    }
    a {
      font-size: 15px;
      color: #999;
      margin-left: 20px;
      font-weight: bold;
    }
  }
  aside {
    display: flex;
    align-items: center;
  }
`;

export const Logout = styled.div`
  display: flex;
  flex-direction: column;

  span {
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 5px;
  }

  button {
    background: none;
    font-size: 14px;
    font-weight: normal;
    color: #de3b3b;
    border: 0;
  }
`;
