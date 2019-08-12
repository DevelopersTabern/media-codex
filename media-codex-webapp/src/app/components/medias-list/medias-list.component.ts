import { Component, OnInit, HostBinding } from '@angular/core';
import { Router } from "@angular/router";
import { MediasService } from '../../services/medias.service';

@Component({
  selector: 'app-medias-list',
  templateUrl: './medias-list.component.html',
  styleUrls: ['./medias-list.component.scss']
})
export class MediasListComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  
  medias: any = [];


  constructor(private mediasService: MediasService, private router: Router) { }

  ngOnInit(){
    this.getMedias();
  }

  getMedias(){
    this.mediasService.getMedias().subscribe(res => {
          this.medias = res;
          console.log(res);
        },
        err => console.error(err)
      );
  }

  getMedia(id:number){
    this.mediasService.getMedia(id).subscribe(res => {
        this.router.navigate(['app/media',id] );
      },
      err => console.error(err)
    );
  }
}
