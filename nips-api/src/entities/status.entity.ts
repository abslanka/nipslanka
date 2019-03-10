import { Entity } from 'typeorm';

import { BaseNamedTypeEntity } from '.';
import { IStatusType } from 'models/interfaces';

@Entity({ name: 'status_type' })
export class StatusType extends BaseNamedTypeEntity implements IStatusType {
  // <!-- n-New, h-Halt, c-Cancel, p-pending, pf-part-filled, f-filled , r-Reject -->
  /*  constructor(cd: string, nm: string) {
    super(cd, nm);
  } */
}
