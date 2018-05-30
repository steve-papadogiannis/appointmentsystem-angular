import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Role} from './role';
import {environment} from '../environments/environment';
import { catchError, map, tap } from 'rxjs/operators';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {User} from './user';

@Injectable()
export class RoleService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Role[]>(environment.apiUrl + 'roles')
      .pipe(
        tap(roles => {
          console.log('Fetched roles:');
          roles.forEach(console.log);
        }),
        catchError(this.handleError('getAll', []))
      );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  saveRole(role: Role, user: User) {
    return this.http.post<string>(environment.apiUrl + 'roles', {'roleId': role.id, 'userId': user.id})
      .pipe(
        tap(status =>
          console.log(`Pesistence status of association between user with id ${user.id} and role with id ${role.id} --> ${status}`)),
        catchError(this.handleError('saveRole', ''))
      );
  }
}
