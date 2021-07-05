import { Link } from './model/link.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss']
})
export class LinksComponent {
  @Input() links: Link[] = [];
}
