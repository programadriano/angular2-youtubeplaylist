import { Component } from '@angular/core';
import { Playlist } from "app/models/playlist";
import { YoutubePlaylist } from "app/services/youtube-playlist";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
   private playlist:Playlist[];
   private msgErro: string;

   constructor(private youtubePlaylist:YoutubePlaylist) { }

getplaylist() {
    this.youtubePlaylist.getplaylist("PLPrQRyn2uGR0sskMv0XC9gTrJHWRm35Ji")
      .subscribe(
      playlist => this.playlist = playlist,
      error => this.msgErro = error);
  }

  ngOnInit(){
       this.getplaylist();
    }

}
