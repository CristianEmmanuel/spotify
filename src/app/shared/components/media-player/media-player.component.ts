import { Component, OnInit } from '@angular/core';
import { TracksModule } from '@modules/tracks/tracks.module';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit{
 
  mockCover:TracksModule = {
    cover:'',
    album:'',
    name:'',
    url: '',
    _id: 1
  }

  constructor() { }

  ngOnInit(): void {
    
  }
}
