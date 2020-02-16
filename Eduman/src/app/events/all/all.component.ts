import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/events.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss']
})
export class AllComponent implements OnInit {

  constructor(private eventService: EventService, private router: Router) { }

  ngOnInit() {
    this.eventService.load();
  }

  get events(){ 
    return this.eventService.events;
  }
}
