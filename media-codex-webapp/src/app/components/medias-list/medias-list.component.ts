import { Component, OnInit, HostBinding } from '@angular/core';

import { MediasService } from '../../services/medias.service';

@Component({
  selector: 'app-medias-list',
  templateUrl: './medias-list.component.html',
  styleUrls: ['./medias-list.component.scss']
})
export class MediasListComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  medias: any = [];

  constructor(private mediaService: MediasService) { }

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
}
