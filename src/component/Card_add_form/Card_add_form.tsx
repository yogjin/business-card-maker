import { Card } from 'common/interfaces';
import Button from 'component/Button/Button';
import ImageFileInputButton from 'component/ImageFileInputButton/ImageFileInputButton';
import React, { useRef } from 'react';
import { FC } from 'react';
import styled from 'styled-components';

interface Card_add_formProps {
  addCard: Function;
}

const Card_add_form: FC<Card_add_formProps> = ({ addCard }) => {
  const nameRef = useRef<HTMLInputElement>(null);
  const companyRef = useRef<HTMLInputElement>(null);
  const themeRef = useRef<HTMLSelectElement>(null);
  const titleRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const handleAdd = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const newCard: Card = {
      id: new Date().toString(),
      name: nameRef.current?.value || '',
      company: companyRef.current?.value || '',
      theme: themeRef.current?.value as Card['theme'],
      title: titleRef.current?.value || '',
      email: emailRef.current?.value || '',
      message: messageRef.current?.value || '',
    };

    addCard(newCard);
  };

  return (
    <Form>
      <Input type="text" name="name" placeholder="name" ref={nameRef} />
      <Input
        type="text"
        name="company"
        placeholder="company"
        ref={companyRef}
      />
      <select name="theme" ref={themeRef}>
        <option>light</option>
        <option>dark</option>
        <option>colorful</option>
      </select>
      <Input type="text" name="title" placeholder="title" ref={titleRef} />
      <Input type="text" name="email" placeholder="email" ref={emailRef} />
      <Textarea
        name="message"
        placeholder="message"
        ref={messageRef}
      ></Textarea>
      <ImageFileInputButton />
      <Button name="Add" handleClick={handleAdd} />
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
export default Card_add_form;
