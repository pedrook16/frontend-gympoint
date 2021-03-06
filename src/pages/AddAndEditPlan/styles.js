import styled from 'styled-components';

export const Content = styled.div`
  width: 100%;

  form {
    display: flex;
    flex-direction: column;
    width: 100%;

    label {
      font-size: 14px;
      color: #444444;
      font-weight: bold;
      margin-bottom: 10px;
    }

    input {
      padding: 15px 20px;
      border-radius: 4px;
      margin-bottom: 10px;

      &.desabled {
        background: #eee;
        color: #444;
      }

      ::placeholder {
        font-size: 16px;
        color: #999999;
      }
    }

    div {
      display: flex;
      justify-content: space-between;
      div {
        display: flex;
        flex-direction: column;

        > input {
          width: 250px;
        }
      }
    }
  }
`;
