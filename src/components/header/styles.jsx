import styled from 'styled-components';

export const StylesHeader = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 12px 104px;
  align-items: center;
`;

export const Logo = styled.h1`
  color: ${(props) => props.theme.blue[500]};
  font-family: Montserrat;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const Menu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 24px;
`;
