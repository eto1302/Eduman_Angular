import { Component, OnInit } from '@angular/core';
import { FeeService } from 'src/app/services/fees.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss']
})
export class AllComponent implements OnInit {

  constructor(private feeService: FeeService, private router: Router) { }

  ngOnInit() {
    this.feeService.load();
  }

  get fees(){ 
    return this.feeService.fees;
  }  

}
