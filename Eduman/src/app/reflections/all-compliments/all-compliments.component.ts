import { Component, OnInit } from '@angular/core';
import { ReflectionsService } from 'src/app/services/reflections.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-compliments',
  templateUrl: './all-compliments.component.html',
  styleUrls: ['./all-compliments.component.scss']
})
export class AllComplimentsComponent implements OnInit {

  constructor(private reflectionsService: ReflectionsService, private router: Router) { }

  ngOnInit() {
    this.reflectionsService.load();
  }

  get compliments(){ 
    return this.reflectionsService.loadCompliments();
  }  

}
