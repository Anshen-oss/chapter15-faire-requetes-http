import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

 export class ReqInterceptor implements HttpInterceptor {
     intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
         console.log(req);
         const reqClone = req.clone({ headers: req.headers.append('auth', 'notreTokenAutorisation')});
         return next.handle(reqClone);
     }

 }



  