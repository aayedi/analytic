import { Component, OnInit } from '@angular/core';
import { Editor } from '../models/editor';
import { EditorService } from '../service/editor-service.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { JOBS_PERIODS } from '../static/jobs-periods';
import { JOBS_TYPES } from '../static/jobs-types';

@Component({
  selector: 'app-reedition',
  templateUrl: './reedition.component.html',
  styleUrls: ['./reedition.component.css']
})
export class ReeditionComponent implements OnInit {

  dsfChecked = true;
  editors: Editor[];
  jobTypes: any[];
  jobPeriods: any[];
  reeditionForm: FormGroup;

  constructor(private editorService: EditorService, private formBuilder: FormBuilder) {
    this.editors = this.editorService.getEditors();
    this.jobTypes = JOBS_TYPES.logs;
    this.jobPeriods = JOBS_PERIODS.logs;
    this.reeditionForm = this.formBuilder.group({
      selectedEditor: ['', Validators.required],
      selectedMedia: ['', Validators.required],
      selectedJob: ['', Validators.required],
      fromDate: ['', Validators.required],
      toDate: ['', Validators.required],
      selectedPeriod: ['', Validators.required],
      official: ['']
    });
  }

  ngOnInit() { }

  handleClick(jobChecked: boolean) {
    this.dsfChecked = jobChecked;
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
