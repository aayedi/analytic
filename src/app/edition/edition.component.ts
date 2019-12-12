import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { DateRange } from '../models/date-range';
import { Editor } from '../models/editor';
import { EditorService } from '../service/editor-service.service';
import { EditorSelectorItem } from '../models/editor-selector';
import { Statistic } from '../models/statistic';

@Component({
  selector: 'app-edition',
  templateUrl: './edition.component.html',
  styleUrls: ['./edition.component.css']
})
export class EditionComponent implements OnInit {

  maxVisit = 1000000000;
  selectorEditors: EditorSelectorItem[];
  selectedEditor: Editor;
  editors: Editor[];
  data: Statistic[] = [];

  @Input()
  fromDate: Date;
  @Input()
  toDate: Date;
  msgs = [];

  constructor(private editorService: EditorService) {
    this.initDataSubscription();
  }

  ngOnInit() {

  }

  initDataSubscription(): void {
    this.editors = this.editorService.getEditors();
    this.selectorEditors = this.editorService.getSelectorEditors();
  }

  applyFilter() {
    if (this.fromDate && this.toDate && this.fromDate.getTime() > this.toDate.getTime()) {
      this.msgs.push({severity: 'error', summary: 'Error Message', detail: 'Validation failed'});
    } else {
      this.data = this.editorService.fetchData(this.selectedEditor, new DateRange(this.fromDate, this.toDate));
    }
  }

  initStatistics() {
    this.data = [];
  }

  getAverage() {
    let average = 0;
    for (const stat of this.data) {
      average += stat.pages;
    }
    return Math.trunc(average / this.data.length);
  }

}
