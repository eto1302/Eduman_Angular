import { Component, OnInit } from '@angular/core';
import { ReflectionsService } from 'src/app/services/reflections.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-criticisms',
  templateUrl: './all-criticisms.component.html',
  styleUrls: ['./all-criticisms.component.scss']
})
export class AllCriticismsComponent implements OnInit {

  constructor(private reflectionsService: ReflectionsService, private router: Router) { }

  ngOnInit() {
    this.reflectionsService.load();
  }

  get criticisms(){ 
    return this.reflectionsService.loadCriticisms();
  } 

}
