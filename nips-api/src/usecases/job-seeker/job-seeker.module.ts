import { Module } from '@nestjs/common';
import { JobListingController } from './job-listing/job-listing.controller';
import { JobListingService } from './job-listing/job-listing.service';
import { DbModule } from 'adapters/db/db.module';
import { entities } from 'entities';
import { CommonModule } from 'usecases/common/common.module';
//import { JobSearchController } from './job-search/job-search.controller';

@Module({
  imports: [DbModule.forEntity([...entities]), CommonModule],
  controllers: [JobListingController],
  providers: [JobListingService],
  exports: [JobListingService],
})
export class JobSeekerModule {}
