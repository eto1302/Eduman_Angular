import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/events.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  constructor(private eventService: EventService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {   

  }

  get event(){ 
    
    return this.eventService.getDetails(this.activatedRoute.snapshot.params.id);
  }

}
