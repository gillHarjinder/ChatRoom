import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

// route=ing
import { AppRoutingModule } from './app-routing.module';

// components
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ChatareaComponent } from './chatarea/chatarea.component';

//Service
import { ChatroomService } from './chatroom.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ChatareaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ChatroomService],
  bootstrap: [AppComponent]
})
export class AppModule { }
