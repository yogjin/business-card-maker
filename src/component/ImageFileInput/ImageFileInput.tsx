import { ImageUploader } from 'common/interfaces';
import React, { ChangeEvent, MouseEvent, useRef } from 'react';
import { FC } from 'react';
import styled from 'styled-components';

interface ImageFileInputProps {
  imageUploader: ImageUploader;
  name?: string;
  // onFileChange?: Function;
}

const ImageFileInput: FC<ImageFileInputProps> = ({
  imageUploader,
  name,
  // onFileChange,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleButtonClick = (e: MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    inputRef.current?.click();
  };

  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const uploaded = await imageUploader.upload(e.target.files[0]);
  };
  return (
    <Container>
      <Input
        type="file"
        accept="image/*"
        name="file"
        ref={inputRef}
        onChange={handleFileChange}
      />
      <Button onClick={handleButtonClick}>{name || 'No file'}</Button>
    </Container>
  );
};

const Container = styled.div``;
const Input = styled.input`
  display: none;
`;
const Button = styled.button`
  width: 100%;
`;
export default ImageFileInput;
