import { Injectable } from '@angular/core';

import { Joke } from '../models/joke.model';
const jokesJson = require('../../assets/data/jokes-json.json');
const dataJokes: Joke[] = jokesJson;
@Injectable({
  providedIn: 'root'
})
export class JokesService {

  constructor() { }

  getAllJokes() {
    return dataJokes;
  }
}
