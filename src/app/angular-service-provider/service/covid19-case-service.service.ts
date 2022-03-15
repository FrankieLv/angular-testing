import { Injectable } from '@angular/core';
import { Covid19Case } from '../model/covid19.case.model';

@Injectable()
export class Covid19CaseServiceService {

    //Dummy Data
    private data: Covid19Case[];
    constructor() { 
      this.data = new Array<Covid19Case>(
        new Covid19Case(3496205, 0, 5520, "Australia"),
        new Covid19Case(3496205, 0, 7636, "Australia"),
        new Covid19Case(3496205, 0, 7636, "Australia"),
        new Covid19Case(3496205, 0, 7636, "Australia"),
        new Covid19Case(3496205, 0, 7636, "Australia"),
        new Covid19Case(3496205, 0, 7636, "Australia"),
        new Covid19Case(3496205, 0, 7636, "Australia"),
        new Covid19Case(3496205, 0, 7636, "Australia"),
        new Covid19Case(3496205, 0, 7636, "Australia"),
        new Covid19Case(3496205, 0, 7636, "Australia"))
    }

    getCovid19Cases(): Covid19Case[] {
      return this.data;
    }
}
