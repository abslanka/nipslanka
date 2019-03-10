import {
  Controller,
  Post,
  FileInterceptor,
  UseInterceptors,
  UploadedFile,
  Logger,
} from '@nestjs/common';
import { ImageFile } from 'entities';
import { ImageFileService } from './image-file.service';
import { CrudController, Crud, RestfulOptions } from '@nestjsx/crud';
import { ImageFileDto } from 'models/dto';

@Crud(ImageFileDto)
@Controller('/image-file')
export class ImageFileController
  implements CrudController<ImageFileService, ImageFile> {
  paramsFilter = [];

  options: RestfulOptions = {
    join: {
      //users: {},
    },
    sort: [{ field: 'name', order: 'ASC' }],
    maxLimit: 10,
    cache: 3000,
  };

  constructor(public service: ImageFileService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(@UploadedFile() file) {
    Logger.log('image file upload when received ... ');
    console.log(file);
    Logger.log('image file upload after handling ... ');
  }
}

/*  
  
import * as multer from 'multer';
import * as AWS from 'aws-sdk';
import * as multerS3 from 'multer-s3';

const AWS_S3_BUCKET_NAME = 'blah';
const s3 = new AWS.S3();
AWS.config.update({
  accessKeyId: 'blah',
  secretAccessKey: 'blah',
});

  
  ----

  @Post(':id/uploadImage')
  @UseInterceptors(FileInterceptor('file'))
  public uploadImage(@Param() params: any, @UploadedFile() file: any): Promise<Property> {
    return this.uploadImage(file, 'user/'+params.id);
  } 
  
  
  public uploadImage(file: any, urlKey: string): Promise<string> {
  const params = {
    Body: file.buffer,
    Bucket: this.AWS_S3_BUCKET_NAME,
    Key: urlKey
  };

  return this.s3
    .putObject(params)
    .promise()
    .then(
      data => {
        return urlKey;
      },
      err => {
        return err;
      }
    );
}

*/

/*
i.e. 2

  @Post('video')
  @UseInterceptors(
    FileInterceptor('video', {
      limits: {
        files: 1,
        fileSize: 5 * 10 * 10 * 10 * 10 * 10 * 10 * 10 // 50 mb in bytes
      },
      storage: diskStorage({
        destination: (req, file, cb) => cb(null, resolve('.', 'public', 'uploads')),
        filename: (req, file, cb) => cb(null, `${v4().replace(/-/g, '')}.${extension(file.mimetype)}`)
      }),
      fileFilter: (req: Request, file, cb) => {
        const ext = extension(file.mimetype);
        if (ext !== 'mp4') {
          return cb(new Error('Extension not allowed'), false); // FileIntercepter is completely ignoring this.
        }
        return cb(null, true);
      }
    })
  )
  async uploadVideo(@UploadedFile() video: Express.Multer.File) {
    console.log('video', video);
    return { message: 'OK' };
  }

*/

/**
 * 
 
 const s = multer.diskStorage({
    destination: /some/path,
    filename(req, file, cb) {
        cb(null, uuidv4());
    },
});

const ff = function fileFilter(req, file, cb) {
    const validator = new Validator();
    if (!validator.isEnum(file.mimetype, globals.FiletypeEnum)) {
        req.fileValidationError = 'unsupported mime type';
        cb(null, false);
    } else {
        cb(null, true);
    }
};

export const multerOptions = {
    storage: s,
    fileFilter: ff,
    limits: {fileSize: 1024*1024},
};



 @ApiOperation({title: 'upload a file (role: write)'})
    @Post('upload')
    @RequiredRoles('write')
    @UseInterceptors(FileInterceptor('file', multerOptions))
    async upload(@Req() req, @UploadedFile() file) {
        if (req.fileValidationError) {
            throw new BadRequestException(req.fileValidationError);
        }
        if (!file) {
            throw new BadRequestException('invalid file');
        }
        return {message: 'file has been uploaded', filename: file.filename};
    }


    
 */
