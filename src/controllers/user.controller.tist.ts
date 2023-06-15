// Import { NextFunction, Request, Response } from 'express';
// import { UserRepo } from '../repository/user.mongo.repository';
// import { UserController } from './user.controller.js'
// ';
// describe('Given a user controller', () => {
//   const mockRepo: UserRepo = {
//     search: jest.fn(),//está mockeado sin implementar(sin datos), devuelve undefinedl porque son
//     create: jest.fn(),//funciones void. Si no quiero que sean undefined, en algún stiio digo lo que
//   } as unknown as UserRepo;//quiero que devuelva p.ejem.

//   const req = {//necesito body, pero puede no valer para todo
//     body: {},
//   } as unknown as Request;

//   const res = {
//     send: jest.fn(),
//     status: jest.fn(),
//   } as unknown as Response;

//   const next = jest.fn() as NextFunction;
//   const controller = new UserController(mockRepo);
//   describe('When it is instantiated and register method is called', () => {
//     test('Then method register should have been called', async () => {
//       req.body = { user: '', password: '' };//no estamos testeando nada//hay que poner algo en user y pass/
//       await controller.register(req, res, next);
//       expect(res.send).toHaveBeenCalled();
//       expect(mockRepo.create).toHaveBeenCalled();
//     });
//   });

//   describe('When it is instantiated and login method is called', () => {
//     test('Then method login should have been called', async () => {
//       req.body = { user: 'a', password: 'b' };//mirar esta línea
//       await controller.login(req, res, next);
//       expect(res.send).toHaveBeenCalled();
//       expect(mockRepo.search).toHaveBeenCalled();
//     });
//   });
// });

// describe('Given a user controller', () => {
//   const error = new Error('Test');
//   const mockRepo: UserRepo = {//
//     search: jest.fn().mockRejectedValue(error),
//     create: jest.fn().mockRejectedValue(error),
//   } as unknown as UserRepo;

//   const req = {
//     body: { user: '', password: '' },
//   } as unknown as Request;

//   const res = {
//     send: jest.fn(),
//     status: jest.fn(),
//   } as unknown as Response;

//   const next = jest.fn() as NextFunction;
//   const controller = new UserController(mockRepo);
//   describe('When it is instantiated and register method is called but password is not valid', () => {
//     test('Then it should throw an error', async () => {
//       await controller.register(req, res, next);
//       expect(next).toHaveBeenCalledWith(error);
//     });
//   });
// });



