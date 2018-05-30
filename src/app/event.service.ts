import { Injectable } from '@angular/core';
import {User} from './user';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
import {Event} from './event';

@Injectable()
export class EventService {

  constructor(private http: HttpClient) { }

  getEvents() {
    const user: User = <User> JSON.parse(localStorage.getItem('currentUser'));
    return this.http.get<any>(environment.apiUrl + `events/${user.id}`).map(this.transformEvent);
  }

  private transformEvent(events: Array<any>) {
    return events.map(event => new Event(event.description, event.startDateTime, event.endDateTime));
  }
}
