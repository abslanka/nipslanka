import { Global, Module, DynamicModule } from '@nestjs/common';
import { ConfigService, ConfigModule } from 'nestjs-config';
import * as path from 'path';

@Global()
@Module({})
export class AppConfigModule {
  static forRoot(filePath?: string): DynamicModule {
    const NODE_ENV = process.env.NODE_ENV || 'development';
    let envPath = `env/${NODE_ENV}.env`;

    return {
      module: AppConfigModule,
      imports: [
        ConfigModule.load('./**/*.config.{ts,js}', {
          path: `${envPath}`,
        }),
      ],
      providers: [
        {
          provide: ConfigService,
          useValue: ConfigService.srcPath =
            filePath || path.resolve(__dirname, '../'),
        },
      ],
      exports: [ConfigService],
    };
  }
}
