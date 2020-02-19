import { Component, OnInit } from '@angular/core';
import { GradeService } from 'src/app/services/grades.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss']
})
export class AllComponent implements OnInit {

  constructor(private gradeService: GradeService, private router: Router) {
  }

  async ngOnInit() {
    await this.gradeService.load();
  }

  getGradesBySubject(subject: string){ 
    return this.gradeService.getGradesBySubject(subject);
  }

  getGradeClass(value: number){
    if(value >= 5.5) return  "btn green-grade-bg-color text-white margin-right: 10px";
    if(value < 3) return  "btn red-grade-bg-color text-white";
    return "btn eduman-secbg-color text-white"
  }

  get subjects(){
    
    return this.gradeService.subjects;
  }

}
