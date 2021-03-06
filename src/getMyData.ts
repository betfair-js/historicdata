import * as request from 'request';
import * as DataPackage from './dataPackage';

export class GetMyData {
  public static GetMyData = (
    token: string,
    rootUrl: string
  ): Promise<DataPackage.DataPackage[]> => {
    return new Promise((res, rej) => {
      if (token.length < 10) {
        rej('Not token has been provided');
      }

      const options = {
        headers: {
          'content-type': 'application/json',
          ssoid: token,
        },
        json: true,
        method: 'GET',
        url: rootUrl + '/api/GetMyData',
      };

      request(options, (error, response, body) => {
        if (error) {
          rej(error);
        }
        res(body);
      });
    });
  };
}
