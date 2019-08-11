import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MediasService } from '../../services/medias.service';
import { ConsoleReporter } from 'jasmine';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss']
})
export class MediaComponent implements OnInit {

  media:any = [];

  constructor( private activatedRoute: ActivatedRoute, private mediasService: MediasService ) { 

  }

  

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.mediasService.getMedia(params.id).subscribe( res => {
        console.log(res);
        this.media = res;
      },
      err => console.log(err)
      )
    }
  }
}
