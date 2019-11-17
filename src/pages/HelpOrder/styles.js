import styled from 'styled-components';
import { darken } from 'polished';

export const Table = styled.table`
  flex: 1;
  width: 100%;
  thead {
    margin-bottom: 10px;
    tr {
      th {
        font-size: 16px;
        color: #444;
        text-align: start;
      }
    }
  }

  tbody {
    tr {
      height: 50px;

      td {
        font-size: 16px;
        color: #666666;
        border-bottom: 1px solid #eee;

        button {
          background: none;
          border: 0;
          color: #4d85ee;

          &:hover {
            color: ${darken(0.04, '#4d85ee')};
          }
        }
      }
    }
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  width: 100%;

  div {
    display: flex;
    flex-direction: column;

    strong {
      font-size: 14px;
      color: #444444;
      font-weight: bold;
      margin-bottom: 10px;
    }

    span {
      font-size: 16px;
      color: #666666;
      line-height: 26px;
      margin-bottom: 10px;
    }
  }

  form {
    display: flex;
    flex-direction: column;

    label {
      font-size: 14px;
      color: #444444;
      font-weight: bold;
      margin-bottom: 10px;
    }

    textarea {
      height: 127px;
      border: 1px solid #999;
      border-radius: 4px;
      padding: 10px;
      margin-bottom: 15px;
    }

    button {
      background: #ee4d64;
      border: 0;
      padding: 15px 0;
      border-radius: 4px;
      color: #fff;
      font-weight: bold;
      font-size: 16px;

      &:hover {
        background: ${darken(0.03, '#ee4d64')};
      }
    }
  }
`;
