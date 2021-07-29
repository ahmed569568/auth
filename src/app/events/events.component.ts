import { Component, Input, OnInit } from '@angular/core';
import { EventsService } from '../services/events.service'
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  // @Input() events = []
  constructor(private eventsService: EventsService) { }

  ngOnInit(): void {

  }

}
