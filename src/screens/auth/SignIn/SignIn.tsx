import React from 'react';
import {
  Container,
  Title,
  Description
} from './SignIn.styles';
import { ITextProps } from '@interfaces/InterfacesGlobal';
 
export const SignIn = ({ ...rest }: ITextProps) => {
  return (
    <Container>
      <Title {...rest} >
        Tela Sign In
      </Title>
      <Description>
        Faça o seu login para continuar.
      </Description>
    </Container>
  );
};