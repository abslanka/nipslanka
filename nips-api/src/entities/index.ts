export * from './base/base.entity';
export * from './base/base-named.entity';
export * from './base/base-named-type.entity';

//import { Contact } from './reference/contact.entity';

import { Company } from './company.entity';
import { StatusType } from './status.entity';
import { Vacancy } from './vacancy.entity';
import { JobOrder } from './job-order.entity';
import { Contact } from './contact.entity';
import { ImageFile } from './image-file.entity';
import { JobPosition } from './job-position.entity';

export const entities = [
  Company,
  Contact,
  ImageFile,
  Vacancy,
  JobOrder,
  JobPosition,
  StatusType,

  //JobOrderVacancy,
];

//export const entities = Object.keys(entitiesObj).map(key => entitiesObj[key]);

export {
  Contact,
  ImageFile,
  Company,
  Vacancy,
  JobOrder,
  JobPosition,
  StatusType,
};
