import styled from 'styled-components/native';
import db from '../../../db.json';

export const PrimaryText = styled.Text`
  font-size: 28px;
  color: ${db.theme.colors.primary};
`;

export const Container = styled.SafeAreaView`
  background-color: ${db.theme.colors.mainBg};
  flex: 1;
  flex-direction: column;
`;

export const H1 = styled.Text`
  align-items: center;
  font-size: 35px;
  color: #ffffff;
`;

export const Header = styled.View`
  justify-content: flex-end;
  margin: 50px auto 0 auto;
  padding-bottom: 50px;
`;

export const ListView = styled.View`
  flex: 0.85;
  margin-bottom: 60px;
  background-color: black;
`;

export const TextRegister = styled.Text`
  margin-top: 20px;
`;

export const TextItem = styled.Text`
  padding: 10px;
  height: 44px;
`;
