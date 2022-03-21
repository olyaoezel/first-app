import { HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { tap } from "rxjs";

export class AuthInterceptorService implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        // if(req.url ===) forbides sending the request to the curtain urls
        // console.log('Request is on its way');
        const modifiedRequest = req.clone({headers: req.headers.append('Auth', 'pen')}); //url: 'some-new-url'
        return next.handle(modifiedRequest).pipe(tap(event => {
            // if (event.type === HttpEventType.Response) {
            //     console.log('REsponse arrived, body data: ');
            //     console.log(event.body);
            // }
        }));
    }
}