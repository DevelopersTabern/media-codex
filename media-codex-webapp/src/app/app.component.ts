import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as DATA from '../assets/data/media_data.json';
import { from } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  
  constructor(private httpClient: HttpClient) { 
    const data = DATA.default;
    console.log(data);

    const movies = {}
    const genres = {};
    const countries = {};
    const companies = {};
    const languages = {};

    data.forEach((movie: any) => {
      movies[movie.id] = movie.original_title;
      movie.genres.forEach(genre => genres[genre.id] = genre.name);
      movie.production_countries.forEach(country => countries[country.iso_3166_1] = country.name);
      movie.production_companies.forEach(company => companies[company.id] = company.name);
      movie.spoken_languages.forEach(language => languages[language.iso_639_1] = language.name);
    });

    from(Object.keys(movies)).pipe(
      mergeMap(movieId => this.httpClient.post('http://localhost:27100/media', {id: movieId, name: movies[movieId]}), 1)
    ).subscribe(response => console.log(response));

    from(Object.keys(genres)).pipe(
      mergeMap(genreId => this.httpClient.post('http://localhost:27100/genre', {id: genreId, name: genres[genreId]}), 1)
    ).subscribe(response => console.log(response));

    from(Object.keys(languages)).pipe(
      mergeMap(languageId => this.httpClient.post('http://localhost:27100/languages', {id: languageId, name: languages[languageId]}), 1)
    ).subscribe(response => console.log(response));

    from(Object.keys(countries)).pipe(
      mergeMap(countryId => this.httpClient.post('http://localhost:27100/countries', {id: countryId, name: countries[countryId]}), 1)
    ).subscribe(response => console.log(response));

    from(Object.keys(companies)).pipe(
      mergeMap(companyId => this.httpClient.post('http://localhost:27100/companies', {id: companyId, name: companies[companyId]}), 1)
    ).subscribe(response => console.log(response));
  }

  ngOnInit() {}
}