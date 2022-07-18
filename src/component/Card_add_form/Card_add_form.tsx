import { Card, CloudinaryFile } from 'common/interfaces';
import Button from 'component/Button/Button';
import React, { useRef, useState } from 'react';
import { FC } from 'react';
import styled from 'styled-components';

interface Card_add_formProps {
  addCard: Function;
  FileInput: Function;
}

const Card_add_form: FC<Card_add_formProps> = ({ addCard, FileInput }) => {
  const formRef = useRef<HTMLFormElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const companyRef = useRef<HTMLInputElement>(null);
  const themeRef = useRef<HTMLSelectElement>(null);
  const titleRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const [file, setFile] = useState<CloudinaryFile>({
    original_filename: undefined,
    secure_url: undefined,
  });

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
      filename: file.original_filename,
      url: file.secure_url,
    };
    formRef.current?.reset();
    addCard(newCard);
  };

  const handleCardWhenFileChange = (uploaded: CloudinaryFile) => {
    const original_filename = uploaded.original_filename;
    const secure_url = uploaded.secure_url;
    setFile({
      original_filename,
      secure_url,
    });
  };

  return (
    <Form ref={formRef}>
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
      <ButtonDiv>
        <FileInput
          name={file.original_filename}
          handleCardWhenFileChange={handleCardWhenFileChange}
        />
        <Button name="Add" handleClick={handleAdd} />
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
export default Card_add_form;
