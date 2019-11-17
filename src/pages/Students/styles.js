import styled from 'styled-components';

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
      width: 100%;

      td {
        font-size: 16px;
        color: #999;
        border-bottom: 1px solid #eee;
      }
    }
  }
`;

export const Search = styled.div`
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
    height: 100%;
    padding: 2px 10px 2px 30px;
    border-radius: 4px;

    ::placeholder {
      color: #999;
    }
  }
`;
