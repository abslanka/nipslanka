import { Entity, Column } from 'typeorm';

// TODO: https://github.com/nicolaspearson/salespal/blob/master/backend/src/controllers/StockImageController.ts
// TODO: https://github.com/mkatrenik/assignar
// TODO: https://steemit.com/utopian-io/@morningtundra/storing-and-retreiving-images-in-mongodb-with-nodejs

import { BaseNamedEntity } from '.';
import { IImageFile } from 'models/interfaces';

@Entity({ name: 'image-file' })
export class ImageFile extends BaseNamedEntity implements IImageFile {
  @Column({ nullable: true })
  url?: string;

  // @Column({ name: 'image', type: 'binary' })
  // image: any; // Buffer;

  // @Column()
  // type: ImageType;

  // contentType?
  // size?
}

/* export enum ImageType {
  Logo,
  Profile,
  Icon,
  Avatar,
} */
