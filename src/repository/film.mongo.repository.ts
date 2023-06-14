import { FilmModel } from './film.mongo.model.js';
import createDebug from 'debug';
import { Film } from '../entities/film.js';
import { Repo } from './repo.js';
import { HttpError } from '../types/http.error.js';
const debug = createDebug('W6:FilmRepo');

export class FilmRepo implements Repo<Film> {
  constructor() {
    debug('Instantiated');
  }

  async query(): Promise<Film[]> {
    const aData = await FilmModel.find().exec();
    return aData;
  }

  async queryById(id: string): Promise<Film> {
    const result = await FilmModel.findById(id).exec();
    if (result === null)
      throw new HttpError(404, 'Not found', 'Bad id for the query');
    return result;
  }

  async create(data: Omit<Film, 'id'>): Promise<Film> {
    const newBook = await FilmModel.create(data);
    return newBook;
  }

  async search({
    key,
    value,
  }: {
    key: string;
    value: unknown;
  }): Promise<Film[]> {
    const result = await FilmModel.find({ [key]: value }).exec();
    return result;
  }

  async update(id: string, data: Partial<Film>): Promise<Film> {
    const newBook = await FilmModel.findByIdAndUpdate(id, data, {
      new: true,
    }).exec();
    if (newBook === null)
      throw new HttpError(404, 'Not found', 'Bad id for the update');
    return newBook;
  }

  async delete(id: string): Promise<void> {
    const result = await FilmModel.findByIdAndDelete(id).exec();
    if (result === null)
      throw new HttpError(404, 'Not found', 'Bad id for the delete');
  }
}
