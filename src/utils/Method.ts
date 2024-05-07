import axios from 'axios';

const baseUrl = 'https://jsonplaceholder.typicode.com';

type RequestType = 'get' | 'post' | 'put' | 'delete';

interface PostData {
  title: string;
  body: string;
  userId: number;
}

export const reactQueryApi = (
  endPointUrl: string,
  request: RequestType,
  data?: PostData,
) => {
  switch (request) {
    case 'post':
      return axios.post(endPointUrl, data);
    case 'get':
      return axios.get(endPointUrl);
    case 'put':
      return axios.put(endPointUrl, data);
    case 'delete':
      return axios.delete(endPointUrl);
    default:
      throw new Error('Unsupported HTTP method');
  }
};
