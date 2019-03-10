import { Module, MulterModule } from '@nestjs/common';
import { ImageFileController } from './image-file.controller';
import { ImageFileService } from './image-file.service';

@Module({
  imports: [
    MulterModule.register({
      dest: '/image-file/uploads',
    }),
  ],
  controllers: [ImageFileController],
  providers: [ImageFileService],
  exports: [ImageFileService],
})
export class ImageFileModule {}
