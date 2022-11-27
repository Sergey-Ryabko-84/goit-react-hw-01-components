import styled from '@emotion/styled';

export const TableOfTransactionHistory = styled.table`
  width: 724px;
  border-radius: 4px;
  box-shadow: 1px 3px 3px #00002030, -1px 3px 3px #00003030;
`;

export const TableHead = styled.thead`
  height: 40px;
  font-size: 12px;
  text-transform: uppercase;
  color: #fff;
  background-color: #00bcd5;
`;

export const TableHeadRow = styled.tr``;

export const TableHeadCell = styled.th`
  width: calc(100% / 3);
  :first-of-type {
    text-align: left;
    padding-left: 90px;
  }
`;

export const TableBody = styled.tbody``;

export const TableRow = styled.tr`
  height: 40px;
  background-color: #eeeeee30;
  :nth-of-type(2n + 1) {
    background-color: #fff;
  }
`;

export const TableCell = styled.td`
  font-size: 14px;
  text-transform: capitalize;
  color: #00000090;
  :first-of-type {
    padding-left: 90px;
  }
  :not(:first-of-type) {
    text-align: right;
    padding-right: 100px;
  }
  :last-of-type {
    text-align: center;
    padding: 0;
  }
`;
