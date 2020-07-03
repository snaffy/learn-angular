import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TestComponent} from './test/test.component';
import {FormsModule} from '@angular/forms';
import {BindingTestComponent} from './binding-test/binding-test.component';
import { TaskComponent } from './task/task.component';
import { ActiveTaskComponent } from './active-task/active-task.component';
import { FinishedTaskComponent } from './finished-task/finished-task.component';
import { AddTaskComponent } from './add-task/add-task.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    BindingTestComponent,
    TaskComponent,
    ActiveTaskComponent,
    FinishedTaskComponent,
    AddTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
