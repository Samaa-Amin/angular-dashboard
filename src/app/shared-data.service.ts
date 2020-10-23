import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  employeeData=[
    {

    name:"sara",
    code:5,
    gender:"female",
    departement:'D1',
    checkEmployee:false,
    date:'Tue Oct 06 2020',

  },
  {

    name:"ahmed",
    code:12,
    gender:"male",
    departement:'D7',
    checkEmployee:false,
    date:'Tue Oct 06 2020',
  }
  ];

  constructor() { }
}
