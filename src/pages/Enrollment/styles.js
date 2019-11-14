import styled from 'styled-components';

export const Table = styled.table`
  flex: 1;

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
        color: #999;
        border-bottom: 1px solid #eee;
      }
    }
  }
`;
