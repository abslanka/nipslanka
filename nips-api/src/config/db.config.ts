import { ConnectionString } from 'connection-string';
//import { Entities } from '../models/entities';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { CustomNamingStrategy } from './db.custom-naming.strategy';

const dbconf = new ConnectionString(process.env.DATABASE_URL || '');
const dbSchema = process.env.DATABASE_SCHEMA || 'public';
export default {
  type: dbconf.protocol as 'postgres',
  host: dbconf.hosts && dbconf.hosts[0].name,
  username: dbconf.user,
  password: dbconf.password,
  database: dbconf.path && dbconf.path[0],
  logging: true,
  synchronize: true,
  entities: ['../**/**.entity{.ts,.js}'],
  port: dbconf.hosts && dbconf.hosts[0].port,
  namingStrategy: new CustomNamingStrategy(),
  schema: dbSchema,
} as TypeOrmModuleOptions;
