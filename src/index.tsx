import React, { FC } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ImageUploader from 'service/image_uploader';
import ImageFileInput from 'component/ImageFileInput/ImageFileInput';

const imageUploader = new ImageUploader();
interface FileInputProps {}
const FileInput: FC<FileInputProps> = (props) => (
  <ImageFileInput {...props} imageUploader={imageUploader} />
);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App FileInput={FileInput} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
