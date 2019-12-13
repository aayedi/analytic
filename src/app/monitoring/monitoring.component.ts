import { Component, OnInit } from '@angular/core';
import { Editor } from '../models/editor';
import { EditorService } from '../service/editor-service.service';
import { EditorSelectorItem } from '../models/editor-selector';
import { Media } from '../models/media';
import { HttpService } from '../service/http.service';

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

  constructor(private editorService: EditorService, private httpService: HttpService) {
    this.editors = this.editorService.getEditors();
    this.editorSelectorItems = this.editorService.getSelectorEditors();
   }

  ngOnInit() {
  }

  runEditorJob() {
    this.initMessages();
    if (this.selectedEditor) {
      this.httpService.runEditorJob(this.selectedEditor.name)
      .subscribe(
        data => {
          this.jobSuccess = true;
        },
        error => {
          this.jobFailure = true;
        }
      );
    }
  }

  runMediaJob() {
    this.initMessages();
    if (this.selectedMedia) {
      this.httpService.runEditorJob(this.selectedMedia.name)
        .subscribe(
          data => {
            this.jobSuccess = true;
          },
          error => {
            this.jobFailure = true;
          }
        );
    }
  }

  initMessages() {
    this.jobSuccess = false;
    this.jobFailure = false;
  }

}
