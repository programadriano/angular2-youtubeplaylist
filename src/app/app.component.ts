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
  private playlistYoutube:any;

   private msgErro: string;

   constructor(private youtubePlaylist:YoutubePlaylist) { }

getplaylist() {
  
    // this.youtubePlaylist.getplaylist("PLPrQRyn2uGR0sskMv0XC9gTrJHWRm35Ji")
    //   .subscribe(
    //    value => {console.log(value),
    //   playlist => this.playlist = playlist,
    //   error => this.msgErro = error});

      // this.playlistYoutube = this.youtubePlaylist.getplaylist("PLPrQRyn2uGR0sskMv0XC9gTrJHWRm35Ji").subscribe(value => {
      //   this.playlist = value.map( function( elem ) {
      //       return elem;
      //   } ); 
      // });

       this.playlistYoutube = this.youtubePlaylist.getplaylist("PLPrQRyn2uGR0sskMv0XC9gTrJHWRm35Ji")
       .subscribe(value => {
              this.playlistYoutube = value
               console.log(this.playlistYoutube)
               console.log(this.playlistYoutube.items)
      });

     

      
  }


  //playlistList_page

  nextPage(pageToken:string){
    
    this.playlistYoutube = this.youtubePlaylist.playlistList_page("PLPrQRyn2uGR0sskMv0XC9gTrJHWRm35Ji",pageToken).subscribe(value => {
              this.playlistYoutube = value
               console.log(this.playlistYoutube)
               console.log(this.playlistYoutube.items)
      });
  }

  ngOnInit(){
       this.getplaylist();
    }

}
