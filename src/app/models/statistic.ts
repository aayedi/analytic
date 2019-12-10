import { NumberSymbol } from '@angular/common';
export class Statistic {
  key: string;
  year: number;
  month: number;
  pages: number;
  visits: NumberSymbol;
  editorName: string;
  media: string;

  constructor(year: number, month: number, pages: number, visits: number) {
    this.key = month + '/' + year;
    this.year = year;
    this.month = month;
    this.pages = pages;
    this.visits = visits;
  }
}
