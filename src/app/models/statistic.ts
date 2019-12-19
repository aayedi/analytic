import { NumberSymbol } from '@angular/common';
const monthNames = ["Janvier", "Février", "Mars", "Avril", "May", "Juin",
  "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Decembre"
];
export class Statistic {
  key: string;
  year: number;
  month: number;
  pages: number;
  visits: NumberSymbol;
  editorName: string;
  media: string;
  monthName: string;

  constructor(year: number, month: number, pages: number, visits: number) {
    this.key = month + '/' + year;
    this.year = year;
    this.month = month;
    this.pages = pages;
    this.visits = visits;
    this.monthName = monthNames[month-1];
  }
}
