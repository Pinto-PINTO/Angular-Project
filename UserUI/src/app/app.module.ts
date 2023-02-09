import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// Toastr Notifications
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserDetailFormComponent } from './user-details/user-detail-form/user-detail-form.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    UserDetailsComponent,
    UserDetailFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({positionClass: 'toast-bottom-center'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
