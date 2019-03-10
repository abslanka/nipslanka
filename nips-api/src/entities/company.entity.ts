import { BaseNamedEntity, Contact } from './';
import { ICompany, IContact } from './../models/interfaces';
import {
  ManyToOne,
  JoinColumn,
  OneToMany,
  Entity,
  Column,
  OneToOne,
} from 'typeorm';
import { Type } from 'class-transformer';
import { Vacancy } from './vacancy.entity';
import { ImageFile } from './image-file.entity';

@Entity({ name: 'company' })
export class Company extends BaseNamedEntity implements ICompany {
  @Column({ nullable: true })
  profileDesc?: string;

  @Column({ nullable: true })
  websiteUrl?: string;

  // @Column({ nullable: true })
  // logoUrl?: string;

  @Type(() => ImageFile)
  @OneToOne(type => ImageFile, { eager: true, cascade: ['insert'] })
  //@OneToOne(type => UserProfile, p => p.user, { cascade: true })
  @JoinColumn({ name: 'image_file_id' })
  logoImage: ImageFile;

  @Type(() => Contact)
  @OneToOne(type => Contact, { eager: true, cascade: ['insert'] })
  //@OneToOne(type => UserProfile, p => p.user, { cascade: true })
  @JoinColumn({ name: 'contact_id' })
  contactPerson: Contact;
}
