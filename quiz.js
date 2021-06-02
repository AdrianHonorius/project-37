class Quiz {
    constructor() {
      this.input = createInput("name");
      this.inputOne  = createInput("choose your option");
      this.inputTwo = createInput("How many planets are ther in our solar system ?")
      this.button1 = createButton("ten");
      this.button2 = createButton("eight");
      this.button3 = createButton("five");
      this.button = createButton("done");
      this.greetings1 = createInput("You Win");
      this.greetings = createInput("you lost");
      
      
    }
  
    hide(){
      this.input.hide();
      this.inputOne.hide();
      this.inputTwo.hide();
      this.button.hide();
    }
  
    display(){
      var title = createElement('h2')
      title.html("Quiz Game");
      title.position(130, 0);
      
      this.input.position(130, 160);
      this.inputOne.position(150,160);
      this.inputTwo.position(50,200);
      this.button1.position(100.220);
      this.button2.position(100,240);
      this.button3.position(100.260);
      this.button.position(250, 200);
      this.greetings1.position(200,200);
      this.greetings.position(200,200);
  
      this.button.mousePressed(()=>{
        this.input.hide();
        this.inputOne.hide();
        this.button.hide(); 
  
        contestant.name = this.input.value();
        
        contestantCount+=1;
        contestant.index = playerCount;
        contestant.update()
        contestant.updateCount(contestantCount);
        this.greetings.html("Hello " + player.name )
        this.greetings.position(130, 160)
      });
  
    }
  }