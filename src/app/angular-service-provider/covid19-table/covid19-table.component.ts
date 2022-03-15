import { Component, OnInit } from '@angular/core';
import { Covid19Case } from '../model/covid19.case.model';
import { Covid19CaseServiceService } from '../service/covid19-case-service.service';

@Component({
  selector: 'app-covid19-table',
  templateUrl: './covid19-table.component.html',
  styleUrls: ['./covid19-table.component.css']
})
export class Covid19TableComponent implements OnInit {

  // private data: Covid19Case[];
  // constructor() { 
  //   this.data = new Array<Covid19Case>(
  //     new Covid19Case(175525, 0, 7636, "Afghanistan"),
  //     new Covid19Case(175525, 0, 7636, "Afghanistan"),
  //     new Covid19Case(175525, 0, 7636, "Afghanistan"),
  //     new Covid19Case(175525, 0, 7636, "Afghanistan"),
  //     new Covid19Case(175525, 0, 7636, "Afghanistan"),
  //     new Covid19Case(175525, 0, 7636, "Afghanistan"),
  //     new Covid19Case(175525, 0, 7636, "Afghanistan"),
  //     new Covid19Case(175525, 0, 7636, "Afghanistan"),
  //     new Covid19Case(175525, 0, 7636, "Afghanistan"),
  //     new Covid19Case(175525, 0, 7636, "Afghanistan"))
  // }

  // getCovid19Cases(): Covid19Case[] {
  //   return this.data;
  // }

  constructor(private covid19CaseServiceService: Covid19CaseServiceService) { 
  }

  getCovid19Cases(): Covid19Case[] {
    return this.covid19CaseServiceService.getCovid19Cases();
  }

  ngOnInit(): void {
  }

}
