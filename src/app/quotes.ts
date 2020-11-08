export class Quotes {
   hasDetails: boolean;
   
    constructor(
      public quote: string, 
      public author: string, 
      public person: string,
      public completeDate:Date){
        this.hasDetails=false;
        

    }
     
    
  }
