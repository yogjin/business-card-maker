import { ImageUploader } from 'common/interfaces';

class ImageUploaderImpl implements ImageUploader {
  private url = process.env.REACT_APP_CLOUDINARY_URL;
  async upload(file: File) {
    const formData = new FormData();

    formData.append('file', file);
    formData.append('upload_preset', 'business-card-profile');

    return fetch(this.url!, {
      method: 'POST',
      body: formData,
    })
      .then((response) => {
        return response.json();
      })
      .catch(console.error);
  }
}

export default ImageUploaderImpl;
