
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  @Input () quote: Quotes;
  quotes: Quotes[]=[
    new Quotes('People will forget what you said. People will forget what you did. But people will never forget how you made them feel.',  'MAYA ANGELOU' , 'MAYA ANGELOU',new Date(2017,9,29)),
    new Quotes('Success is liking yourself, liking what you do, and liking how you do it.',  'MAYA ANGELOU', 'MAYA ANGELOU',new Date(2006,6,2)),
    new Quotes('My mission in life is not merely to survive, but to thrive; and to do so with some passion, some compassion, some humor, and some style.',  'MAYA ANGELOU', 'MAYA ANGELOU', new Date(2003,4,17)),
    new Quotes('Beware of rashness, but with energy and sleepless vigilance go forward and give us victories.',  'ABRAHAM LINCOLN', 'ABRAHAM LINCOLN',new Date(2012,6,13)),
    new Quotes('If you can not fly then run, if you can not run then walk, if you can not walk then crawl, but whatever you do you have to keep moving forward.',  'MARTIN LUTHER KING(JR.)', 'MARTIN LUTHER KING(JR.)',new Date(2014,8,21)),
    new Quotes('The ultimate measure of a man is not where he stands in moments of comfort and convenience, but where he stands at times of challenge and controversy.',  'MARTIN LUTHER KING(JR.)', 'MARTIN LUTHER KING(JR.)',new Date(2005,12,5)),
    new Quotes('I believe that everything happens for a reason. People change so that you can learn to let go, things go wrong so that you appreciate them when they are right, you believe lies so you eventually learn to trust no one but yourself, and sometimes good things fall apart so better things can fall together.',  'MARILYN MONROE', 'MARILYN MONROE',new Date(2020,7,9)),
    new Quotes('Your beliefs become your thoughts, Your thoughts become your words, Your words become your actions, Your actions become your habits, Your habits become your values, Your values become your destiny.',  'MOHANDAS GANDHI', 'MOHANDAS GANDHI',new Date(2014,8,12)),
    new Quotes('Try not to become a man of success. Rather become a man of value.',  'ALBERT EINSTEIN', 'ALBERT EINSTEIN',new Date(2015,3,23)),
    new Quotes('Two roads diverged in a wood, and I — I took the one less traveled by, And that has made all the difference.',  'ROBERT FROST', 'ROBERT FROST',new Date(2009,6,13)),
    new Quotes('Women are like teabags. We don’t know our true strength until we are in hot water!',  'ELEANOR ROOSEVELT', 'ELEANOR ROOSEVELT',new Date(2016,12,30)),
    
  ];

  @Output () isComplete= new EventEmitter<boolean>();
 
  deleteQuote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].quote}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }    


  
  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }
  toggleDetails(index){
    this.quotes[index].hasDetails = !this.quotes[index].hasDetails;
   
  }
  
  
  constructor() { }

  ngOnInit(): void {
  }

}
