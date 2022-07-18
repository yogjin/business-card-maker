import { ImageUploader } from 'common/interfaces';
import React from 'react';
import { FC } from 'react';

interface ImageFileInputButtonProps {
  imageUploader: ImageUploader;
}

const ImageFileInputButton: FC<ImageFileInputButtonProps> = () => {
  return <button>Image</button>;
};

export default ImageFileInputButton;
