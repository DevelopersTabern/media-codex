import { Component, OnInit } from '@angular/core';

import MediaData from '../../../assets/data/media_data.json';
import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-media-list',
  templateUrl: './media-list.component.html',
  styleUrls: ['./media-list.component.scss']
})
export class MediaListComponent implements OnInit {


  constructor(private httpClient: HttpClient) {
    const mediaData: any = MediaData;

    console.log(mediaData);


    /*
    const genres = new Map();
    const companies = new Map();
    const languages = new Map();
    const countries = new Map();

    mediaData.forEach(media => {
      media.genres.forEach(genre => genres.set(genre.id, { id: genre.id, name: genre.name }))
      media.production_companies.forEach(company => companies.set(company.id, { id: company.id, name: company.name }))
      media.production_countries.forEach(country => countries.set(country.iso_3166_1, { id: country.iso_3166_1, name: country.name }))
      media.spoken_languages.forEach(language => languages.set(language.iso_639_1, { id: language.iso_639_1, name: language.name }))
    });

    from(genres).pipe(
      mergeMap(([id, genre]) => this.httpClient.post('http://192.168.99.100:27003/movieGenre', genre, { responseType: 'text' }), 1)).subscribe();

    from(companies).pipe(
      mergeMap(([id, company]) => this.httpClient.post('http://192.168.99.100:27003/companies', company, { responseType: 'text' }), 1)).subscribe();

    from(languages).pipe(
      mergeMap(([id, language]) => this.httpClient.post('http://192.168.99.100:27003/languages', language, { responseType: 'text' }), 1)).subscribe();

    from(countries).pipe(
      mergeMap(([id, country]) => this.httpClient.post('http://192.168.99.100:27003/countries', country, { responseType: 'text' }), 1)).subscribe();

    //this.httpClient.post('http://192.168.99.100:27003/movieGenre', { name: 'Porno' }, { responseType: 'text' }).subscribe();

    console.log('Generos', genres);
    console.log('Compañias', companies);
    console.log('Lenguajes', languages);
    console.log('Paises', countries);*/
  }

  ngOnInit() {
  }
}
