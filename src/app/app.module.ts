import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponentComponent } from './component/user-component/user-component.component';
import { FilterContainerComponent } from './component/filter-container/filter-container.component';
import { UsersContainerComponent } from './component/users-container/users-container.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    UserComponentComponent,
    FilterContainerComponent,
    UsersContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
