import { Component, Input, OnInit } from '@angular/core';
import { TracksModule } from '@modules/tracks/tracks.module';

@Component({
  selector: 'app-section-generic',
  templateUrl: './section-generic.component.html',
  styleUrls: ['./section-generic.component.css']
})
export class SectionGenericComponent implements OnInit{
@Input() title: string = ''
@Input() mode: 'small' | 'big' = 'big'
@Input() dataTracks: Array<TracksModule> =[]

constructor(){}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


}
