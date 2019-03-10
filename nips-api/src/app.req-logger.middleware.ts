import {
  Injectable,
  NestMiddleware,
  MiddlewareFunction,
  Logger,
} from '@nestjs/common';

@Injectable()
export class AppReqLoggerMiddleware implements NestMiddleware {
  resolve(...args: any[]): MiddlewareFunction {
    return (req, res, next) => {
      //console.log(req);
      let { body, url, params, query } = req;

      Logger.log(
        `${Date.now()} : API::Request >> {${JSON.stringify({
          body,
          url,
          params,
          query,
        })}}`,
      );
      next();
    };
  }
}
