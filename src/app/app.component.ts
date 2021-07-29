import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { EventsService } from '../../src/app/services/events.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  events = []
  title = 'ngApp';
  constructor(public _authService: AuthService, private eventsService: EventsService) {
    // this.getEvents()
  }

  // getEvents() {
  //   this.eventsService.getEvents().subscribe(res => {
  //     this.events = res
  //     console.log(this.events);

  //   })
  // }

}
