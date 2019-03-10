import {
  ExecutionContext,
  Injectable,
  NestInterceptor,
  Logger,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { IRestResponse } from 'models/interfaces';

/* @Injectable()
export class ResponseInterceptor2 implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    call$: Observable<any>,
  ): Observable<any> {
    return call$.pipe(map(data => ({ data })));
  }
} */

@Injectable()
export class ResponseInterceptor<T>
  implements NestInterceptor<T, IRestResponse<T>> {
  intercept(
    context: ExecutionContext,
    call$: Observable<T>,
  ): Observable<IRestResponse<T>> {
    const now = Date.now();
    return call$.pipe(
      map(data => ({ data, error: undefined })),
      tap(data =>
        Logger.log(`${Date.now() - now}ms : API::Response >> {${data}}`),
      ),
    );
  }
}
