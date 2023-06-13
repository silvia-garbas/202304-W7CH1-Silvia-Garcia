import { FilmRepo } from '../repository/film.mongo.repository.js';
import { Controller } from './controller.js';
import { Film } from '../entities/film.js';

import createDebug from 'debug';
const debug = createDebug('W6:FilmController');

export class FilmController extends Controller<Film> {
  // eslint-disable-next-line no-unused-vars
  constructor(protected repo: FilmRepo) {
    super();
    debug('Instantiated');
  }
}
