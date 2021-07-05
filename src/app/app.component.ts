import { Component } from '@angular/core';
import { Link } from './links';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  links: Link[] = [
    {
      icon: 'foo',
      text: 'foo',
      url: 'foo.com'
    }
  ]
}
