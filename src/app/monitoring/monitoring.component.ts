import { Component, OnInit } from '@angular/core';
import { Editor } from '../models/editor';
import { EditorService } from '../service/editor-service.service';
import { EditorSelectorItem } from '../models/editor-selector';
import { Media } from '../models/media';
import { HttpClient } from '@angular/common/http';

const BASE_URL = 'http://analytics.sfeir.com/';

@Component({
  selector: 'app-monitoring',
  templateUrl: './monitoring.component.html',
  styleUrls: ['./monitoring.component.css']
})
export class MonitoringComponent implements OnInit {

  editors: Editor[];
  editorSelectorItems: EditorSelectorItem[];
  selectedEditor: Editor;
  monitoringEditor: Editor;
  selectedMedia: Media;
  jobSuccess = false;
  jobFailure = false;

  constructor(private http: HttpClient, private editorService: EditorService) {
    this.editors = this.editorService.getEditors();
    this.editorSelectorItems = this.editorService.getSelectorEditors();
   }

  ngOnInit() {
  }

  runEditorJob() {
    this.initMessages();
    if (this.selectedEditor) {
      this.http.get(`${BASE_URL}/admin/runJob?editorName=` + this.selectedEditor.name)
      .subscribe(
        data => {
          this.jobSuccess = true;
          console.log(data);
        },
        error => {
          this.jobFailure = true;
          console.log(error);
        }
      );
    }
  }

  runMediaJob() {
    this.initMessages();
    console.log(this.selectedMedia);
    if (this.selectedMedia) {
      this.http.get(`${BASE_URL}/admin/runJob?mediaName=` + this.selectedMedia.name)
        .subscribe(
          data => {
            this.jobSuccess = true;
            console.log(data);
          },
          error => {
            this.jobFailure = true;
            console.log(error);
          }
        );
    }
  }

  initMessages() {
    this.jobSuccess = false;
    this.jobFailure = false;
  }

}
