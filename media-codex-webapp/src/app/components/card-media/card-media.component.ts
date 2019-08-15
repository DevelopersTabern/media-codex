import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { MediasService } from '../../services/medias.service';

@Component({
  selector: 'app-card-media',
  templateUrl: './card-media.component.html',
  styleUrls: ['./card-media.component.scss']
})

export class CardMediaComponent implements OnInit {

  @Input() media: any = {};


  constructor( private mediasService: MediasService, private router:Router ) { }

  ngOnInit() {
  }

  getMedia(id:number){
    this.mediasService.getMedia(id).subscribe(res => {
        this.router.navigate(['app/media',id] );
      },
      err => console.error(err)
    );
  }

}
