import { Component, OnInit } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  helpLinks: any[] = [
    {
      "title": "Need help?",
      "url": "https://www.google.com"
    },
    {
      "title": "Get in touch",
      "url": "https://www.google.com"
    },
    {
      "title": "Terms of use",
      "url": "https://www.google.com"
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
