import fs from 'fs/promises';
import { SampleRepo } from './sample.repository';
import { HttpError } from '../types/http.error';
import { Sample } from '../entities/sample';

jest.mock('fs/promises');

describe('Given SampleRepo Class', () => {
  const repo = new SampleRepo();
  describe('When I instantiate it', () => {
    test('Then method query should be used', async () => {
      (fs.readFile as jest.Mock).mockResolvedValueOnce('[]');
      const result = await repo.query();
      expect(fs.readFile).toHaveBeenCalled();
      expect(result).toEqual([]);
    });
  });
  describe('When it is instantiated and queryById method is called', () => {
    test('Then method queryById should be used', async () => {
      const mockSample = [{ id: '1' }];
      (fs.readFile as jest.Mock).mockResolvedValueOnce(
        JSON.stringify(mockSample)
      );
      const result = await repo.queryById('1');
      expect(fs.readFile).toHaveBeenCalled();
      expect(result).toEqual(mockSample[0]);
    });
  });
  describe('When it is instantiated a create method is called', () => {
    test('Then it should return a Sample', async () => {
      const mockSample = { user: '' };
      const mockSamples = [] as Sample[];

      (fs.readFile as jest.Mock).mockResolvedValueOnce(
        JSON.stringify(mockSamples)
      );

      await repo.create(mockSample);

      expect(fs.writeFile).toHaveBeenCalled();
    });
  });
  describe('When it is instantiated and update method is called', () => {
    test('Then it should return a Sample', async () => {
      // Const mockSample = { user: 'a' };
      const mockSamples = [
        { id: '18', user: '' }
        // { id: '2', user: '' },
      ] as Sample[];
      // Const mockId = '1';
      (fs.readFile as jest.Mock).mockResolvedValueOnce(
        JSON.stringify(mockSamples)
      );

      const result = await repo.update('18', {user: 'c'});

      expect(fs.writeFile).toHaveBeenCalled();
      expect(result).toEqual({ id: '18', user: 'c' });
    });
  });
  describe('When it is instantiated and delete method is called', () => {
    test('Then it should return void', async () => {
      const mockSample = [
        { id: '7', user: '' }
      ] as Sample[];
      const mockId = '7';
      (fs.readFile as jest.Mock).mockResolvedValueOnce(
        JSON.stringify(mockSample)
      );

      await repo.delete(mockId);

      expect(fs.writeFile).toHaveBeenCalled();
    });
  });

  // Comentado para seguir probando:
  //  Describe('When it is instantiated and delete method is called but the id is not found', () => {
  //     test('Then it should throw an error', async () => {
  //       const error = new HttpError(404, 'Not Found');
  //       const mockSamples = [
  //         { id: '1', user: '' },
  //         { id: '2', user: '' },
  //       ] as Sample[];
  //       const mockId = '10';
  //       (fs.readFile as jest.Mock).mockResolvedValueOnce(
  //         JSON.stringify(mockSamples)
  //       );
  //       const result = await repo.delete(mockId);
  //       expect(result).rejects.toThrow(error);
  //     });
  //   });
});
