import { Component, OnInit } from '@angular/core';
import { AbsenceService } from 'src/app/services/abences.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss']
})
export class AllComponent implements OnInit {

  constructor(private absenceService: AbsenceService) { }

  ngOnInit() {
    this.absenceService.load();
  }

  get absences(){ 
    return this.absenceService.absences;
  }

}
