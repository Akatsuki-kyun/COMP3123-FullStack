import { Component } from '@angular/core';
@Component({
    selector: 'students',
    template: '<h2>{{title}}</h2>' + ' The Current Date: ' + `header ${new Date}`
    //Modifies the component Decorator to call function
    //in the binding of the Template title EX3-5
})
export class StudentsComponent{
    title = "My List of Students";

    getTitle(){
        return this.title;
    }
    getCurrentDate(){
        return new Date();
    }
}
//More comments, yay