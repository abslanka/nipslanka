import { Controller } from '@nestjs/common';
import { Contact } from 'entities';
import { ContactService } from './contact.service';
import { CrudController, Crud, RestfulOptions } from '@nestjsx/crud';
import { ContactDto } from 'models/dto';

@Crud(ContactDto)
@Controller('/contact')
export class ContactController
  implements CrudController<ContactService, Contact> {
  paramsFilter = [];

  options: RestfulOptions = {
    join: {
      //users: {},
    },
    sort: [{ field: 'name', order: 'ASC' }],
    maxLimit: 10,
    cache: 3000,
  };

  constructor(public service: ContactService) {}
}
