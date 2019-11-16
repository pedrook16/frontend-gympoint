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
