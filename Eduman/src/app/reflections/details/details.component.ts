import { Component, OnInit } from '@angular/core';
import { ReflectionsService } from 'src/app/services/reflections.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  constructor(private reflectionsService: ReflectionsService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {   

  }

  get reflection(){     
    return this.reflectionsService.getDetails(this.activatedRoute.snapshot.params.id);
  }

}
