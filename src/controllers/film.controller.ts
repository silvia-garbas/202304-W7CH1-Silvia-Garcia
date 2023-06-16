import { NextFunction, Request, Response } from 'express';
import { FilmRepo } from '../repository/film.mongo.repository.js';
import { Controller } from './controller.js';
import { Film } from '../entities/film.js';

import createDebug from 'debug';
import { PayloadToken } from '../services/auth.js';
import { UserRepo } from '../repository/user.mongo.repository.js';
const debug = createDebug('W6:BookController');

export class FilmController extends Controller<Film> {
  // eslint-disable-next-line no-unused-vars
  constructor(protected Filmmrepo: FilmRepo, private userRepo: UserRepo) {
    super();
    debug('Instantiated');
  }

  async post(req: Request, res: Response, next: NextFunction) {
    try {
      const { id: userId } = req.body.tokenPayload as PayloadToken; // A obtemos id suario
      const user = await this.userRepo.queryById(userId);
      delete req.body.tokenPayload;
      req.body.owner = userId; // A edamos id como string y ya sabe monggose de qué modelo cogerlo

      const newFilm = await this.repo.create(req.body);
      user.films.push(newFilm);
      this.userRepo.update(userId, user);

      res.status(201);
      res.send(newFilm);
      res.send(await this.repo.create(req.body));
    } catch (error) {
      next(error);
    }
  }
}
