import { Injectable } from '@nestjs/common';
import { Contact } from 'entities';
import { RepositoryService } from '@nestjsx/crud/typeorm';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ContactService extends RepositoryService<Contact> {
  constructor(@InjectRepository(Contact) repo) {
    super(repo);
  }

  async createOrUpdate(contact: Contact): Promise<Contact> {
    let contactRes: Contact;
    try {
      contactRes = await this.getOne(contact.id);
      if (contactRes && contactRes.id) {
        contactRes = await this.updateOne(contactRes.id, contact);
      } else {
        contactRes = await this.createOne(contact);
      }
    } catch (error) {
      contactRes = await this.createOne(contact);
    }
    return contactRes;
  }
}
