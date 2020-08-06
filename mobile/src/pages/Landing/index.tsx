import React from 'react';
import { useNavigation } from '@react-navigation/native';

import landingImg from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png';
import giveClassesIcon from '../../assets/images/icons/give-classes.png';
import heartIcon from '../../assets/images/icons/heart.png';

import {
  Container,
  Banner,
  Title,
  TitleBold,
  ButtonsContainer,
  Button,
  ButtonText,
  TotalConnections,
  Image
} from './styles';


function Landing() {
  const { navigate } = useNavigation();

  function handleNavigateToGiveClassesPage() {
    navigate('GiveClasses');
  }

  function handleNavigateToStudyPages() {
    navigate('Study');
  }

  return (
    <Container>
      <Banner source={landingImg} />
      <Title>
        Seja bem-vindo, {'\n'}
        <TitleBold>
          O que deseja fazer?
          </TitleBold>
      </Title>
      <ButtonsContainer>
        <Button
          onPress={handleNavigateToStudyPages}
          style={{ backgroundColor: '#9871f5' }}
        >
          <Image source={studyIcon} />
          <ButtonText>Estudar</ButtonText>
        </Button>
        <Button
          onPress={handleNavigateToGiveClassesPage}
          style={{ backgroundColor: '#04d361' }}
        >
          <Image source={giveClassesIcon} />
          <ButtonText>Dar aulas</ButtonText>
        </Button>
      </ButtonsContainer>
      <TotalConnections>
        Total de 420 conexoes ja realizadas {' '}
        <Image source={heartIcon} />
      </TotalConnections>
    </Container>
  );
}

export default Landing;