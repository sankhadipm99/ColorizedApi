import { IColor } from './interfaces/icolor';
import { ColorService } from './services/color.service';
import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataresolveResolver implements Resolve<IColor[]> {
  constructor(private colorService: ColorService){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IColor[]> {
    return this.colorService.getRandomColor<IColor[]>(5);
  }
}
