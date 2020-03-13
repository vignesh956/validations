import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { finalize } from 'rxjs/operators';

import { QuoteService } from './quote.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('date', { read: ElementRef, static: false }) date: ElementRef;
  @ViewChild('date1', { read: ElementRef, static: false }) date1: ElementRef;

  quote: string | undefined;
  isLoading = false;
  datevalue1: any;
  datevalue2: any;

  constructor(private quoteService: QuoteService) {}

  ngOnInit() {
    this.isLoading = true;
    this.quoteService
      .getRandomQuote({ category: 'dev' })
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe((quote: string) => {
        this.quote = quote;
      });
  }
  clickme() {
    this.date.nativeElement.open();
  }
  formatDate(date: string) {
    var d = new Date(date);
    var year = d.getFullYear();
    var month = d.getMonth() + 1;
    var day = d.getDate();
    var dateStr = year + '-' + month + '-' + day;
    return dateStr;
  }
  clickme1() {
    this.date1.nativeElement.open();
  }
  formatDate1(date1: string) {
    var b = new Date(date1);
    var year = b.getFullYear();
    var month = b.getMonth() + 1;
    var day = b.getDate();
    var codestr = year + '-' + month + '-' + day;
    return codestr;
  }
}
