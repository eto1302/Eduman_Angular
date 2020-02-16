import { Component, OnInit } from '@angular/core';
import { GradeService } from 'src/app/services/grades.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  constructor(private gradeService: GradeService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {   

  }

  get grade(){     
    return this.gradeService.getDetails(this.activatedRoute.snapshot.params.id);
  }

}
