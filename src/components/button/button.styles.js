import styled from 'styled-components';

export const StylesButton = styled.button`
  display: flex;
  padding: 12px 48px;
  align-items: center;
  border-radius: 8px;
  background: ${(props) => props.theme.blue[700]};
  box-shadow: 5px 6px 4px 0px rgba(0, 0, 0, 0.25);
  color: ${(props) => props.theme.white[50]};
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
