import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  background: #fff;
  padding: 0 30px;
`;
export const Content = styled.div`
  height: 64px;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid #eee;
    }
  }
  aside {
    display: flex;
    align-items: center;
  }
`;

export const Navigate = styled(NavLink).attrs({
  activeClassName: 'selected',
})`
  cursor: pointer;
  font-size: 15px;
  color: #999;
  margin-left: 20px;
  font-weight: bold;

  &.selected {
    color: #444;
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
