import { Component, OnInit } from '@angular/core';
import { Editor } from '../models/editor';
import { EditorService } from '../service/editor-service.service';

@Component({
  selector: 'app-show-editor',
  templateUrl: './show-editor.component.html',
  styleUrls: ['./show-editor.component.css']
})
export class ShowEditorComponent implements OnInit {

  editors: Editor[];
  selectedEditor: Editor;

  constructor(private editorService: EditorService) {
    this.editors = this.editorService.getEditors();
  }

  ngOnInit() {
  }

}
