import { Router as createRouter } from 'express';
import { FilmController } from '../controllers/film.controller.js';
import { FilmRepo } from '../repository/film.mongo.repository.js';
import { Repo } from '../repository/repo.js';
import { Film } from '../entities/film.js';

import createDebug from 'debug';
import { AuthInterceptor } from '../middleware/auth.interceptor.js';
import { UserRepo } from '../repository/user.mongo.repository.js';
import { User } from '../entities/user.js';

const debug = createDebug('W6:BookRouter');

debug('Executed');
const auth = new AuthInterceptor();
const repo2: Repo<User> = new UserRepo() as Repo<User>
const repo: Repo<Film> = new FilmRepo() as Repo<Film>;

const controller = new FilmController(repo, repo2);
export const filmRouter = createRouter();

filmRouter.get('/', controller.getAll.bind(controller));
filmRouter.get('/:id', controller.getById.bind(controller));
filmRouter.post('/', auth.logged.bind(auth), controller.post.bind(controller));
filmRouter.patch('/:id',auth.logged.bind(auth) , controller.patch.bind(controller));
filmRouter.delete('/:id', auth.logged.bind(auth), controller.deleteById.bind(controller));
