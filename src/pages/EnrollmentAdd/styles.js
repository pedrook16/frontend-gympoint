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

    > div {
      margin-bottom: 20px;

      div.react-select__control {
        height: 48px;
        div {
          div {
            display: flex;
            align-items: center;
          }
        }
      }
    }

    section {
      display: flex;
      justify-content: space-between;

      article {
        width: 100%;
        height: 100%;

        > div {
          margin-top: 10px;
          margin-right: 20px;

          div.react-select__control {
            height: 48px;
            > div {
              > div {
                display: flex;
                align-items: center;
              }
            }
          }

          &.react-select__menu {
            height: 100%;
          }
        }

        input {
          padding: 15px 20px;
          border-radius: 4px;
          border: 1px solid hsl(0, 0%, 80%);

          &.desabled {
            background: #eee;
            margin-top: 10px;
            color: #444;
          }
        }
      }
    }
  }
`;
