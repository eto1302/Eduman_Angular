import { Component, OnInit } from '@angular/core';
import { GradeService } from 'src/app/services/grades.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss']
})
export class AllComponent implements OnInit {

  constructor(private gradeService: GradeService, private router: Router) { }

  ngOnInit() {
    this.gradeService.load();
  }

  get grades(){ 
    return this.gradeService.grades;
  }  

}
