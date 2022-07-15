import { Card } from 'common/interfaces';
import ImageFileInputButton from 'component/ImageFileInputButton/ImageFileInputButton';
import React from 'react';
import { FC } from 'react';
import styled from 'styled-components';

interface Card_edit_formProps {
  card: Card;
}

const Card_edit_form: FC<Card_edit_formProps> = ({ card }) => {
  const { name, company, theme, title, email, message } = card;
  return (
    <Form>
      <Input type="text" name="name" value={name} />
      <Input type="text" name="company" value={company} />
      <select name="theme">
        <option value={theme}>light</option>
        <option value={theme}>dark</option>
        <option value={theme}>colorful</option>
      </select>
      <Input type="text" name="title" value={title} />
      <Input type="text" name="email" value={email} />
      <Textarea name="message" value={message}></Textarea>
      <ImageFileInputButton />
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  margin: 0.5em 3em;
  padding: 1em;
`;

const Input = styled.input`
  flex: 1 1 30%;
  font-size: 1rem;
  padding: 0.2em;
`;

const Textarea = styled.textarea`
  flex-basis: 100%;
  font-size: 1rem;
  padding: 0.2em;
`;
export default Card_edit_form;
