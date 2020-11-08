import { Component, Input, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {
  @Input() quote: Quotes;
 

  upVotes = 0;
  downVotes = 0;

  upVote(){
    this.upVotes = this.upVotes + 1
  }

  downVote(){
    this.downVotes = this.downVotes + 1;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
