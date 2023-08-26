import React from 'react';
import { ITextProps } from '@interfaces/InterfacesGlobal'

import {
  Container,
  Title,
  Description
} from './Home.styles';

export const Home = ({ description, title, ...rest }: ITextProps) => {
  return (
    <Container>
      <Title {...rest} >
        { title }
      </Title>
      <Description>
        { description }
      </Description>
    </Container>
  );
};