import { FilmModel } from './film.mongo.model';
import { FilmRepo } from './film.mongo.repository';

jest.mock('./film.mongo.model.js');

// TEMP
// findById: jest.fn(),
// create: jest.fn(),
// findByIdAndUpdate: jest.fn(),
// findByIdAndDelete: jest.fn(),

describe('Given FilmRepo Class', () => {
  describe('When I instantiate it', () => {
    const repo = new FilmRepo();

    test('Then method query should be used', async () => {
      const exec = jest.fn().mockResolvedValue([]);
      FilmModel.find = jest.fn().mockReturnValueOnce({
        exec,
      });

      const result = await repo.query();
      expect(FilmModel.find).toHaveBeenCalled();
      expect(exec).toHaveBeenCalled();
      expect(result).toEqual([]);
    });

    // TEMP test('Then method queryById should be used', async () => {
    //   const mockSample = [{ id: '1' }];
    //   (fs.readFile as jest.Mock).mockResolvedValueOnce(
    //     JSON.stringify(mockSample)
    //   );
    //   const result = await repo.queryById('1');
    //   expect(fs.readFile).toHaveBeenCalled();
    //   expect(result).toEqual(mockSample[0]);
    // });
  });
});
