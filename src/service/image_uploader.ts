import { ImageUploader } from 'common/interfaces';

class ImageUploaderImpl implements ImageUploader {
  async upload() {
    return 'file';
  }
}

export default ImageUploaderImpl;
