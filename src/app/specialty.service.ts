import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
import {catchError, tap} from 'rxjs/operators';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {User} from './user';
import {Specialty} from './specialty';

@Injectable()
export class SpecialtyService {

  constructor(private http: HttpClient) {
  }

  getAll() {
    return this.http.get<Specialty[]>(environment.apiUrl + 'specialties')
      .pipe(
        tap(specialties => {
          console.log('Fetched specialties:');
          specialties.forEach(console.log);
        }),
        catchError(this.handleError('getHeroes', []))
      );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  saveRole(specialty: Specialty, user: User) {
    return this.http.post<string>(environment.apiUrl + 'specialties', {'specialtyId': specialty.id, 'userId': user.id})
      .pipe(
        tap(status => console.log(status)),
        catchError(this.handleError('saveRole', ''))
      );
  }
}
