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
import { RxTestComponent } from './rx-test/rx-test.component';
import {TaskEmitterService} from './services/task-emitter.service';
import {TaskService} from './services/task.service';
import { CheckedDirective } from './shared/checked.directive';
import { DateDirective } from './shared/date.directive';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    BindingTestComponent,
    TaskComponent,
    ActiveTaskComponent,
    FinishedTaskComponent,
    AddTaskComponent,
    RxTestComponent,
    CheckedDirective,
    DateDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [TaskEmitterService, TaskService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
