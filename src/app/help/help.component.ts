import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import English from './translation';
@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})
export class HelpComponent implements OnInit {
  trans = English;
  searchText: any;
  heroes = [
    {
      head: 'HEAD1_HELP',
      // tslint:disable-next-line: max-line-length
      para: 'PARA1_HELP'
    },
    {
      head: 'HEAD2_HELP',
      // tslint:disable-next-line: max-line-length
      para: 'PARA2_HELP'
    },
    {
      head: 'HEAD3_HELP',
      // tslint:disable-next-line: max-line-length
      para: `PARA3_HELP`
    }
  ];

  constructor(private translate: TranslateService) {
    this.translate.use('en');
    this.translate.setTranslation('en', this.trans);
  }

  ngOnInit() {}
}
