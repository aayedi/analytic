import { Component, OnInit } from '@angular/core';
import { Editor } from '../models/editor';
import { EditorService } from '../service/editor-service.service';
import { EditorSelectorItem } from '../models/editor-selector';
import { Media } from '../models/media';
import { HttpService } from '../service/http.service';
import { Link } from '../models/link';

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
  links: Link[] = [
    new Link('http://104.155.52.146/ojd/', 'Liste des fichiers transférés à l\'OJD par sftp', 'ui-g-12 ui-lg-6'),
    new Link('https://console.cloud.google.com/home/dashboard?project=certification-ojd', 'Console Google Cloud Project',
     'ui-g-12 ui-lg-6'),
    new Link('https://ssh.cloud.google.com/projects/certification-ojd/'
    + 'zones/europe-west1-b/instances/acpm-sftp?authuser=0&amp;hl=en_US&amp;projectNumber=758988767458',
    'Connexion ssh à la VM', 'ui-g-12 ui-lg-6'),
    new Link('', 'Changer le niveau des logs', 'ui-g-12 ui-lg-6')
  ];

  constructor(private editorService: EditorService, private httpService: HttpService) {
    this.editors = this.editorService.getEditors();
    this.editorSelectorItems = this.editorService.getSelectorEditors();
   }

  ngOnInit() { }

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
