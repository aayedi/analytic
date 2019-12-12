import { Component, OnInit } from '@angular/core';
import { Editor } from '../models/editor';
import { EditorService } from '../service/editor-service.service';
import { EditorSelectorItem } from '../models/editor-selector';
import { Media } from '../models/media';

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

  constructor(private editorService: EditorService) {
    this.editors = this.editorService.getEditors();
    this.editorSelectorItems = this.editorService.getSelectorEditors();
   }

  ngOnInit() {
  }

  runEditorJob() {
    console.log(this.selectedEditor);
  }

  runMediaJob() {
    console.log(this.selectedMedia);
  }

}
