import styled from '@emotion/styled';

export const ProfileBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 282px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0px 5px 10px #00003030;
`;

export const Description = styled.div`
  text-align: center;
`;

export const Avatar = styled.img`
  margin: 30px 0;
  width: 112px;
  border: 2px solid #00000010;
  border-radius: 50%;
`;

export const Name = styled.p`
  font-size: 22px;
  font-weight: 500;
`;

export const Tag = styled.p`
  margin: 8px 0;
  font-weight: 500;
  color: #00003060;
`;

export const Location = styled.p`
  margin-bottom: 30px;
  font-weight: 500;
  color: #00003060;
`;

export const Stats = styled.ul`
  display: flex;
  width: 100%;
`;

export const Info = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: calc(100% / 3);
  height: 80px;
  background-color: #00004F0F;
  border: 1px solid #00000010;
  :first-of-type {
    border-radius: 0 0 0 4px;
  }
  :last-of-type {
    border-radius: 0 0 4px 0;
  }
`;

export const Label = styled.span`
  margin-bottom: 4px;
  color: #00003366;
  font-size: 14px;
  font-weight: 500;
`;

export const Quantity = styled.span`
  color: #000;
  font-weight: 700;
`;
