import { Component, OnInit } from '@angular/core';
import { Editor } from '../models/editor';
import { EditorService } from '../service/editor-service.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { JOBS_PERIODS } from '../static/jobs-periods';
import { JOBS_TYPES } from '../static/jobs-types';

@Component({
  selector: 'app-reedition',
  templateUrl: './reedition.component.html',
  styleUrls: ['./reedition.component.css']
})
export class ReeditionComponent implements OnInit {

  logsChecked = true;
  editors: Editor[];
  jobTypes: any[];
  jobPeriods: any[];

  reeditionForm: FormGroup;

  constructor(private editorService: EditorService) {
    this.editors = this.editorService.getEditors();
    this.jobTypes = JOBS_TYPES.logs;
    this.jobPeriods = JOBS_PERIODS.logs;
    this.reeditionForm = new FormGroup({
      selectedEditor: new FormControl('', Validators.required),
      selectedMedia: new FormControl('', Validators.required),
      selectedJob: new FormControl('', Validators.required),
      fromDate: new FormControl('', Validators.required),
      toDate: new FormControl('', Validators.required),
      selectedPeriod: new FormControl('', Validators.required),
      official: new FormControl('')
    });
  }

  ngOnInit() { }

  handleClick(jobChecked: boolean) {
    this.logsChecked = jobChecked;
    if (jobChecked) {
      this.jobTypes = JOBS_TYPES.logs;
      this.jobPeriods = JOBS_PERIODS.logs;
    } else {
      this.jobTypes = JOBS_TYPES.dsf;
      this.jobPeriods = JOBS_PERIODS.dsf;
    }
  }

  applyFilter() {

  }

}
