import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as DATA from '../assets/data/media_data.json';
import { from, forkJoin } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  constructor(private httpClient: HttpClient) {
    // const data = DATA.default;
    // console.log(data);

    // const movies = {}
    // const genres = {};
    // const countries = {};
    // const companies = {};
    // const languages = {};

    // const movieGenres: { idMedia: number, idGenre: number }[] = [];
    // const movieCountries: { idMedia: number, id_iso_3166_1: string }[] = [];
    // const movieCompanies: { idMedia: number, idCompany: number }[] = [];
    // const movieLanguages: { idMedia: number, id_iso_639_1: number }[] = [];

    // data.forEach((movie: any) => {
    //   movies[movie.id] = movie.original_title;
    //   movie.genres.forEach(genre => {
    //     genres[genre.id] = genre.name;
    //     movieGenres.push({ idMedia: movie.id, idGenre: genre.id });
    //   });
    //   movie.production_countries.forEach(country => {
    //     countries[country.iso_3166_1] = country.name;
    //     movieCountries.push({ idMedia: movie.id, id_iso_3166_1: country.iso_3166_1 });
    //   });
    //   movie.production_companies.forEach(company => {
    //     companies[company.id] = company.name;
    //     movieCompanies.push({ idMedia: movie.id, idCompany: company.id });
    //   });
    //   movie.spoken_languages.forEach(language => {
    //     languages[language.iso_639_1] = language.name;
    //     movieLanguages.push({ idMedia: movie.id, id_iso_639_1: language.iso_639_1 });
    //   });
    // });

    // forkJoin(
    //   from(Object.keys(movies)).pipe(
    //     mergeMap(movieId => this.httpClient.post('http://localhost:27100/media', { id: movieId, name: movies[movieId] }), 1)
    //   ),
    //   from(Object.keys(genres)).pipe(
    //     mergeMap(genreId => this.httpClient.post('http://localhost:27100/genre', { id: genreId, name: genres[genreId] }), 1)
    //   ),
    //   from(Object.keys(languages)).pipe(
    //     mergeMap(languageId => this.httpClient.post('http://localhost:27100/languages', { id: languageId, name: languages[languageId] }), 1)
    //   ),
    //   from(Object.keys(countries)).pipe(
    //     mergeMap(countryId => this.httpClient.post('http://localhost:27100/countries', { id: countryId, name: countries[countryId] }), 1)
    //   ),
    //   from(Object.keys(companies)).pipe(
    //     mergeMap(companyId => this.httpClient.post('http://localhost:27100/companies', { id: companyId, name: companies[companyId] }), 1)
    //   )
    // ).subscribe(response => {
    //   from(movieGenres).pipe(
    //     mergeMap(movieGenre => this.httpClient.post('http://localhost:27100/mediaGenre', { idMedia: movieGenre.idMedia, idGenre: movieGenre.idGenre }), 1)
    //   ).subscribe();

    //   from(movieCountries).pipe(
    //     mergeMap(movieCountry => this.httpClient.post('http://localhost:27100/mediaCountry', { idMedia: movieCountry.idMedia, id_iso_3166_1: movieCountry.id_iso_3166_1 }), 1)
    //   ).subscribe();

    //   from(movieCompanies).pipe(
    //     mergeMap(movieCompany => this.httpClient.post('http://localhost:27100/mediaCompany', { idMedia: movieCompany.idMedia, idCompany: movieCompany.idCompany }), 1)
    //   ).subscribe();

    //   from(movieLanguages).pipe(
    //     mergeMap(movieLanguage => this.httpClient.post('http://localhost:27100/mediaLanguage', { idMedia: movieLanguage.idMedia, id_iso_639_1: movieLanguage.id_iso_639_1 }), 1)
    //   ).subscribe();
    // })
  }

  ngOnInit() { }
}