import { Card, CloudinaryFile } from 'common/interfaces';
import Button from 'component/Button/Button';
import React, { useState } from 'react';
import { FC } from 'react';
import styled from 'styled-components';

interface Card_edit_formProps {
  card: Card;
  deleteCard: Function;
  updateCard: Function;
  FileInput: Function;
}

const Card_edit_form: FC<Card_edit_formProps> = ({
  card,
  deleteCard,
  updateCard,
  FileInput,
}) => {
  const { id, name, company, theme, title, email, message, filename, url } =
    card;

  const handleDelete = (
    e: React.MouseEvent<HTMLButtonElement>,
    id: string
  ): void => {
    e.preventDefault();
    deleteCard(id);
  };

  const handleUpdate = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const property: string = e.target.name;
    const text: string = e.target.value;
    const updatedCard = { ...card, [property]: text };
    updateCard(updatedCard);
  };

  const handleCardWhenFileChange = (uploaded: CloudinaryFile) => {
    const original_filename = uploaded.original_filename;
    const secure_url = uploaded.secure_url;
    const updatedCard = {
      ...card,
      filename: original_filename,
      url: secure_url,
    };
    updateCard(updatedCard);
  };

  return (
    <Form>
      <Input type="text" name="name" value={name} onChange={handleUpdate} />
      <Input
        type="text"
        name="company"
        value={company}
        onChange={handleUpdate}
      />
      <select name="theme" value={theme} onChange={handleUpdate}>
        <option value={'light'}>light</option>
        <option value={'dark'}>dark</option>
        <option value={'colorful'}>colorful</option>
      </select>
      <Input type="text" name="title" value={title} onChange={handleUpdate} />
      <Input type="text" name="email" value={email} onChange={handleUpdate} />
      <Textarea
        name="message"
        value={message}
        onChange={handleUpdate}
      ></Textarea>
      <ButtonDiv>
        <FileInput
          name={filename}
          handleCardWhenFileChange={handleCardWhenFileChange}
        />
        <Button name="Delete" handleClick={(e) => handleDelete(e, id)} />
      </ButtonDiv>
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

const ButtonDiv = styled.div`
  display: flex;
  flex-basis: 100%;
  & > * {
    flex: 1;
  }
`;
export default Card_edit_form;
