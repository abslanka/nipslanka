import { Module } from '@nestjs/common';
import { ImageFileController } from './image-file/image-file.controller';
import { ImageFileService } from './image-file/image-file.service';

import { ImageFileModule } from './image-file/image-file.module';

import {
  ContactController,
  ContactService,
  JobPositionController,
  JobPositionService,
  StatusTypeController,
  StatusTypeService,
} from '.';

@Module({
  controllers: [
    ContactController,
    JobPositionController,
    StatusTypeController,
    ImageFileController,
  ],
  providers: [
    ContactService,
    JobPositionService,
    StatusTypeService,
    ImageFileService,
  ],
  exports: [
    ContactService,
    JobPositionService,
    StatusTypeService,
    //ImageFileService,
  ],
  imports: [ImageFileModule],
})
export class CommonModule {}
