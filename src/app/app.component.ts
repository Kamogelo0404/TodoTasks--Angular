
// This is the Crontroller of the application

import { Component } from '@angular/core';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { TodoItem, model } from './model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  faThumbsUp = faThumbsUp;
  faThumbsDown = faThumbsDown;
  
  title = 'To do App';  //This is the app tile that displays when the tab opens
  
  model = new model() //this objects that instatiate the model.

  /*
     below is the function to display the current usernaname on the view
  */

  getName()
  {
    return this.model.user; //this returns the name of the user in the model
  }


  /* Below is the function to display the tasks on the view */
  
  GetTheItems():any{
   
    //return all items from the model
    console.log(this.model.items)
    return this.model.items

  


    /*
      //to return only done items use this code
         
      return this.model.items.filter(item => item.done)

     */
  }
    
  
/*Below function adds the tasks from the input field*/
  addItem(newTask: any) {
 

    if (newTask !="") {
      console.log(newTask);
        this.model.items.push(new TodoItem(newTask, false)); 
    }
}

}


