import { Component, OnInit } from '@angular/core';
import { Link } from '../models/link';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  links: Link[] = [
    new Link('/admin/do?ACTION=updateConfig', 'Synchroniser le Google sheet de config vers le datastore', 'ui-g-offset-3 ui-g-8'),
    new Link('https://docs.google.com/spreadsheets/d/1GpTN6SLTyLGBiVp638xn0aqm9CGe8fyf2_T4hWHhYYA/edit', 'Google sheet config RECETTE',
     'ui-g-offset-3 ui-g-8'),
    new Link('https://docs.google.com/spreadsheets/d/1vzSN8X-rx7cU-WIGsMkJe-uX6EVFU9x7wFLg5Cwps4A/edit#gid=0',
    'Google sheet config PROD', 'ui-g-offset-3 ui-g-8')
  ];
  showGSLinks = false;
  constructor() { }

  ngOnInit() {
  }

  showOrHideLinks(showGSLinks) {
    console.log(showGSLinks);
    this.showGSLinks = showGSLinks;
  }

}
