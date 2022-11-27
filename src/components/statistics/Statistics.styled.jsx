import styled from '@emotion/styled';

export const StatSection = styled.section`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 4px;
`;

export const Title = styled.h2`
  padding: 16px 0;
  font-size: 20px;
  text-transform: uppercase;
  color: #000000a0;
`;

export const StatList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 86px;
  height: 78px;
  color: #fff;
  background-color: ${props => props.backgroundColor};
  text-shadow: 1px 1px 4px #00000040;
  :first-of-type {
    border-radius: 0 0 0 4px;
  }
  :last-of-type {
    border-radius: 0 0 4px 0;
  }
`;

export const Label = styled.span`
  margin-bottom: 8px;
`;

export const Percentage = styled.span`
  font-size: 22px;
`;
