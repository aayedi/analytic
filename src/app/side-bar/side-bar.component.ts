import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  showGSLinks = false;
  constructor() { }

  ngOnInit() {
  }

  showOrHideLinks(showGSLinks) {
    console.log(showGSLinks);
    this.showGSLinks = showGSLinks;
  }

}
