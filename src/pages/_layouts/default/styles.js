import styled from 'styled-components';

export const Wrapper = styled.div``;
export const Content = styled.div`
  max-width: 900px;
  margin: 30px auto;

  div {
    display: flex;
    justify-content: space-between;

    div {
      button {
        background: #ee4d64;
        color: #fff;
        border: 0;
        border-radius: 4px;
        padding: 2px 20px;
        font-weight: bold;

        display: flex;
        justify-content: center;
        align-items: center;

        svg {
          margin-right: 5px;
        }
      }

      div {
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
      }
    }
  }
`;
