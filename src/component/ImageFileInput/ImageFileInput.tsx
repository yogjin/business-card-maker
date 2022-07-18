import { ImageUploader } from 'common/interfaces';
import React from 'react';
import { FC } from 'react';

interface ImageFileInputProps {
  imageUploader: ImageUploader;
}

const ImageFileInput: FC<ImageFileInputProps> = () => {
  return <button>Image</button>;
};

export default ImageFileInput;
