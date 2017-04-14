import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HttpUtilService } from "app/services/http-util-service";
import { YoutubePlaylist } from "app/services/youtube-playlist";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [HttpUtilService,YoutubePlaylist],
  bootstrap: [AppComponent]
})
export class AppModule { }
