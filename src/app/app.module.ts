import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TodoComponent } from './todo/todo.component';

@NgModule({
  declarations: [],
  imports: [BrowserModule, AppComponent,FormsModule,TodoComponent],
  providers: [],
  
})
export class AppModule {}