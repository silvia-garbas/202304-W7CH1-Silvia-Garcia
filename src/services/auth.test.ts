import { AuthServices , PayLoadToken} from "./auth";
import jwt from 'jsonwebtoken';

jest.mock('jsonwebtoken')

describe('Given Authservice Class', () => {

  describe('When I use createJWT it', () => {
    test('Then JWT sing  should be called', async () => {
      const payload = {} as PayLoadToken
      AuthServices.createJWT(payload)
      expect(jwt.sign).toHaveBeenCalled();

  })
})
})
