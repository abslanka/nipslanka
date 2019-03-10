import { Global, DynamicModule, Module } from '@nestjs/common';
import { AppConfigModule } from 'config';

import { ConfigService } from 'nestjs-config';
import { TypeOrmModule } from '@nestjs/typeorm';

/**
 * The database module is used for database
 * related services.
 */
@Global()
@Module({
  imports: [],
})
export class DbModule {
  public static forRoot(): DynamicModule {
    return {
      module: DbModule,
      imports: [
        AppConfigModule.forRoot(),
        TypeOrmModule.forRootAsync({
          useFactory: async (config: ConfigService) => config.get('db.config'),
          inject: [ConfigService],
        }),
      ],
      //providers: [DatabaseService],
      //exports: [TypeOrmModule],
    };
  }

  public static forEntity(
    entities: Function[] = [],
    connection: string = 'default',
  ): DynamicModule {
    return {
      module: DbModule,
      imports: [
        AppConfigModule,
        TypeOrmModule.forFeature(entities, connection),
      ],
    };
  }
}
