// api.js
import axios from 'axios';
import {useQuery, useMutation} from 'react-query';
type endPoints = string;
const baseUrl = 'https://jsonplaceholder.typicode.com';

export const useGetQuery = (endpoint: endPoints) => {
  return useQuery(endpoint, async () => {
    const {data} = await axios.get(`${baseUrl}/${endpoint}`);
    return data;
  });
};

export const usePostMutation = (endpoint: endPoints) => {
  return useMutation(postData =>
    axios.post(`${baseUrl}/${endpoint}`, postData),
  );
};

export const usePutMutation = (endpoint: endPoints) => {
  return useMutation(postData => axios.put(`${baseUrl}/${endpoint}`, postData));
};
