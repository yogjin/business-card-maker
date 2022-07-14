import { Card } from 'common/interfaces';
import React from 'react';
import { FC } from 'react';
import styled from 'styled-components';
import tempProfileImage from '../../images/default_logo.png';

interface CardProps {
  card: Card;
}

interface ContainerProps {
  theme: Card['theme'];
}
interface DataProps {
  name?: boolean;
}
const CardComponent: FC<CardProps> = ({ card }) => {
  const { name, company, theme, title, email, message } = card;
  return (
    <Container theme={theme}>
      <Image src={tempProfileImage}></Image>
      <MetaData>
        <Data name>{name}</Data>
        <Data>{company}</Data>
        <Divider />
        <Data>{title}</Data>
        <Data>{email}</Data>
        <Data>{message}</Data>
      </MetaData>
    </Container>
  );
};
const Container = styled.div<ContainerProps>`
  display: flex;
  border: 1px solid black;
  border-radius: 1rem;
  margin: 1em 3em;
  padding: 1em;
  background: ${(props) => {
    switch (props.theme) {
      case 'light':
        return 'white';
      case 'dark':
        return 'black';
      case 'colorful':
        return 'linear-gradient(45deg, Violet, Orange)';
    }
  }};
`;
const Image = styled.img`
  flex-basis: 15%;
  width: 12rem;
  padding-right: 1em;
  border-radius: 100%;
`;
const MetaData = styled.div`
  display: flex;
  flex-basis: 85%;
  flex-direction: column;
`;
const Data = styled.span<DataProps>`
  font-size: ${(props) => (props.name ? '1.5rem' : '1rem')};
  text-align: left;
`;
const Divider = styled.div`
  width: 95%;
  height: 1px;
  background-color: gray;
  margin: 0.3rem 0;
`;
export default CardComponent;
