import {Component, OnInit, ViewChild} from '@angular/core';
import {CalendarComponent} from 'ng-fullcalendar';
import {Options} from 'fullcalendar';
import {EventService} from '../event.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar-page.component.html',
  styleUrls: ['./calendar-page.component.css']
})
export class CalendarPageComponent implements OnInit {

  calendarOptions: Options;

  events;

  constructor(private eventService: EventService) {
  }

  @ViewChild(CalendarComponent) ucCalendar: CalendarComponent;

  ngOnInit() {
    this.eventService.getEvents().subscribe(events => {
      this.calendarOptions = {
        editable: true,
        eventLimit: false,
        header: {
          left: 'prev,next today',
          center: 'title',
          right: 'month,agendaWeek,agendaDay,listMonth'
        },
        selectable: true,
        events: events
      };
    });
  }

  clearEvents() {
    this.events = [];
  }

  loadEvents() {
    this.eventService.getEvents().subscribe(data => {
      this.events = data;
    });
  }

}
