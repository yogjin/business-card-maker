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
interface MetaDataProps {
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
      <MetaData theme={theme}>
        <Data name>{name}</Data>
        <Data>{company}</Data>
        <Data>{title}</Data>
        <Data>{email}</Data>
        <Data>{message}</Data>
      </MetaData>
    </Container>
  );
};
const Container = styled.li<ContainerProps>`
  display: flex;
  border: 1px solid black;
  border-radius: 1rem;
  margin: 0.5em 3em;
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
  width: 100%;
  max-width: 35rem;
`;
const Image = styled.img`
  flex-basis: 15%;
  width: 10rem;
  padding-right: 1.5em;
  border-radius: 50%;
`;
const MetaData = styled.div<MetaDataProps>`
  display: flex;
  flex-basis: 85%;
  flex-direction: column;
  color: ${({ theme }) => (theme === 'dark' ? 'white' : 'black')};
`;
const Data = styled.span<DataProps>`
  font-size: ${(props) => (props.name ? '1.5rem' : '1rem')};
  text-align: left;
  &:nth-child(2)::after {
    content: '';
    display: block;
    width: 90%;
    height: 1px;
    background-color: red;
  }
`;
export default CardComponent;
