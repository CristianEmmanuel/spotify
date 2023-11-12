import { Component, Input, OnInit } from '@angular/core';
import { TracksModule } from '@modules/tracks/tracks.module';
//import { MultimediaService } from '@shared/services/multimedia.service';

@Component({
  selector: 'app-card-player',
  templateUrl: './card-player.component.html',
  styleUrls: ['./card-player.component.css']
})
export class CardPlayerComponent implements OnInit{
  @Input() mode: 'small' | 'big' = 'small'
  @Input() track: TracksModule = { _id: 0, name: '', album: '', url: '', cover: '' };

  //constructor(private multimediaService: MultimediaService) { }

  ngOnInit(): void {
  }

  sendPlay(track: TracksModule): void {
  //  this.multimediaService.trackInfo$.next(track)
  }
}
