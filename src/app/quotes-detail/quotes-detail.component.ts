import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes-detail',
  templateUrl: './quotes-detail.component.html',
  styleUrls: ['./quotes-detail.component.css']
})
export class QuotesDetailComponent implements OnInit {
  
  @Input() quote: Quotes;
  @Output () isComplete= new EventEmitter<boolean>();
  quoteDelete(complete:boolean){
    this.isComplete.emit(complete);
  }

  upVotes = 0;
  downVotes = 0;

  upVote(){
    this.upVotes = this.upVotes + 1
  }

  downVote(){
    this.downVotes = this.downVotes + 1;
  }

constructor() { }

ngOnInit() {
}

}