import { Component, OnInit } from '@angular/core';
import { FeeService } from 'src/app/services/fees.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  constructor(private feeService: FeeService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {   

  }

  get fee(){     
    return this.feeService.getDetails(this.activatedRoute.snapshot.params.id);
  }

}
