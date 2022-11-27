import styled from '@emotion/styled';

export const ListOfFriends = styled.ul``;

export const Item = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  padding: 14px 0;
  width: 274px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 1px 3px 3px #00002030, -1px 3px 3px #00003030;
`;

export const Status = styled.span`
  margin: 0 12px;
  width: 16px;
  height: 16px;
  background-color: ${props => (props.isOnline ? '#51ae50' : '#ff524d')};
  border-radius: 50%;
`;

export const Avatar = styled.img`
  margin: 0 6px;
`;

export const Name = styled.p`
  margin: 0 12px;
  font-size: 24px;
  font-weight: 500;
`;
