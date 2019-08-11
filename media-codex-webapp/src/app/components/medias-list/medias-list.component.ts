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

  id:string;
  
  constructor(private mediaService: MediasService, private router: Router) { }

  ngOnInit() {
    this.getMedias();
  }

  getMedias() {
    this.mediaService.getMedias().subscribe(res => {
          this.medias = res;
        },
        err => console.error(err)
      );
  }

  verMedia(id:string){
    this.mediaService.getMedia(id).subscribe(res => {
        this.router.navigate(['/media',id] );
      },
      err => console.error(err)
    );
  }
}
