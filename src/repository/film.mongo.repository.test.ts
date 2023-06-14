import { Film } from '../entities/film';
import { FilmModel } from './film.mongo.model';
import { FilmRepo } from './film.mongo.repository';

jest.mock('./film.mongo.model.js');

describe('Given a ThingsRepo class', () => {
  const repo = new FilmRepo();

  describe('When it is instantiated and query method is called', () => {
    test('Then FilmModel.find and exec should have been called', async () => {
      const exec = jest.fn().mockResolvedValue([]);
      FilmModel.find = jest.fn().mockReturnValueOnce({
        exec,
      });
      const result = await repo.query();
      expect(FilmModel.find).toHaveBeenCalled();
      expect(exec).toHaveBeenCalled();
      expect(result).toEqual([]);
    });
  });
  describe('When it is instantiated and queryById method is called', () => {
    test('Then FilmModel.findById and exec should have been called', async () => {
      const mockId = '829h4fu2b48cioyb3q4';
      const mockThing = { id: mockId } as Film;
      const exec = jest.fn().mockResolvedValue(mockThing);
      FilmModel.findById = jest.fn().mockReturnValueOnce({
        exec,
      });
      const result = await repo.queryById(mockId);
      expect(FilmModel.findById).toHaveBeenCalled();
      expect(exec).toHaveBeenCalled();
      expect(result).toEqual({ id: mockId });
    });
  });
  describe('When it is instantiated and create method is called', () => {
    test('Then FilmModel.create should have been called', async () => {
      const mockThing = {} as Film;
      FilmModel.create = jest.fn().mockReturnValueOnce(mockThing);
      const result = await repo.create({} as Omit<Film, 'id'>);
      expect(FilmModel.create).toHaveBeenCalled();
      expect(result).toEqual(mockThing);
    });
  });
  describe('When it is instantiated and update method is called', () => {
    test('Then FilmModel.findByIdAndUpdate and exec should have been called', async () => {
      const mockId = '829h4fu2b48cioyb3q4';
      const mockThing = {} as Partial<Film>;
      const mockReturnedThing = {} as Film;
      const exec = jest.fn().mockResolvedValue(mockReturnedThing);
      FilmModel.findByIdAndUpdate = jest.fn().mockReturnValueOnce({
        exec,
      });
      const result = await repo.update(mockId, mockThing);
      expect(FilmModel.findByIdAndUpdate).toHaveBeenCalled();
      expect(exec).toHaveBeenCalled();
      expect(result).toEqual(mockReturnedThing);
    });
  });
  describe('When it is instantiated and delete method is called', () => {
    test('Then FilmModel.delete should have been called', async () => {
      const mockId = 'dndku2n3di27283r9h2r8';
      const exec = jest.fn();
      FilmModel.findByIdAndDelete = jest.fn().mockReturnValueOnce({
        exec,
      });
      await repo.delete(mockId);
      expect(FilmModel.findByIdAndDelete).toHaveBeenCalled();
    });
  });
});

describe('Given a ThingsRepo class', () => {
  const repo = new FilmRepo();
  describe('When it is instantiated and queryById method is called but the id is not found', () => {
    test('Then it should throw an error', async () => {
      const mockId = '24firfhv2crui2c48';
      const exec = jest.fn().mockResolvedValue(null);
      FilmModel.findById = jest.fn().mockReturnValueOnce({
        exec,
      });
      await expect(repo.queryById(mockId)).rejects.toThrow();
    });
  });
  describe('When it is instantiated and update method is called but the id is not found', () => {
    test('Then it should throw an error', async () => {
      const mockId = '24firfhv2crui2c48';
      const mockFilm = {} as Film;
      const exec = jest.fn().mockResolvedValue(null);
      FilmModel.findByIdAndUpdate = jest.fn().mockReturnValueOnce({
        exec,
      });
      await expect(repo.update(mockId, mockFilm)).rejects.toThrow();
    });
  });
  describe('When it is instantiated and delete method is called but the id is not found', () => {
    test('Then it should throw an error', async () => {
      const mockId = '24firfhv2crui2c48';
      const exec = jest.fn().mockResolvedValue(null);
      FilmModel.findByIdAndDelete = jest.fn().mockReturnValueOnce({
        exec,
      });
      await expect(repo.delete(mockId)).rejects.toThrow();
    });
  });
});


