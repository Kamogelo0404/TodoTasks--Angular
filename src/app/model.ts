// This is the model

export class model {

    user;
    items;


    constructor(){

       this.user = "Pheletso"; //This is the username displayed on the view 
        
       /*
             Hard coding the initial tasks in the model       
       */
        this.items = [{action: "Gym", done:false},
                      {action:"Bath", done: false},
                      {action:"pray", done: false},
                      {action: "work", done: true}
            ]

    }
    }


    //

    export class TodoItem
    {

        action;
        done;
        constructor(action: any, done: any){
            this.action = action;
            this.done = done

        }
    }



