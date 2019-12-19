import { Component, OnInit, Input } from '@angular/core';
import { Editor } from '../models/editor';
import { EditorService } from '../service/editor-service.service';
import { Statistic } from '../models/statistic';
import { DateRange } from '../models/date-range';
import { HttpService } from '../service/http.service';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.css']
})
export class StatisticComponent implements OnInit {

  maxVisit = 1000000000;
  editors: Editor[];
  selectedEditor: Editor;
  data: Statistic[] = [];
  @Input()
  fromDate: Date;
  @Input()
  toDate: Date;
  msgs = [];

  constructor(private editorService: EditorService, private httpService: HttpService) {
    this.initDataSubscription();
  }

  initDataSubscription(): void {
    this.editors = this.editorService.getEditors();
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

  aggregateByEditor() {
    this.httpService.aggregateByEditor(this.selectedEditor.name)
    .subscribe(
      data => {
        console.log(data);
      }
    );
  }

  ngOnInit() {
  }

}
