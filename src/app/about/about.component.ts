import { Component, OnInit } from '@angular/core';

import { environment } from '@env/environment';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  version: string | null = environment.version;
  person = {
    a: 'http://rentastico.com/assets/img/sites/rentastico-cover-2.jpg'
  };
  constructor() {}

  ngOnInit() {}
}
