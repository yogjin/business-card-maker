import { CloudinaryFile, ImageUploader } from 'common/interfaces';
import React, {
  ChangeEvent,
  ChangeEventHandler,
  MouseEvent,
  useRef,
  useState,
} from 'react';
import { FC } from 'react';
import styled, { css, keyframes } from 'styled-components';

interface ButtonProps {
  isLoading: Boolean;
  hasFile: Boolean;
}

interface ImageFileInputProps {
  imageUploader: ImageUploader;
  name?: string;
  handleCardWhenFileChange: (file: CloudinaryFile) => void;
}

const ImageFileInput: FC<ImageFileInputProps> = ({
  imageUploader,
  name,
  handleCardWhenFileChange,
}) => {
  const [isLoading, setIsLoading] = useState<Boolean>(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const handleButtonClick = (e: MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    inputRef.current?.click();
  };

  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    setIsLoading((isLoading) => !isLoading);
    const uploaded: CloudinaryFile = await imageUploader.upload(
      e.target.files[0]
    );

    handleCardWhenFileChange(uploaded);
    setIsLoading((isLoading) => !isLoading);
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
      <Button
        onClick={handleButtonClick}
        isLoading={isLoading}
        hasFile={name ? true : false}
      >
        {name || 'No file'}
      </Button>
    </Container>
  );
};

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
`;
const Input = styled.input`
  display: none;
`;
const Button = styled.button<ButtonProps>`
  ${({ isLoading, hasFile }) =>
    !isLoading
      ? hasFile
        ? css`
            width: 100%;
            height: 100%;
            border: none;
            background-color: pink;
            cursor: pointer;
            &:hover {
              opacity: 0.9;
            }
          `
        : css`
            width: 100%;
            height: 100%;
            border: none;
            background-color: lightgrey;
            cursor: pointer;
            &:hover {
              opacity: 0.9;
            }
          `
      : css`
          font-size: 0;
          width: 1.5rem;
          height: 1.5rem;
          border: 3px solid lightgray;
          border-top: 3px solid black;
          border-radius: 50%;
          background-color: transparent;
          animation: ${spin} 2s linear infinite;
          pointer-events: none;
        `}
`;
export default ImageFileInput;
