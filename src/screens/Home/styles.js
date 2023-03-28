import styled from 'styled-components/native';
import db from '../../../db.json';

export const PrimaryText = styled.Text`
  font-size: 28px;
  color: ${db.theme.colors.primary};
`;

export const Container = styled.SafeAreaView`
  background-color: ${db.theme.colors.mainBg};
  flex: 1;
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

export const TitleText = styled.Text`
  color: tomato;
  font-size: 28px;
  margin-left: 20px;
  margin-top: 20px;
  font-weight: 800;
`;

export const SubtitleText = styled.Text`
  color: gray;
  font-size: 18px;
  margin-bottom: 20px;
  margin-left: 20px;
  font-weight: 700;
`;
