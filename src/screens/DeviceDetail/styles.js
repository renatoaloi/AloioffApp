import styled from 'styled-components/native';
import db from '../../../db.json';

export const PrimaryText = styled.Text`
  font-size: 20px;
  margin-left: 10px;
  margin-top: 4px;
  color: ${db.theme.colors.text};
`;

export const PrimaryTitle = styled.Text`
  font-size: 20px;
  margin-left: 10px;
  margin-top: 10px;
  color: ${db.theme.colors.success};
`;

export const PrimaryView = styled.View`
  background-color: ${db.theme.colors.mainBg};
  flex: 0.8;
`;

export const Container = styled.SafeAreaView`
  background-color: ${db.theme.colors.mainBg};
  flex: 1;
`;
