import styled from 'styled-components/native';
import db from '../../../db.json';

export const PrimaryText = styled.Text`
  font-size: 20px;
  color: ${db.theme.colors.primary};
`;

export const PrimaryView = styled.View`
  background-color: ${db.theme.colors.mainBg};
  flex: 1;
`;
