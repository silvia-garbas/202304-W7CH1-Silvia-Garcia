// Import { NextFunction, Request, Response } from 'express';
// import { FilmController } from './film.controller.js';
// import { Repo } from '../repository/repo.js';
// import { Film } from '../entities/film.js';

// describe('Given the FilmController class', () => {
//   describe('When it is instantiate', () => {
//     const mockRepo = {
//       query: jest.fn(),
//             queryById: jest.fn(),
//             search: jest.fn(),
//             create: jest.fn(),
//             update: jest.fn(),
//             delete: jest.fn()
//     } as unknown as Repo<Film>;
//     const req = { params: { id: 1 } } as unknown as Request;
//     const res = { send: jest.fn() } as unknown as Response;
//     const next = jest.fn() as NextFunction;
//     const controller = new FilmController(mockRepo);

//     test('Then the method getAll should be used ', async () => {
//       await controller.getAll(req, res, next);
//       expect(res.send).toHaveBeenCalled();
//       expect(mockRepo.query).toHaveBeenCalled();
//     });

//     test('Then the method getById should be used ', async () => {
//       await controller.getById(req, res, next);
//       expect(res.send).toHaveBeenCalled();
//       // Expect(mockRepo.queryById).toHaveBeenCalled();
//     });

//     test('Then the method post should be used', async () => {
//       await controller.post(req, res, next);
//       expect(res.send).toHaveBeenCalled();
//       // Expect(mockRepo.create).toHaveBeenCalled();
//     });

//     test('Then the method patch should be used', async () => {
//       await controller.patch(req, res, next);
//       expect(res.send).toHaveBeenCalled();
//       // Expect(mockRepo.update).toHaveBeenCalled();
//     });

//     test('Then the method deleteById should be used', async () => {
//       await controller.deleteById(req, res, next);
//       expect(res.send).toHaveBeenCalled();
//       // Expect(mockRepo.delete).toHaveBeenCalled();
//     });
//   });
// });

import { NextFunction, Request, Response } from 'express';
import { FilmRepo } from '../repository/film.mongo.repository.js';
import { FilmController } from './film.controller.js';
import { Repo } from '../repository/repo.js';
import { Film } from '../entities/film.js';

describe('Given a FilmController class', () => {
  describe('When it is instantiated', () => {
    const mockRepo: FilmRepo = {
      query: jest.fn(),
      queryById: jest.fn(),
      search: jest.fn(),
      create: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),

    } as unknown as Repo<Film>;
    const req = {
      params: { id: 1 },
    } as unknown as Request;
    // Const res = { send: jest.fn() } as unknown as Response;
     const res = {
       send: jest.fn(),
       status: jest.fn().mockReturnThis(),
     } as unknown as Response;
    const next = jest.fn() as NextFunction;
    const controller = new FilmController(mockRepo);
    test('Then method getAll should be used', async () => {
      await controller.getAll(req, res, next);
      expect(res.send).toHaveBeenCalled();
      expect(mockRepo.query).toHaveBeenCalled();
    });
    test('Then method getById shoul be used', async () => {
      await controller.getById(req, res, next);
      expect(res.send).toHaveBeenCalled();
      expect(mockRepo.queryById).toHaveBeenCalled();
    });
    // Test('Then method search should be used', async () => {
    //   await controller.search(req, res, next);
    //   expect(res.send).toHaveBeenCalled();
    //   expect(mockRepo.search).toHaveBeenCalled();
    // });
    test('Then method post should be used', async () => {
       controller.post(req, res, next)
      expect(res.send).toHaveBeenCalled();
      expect(mockRepo.create).toHaveBeenCalled();
    });
    test('Then method patch should be used', async () => {
      await controller.patch(req, res, next);
      expect(res.send).toHaveBeenCalled();
      expect(mockRepo.update).toHaveBeenCalled();
    });
    test('Then method delete should be used', async () => {
      await controller.deleteById(req, res, next);
      expect(res.send).toHaveBeenCalled();
      expect(mockRepo.delete).toHaveBeenCalled();
    });
  });
});
