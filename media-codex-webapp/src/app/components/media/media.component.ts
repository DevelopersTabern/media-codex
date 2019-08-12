import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MediasService } from '../../services/medias.service';


@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss']
})
export class MediaComponent implements OnInit {

  
  media:any;
 

  constructor( private activatedRoute: ActivatedRoute, private mediasService: MediasService ) { 
     console.log(this.activatedRoute.snapshot.paramMap.get('id'));
     console.log(this.media);
  }


  ngOnInit(){
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.mediasService.getMedia(params.id).subscribe( res => {
        this.media = res;
        console.log(res);
      },
      err => console.log(err)
      )
    }
  }
  

  
}
