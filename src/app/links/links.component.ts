import { Component, OnInit, Input } from '@angular/core';
import { Link } from '../models/link';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css']
})
export class LinksComponent implements OnInit {

  @Input()
  links: Link[];

  constructor() { }

  ngOnInit() {
  }

}
