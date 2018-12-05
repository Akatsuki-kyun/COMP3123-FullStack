import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsComponent } from './students.component';
import { StudentComponent } from './student/student.component';
import { HeroesComponent } from './heroes/heroes.component';
@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    StudentComponent,
    HeroesComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule //Imports the formsModule to allow the app to edit the component's data
                //all the changes are immediately reflected in the div span
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
