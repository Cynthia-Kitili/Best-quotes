export class Quotes {
    hasAuthor: boolean;
    hasPerson: boolean;
    constructor(public quote: string, public author: string, public person: string){
      this.hasAuthor=false;
      this.hasPerson=false;
    }
  }
