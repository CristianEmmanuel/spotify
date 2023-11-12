import { Component, OnDestroy, OnInit } from '@angular/core';
import * as data from '../../../../data/tracks.json';

@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.css']
})
export class TracksPageComponent implements OnInit {

  // tracksTrending: Array<TrackModel> = []
  // tracksRandom: Array<TrackModel> = []
  // listObservers$: Array<Subscription> = []

   constructor() { }

  ngOnInit(): void {
    this.loadDataAll() //TODO 📌📌
    this.loadDataRandom() //TODO 📌📌
  }

  async loadDataAll(): Promise<any> {
    //this.tracksTrending = await this.trackService.getAllTracks$().toPromise()

  }

  loadDataRandom(): void {
    //  this.trackService.getAllRandom$()
    //    .subscribe((response: TrackModel[]) => {
    //      this.tracksRandom = response
    //    })
  }

  
}