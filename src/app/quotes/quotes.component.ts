import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes: Quotes[]=[
    {quote:'People will forget what you said. People will forget what you did. But people will never forget how you made them feel.', author: 'MAYA ANGELOU', person:'MAYA ANGELOU'},
    {quote:'Success is liking yourself, liking what you do, and liking how you do it.', author: 'MAYA ANGELOU', person:'MAYA ANGELOU'},
    {quote:'My mission in life is not merely to survive, but to thrive; and to do so with some passion, some compassion, some humor, and some style.', author: 'MAYA ANGELOU', person:'MAYA ANGELOU'},
    {quote:'Beware of rashness, but with energy and sleepless vigilance go forward and give us victories.', author: 'ABRAHAM LINCOLN', person:'ABRAHAM LINCOLN'},
    {quote:'If you can not fly then run, if you can not run then walk, if you can not walk then crawl, but whatever you do you have to keep moving forward.', author: 'MARTIN LUTHER KING(JR.)', person:'MARTIN LUTHER KING(JR.)'},
    {quote:'The ultimate measure of a man is not where he stands in moments of comfort and convenience, but where he stands at times of challenge and controversy.', author: 'MARTIN LUTHER KING(JR.)', person:'MARTIN LUTHER KING(JR.)'},
    {quote:'I believe that everything happens for a reason. People change so that you can learn to let go, things go wrong so that you appreciate them when they are right, you believe lies so you eventually learn to trust no one but yourself, and sometimes good things fall apart so better things can fall together.', author: 'MARILYN MONROE', person:'MARILYN MONROE'},
    {quote:'Your beliefs become your thoughts, Your thoughts become your words, Your words become your actions, Your actions become your habits, Your habits become your values, Your values become your destiny.', author: 'MOHANDAS GANDHI', person:'MOHANDAS GANDHI'},
    {quote:'Try not to become a man of success. Rather become a man of value.', author: 'ALBERT EINSTEIN', person:'ALBERT EINSTEIN'},
    {quote:'Two roads diverged in a wood, and I — I took the one less traveled by, And that has made all the difference.', author: 'ROBERT FROST', person:'ROBERT FROST'},
    {quote:'Women are like teabags. We don’t know our true strength until we are in hot water!', author: 'ELEANOR ROOSEVELT', person:'ELEANOR ROOSEVELT'},
    
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
