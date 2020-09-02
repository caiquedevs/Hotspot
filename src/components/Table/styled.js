import styled from 'styled-components';
import * as colors from '../../styles/colors';

export const Table = styled.table`
  width: 100%;
  max-width: 570px;
  margin-top: 50px;

  display: flex;
  flex-direction: column;
`;

export const TableHead = styled.thead`
  width: 100%;
  padding: 10px 15px;

  background-color: ${colors.silver};
  cursor: default;

  tr th {
    font-weight: normal;
    font-size: 25px;
    line-height: 29px;
    color: #b1b1b1;
  }

  @media screen and (min-width: 0px) and (max-width: 500px) {
    tr th {
      font-size: 16px;
    }
  }
`;

export const TableBody = styled.tbody`
  width: 100%;

  display: flex;
  flex-direction: column;

  tr {
    width: 100%;
    padding: 25px 15px;
    border-bottom: 1px solid ${colors.silver};

    display: flex;
    align-items: center;
    justify-content: space-between;

    td {
      font-weight: normal;
      font-size: 25px;
      line-height: 29px;
      color: #b1b1b1;
    }

    td button {
      background: transparent;
      border: none;
      font-weight: normal;
      font-size: 20px;
      line-height: 29px;
      color: #4a90e2;
      text-decoration: underline;
    }
  }

  @media screen and (min-width: 0px) and (max-width: 500px) {
    tr td {
      font-size: 16px;

      button {
        font-size: 17px;
      }
    }
  }
`;
