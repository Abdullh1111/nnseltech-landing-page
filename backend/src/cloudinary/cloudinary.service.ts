import { Injectable, Inject } from '@nestjs/common';
import { v2 as Cloudinary, UploadApiResponse } from 'cloudinary';

@Injectable()
export class CloudinaryService {
  constructor(
    @Inject('CLOUDINARY') private readonly cloudinary: typeof Cloudinary,
  ) {}

  async uploadImage(file: Express.Multer.File): Promise<UploadApiResponse> {
    return new Promise((resolve, reject) => {
      this.cloudinary.uploader
        .upload_stream({ folder: 'uploads' }, (error, result) => {
          if (error) {
            console.log(error);
            reject(error);
          }
          resolve(result);
        })
        .end(file.buffer);
    });
  }
}
